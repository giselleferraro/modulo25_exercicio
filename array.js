"use strict";

var alunos = [{
  nome: 'Maria',
  nota: 10
}, {
  nome: 'Eduardo',
  nota: 3
}, {
  nome: 'João',
  nota: 6
}, {
  nome: 'Pedro',
  nota: 7
}, {
  nome: 'Ana',
  nota: 5
}];
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);