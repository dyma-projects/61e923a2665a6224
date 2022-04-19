import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('textinput') public el: ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeEvent(event: any) {
    this.valeur = event.target.value;
  }
}
