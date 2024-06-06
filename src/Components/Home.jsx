import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook,faLock } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from 'react-router-dom'; 
import Swal from 'sweetalert2';
import '../App.css';

const Home = () => {
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState('locked');
    const email = localStorage.getItem('userEmail') || '';
    const name = email ? email.split('@')[0] : ''; 
    const vide = () => {
        window.open("https://www.youtube.com/watch?v=YKNKY8Tk_vk", "_blank"); 
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

    const vide1 = () => {
        window.open("https://www.youtube.com/watch?v=HFRd1RAJqpk", "_blank"); 
    };
   
    const vide2 = () => {
        window.open("https://www.youtube.com/watch?v=lliYgLHgBMs", "_blank");  
    };
    const vide3 = () => {
        window.open("https://www.youtube.com/watch?v=FofANnMlD8w", "_blank");  
    };
    const vide4 = () => {
        window.open("https://www.youtube.com/watch?v=AS5nhKzaOqo", "_blank");  
    };
    const vide5 = () => {
        window.open("https://www.youtube.com/watch?v=fZbZnGzhYNE", "_blank");   
    };
    const vide6 = () => {
        window.open("https://www.youtube.com/watch?v=FikAJxtVgOY", "_blank");   
    };
    const vide7 = () => {
        window.open("https://www.youtube.com/watch?v=0enTq1fCE9A", "_blank");  
    };
    const vide8 = () => {
        window.open("https://www.youtube.com/watch?v=1m4NDlOAzyg", "_blank");  
    };
    const vide9 = () => {
        window.open("https://www.youtube.com/watch?v=JxWEAP0aAJQ", "_blank");  
    };
    const vide10 = () => {
        window.open("https://www.youtube.com/watch?v=Jr8gLJr9WKQ", "_blank");   
    };
    const vide11 = () => {
        window.open("https://www.youtube.com/watch?v=EKxTwv682nU", "_blank");   
    };
    const vide12 = () => {
        window.open("https://www.youtube.com/watch?v=FU_0NF_jrgE", "_blank");  
    };
    const vide13= () => {
        window.open("https://www.youtube.com/watch?v=ILRs2r6lcHY", "_blank");  
    };
    const vide14 = () => {
        window.open("https://www.youtube.com/watch?v=3xCQrnTYmzY", "_blank");  
    };
    const vide15 = () => {
        window.open("https://www.youtube.com/watch?v=h9nB5ZzbSO8", "_blank");  
    };
    const quiz2 = () => {
        navigate('/Quiz2');
    };
    const quiz3 = () => {
        navigate('/Quiz3');
    };
    const quiz4 = () => {
        navigate('/Quiz4');
    };
    const quiz5 = () => {
        navigate('/Quiz5');
    };
    const quiz6 = () => {
        navigate('/Quiz6');
    };
    const set = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You are in home page",
            showConfirmButton: false,
            timer: 1500
        });
    };
    const story = () => {
        navigate('/Stories'); 
    };
    const setprofile = () => {
        navigate('/Profile'); 
    };
    const quiz1 = () => {
        navigate('/Quiz');
    };
    return (
        <>
            <div className="footer">
                <FontAwesomeIcon icon={faHouse} className="icon" onClick={set}/>
                <FontAwesomeIcon icon={faReadme} className="icon"  onClick={story}/>
                <FontAwesomeIcon icon={faUser}  className="icon" onClick={setprofile}/>
            </div>
            <div className="contal">
                <div className="begin"> 
                    <h1>Hello, {name ? name : 'Guest'}!</h1>
                    <p>{`Let's Begin your journey`} </p>
                </div>
                        <div className="all">
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 1</h1>
                                    <p >Alphabet Words🔠</p>
                                </div>
            
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide} />
                       
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 2</h1>
                                    <p >Conversations</p>
                                </div>
                               
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide1} />
                       
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 3</h1>
                                    <p >Listen and repeat</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide2} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam1</h1>
                                
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz1} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 4</h1>
                                    <p >Grammer conversation</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide3} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 5</h1>
                                    <p >Listen to School Vocabulary </p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide4} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 6</h1>
                                    <p >Listen to Colors </p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide5} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam2</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz2} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 7</h1>
                                    <p >learn with Zootopia movie💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide6} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 8</h1>
                                    <p >Listen to song💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide7} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 9</h1>
                                    <p >Daily Life</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide8} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam3</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={quiz3} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 10</h1>
                                    <p >Learn English with spongpop</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide9} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 11</h1>
                                    <p >Went to London🚀</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide10} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 12</h1>
                                    <p >Learn English with Monsters Inc</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide11} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam4</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz4} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 13</h1>
                                    <p >The Bird and the Country Whale</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide12} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 14</h1>
                                    <p >Listen to song💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide13} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 15</h1>
                                    <p >Learn English with The Incredibles</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide14} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam5</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz5} />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Unit 16</h1>
                                    <p >Listen to song💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={vide15} />
                        )}
                            </div>
                            
                            <div className="unit2">
                                <div className="cont1">
                                    <h1>Exam6</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz6} />
                        )}
                            </div>
                        </div>
                    </div>
                </>
        
      
    );
};

export default Home;