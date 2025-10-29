import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.html',
  styleUrls: ['./ex1.css']
})
export class Ex1 implements OnInit {

  ngOnInit(): void {
    console.clear();
    console.log('Iniciando exercícios...\n');

    console.log('Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.');
    const nome: string = 'Daniel';
    const idade: number = 19;
    const ativo: boolean = true;
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Ativo:', ativo);
    console.log('-----------------------------------');

    console.log('Exercício 2: Crie uma variável cidade e depois altere seu valor.');
    let cidade: string = 'Alcochete';
    console.log('Cidade inicial:', cidade);
    cidade = 'Setubal';
    console.log('Cidade alterada:', cidade);
    console.log('-----------------------------------');

    console.log('Exercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.');
    let variavel: any = 'Texto inicial';
    console.log('Tipo string:', variavel);
    variavel = 42;
    console.log('Tipo number:', variavel);
    variavel = true;
    console.log('Tipo boolean:', variavel);
    variavel = { nome: 'Dani' };
    console.log('Tipo objeto:', variavel);
    console.log('-----------------------------------');

    console.log('Exercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.');
    const num1: number = 15;
    const num2: number = 8;
    console.log('Soma:', num1 + num2);
    console.log('Subtração:', num1 - num2);
    console.log('-----------------------------------');

    console.log('Exercício 5: Calcule a área de um retângulo (largura * altura).');
    const largura: number = 10;
    const altura: number = 5;
    const area: number = largura * altura;
    console.log(`Área do retângulo = ${largura} * ${altura} = ${area}`);
    console.log('-----------------------------------');

    console.log('Exercício 6: Mostre o resto da divisão de 20 por 6.');
    const resto: number = 20 % 6;
    console.log('Resto da divisão:', resto);
    console.log('\n Todos os exercícios foram executados com sucesso!');
  }

}