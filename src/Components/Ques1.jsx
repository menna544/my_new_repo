import{ useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Ques1 = () => {
  const quizQuestions = [
    {
      question: 'What is your native language?',
      options: ['English', 'Arabic', 'Italian', 'French'],
    },
    {
      question: 'What is your current level of English proficiency?',
      options: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
      question: 'How often do you practice English outside of your regular English class?',
      options: ['Every day', 'Several times a week', 'Once a week'],
    }
  ];

  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState(['', '', '']);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleLanguageSelection = (language) => {
    const updatedSelectedLanguages = [...selectedLanguages];
    updatedSelectedLanguages[currentQuestion] = language;
    setSelectedLanguages(updatedSelectedLanguages);
  };

  const goToNextQuestion = () => {
    if (selectedLanguages[currentQuestion]) {
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        navigate('/Startlog')
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please select an answer',
        text: 'You need to select an answer before proceeding to the next question.',
      });
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="page3">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={handleGoBack} />
      <div className="question">
        <h3>{quizQuestions[currentQuestion].question}</h3>
        <ul>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleLanguageSelection(option, index)}
              className={`lii ${selectedLanguages[currentQuestion] === option ? 'selected' : ''}`}
              style={{ cursor: 'pointer', border: selectedLanguages[currentQuestion] === option ? '2px solid black' : 'none' }}
            >
              {option}
            </li>
          ))}
          <button onClick={goToNextQuestion}>Next</button>
        </ul>
      </div>
    </div>
  );
};

export default Ques1;
