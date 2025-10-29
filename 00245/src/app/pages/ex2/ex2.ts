import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.html',
  styleUrls: ['./ex2.css']
})
export class Ex2 implements OnInit {

  ngOnInit(): void {
    console.clear();
    console.log('Iniciando exercícios...\n');

    console.log('Exercício 7: Compare dois números e diga se são iguais.');
    const a: number = 10;
    const b: number = 10;
    const saoIguais: boolean = a === b;
    console.log(`${a} e ${b} são iguais?`, saoIguais);
    console.log('-----------------------------------');

    console.log('Exercício 8: Compare se um número é maior que o outro.');
    const x: number = 15;
    const y: number = 12;
    const maior: boolean = x > y;
    console.log(`${x} é maior que ${y}?`, maior);
    console.log('-----------------------------------');

    console.log('Exercício 9: Compare se dois textos são diferentes.');
    const texto1: string = 'Angular';
    const texto2: string = 'React';
    const diferentes: boolean = texto1 !== texto2;
    console.log(`"${texto1}" é diferente de "${texto2}"?`, diferentes);
    console.log('-----------------------------------');

    console.log('Exercício 10: Verifique se uma pessoa pode dirigir (temIdade && temCarta).');
    const temIdade: boolean = true;
    const temCarta: boolean = false;
    const podeDirigir: boolean = temIdade && temCarta;
    console.log('Pode dirigir?', podeDirigir);
    console.log('-----------------------------------');

    console.log('Exercício 11: Verifique se o acesso é permitido (logado || admin).');
    const logado: boolean = false;
    const admin: boolean = true;
    const acessoPermitido: boolean = logado || admin;
    console.log('Acesso permitido?', acessoPermitido);
    console.log('-----------------------------------');

    console.log('Exercício 12: Inverta o valor de uma variável booleana.');
    let statusAtivo: boolean = true;
    console.log('Status inicial:', statusAtivo);
    statusAtivo = !statusAtivo;
    console.log('Status invertido:', statusAtivo);
    console.log('-----------------------------------');

    console.log('\nTodos os exercícios foram executados com sucesso!');

    console.log('=== DEMONSTRAÇÃO DE REFERÊNCIAS DE MEMÓRIA ===');
 
    // 1. Tipos primitivos - Cópia por VALOR
    console.log('\n1. TIPOS PRIMITIVOS (Cópia por VALOR):');
    let ab = 10;
    let ba = a; // Cópia do valor
    console.log('Antes da modificação:');
    console.log('a =', ab, 'b =', ba);
 
    ba = 20; // Modifica apenas b
    console.log('Depois de modificar b:');
    console.log('a =', ab, 'b =', ba); // a mantém o valor original
 
    // 2. Objetos - Cópia por REFERÊNCIA
    console.log('\n2. OBJETOS (Cópia por REFERÊNCIA):');
    const obj1 = { nome: 'João do Obj1', idade: 30 };
    const obj2 = obj1; // Cópia da referência (mesmo endereço de memória)
 
    console.log('Antes da modificação:');
    console.log('obj1 =', obj1);
    console.log('obj2 =', obj2);
 
    obj2.idade = 35; // Modifica ambos!
    obj2.nome = 'tony do obj2'; //Mudando nome do Objeto 2
 
    console.log('Depois de modificar obj2.idade e obj2.nome:');
    console.log('obj1 =', obj1); // Também foi modificado!
    console.log('obj2 =', obj2);
 
    // 3. Arrays - Também por referência
    console.log('\n3. ARRAYS (Cópia por REFERÊNCIA):');
    const arr1 = [1, 2, 3];
    const arr2 = arr1; // Mesma referência
 
    console.log('Antes da modificação:');
    console.log('arr1 =', arr1);
    console.log('arr2 =', arr2);
 
    arr2.push(4); // Modifica ambos arrays
    console.log('Depois de arr2.push(4):');
    console.log('arr1 =', arr1); // Também modificado!
    console.log('arr2 =', arr2);
 
    // 4. Comparação de referências
    console.log('\n4. COMPARAÇÃO DE REFERÊNCIAS:');
    console.log('obj1 === obj2:', obj1 === obj2); // true - mesma referência
    console.log('arr1 === arr2:', arr1 === arr2); // true - mesma referência
 
    const obj3 = { nome: 'João', idade: 35 }; // Objeto igual mas diferente referência
    console.log('obj1 === obj3:', obj1 === obj3); // false - referências diferentes
 
    // 5. Cópia real (deep copy)
    console.log('\n5. CÓPIA REAL (Deep Copy):');
    const original = { x: 10, y: 20 };
    const copiaReal = JSON.parse(JSON.stringify(original)); // Deep copy
    console.log('original === copiaReal são iguais em referencia ?', original === copiaReal); // false - mesma referência
    console.log('original === copiaReal são iguais em conteudo ?', original.x === copiaReal.x); // true - no mesmo conteudo
 
    console.log('original =', original);
    console.log('copiaReal =', copiaReal);
 
    copiaReal.x = 99;
    console.log('Depois de modificar copiaReal.x:');
    console.log('original =', original); // Não modificado!
    console.log('copiaReal =', copiaReal); // Apenas este foi modificado
 
    // 6. Cópia superficial (shallow copy)
    console.log('\n6. CÓPIA SUPERFICIAL (Shallow Copy):');
    const objCompleto = {
      dados: { valor: 100 },
      lista: [1, 2, 3],
    };
 
    const shallowCopy = { ...objCompleto }; // Spread operator - shallow copy
 
    console.log('Original:', objCompleto);
    console.log('Shallow Copy:', shallowCopy);
 
    shallowCopy.dados.valor = 999; // Modifica ambos!
    shallowCopy.lista.push(4); // Modifica ambos!
 
    console.log('Depois de modificar shallowCopy:');
    console.log('Original:', objCompleto); // Foi modificado nos objetos internos!
    console.log('Shallow Copy:', shallowCopy);
 
    console.log('\n=== FIM DA DEMONSTRAÇÃO ===');
  }


}