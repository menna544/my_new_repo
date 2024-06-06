import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Payment from './Components/Payment';
import Home from './Components/Home'; 
import Loading from './Components/Loading';
import Stories from './Components/Stories';
import Homeques from './Components/Homeques';
import Startlog from './Components/Startlog';
import Signin from './Components/auth/Signin';
import Signup from './Components/auth/Signup';
import Ques1 from './Components/Ques1';
import QuizPage1 from './Components/exams/QuizPage1';
import QuizPage2 from './Components/exams/QuizPage2';
import QuizPage3 from './Components/exams/QuizPage3';
import QuizPage4 from './Components/exams/QuizPage4';
import QuizPage5 from './Components/exams/QuizPage5';
import QuizPage6 from './Components/exams/QuizPage6';
import Profile from './Components/Profile';



function App() {
  const [userEmail, setUserEmail] = useState('');
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home userEmail={userEmail} />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/" element={<Homeques />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/Startlog" element={<Startlog />} />
          <Route path="/Signin" element={<Signin setUserEmail={setUserEmail} />} />
          <Route path="/Signup" element={<Signup setUserEmail={setUserEmail} />} />
          <Route path="/load" element={<Loading />} />
          <Route path="/ques1" element={<Ques1/>} />
          <Route path="/Quiz" element={<QuizPage1/>} />
          <Route path="/Quiz2" element={<QuizPage2/>} />
          <Route path="/Quiz3" element={<QuizPage3/>} />
          <Route path="/Quiz4" element={<QuizPage4/>} />
          <Route path="/Quiz5" element={<QuizPage5/>} />
          <Route path="/Quiz6" element={<QuizPage6/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
