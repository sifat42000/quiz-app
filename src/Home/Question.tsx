
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { setAnswer } from "@/Redux/Features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import QuizControll from "./QuizControll";



const Question = () => {

    const dispatch = useAppDispatch(); 
    const { question, currentQuestionIndex, userAnswers } = useAppSelector((state) => state.quiz)
    const currentQuestion = question[currentQuestionIndex]
    const currentAnswer = userAnswers[currentQuestionIndex]
    console.log(currentAnswer)
    console.log("Current Answer:", currentAnswer);

    const handleClick = (answer : string) =>{
        dispatch(setAnswer({questionIndex:currentQuestionIndex,answer}))
        // console.log(answer,currentQuestionIndex)
    }

    return (
        <div className="flex justify-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{currentQuestion.Question}</CardTitle>
                    <CardDescription>Question {currentQuestionIndex + 1} of {question.length}</CardDescription>
                </CardHeader>
                <CardContent>
                    {
                        currentQuestion?.option?.map((opt, index) =>
                            <Button onClick={()=>handleClick(opt)} className="w-full mt-4" variant={opt === currentAnswer? 'default' : 'outline'} size={'lg'} key={index} 
                            
                            >
                                {opt}
                            </Button>)
                    }

                </CardContent>
                <QuizControll/>
                {/* <CardFooter className="flex justify-between">
                    xyz
                </CardFooter> */}
            </Card>
        </div>
    );
};

export default Question;