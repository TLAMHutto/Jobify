import {Link} from 'react-router-dom';
import img from '../assests/images/not-found.svg';
import Wrapper from '../assests/wrappers/ErrorPage';


const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="not-found" />
        <h3>Page Not Found!</h3>
        <Link to='/'>Go to Home</Link>
        </div>
    </Wrapper>
  )
}
export default Error