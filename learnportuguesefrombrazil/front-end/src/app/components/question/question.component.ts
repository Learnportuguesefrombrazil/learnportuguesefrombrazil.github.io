import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name : string="";
  public questionList : any = [];
  public currentQuestion:number = 0;
  public points: number=0;
  counter=120;
  correctAnswer:number=0;
  inCorrectAnswer:number=0;
  interval$:any
  progress:string="0";
  isQuizCompleted : boolean = false;

  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(){
    this.questionService.getQuestionJson().subscribe(res=>{
      this.questionList = res.questions;
    })
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }

  answer(currentQno:number, option:any){
     if(currentQno === this.questionList.length){
        this.isQuizCompleted = true;
        this.startCounter();
     }
     if(option.correct){
       this.points+= 10;
       this.correctAnswer++;
       setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
       },1200);
       
     }else{
      setTimeout(()=>{
        this.points-=10;
        this.inCorrectAnswer++;
        this.currentQuestion++;
        this.getProgressPercent();
      },1200);
       
       this.points -= 10;
     }
  }

  startCounter(){
     this.interval$ = interval(2000).subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=120;
        this.points-=10;
      }
     });
     setTimeout(() =>{
      this.interval$.unsubscribe()
     }, 600000);
  }

  stopCounter(){
     this.interval$.unsubscribe();
     this.counter=0;
  }

  resetCounter(){
    this.stopCounter();
    this.counter=120;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=120;
    this.currentQuestion=0;
    this.progress="0";
  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
}
