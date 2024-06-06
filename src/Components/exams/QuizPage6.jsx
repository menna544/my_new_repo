import { useState } from 'react';
import '../Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const QuizPage6 = () => {
  const quizQuestions = [
    {
      question: 'What animal is known for its long trunk and large ears?',
      options: ['Elephant', 'Lion', 'Giraffe', 'Zebra'],
      correctAnswer: 'Elephant'
    },
    {
      question: 'What color is a ripe banana?',
      options: ['Green', 'Yellow', 'Red', 'Purple'],
      correctAnswer: 'Yellow'
    },
    {
      question: 'How many legs does a spider have?',
      options: ['Four', 'Six', 'Eight', 'Ten'],
      correctAnswer: 'Eight'
    },
    {
      question: 'Which planet is closest to the Sun?',
      options: ['Mars', 'Venus', 'Earth', 'Mercury'],
      correctAnswer: 'Mercury'
    },
    {
      question: 'What do you use to write with?',
      options: ['Pencil', 'Spoon', 'Toothbrush', 'Key'],
      correctAnswer: 'Pencil'
    },
    {
      question: 'What do cows drink?',
      options: ['Milk', 'Water', 'Juice', 'Soda'],
      correctAnswer: 'Water'
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
      question: 'What do you use to brush your teeth?',
      options: ['Hairbrush', 'Toothbrush', 'Comb', 'Spoon'],
      correctAnswer: 'Toothbrush'
    },
    {
      question: 'What color is the sky on a sunny day?',
      options: ['Green', 'Blue', 'Red', 'Purple'],
      correctAnswer: 'Blue'
    },
    {
      question: 'What do you wear on your head to keep warm in winter?',
      options: ['Scarf', 'Hat', 'Sunglasses', 'Gloves'],
      correctAnswer: 'Hat'
    },
    {
      question: 'What do you use to cut paper?',
      options: ['Scissors', 'Knife', 'Spoon', 'Fork'],
      correctAnswer: 'Scissors'
    },
    {
      question: 'What do you call a baby cat?',
      options: ['Puppy', 'Kitten', 'Cub', 'Calf'],
      correctAnswer: 'Kitten'
    },
    {
      question: 'Which fruit is yellow and curved?',
      options: ['Apple', 'Orange', 'Banana', 'Strawberry'],
      correctAnswer: 'Banana'
    },
    {
      question: 'How many fingers do you have on one hand?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOptionIndexes, setSelectedOptionIndexes] = useState(Array(quizQuestions.length).fill(-1));

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
    if (quizQuestions[currentQuestion].options[selectedOptionIndex] === correctAnswer) {
      setScore(score + 1);
    } else {
      const incorrectAnswer = {
        question: quizQuestions[currentQuestion].question,
        correctAnswer: correctAnswer
      };
      setIncorrectAnswers([...incorrectAnswers, incorrectAnswer]); 
    }

    if (currentQuestion === quizQuestions.length - 1) {
      setQuizCompleted(true); 
    } else {
      setCurrentQuestion(currentQuestion + 1); 
    }
  };

  const handleAnswerClick = (optionIndex) => {
    const newSelectedOptionIndexes = [...selectedOptionIndexes];
    newSelectedOptionIndexes[currentQuestion] = optionIndex;
    setSelectedOptionIndexes(newSelectedOptionIndexes);
  };

  const GoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/Home');
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
                {incorrectAnswers.map((answer, index) => (
                  <li key={index}>
                    <p>{answer.question}</p>
                    <p className='lii'>Correct Answer: {answer.correctAnswer}</p>
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

export default QuizPage6;
