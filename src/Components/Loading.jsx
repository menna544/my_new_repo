import  { useEffect } from 'react';
import './Loading.css';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="loading">
      <h2>Momo..</h2>
      <p>English learning app</p>
    </div>
  );
};

export default Loading;
