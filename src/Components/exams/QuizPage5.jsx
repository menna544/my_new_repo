import { useState } from 'react';
import '../Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const QuizPage5 = () => {
  const quizQuestions = [
    {
      question: 'Which word shows the location, time, or manner of an action?',
      options: ['Noun', 'Adjective', 'Adverb', 'Pronoun'],
      correctAnswer: 'Adverb'
    },
    {
      question: 'What is the subject of a sentence?',
      options: ['The person or thing performing the action', 'The action being performed', 'The word that receives the action', 'The punctuation at the end of a sentence'],
      correctAnswer: 'The person or thing performing the action'
    },
    {
      question: 'Which word is used to join two or more independent clauses?',
      options: ['Noun', 'Pronoun', 'Conjunction', 'Interjection'],
      correctAnswer: 'Conjunction'
    },
    {
      question: 'What punctuation mark is used to show possession or a contraction?',
      options: ['Apostrophe (‘)', 'Exclamation mark (!)', 'Quotation mark (")', 'Hyphen (-)'],
      correctAnswer: 'Apostrophe (‘)'
    },
    {
      question: 'Which word describes a person, place, or thing?',
      options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
      correctAnswer: 'Noun'
    },
    {
      question: 'What is the action word in a sentence?',
      options: ['Adjective', 'Adverb', 'Verb', 'Pronoun'],
      correctAnswer: 'Verb'
    },
    {
      question: 'Which punctuation mark is used to end a polite request or command?',
      options: ['Period (.)', 'Comma (,)', 'Question mark (?)', 'Exclamation mark (!)'],
      correctAnswer: 'Period (.)'
    },
    {
      question: 'What is a word that takes the place of a noun?',
      options: ['Noun', 'Pronoun', 'Adjective', 'Verb'],
      correctAnswer: 'Pronoun'
    },
    {
      question: 'Which word expresses a strong feeling or sudden emotion?',
      options: ['Verb', 'Noun', 'Adverb', 'Interjection'],
      correctAnswer: 'Interjection'
    },
    {
      question: 'What is the punctuation mark used to indicate a pause in a sentence or to separate items in a list?',
      options: ['Colon (:)','Dash (-)', 'Comma (,)', 'Semicolon (;)'],
      correctAnswer: 'Comma (,)'
    }
  ];

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const handleAnswerClick = (optionIndex) => {
    if (quizCompleted) {
      return; 
    }

    setSelectedOptionIndex(optionIndex);
  };

  const handleNextQuestion = () => {
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
      setSelectedOptionIndex(-1); 
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
      setSelectedOptionIndex(-1); 
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
    setSelectedOptionIndex(-1);
  };

  return (
    <div>
      {quizCompleted ? (
        <div>
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} className='icon' />
          <h2 className='quis'>Quiz Complete!</h2>
          <p>Your score: {score} out of {quizQuestions.length}</p>
          {incorrectAnswers.length > 0 && (
            <div >
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
                className={`lii ${selectedOptionIndex === index ? 'selected' : ''}`}
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

export default QuizPage5;
