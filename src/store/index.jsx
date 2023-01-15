import {createGlobalState} from "react-hooks-global-state"

const { setGlobalState,useGlobalState,getGlobalState } = createGlobalState({
    modal:'hidden',
    modalBg:'hidden',
    showModal:'hidden',
    showModalBg:'hidden',
    updateModal:'hidden',
    updateModalBg:'hidden',
    loading:{show:false,msg:''},
    alert:{show:true,msg:'',color:''}

})
const setAlert=(msg,color='green')=>{
    setGlobalState('loading',{show:false,msg:''})
    setGlobalState('alert',{show:true,msg,color})
    setTimeout(() => {
            setGlobalState('alert',{show:false,msg,color})
    }, 6000);
}

const setLoadingMsg =(msg)=>{
    const loading = getGlobalState('loading')
    setGlobalState('loading', {...loading, msg})
}

export {useGlobalState,setGlobalState,getGlobalState ,setLoadingMsg ,setAlert}