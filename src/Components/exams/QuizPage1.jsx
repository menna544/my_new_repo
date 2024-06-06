import { useState } from 'react';
import '../Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const QuizPage1 = () => {
  const quizQuestions = [
    {
      question: 'What kind of fish is Nemo?',
      options: ['Angelfish', 'Clownfish', 'Goldfish', 'Rome'],
      correctAnswer: 'Clownfish'
    },
    {
      question: 'In the movie "Toy Story," what is the name of the cowboy doll who is one of the main characters?',
      options: ['Buzz Lightyear', 'Jessie', 'Mr. Potato Head', 'Woody'],
      correctAnswer: 'Woody'
    },
    {
      question: 'What is the name of the young lion cub who is the main character in "The Lion King"?',
      options: ['Timon', 'Scar', 'Simba', 'Mufasa'],
      correctAnswer: 'Simba'
    },
    {
      question: 'What color is the sky on a sunny day?',
      options: ['Green', 'Blue', 'Red', 'Purple'],
      correctAnswer: 'Blue'
    },
    {
      question: 'How many legs does a dog have?',
      options: ['Four', 'Six', 'Two', 'One'],
      correctAnswer: 'Four'
    },
    {
      question: 'What do you use to brush your teeth?',
      options: ['Hairbrush', 'Toothbrush', 'Comb', 'Spoon'],
      correctAnswer: 'Toothbrush'
    },
    {
      question: 'Which fruit is yellow and curved?',
      options: ['Apple', 'Orange', 'Banana', 'Strawberry'],
      correctAnswer: 'Banana'
    },
    {
      question: 'What is the opposite of "hot"?',
      options: ['Cold', 'Warm', 'Cool', 'Freezing'],
      correctAnswer: 'Cold'
    },
    {
      question: 'Which animal says "meow"?',
      options: ['Dog', 'Cat', 'Cow', 'Horse'],
      correctAnswer: 'Cat'
    },
    {
      question: 'What color is a banana when it\'s ripe?',
      options: ['Green', 'Yellow', 'Red', 'Blue'],
      correctAnswer: 'Yellow'
    },
    {
      question: 'What is the name of the season after summer?',
      options: ['Winter', 'Spring', 'Fall/Autumn', 'Summer'],
      correctAnswer: 'Fall/Autumn'
    },
    {
      question: 'How many fingers do you have on one hand?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five'
    },
    {
      question: 'What do you wear on your head to keep warm in winter?',
      options: ['Scarf', 'Hat', 'Sunglasses', 'Gloves'],
      correctAnswer: 'Hat'
    },
    {
      question: 'What do you use to write with?',
      options: ['Pencil', 'Spoon', 'Toothbrush', 'Key'],
      correctAnswer: 'Pencil'
    },
    {
      question: 'What do you call a baby cat?',
      options: ['Puppy', 'Kitten', 'Cub', 'Calf'],
      correctAnswer: 'Kitten'
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
      return;
    }

    const updatedSelectedOptionIndexes = [...selectedOptionIndexes];
    updatedSelectedOptionIndexes[currentQuestion] = optionIndex;
    setSelectedOptionIndexes(updatedSelectedOptionIndexes);
  };

  const handleGoBack = () => {
    navigate('/Home');
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
                className={`lii ${selectedOptionIndexes[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          {currentQuestion > 0 && <button onClick={GoBack} className='button'>Previous</button>}
          {currentQuestion < quizQuestions.length  && (
            <button onClick={handleNextQuestion} className='button'>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage1;
