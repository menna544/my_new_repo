import  { useState, useEffect } from 'react';
import '../App.css';
import image from '../Images/download (2).jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 
import Loading from './Loading';

const Homeques = () => {
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  const back1 = () => {
    navigate('/load');
  }

  const gotoques = () => {
    navigate('/Ques1');
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="page1">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back1} />
          <div className="page2">
            <img src={image} alt="Img" />
            <p>Hello my friend, to better use the application, answer three questions.</p>
            <button onClick={gotoques}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Homeques;
