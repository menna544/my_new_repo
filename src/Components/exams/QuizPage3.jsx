import { useState } from 'react';
import '../Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const QuizPage3 = () => {
  const quizQuestions = [
    {
      question: 'What color is a carrot?',
      options: ['Red', 'Yellow', 'Orange', 'Green'],
      correctAnswer: 'Orange'
    },
    {
      question: 'How many legs does a spider have?',
      options: ['Six', 'Eight', 'Ten', 'Twelve'],
      correctAnswer: 'Eight'
    },
    {
      question: 'What animal is known for hopping?',
      options: ['Dog', 'Cat', 'Frog', 'Rabbit'],
      correctAnswer: 'Rabbit'
    },
    {
      question: 'Which planet is closest to the Sun?',
      options: ['Mars', 'Venus', 'Earth', 'Mercury'],
      correctAnswer: 'Mercury'
    },
    {
      question: 'What do you use to drink water?',
      options: ['Plate', 'Cup', 'Spoon', 'Fork'],
      correctAnswer: 'Cup'
    },
    {
      question: 'What do you use to color with?',
      options: ['Pen', 'Pencil', 'Marker', 'Brush'],
      correctAnswer: 'Marker'
    },
    {
      question: 'What animal is known for climbing trees?',
      options: ['Fish', 'Lion', 'Squirrel', 'Elephant'],
      correctAnswer: 'Squirrel'
    },
    {
      question: 'What color is the sun?',
      options: ['Red', 'Yellow', 'Blue', 'Green'],
      correctAnswer: 'Yellow'
    },
    {
      question: 'What animal is known for swimming?',
      options: ['Bear', 'Bird', 'Fish', 'Snake'],
      correctAnswer: 'Fish'
    },
    {
      question: 'What do you use to cut paper?',
      options: ['Scissors', 'Knife', 'Spoon', 'Fork'],
      correctAnswer: 'Scissors'
    },
    {
      question: 'What animal is known for barking?',
      options: ['Cat', 'Dog', 'Bird', 'Elephant'],
      correctAnswer: 'Dog'
    },
    {
      question: 'What color is the moon?',
      options: ['Red', 'Yellow', 'White', 'Blue'],
      correctAnswer: 'White'
    },
    {
      question: 'What animal is known for roaring?',
      options: ['Mouse', 'Lion', 'Rabbit', 'Duck'],
      correctAnswer: 'Lion'
    },
    {
      question: 'What do you use to eat soup?',
      options: ['Plate', 'Bowl', 'Cup', 'Fork'],
      correctAnswer: 'Bowl'
    },
    {
      question: 'What animal is known for laying eggs?',
      options: ['Dog', 'Cat', 'Chicken', 'Elephant'],
      correctAnswer: 'Chicken'
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
                    <p className='lii'>Correct Answer: {question.correctAnswer}</p>
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
          {currentQuestion < quizQuestions.length && (
            <button className='button' onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage3;
