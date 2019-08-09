import { questions } from './question';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-create-question-paper',
  templateUrl: './create-question-paper.component.html',
  styleUrls: ['./create-question-paper.component.css']
})
export class CreateQuestionPaperComponent implements OnInit {

  title:'Create Question Paper';
    constructor( private serivces:ServiceService) { }

    questionPaper: questions[]=[];
    selectedQuestions:questions[]=[];
    submitted : Boolean;
    questionPaperID: number[]=[]
    selectedQuestions1: any[]=[];
    c:number=1;


    
    count:number=0;

    // course:string;

    getJava(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="java"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

    getDotNet(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="Net"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

    getcPlus(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="c++"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

    getAngular(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="Angular 2+"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

  ngOnInit() {
  this.serivces.questionPaper()
  .subscribe
  (
    data=>{    
       this.questionPaper  =data;
            this.questionPaper.push(data);

    }
  )
  
  }

  getQuestionData(Qid){

    for(var i=0;i<this.c;i++){
      this.questionPaperID[i]= Qid;
    }
   this.c++
    console.log(this.questionPaperID)
  }

  getquestionPaper(){
    console.log(this.questionPaperID)

       this.submitted = true;
    //console.log(this.selectedQuestions);
    for(var i=0;i<this.questionPaperID.length;i++){
      console.log(this.questionPaperID.length)
    this.serivces.getRequiredQuestion(this.questionPaperID[i])
     .subscribe(
      data=>{
        this.selectedQuestions1[i] = data;
        this.selectedQuestions1[i].push(data);

      }
    );
        console.log(this.selectedQuestions1[i]);

     this.serivces.savedQuestionPaper(this.selectedQuestions1[i])
     .subscribe(
       response => alert('SUCCESS!! :-)\n\n'+response),
       error => alert('Failed !! :-)\n\n'+error),
     )

    }

  
  }

}
