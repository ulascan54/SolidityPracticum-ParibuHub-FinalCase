import {createGlobalState} from "react-hooks-global-state"

const { setGlobalState,useGlobalState,getGlobalState } = createGlobalState({
    modal:'hidden',
    modalBg:'hidden',
    showModal:'hidden',
    showModalBg:'hidden',
    updateModal:'hidden',
    updateModalBg:'hidden'

})

export {useGlobalState,setGlobalState,getGlobalState}