import {createGlobalState} from "react-hooks-global-state"

const { setGlobalState,useGlobalState,getGlobalState } = createGlobalState({
    modal:'hidden',
    modalBg:'hidden',
    showModal:'hidden',
    showModalBg:'hidden',
    updateModal:'hidden',
    updateModalBg:'hidden',
    loading:{show:false,msg:''},
    alert:{show:false,msg:'',color:''},
    connectedAccount:'',
    nft:null,
    nfts:[],
    transactions:[],
    contract:null

})
const setAlert=(msg,color='green')=>{
    setGlobalState('loading',{show:false,msg:''})
    setGlobalState('alert',{show:true,msg,color})
    setTimeout(() => {
            setGlobalState('alert',{show:false,msg,color})
    }, 6000);
}

const setLoadingMsg =(msg)=>{
    setGlobalState('loading', {show:true, msg})
}

const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
        var start = text.substring(0, startChars)
        var end = text.substring(text.length - endChars, text.length)
        while (start.length + end.length < maxLength) {
            start = start + '.'
        }
        return start + end
    }
    return text
}

export {useGlobalState,setGlobalState,getGlobalState ,setLoadingMsg ,setAlert,truncate}