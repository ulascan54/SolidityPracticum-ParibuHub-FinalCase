import {createGlobalState} from "react-hooks-global-state"

const { setGlobalState,useGlobalState,getGlobalState } = createGlobalState({
    modal:'hidden',
    modalBg:'hidden',
    showModal:'block',
    showModalBg:'block'

})

export {useGlobalState,setGlobalState,getGlobalState}