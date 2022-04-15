import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  public result: number = 0;
  @Output("changement") changementCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public add() {
    this.result++;
    this.changementCompteur.emit({ value: this.result });
  }

  public remove() {
    this.result--;
    this.changementCompteur.emit({ value: this.result });
  }
}
