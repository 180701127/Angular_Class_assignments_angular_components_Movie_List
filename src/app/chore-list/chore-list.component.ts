import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss']
})
export class ChoreListComponent implements OnInit {
  chores=['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
  constructor() { }

  ngOnInit() {
    
  }

}
