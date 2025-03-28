import './App.css'

import Question from './Home/Question'
import QuizSummary from './Home/QuizSummary'
import { useAppSelector } from './Redux/hook'

function App() {

  const {quizComplete} = useAppSelector(state=>state.quiz)
  

  return (
   <div className='mt-32 '>
    {
      quizComplete === true? 
      <h2 className='flex justify-center mb-9 text-3xl '>Quiz শেষ! এবার ফলাফল দেখো</h2> :
      <h2 className='flex justify-center mb-9 text-3xl '>বাংলাদেশের কিছু সাধারণ প্রশ্ন</h2>
    }
   
   
  {
    quizComplete === true?  <QuizSummary/>:<Question/>
    

  }
   </div>
  )
}

export default App
