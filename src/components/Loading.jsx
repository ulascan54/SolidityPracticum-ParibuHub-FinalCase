import { useGlobalState } from "../store"

function Loading() {
    const [loading] =useGlobalState('loading')
    return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 animate__animated  ${loading.show ? 'block animate__fadeIn' : 'hidden' }`}>
        <div className={`bg-[#151c25] shadow-lg shadow-blue-500 rounded-xl min-w-min px-10 pb-2 animate__animated ${loading.show ? 'block animate__bounceIn' : 'hidden' }`}>
            <div className="flex flex-col text-white ">
                <div className="flex justify-center items-center">
                    <div className="lds-dual-ring"></div>
                    <p className="text-lg">Processing...</p>
                </div>
                <small className="text-center">{loading.msg}</small>
            </div>
        </div>
    </div>
  )
}

export default Loading