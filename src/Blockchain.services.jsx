import Web3 from "web3";
import { setGlobalState, getGlobalState, setAlert } from './store'
import abi from './abis/ParibuNFT.json'

const { ethereum } = window
window.web3=new Web3(ethereum)
window.web3=new Web3(window.web3.currentProvider)

const getEthereumContract = async () => {
    const connectedAccont = getGlobalState('connectedAccont')
    if(connectedAccont){
        const web3 = window.web3
        const networkId= await web3.eth.net.getId()
        const networkData= abi.networks[networkId]

        if(networkData){
            const contract = new web3.eth.Contract(abi.abi, networkData.address)
            return contract
        }else{
            return null
        }
    }
    else{
        return getGlobalState('contract')
    }
}

const connectWallet = async () => {
    try{
        if(!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({method:'eth_requestAccounts'})
        setGlobalState('connectedAccount',accounts[0].toLowerCase())
    }catch (error) {
        reportError(error)
    }
}

const isWalletConnected=async () => {
    try {
        if(!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({method:'eth_requestAccounts'})

        window.ethereum.on('chainChanged',async (chainId) => {
            window.location.reload()
        })

        window.ethereum.on('accountsChanged',async () => {
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
            await isWalletConnected()
        })

        if(accounts.length){
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
        }else{
            alert('Please connect your wallet')
            console.log('No accounts found !')
        }


    } catch (error) {reportError(error)}

}

const mintNFT = async({title,description,metadataURI,price})=>{
    try {
        price = window.web3.utils.towWei(price.toString(),'ether')
        const contract = await getEthereumContract()
        const connectedAccount = getGlobalState('connectedAccount')
        const mintPrice = window.web3.utils.toWei('0.01','ether')

        await contract.methods.payToMint(title,description,metadataURI,price).send({form:connectedAccount,value:mintPrice})
        return true
    } catch (error) {
        reportError(error)
    }
}

const reportError=(error) => {
    setAlert(JSON.stringify(error),'red')
    throw new Error('No Ethereum Object.')
}

export { connectWallet, isWalletConnected,mintNFT}