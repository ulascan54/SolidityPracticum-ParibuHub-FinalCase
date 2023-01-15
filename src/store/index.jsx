import {createGlobalState} from "react-hooks-global-state"

const { setGlobalState,useGlobalState,getGlobalState } = createGlobalState({
    modal:'hidden',
    modalBg:'hidden',
    showModal:'hidden',
    showModalBg:'hidden',
    updateModal:'hidden',
    updateModalBg:'hidden',
    loading:{show:false,msg:''}

})

const setLoadingMsg =(msg)=>{
    const loading = getGlobalState('loading')
    setGlobalState('loading', {...loading, msg})
}

export {useGlobalState,setGlobalState,getGlobalState ,setLoadingMsg}