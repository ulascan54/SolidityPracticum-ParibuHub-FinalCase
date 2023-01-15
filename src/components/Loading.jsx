import { useGlobalState } from "../store"

function Loading() {
    const [loading] =useGlobalState('loading')
    return (
    <div className={`login-container flex animate__animated  ${loading.show ? 'block animate__fadeIn' : 'hidden' }`}>
        <div className={` animate__animated ${loading.show ? 'block animate__bounceIn' : 'hidden' }`}>
            <div>
                <div>
                    <div className="lds-dual-ring"></div>
                    <p>Processing...</p>
                </div>
                <small>{loading.msg}</small>
            </div>
        </div>
    </div>
  )
}

export default Loading