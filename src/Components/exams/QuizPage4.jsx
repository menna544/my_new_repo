import { useState } from 'react';
import '../Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const QuizPage4 = () => {
  const quizQuestions = [
    {
      question: 'What do you use to write on a piece of paper?',
      options: ['Pencil', 'Eraser', 'Ruler', 'Calculator'],
      correctAnswer: 'Pencil'
    },
    {
      question: 'What is the color of a ripe tomato?',
      options: ['Green', 'Yellow', 'Orange', 'Red'],
      correctAnswer: 'Red'
    },
    {
      question: 'What animal has a long neck and eats leaves from tall trees?',
      options: ['Elephant', 'Giraffe', 'Lion', 'Tiger'],
      correctAnswer: 'Giraffe'
    },
    {
      question: 'What do you wear on your hands to keep them warm in winter?',
      options: ['Hat', 'Gloves', 'Scarf', 'Mittens'],
      correctAnswer: 'Gloves'
    },
    {
      question: 'What do you use to listen to music?',
      options: ['Book', 'Radio', 'Television', 'Computer'],
      correctAnswer: 'Radio'
    },
    {
      question: 'What color is the moon at night?',
      options: ['Red', 'Yellow', 'White', 'Blue'],
      correctAnswer: 'White'
    },
    {
      question: 'What is the name of the round, orange vegetable that grows on vines?',
      options: ['Carrot', 'Potato', 'Cabbage', 'Pumpkin'],
      correctAnswer: 'Pumpkin'
    },
    {
      question: 'What animal says "quack"?',
      options: ['Duck', 'Chicken', 'Goose', 'Turkey'],
      correctAnswer: 'Duck'
    },
    {
      question: 'What do you use to drink milk?',
      options: ['Bowl', 'Plate', 'Glass', 'Mug'],
      correctAnswer: 'Glass'
    },
    {
      question: 'What is the name of the season with falling leaves?',
      options: ['Spring', 'Summer', 'Fall', 'Winter'],
      correctAnswer: 'Fall'
    },
    {
      question: 'What color is a lemon?',
      options: ['Red', 'Green', 'Yellow', 'Orange'],
      correctAnswer: 'Yellow'
    },
    {
      question: 'What animal says "neigh"?',
      options: ['Cow', 'Horse', 'Goat', 'Sheep'],
      correctAnswer: 'Horse'
    },
    {
      question: 'What do you use to see things far away?',
      options: ['Microscope', 'Telescope', 'Magnifying Glass', 'Binoculars'],
      correctAnswer: 'Telescope'
    },
    {
      question: 'What is the color of the leaves on trees in spring?',
      options: ['Brown', 'Green', 'Yellow', 'Red'],
      correctAnswer: 'Green'
    },
    {
      question: 'What animal says "ribbit"?',
      options: ['Frog', 'Lizard', 'Snake', 'Turtle'],
      correctAnswer: 'Frog'
    }
  ];

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOptionIndexes, setSelectedOptionIndexes] = useState(Array(quizQuestions.length).fill(-1));

  const handleAnswerClick = (optionIndex) => {
    if (quizCompleted) {
      return; // Do nothing if quiz is already completed
    }

    const updatedSelectedOptionIndexes = [...selectedOptionIndexes];
    updatedSelectedOptionIndexes[currentQuestion] = optionIndex;
    setSelectedOptionIndexes(updatedSelectedOptionIndexes);
  };

  const handleNextQuestion = () => {
    const selectedOptionIndex = selectedOptionIndexes[currentQuestion];

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
    setSelectedOptionIndexes(Array(quizQuestions.length).fill(-1));
  };

  return (
    <div>
      {quizCompleted ? (
        <div>
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} className='icon' />
          <h2 className='quiz'>Quiz Complete!</h2>
          <p>Your score: {score} out of {quizQuestions.length}</p>
          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Incorrect Answers:</h3>
              <ul>
                {incorrectAnswers.map((question, index) => (
                  <li key={index}>
                    <p>{question.question}</p>
                    <p className='correct-answer'>Correct Answer: {question.correctAnswer}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className='button' onClick={resetQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div>
          <h2 className='quiz'>Question {currentQuestion + 1}:</h2>
          <p>{quizQuestions[currentQuestion].question}</p>
          <ul>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={`lii ${selectedOptionIndexes[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          {currentQuestion > 0 && (
            <button className='button' onClick={GoBack}>Previous</button>
          )}
          {currentQuestion < quizQuestions.length  && (
            <button className='button' onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage4;
