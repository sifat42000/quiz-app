import { Button } from "@/components/ui/button";
import { decreament, increament } from "@/Redux/Features/quizSlice";
import { useAppDispatch } from "@/Redux/hook";


const QuizControll = () => {

    const dispatch = useAppDispatch()
    return (
        <div className="flex justify-center space-x-36 ">
            <Button onClick={() => dispatch(decreament())}>Previous</Button>
            <Button onClick={() => dispatch(increament())}>Next</Button>
            
        </div>
    );
};

export default QuizControll;