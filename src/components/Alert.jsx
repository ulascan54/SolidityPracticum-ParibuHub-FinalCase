import { FaRegTimesCircle } from "react-icons/fa"
import { BsCheck2Circle } from "react-icons/bs"
import { useGlobalState } from "../store"

function Alert() {
    const [alert] = useGlobalState('alert')
    return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 animate__animated  ${alert.show ? 'block animate__fadeIn' : 'hidden' }`}>
        <div className={`bg-[#151c25] shadow-lg shadow-blue-500 rounded-xl min-w-min py-3 px-10 flex flex-col justify-center items-center animate__animated ${alert.show ? 'block animate__bounceIn' : 'hidden' }`}>

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