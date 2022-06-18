import { useAppContext } from "../context/appContext"

const Alert = () => {
  const { alertMessage, alertType } = useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>{alertMessage}</div>
  )
}
export default Alert