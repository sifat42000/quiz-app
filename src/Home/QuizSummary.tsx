import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/Redux/hook";


const QuizSummary = () => {
      const {question,userAnswers} = useAppSelector(state=>state.quiz)

      const correctAnswer = question.reduce((count,qus,index)=>{
        return qus.correctAnswer === userAnswers[index] ? count +1 : count
      },0)

      const progressValue = parseFloat(((correctAnswer/question.length)*100).toFixed(2))
      
    //   console.log(progressValue)
      
    return (
        <div className="flex justify-center  container mx-auto">
          <Card>
            <CardHeader>Quiz Summary </CardHeader>
            <CardContent>
                <h4 className="mb-4">You get {correctAnswer} out of {question.length}</h4>
                <Progress value={progressValue}></Progress>
           
            </CardContent>
          </Card>
            
        </div>
    );
};

export default QuizSummary;