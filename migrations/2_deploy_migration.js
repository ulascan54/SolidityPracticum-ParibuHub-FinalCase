const ParibuNFT = artifacts.require('ParibuNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(ParibuNFT, 'Paribu NFTs', 'TNT', 10, accounts[1])
}