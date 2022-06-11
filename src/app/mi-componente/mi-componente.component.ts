import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  age: number;

  constructor() {
    this.age = 18;
  }

  ngOnInit(): void {
    console.log("Componente cargado.")
  }

  addAge(){
    this.age = this.age + 1;
  }

  rmAge(){
    this.age = this.age - 1;
  }

}
