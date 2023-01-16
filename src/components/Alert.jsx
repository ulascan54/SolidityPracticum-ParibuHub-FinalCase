import { FaRegTimesCircle } from "react-icons/fa"
import { BsCheck2Circle } from "react-icons/bs"
import { useGlobalState } from "../store"

function Alert() {
    
    const [alert] = useGlobalState('alert')
    const [alertContainer] = useGlobalState('alertContainer')
    return (
    <div className={`alert-container flex animate__animated  ${alertContainer}`}>
        <div className='alert-extra'>

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