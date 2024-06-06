import { useState,useEffect } from 'react';
import Image from '../Images/rascal-have-fun.gif'
import '../App.css';
import { faHouse, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';
const Stories = () => {
    const [paymentStatus, setPaymentStatus] = useState('locked');
    const navigate = useNavigate(); 
    const story1 = () => {
        window.open("https://www.youtube.com/watch?v=XBxz8_Ri8-Y", "_blank"); 
    };
    const story2 = () => {
        window.open("https://www.youtube.com/watch?v=3Sq8ibmgmS8", "_blank"); 
    };
    const story3 = () => {
        window.open("https://www.youtube.com/watch?v=JwGnCIsLOpU", "_blank"); 
    };
    const story4 = () => {
        window.open("https://www.youtube.com/watch?v=TpLhLBhFTag", "_blank"); 
    };
    const story5 = () => {
        window.open("https://www.youtube.com/watch?v=oqfh5i5Zfcs", "_blank"); 
    };
    const story6 = () => {
        window.open("https://www.youtube.com/watch?v=96fq4YmYjzQ", "_blank");  
    };
    const story7 = () => {
        window.open("https://www.youtube.com/watch?v=1DeQVnSxcLk", "_blank"); 
    };
    const story8 = () => {
        window.open("https://www.youtube.com/watch?v=4SVSxfTRc2M", "_blank"); 
    };
    const story9 = () => {
        window.open("https://www.youtube.com/watch?v=OWuFkCPb9oE", "_blank"); 
    };
    const story10 = () => {
        window.open("https://www.youtube.com/watch?v=gxaTP6zF9Vc", "_blank"); 
    };
    const story11 = () => {
        window.open("https://www.youtube.com/watch?v=UdEasleUc54", "_blank"); 
    };
    const story12 = () => {
        window.open("https://www.youtube.com/watch?v=9tcaM06eGrY", "_blank"); 
    };
    
    const navigateToPayment = () => {
        navigate('/payment'); 
    };
    useEffect(() => {
        const isPaymentSuccessful = localStorage.getItem('isPaymentSuccessful');
        if (isPaymentSuccessful === 'true') {
            setPaymentStatus('unlocked');
        }
    }, []);  
    const set = () => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your are in Stories page",
                showConfirmButton: false,
                timer: 1500
              });
        }
    const home = () => {
        navigate('/Home'); 
    };
    const setprofile = () => {
        navigate('/Profile'); 
    };
  return (
        <>
        <div className="footer">
                        <FontAwesomeIcon icon={faHouse} className="icon" onClick={home}/>
                        <FontAwesomeIcon icon={faReadme} className="icon"  onClick={set}/>
                        <FontAwesomeIcon icon={faUser}  className="icon" onClick={setprofile}/>
                    </div>
                   
                    <div className="contal">
                    <div className="begin2"> 
                 <img src={Image} alt="Your Alt Text" className="image" />
                        </div>
                        <div className="all2">
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story1</h1>
                                    <p >Introduce yourself</p>
                                </div>
                                <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story1} />
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story2</h1>
                                    <p >Colors✨</p>
                                </div>
                                <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story2}/>
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story3</h1>
                                    <p >About Morning🐣</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story3} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story4</h1>
                                    <p >The Ant and the Dove</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story4} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story5</h1>
                                    <p >Cooking🍕</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story5} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story6</h1>
                                    <p >Sharing 🥞🧇🫐🍒🥐</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story6} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story7</h1>
                                    <p >The girl and the ice cream Truck</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story7} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story8</h1>
                                    <p>{`Finally it's time for music🎵🎵`}</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story8} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story9</h1>
                                    <p >Used To and Would grammer</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story9} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story10</h1>
                                    <p >If I Were You - Conditionals in English</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story10} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Story11</h1>
                                    <p >What are you doing?</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story11} />
                        )}
                            </div>
                            <div className="unit2">
                                <div className="cont1">
                                    <h1>Story12</h1>
                                    <p >{`Finally it's time for music🎵🎵`}</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={story12} />
                        )}
                            </div>
                            </div>
                        </div>
                           
    </>

  );
};

export default Stories;
