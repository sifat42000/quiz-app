import { quizApp } from "@/Home/QuizData";
import { createSlice } from "@reduxjs/toolkit";



interface TQuiz {
    question: typeof quizApp;
    currentQuestionIndex: number;
    userAnswers:(string | null)[];
    quizComplete:boolean;
}

const initialState: TQuiz = {
    question: quizApp,
    currentQuestionIndex: 0,
    userAnswers:Array(quizApp.length).fill(null),
    quizComplete: false 
}
 

export const quizSlice = createSlice({
    name : 'quizApp',
    initialState,
    reducers:{
        setAnswer : (state,action) =>{
            const {questionIndex,answer} = action.payload
            state.userAnswers = [...state.userAnswers]
            state.userAnswers[questionIndex] = answer
        },


        increament : (state) =>{
            if(state.currentQuestionIndex < 6){
                state.currentQuestionIndex += 1
            }
            
        },

        
        decreament : (state) =>{
            if(state.currentQuestionIndex > 0){
                state.currentQuestionIndex -= 1
            }
           
        },

        completedQuestion : (state) =>{
           state.quizComplete = true
        }
    }
})

export const {setAnswer,increament,decreament,completedQuestion} = quizSlice.actions

export default quizSlice.reducer