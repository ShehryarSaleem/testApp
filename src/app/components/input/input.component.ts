import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() startIcon: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() secure: boolean = false;
  @Output() value = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }
  updateType(update:string){
    this.type=update;
  }
  updateValue(event:CustomEvent){
    this.value.emit(event.detail.value);
  }
}
