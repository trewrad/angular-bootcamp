import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootcamp';
  //count = 100;
  //twoWayDataBinding = "Quantiphi";
  task_list = new Array("Attend Angular Course");

  task = "Enter Task Here";



  addTask(task:string){
    this.task_list.push(task);
    console.log(this.task_list);
  }

//To Do App, Simple Text Box - enter Attend Angular Session; Add this as a task in the list
/*
  increment(){
    this.count = this.count + 1;
  }

  decrement(){
    this.count = this.count - 1;
  }
*/
}
