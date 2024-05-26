import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  const downloadDesktopApp = () => {
    fetch('http://localhost:5000/flask/save_text_file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => { throw new Error(data.message); });
        }
        return response.json();
    })
    .then(data => {
        console.log('File saved successfully.');
        // Execute the desktop app after saving the file
        return fetch('http://localhost:5000/flask/execute_desktop_app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => { throw new Error(data.message); });
        }
        return response.json();
    })
    .then(data => {
        console.log('Desktop app executed successfully.');
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
}

  const downloadJobDataAsCSV = () => {
    // Logic to download job data as .csv from MongoDB
  }

  const importJobDataIntoSQLite = () => {
    // Logic to import job data into desktop app SQLite database
  }

  return (
    <>
      <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
          <h3>profile</h3>
          {showAlert && <Alert />}
          <div className='form-center'>
            <FormRow
              type='text'
              name='name'
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <FormRow
              type='text'
              labelText='last name'
              name='lastName'
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
            <FormRow
              type='email'
              name='email'
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormRow
              type='text'
              name='location'
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
            <button className='btn btn-block' type='submit' disabled={isLoading}>
              {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
          </div>
        </form>
      </Wrapper>
      <Wrapper>
        <div className='button-group'>
          <button className='btn' onClick={downloadDesktopApp}>Download Desktop App</button>
          <button className='btn' onClick={downloadJobDataAsCSV}>Download Job Data as CSV</button>
          <button className='btn' onClick={importJobDataIntoSQLite}>Import Job Data into SQLite</button>
        </div>
      </Wrapper>
    </>
  )
}

export default Profile
