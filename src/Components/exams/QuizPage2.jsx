import { useState } from 'react';
import '../Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const QuizPage2 = () => {
  const quizQuestions = [
    {
      question: 'What is the opposite of "hot"?',
      options: ['Cold', 'Warm', 'Cool', 'Icy'],
      correctAnswer: 'Cold'
    },
    {
      question: 'Which of these is a type of fruit?',
      options: ['Carrot', 'Apple', 'Potato', 'Broccoli'],
      correctAnswer: 'Apple'
    },
    {
      question: 'What color is the sky on a clear day?',
      options: ['Green', 'Blue', 'Purple', 'Orange'],
      correctAnswer: 'Blue'
    },
    {
      question: 'How many days are there in a week?',
      options: ['Five', 'Six', 'Seven', 'Eight'],
      correctAnswer: 'Seven'
    },
    {
      question: 'What do you use to wash your hand?',
      options: ['Comb', 'Toothbrush', 'Fork', 'Soap'],
      correctAnswer: 'Soap'
    },
    {
      question: 'What do you use to see things that are far away?',
      options: ['Telescope', 'Microscope', 'Binoculars', 'Magnifying glass'],
      correctAnswer: 'Telescope'
    },
    {
      question: 'Which animal has a trunk?',
      options: ['Elephant', 'Giraffe', 'Lion', 'Tiger'],
      correctAnswer: 'Elephant'
    },
    {
      question: 'What is the name of the planet we live on?',
      options: ['Jupiter', 'Earth', 'Mars', 'Saturn'],
      correctAnswer: 'Earth'
    },
    {
      question: 'What is the color of grass?',
      options: ['Yellow', 'Green', 'Brown', 'Red'],
      correctAnswer: 'Green'
    },
    {
      question: 'What do you wear on your feet?',
      options: ['Hat', 'Socks', 'Shoes', 'Gloves'],
      correctAnswer: 'Shoes'
    },
    {
      question: 'What do you use to eat soup?',
      options: ['Fork', 'Spoon', 'Knife', 'Chopsticks'],
      correctAnswer: 'Spoon'
    },
    {
      question: 'What is the opposite of "big"?',
      options: ['Small', 'Tall', 'Giant', 'Huge'],
      correctAnswer: 'Small'
    },
    {
      question: 'Which season comes after summer?',
      options: ['Autumn/Fall', 'Winter', 'Spring', 'Monsoon'],
      correctAnswer: 'Autumn/Fall'
    },
    {
      question: 'What do you use to write with?',
      options: ['Pencil', 'Eraser', 'Paintbrush', 'Crayon'],
      correctAnswer: 'Pencil'
    },
    {
      question: 'Which animal can fly?',
      options: ['Elephant', 'Penguin', 'Bird', 'Snake'],
      correctAnswer: 'Bird'
    }
  ];

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(new Array(quizQuestions.length).fill(-1));

  const handleAnswerClick = (optionIndex) => {
    if (quizCompleted) {
      return; // Do nothing if quiz is already completed
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    const selectedOptionIndex = selectedOptions[currentQuestion];

    if (selectedOptionIndex === -1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select an option to answer the question!',
      });
      return;
    }

    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    const selectedOption = quizQuestions[currentQuestion].options[selectedOptionIndex];

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, quizQuestions[currentQuestion]]);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleGoBack = () => {
    navigate('/Home');
  };

  const GoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
    setSelectedOptions(new Array(quizQuestions.length).fill(-1));
  };

  return (
    <div>
      {quizCompleted ? (
        <div>
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} className='icon' />
          <h2 className='quis'>Quiz Complete!</h2>
          <p>Your score: {score} out of {quizQuestions.length}</p>
          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Incorrect Answers:</h3>
              <ul>
                {incorrectAnswers.map((question, index) => (
                  <li key={index}>
                    <p>{question.question}</p>
                    <p className='lii'>Correct Answer: {question.correctAnswer}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={resetQuiz} className='button'>
            Retry Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className='ques'>Question {currentQuestion + 1} :</h2>
          <p>{quizQuestions[currentQuestion].question}</p>
          <ul>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={`lii ${selectedOptions[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          {currentQuestion > 0 && (
            <button onClick={GoBack} className='button'>Previous</button>
          )}
          {currentQuestion < quizQuestions.length  && (
            <button onClick={handleNextQuestion} className='button'>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage2;
