import { FaRegTimesCircle } from "react-icons/fa"
import { BsCheck2Circle } from "react-icons/bs"
import { useGlobalState } from "../store"

function Alert() {
    const [alert] = useGlobalState('alert')
    return (
    <div className={`login-container flex animate__animated  ${alert.show ? 'block animate__fadeIn' : 'hidden' }`}>
        <div className={`alert-extra animate__animated ${alert.show ? 'block animate__bounceIn' : 'hidden' }`}>

        {alert.color == 'red' ? (
            <FaRegTimesCircle className="text-red-600 text-4xl"/>
        ) : (
            <BsCheck2Circle className="text-green-600 text-4xl"/>
        )} 
        <p className="text-white">{alert.msg}</p>
        </div>
    </div>
  )
}

export default Alert