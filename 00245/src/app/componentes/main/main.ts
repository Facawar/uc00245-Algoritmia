import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {


  aluno: string = "Tiny Tony";

  ngOnInit(): void {
    this.definirPorblemas();


  }

  definirPorblemas():void {
    this.aluno;
    let aluno: string = "Raquel";
    console.log("This.aluno", this.aluno)
    console.log("This.aluno", aluno)

  }


}
