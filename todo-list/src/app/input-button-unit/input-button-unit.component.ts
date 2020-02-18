import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Enter your Todo here...';
  constructor() {  }

  ngOnInit(): void {

  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
