import { Button } from "@/components/ui/button";
import { completedQuestion, decreament, increament } from "@/Redux/Features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";


const QuizControll = () => {

    const {currentQuestionIndex,userAnswers,question} = useAppSelector((state) => state.quiz)

    const dispatch = useAppDispatch()

    const isComplete = userAnswers[currentQuestionIndex] == null
    return (
        <div className="flex justify-center space-x-36 ">
            <Button disabled={currentQuestionIndex === 0} onClick={() => dispatch(decreament())}>Previous</Button>
           {
            currentQuestionIndex < question.length-1 && ( <Button disabled={isComplete} onClick={() => dispatch(increament())}>Next</Button>)
           }
            {
                currentQuestionIndex === question.length-1 && <Button disabled={isComplete} onClick={() => dispatch(completedQuestion())}>Complete quiz</Button>
            }
            
        </div>
    );
};

export default QuizControll;