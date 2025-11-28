# Introdução ao Rust

Rust foi criado por **Graydon Hoare** na Mozilla Research em **2010**. A primeira versão estável, 1.0, foi lançada em 2015, marcando o início de sua popularidade e adoção mais ampla na indústria.

Rust é uma linguagem de programação de sistemas que é compilada e de código aberto (*open-source*), o que significa que é traduzida diretamente para código de máquina. Isso a torna extremamente rápida, sem a necessidade de um interpretador como Python ou JavaScript. Ela se posiciona como uma alternativa a linguagens como C e C++, que são conhecidas por sua performance, mas também são mais suscetíveis a erros de memória, como *null pointers* (ponteiros nulos) ou *data races* (condições de corrida de dados).

A grande inovação do Rust é o Modelo de Posse (*Ownership Model*), um sistema que garante a segurança de memória em tempo de compilação. Isso significa que o compilador do Rust verifica se o seu código está livre de erros de memória antes mesmo de ser executado. O compilador se torna um "guardião" da memória, e se ele não aprovar o seu código, ele simplesmente não compila. Essa abordagem elimina toda uma classe de bugs que são comuns em outras linguagens.
