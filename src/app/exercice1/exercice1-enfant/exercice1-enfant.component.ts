import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result: number = 0;
  @Output("changementResult") public changement = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

public Add() {
  this.result++;
  this.changement.emit({
    value: this.result,
  });
}

public Remove() {
  this.result--;
  this.changement.emit({
    value: this.result,
  });
}

}
