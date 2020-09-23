import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  patientByWeekArray: patientByWeek[] = [];
  constructor() { }

  ngOnInit() {
  }

  removepatient(index) {
    if (this.patientByWeekArray[index] != null) {
      this.patientByWeekArray.splice(index, 1);
    }
    console.log(this.patientByWeekArray);
  }
  addNewpatient() {
    const obj = new patientByWeek();
    obj.week  = this.patientByWeekArray.length ? this.patientByWeekArray.length + 1 : 1;
    this.patientByWeekArray.push(obj);
  }
}
export class patientByWeek {
  week: number;
  patient: string;
  date: Date;
}
