import { FaRegTimesCircle } from "react-icons/fa"
import { BsCheck2Circle } from "react-icons/bs"
import { useGlobalState } from "../store"

function Alert() {
    
    const [alert] = useGlobalState('alert')
    const [alertContainer] = useGlobalState('alertContainer')
    return (
    <div className={`alert-container flex animate__animated   ${alertContainer}`}>
        <div className={`${alert.color == 'red' ? 'alert-red' : 'alert-green' } `}>
            {alert.color == 'red' ? (
                <FaRegTimesCircle className="alert-icon"/>
            ) : (
                <BsCheck2Circle className="alert-icon"/>
            )} 
            <p>{alert.msg}</p>
        </div>
    </div>
    )
}

export default Alert