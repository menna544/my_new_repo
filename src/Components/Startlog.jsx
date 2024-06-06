
import imeg from '../Images/download (5).jpg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const Startlog = () => {
  const navigate = useNavigate(); 

  const back = () => {
    navigate('/load');
  }

  return (
    <div className="page6">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
      <div className="cont6">
        <img src={imeg} alt="Iamg" />
        <h1 className="h1">WELCOME</h1>
        <p className="train"> {`Let's start the training my Friend, I hope you have a useful educational trip`}</p>
        <button className="register" onClick={() => navigate('/Signup')}>SIGN UP</button>
        <button className="signin" onClick={() => navigate('/Signin')}>LOGIN</button>
      </div>
    </div>
  );
}

export default Startlog;
