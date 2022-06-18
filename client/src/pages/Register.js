import { useState, useEffect } from "react"
import Logo from '../components/Logo';
import Wrapper from "../assests/wrappers/RegisterPage"
import FormRow from "../components/FormRow"
import Alert from "../components/Alert"
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  
}



const Register = () => {
  const [values, setValues] = useState(initialState)
  const {isLoading, showAlert, displayAlert} = useAppContext()
  
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      displayAlert()
      return
    }
    console.log(values)
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember? 'Login':'Register'}</h3>
        {showAlert && <Alert />}
        <div className="form-row">
        {!values.isMember && (
              <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
              />
            )}
          
          <FormRow type='email' name='email' values={values.email} handleChange={handleChange}/>
          <FormRow type='password' name='password' values={values.password} handleChange={handleChange}/>
          <button type='submit' className="btn btn-block">Submit</button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
      </button>
          </p> 
        </div>
      </form>
      </Wrapper>

  )
}

export default Register