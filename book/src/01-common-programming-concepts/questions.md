# Perguntas - Conceitos Comuns de Programação

---

01 - Como você escreveria um comentário de linha única em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=43cf11c7021e7dbbf6e20769e0f7e9fd)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    // Este é um comentário de linha única    
}
```
</details>

02 - Qual é a sintaxe para comentários de bloco em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=56eb7e4cb56128c45b6404427b0d46f7)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    /*
      Este é um comentário de
      bloco que abrange várias
      linhas.
    */
}
```
</details>

03 - Você pode aninhar comentários de bloco em Rust? Dê um exemplo.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5365a50a33aa1463ac806693c49be5bb)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    /*
       Este é um comentário externo
    // Este é um comentário aninhado
       Fim do comentário externo
    */    
}
```
</details>

04 - Qual macro você usaria para imprimir texto na mesma linha, sem adicionar uma quebra de linha no final?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3e5be0b727af5dd05bc59ea46ab40476)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    print!("Imprimir sem adicionar uma nova linha no final!");
}
```
</details>

05 - Qual macro você usaria para imprimir texto e adicionar automaticamente uma quebra de linha no final?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9dde82b6f0b4b6558afa969a18691588)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("Imprimir e adicionar nova linha no final!");
}
```
</details>

06 - Escreva um código que imprima ***Hello*** e ***World*** na mesma linha usando a macro print!.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d174087e2631977598df97dacc77b60a)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    print!("Hello ");
    print!("World");
}
```
</details>

07 - Como você insere uma quebra de linha explícita dentro de uma string que está sendo impressa com println!?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4f6e7030e813314dd94c50db89c7d930)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("Primeira linha\nSegunda linha");
}
```
</details>

08 - Que outras sequências de escape você pode usar em strings Rust? Dê exemplos de pelo menos 3.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=52209b642f1914225d87b6b83ac6b7bf)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("Caractere de tabulação:\tTexto tabulado");
    println!("Barra invertida: \\");
    println!("Olá \"mundo\"");
    println!(r"C:\Usuários\Snoopy\Documentos\");
}
```
</details>

09 - Como você declara uma variável chamada ***score*** e atribui a ela o valor 100?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=73d2eb236a8f514c24351b3df50b7d0d)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let score = 100;
    println!("Score: {}", score);
}
```
</details>

10 - Escreva uma linha de código que declare uma variável **cidade** com o valor **Recife** e a imprima na tela.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3bf95ed5a3ce8e2bd76d177b47506128)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let cidade = "Recife";
    println!("Cidade: {}", cidade);
}
```
</details>

11 - O que acontece se você tentar usar uma variável antes de declará-la em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=58b20f720c91fef8c70fa39bba865b9f)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    // Isto causaria um erro de tempo de compilação:
    println!("{}", x);
    let x = 5;
} 
```
</details>

12 - Você pode declarar uma variável sem inicializá-la em Rust? Se sim, mostre como usá-la com segurança.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0039cfa4a62b9dc5f3b30e3e331e5e1d)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x: i32; 
    x = 42;     
    println!("x = {}", x);
}
```
</details>

13 - Qual palavra-chave é usada para declarar uma variável que pode ter seu valor alterado após a inicialização?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b6eeca2776bec4297873fae9e5325093)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut x = 5;
    x = 10;
    println!("x = {}", x);
}
```
</details>

14 - Declare uma variável mutável chamada contador inicializada com 0. Em seguida, escreva o código para alterar o valor para 5 e imprimi-lo.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=047bb0b1dfa60caeec2ecea4f4ecf1a4)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador = 0;
    println!("Contador = {}", contador);
    
    contador = 5;
    println!("Contador = {}", contador);
}
```
</details>

15 - O que acontece se você tentar modificar uma variável imutável em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=074ef9bbb6d39a8b5fe71e02b5a2aa81)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x = 1;
    
    x = 2;
    println!("x = {}", x);
}
```
</details>

16 - Como você declara uma constante chamada ***MAX_SPEED*** com o valor 9000 do tipo i32?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6227aaa8c70bb460da2bb235c6c5b55c)

<details>
<summary>Resposta</summary>

```rust
const MAX_SPEED: i32 = 9000;

fn main() {
    println!("Max Speed: {}", MAX_SPEED);
}
 ```
</details>

17 - É possível alterar o valor de uma constante após sua declaração?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2d187ea754b7419363dc5793c3c25aef)

<details>
<summary>Resposta</summary>

```rust
const MAX_SPEED: i32 = 100;

fn main() {    
    MAX_SPEED = 200;
}
```
</details>

18 - Quais são as principais diferenças entre constantes e variáveis imutáveis em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ddc3749748d737380c24aacfe5a08a70)

<details>
<summary>Resposta</summary>

```rust
const CONSTANTE_GLOBAL: i32 = 100;

fn main() {
    let variavel_imutavel = 200;
    println!("Constante: {}, Variável: {}", CONSTANTE_GLOBAL, variavel_imutavel);

    // Constantes:
    // - Sempre imutáveis (a palavra-chave 'mut' não é permitida)
    // - Devem ter anotação de tipo explícita (ex: : i32)
    // - Podem ser declaradas em escopo global (fora de funções)
    // - Devem ser definidas apenas por expressões constantes (não o resultado de uma função, por exemplo)
    
    // Variáveis Imutáveis (let):
    // - Podem ser tornadas mutáveis com 'mut'
    // - O tipo pode ser inferido
    // - Locais ao seu escopo
    // - Podem ser definidas como o resultado de qualquer expressão
}
```
</details>

19 - Como você usaria a macro format! para criar a string **O valor é: 42** a partir do número **42**?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=24f80a59dd012a5e583fa1255213c3f5)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let numero = 42;
    let numero_formatado = format!("O valor é: {}", numero);
    println!("{}", numero_formatado);
}
```
</details>

20 - Como você pode formatar o número **7** para que ele seja exibido como **0007** usando format!?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=cd79ba22370b8d65b5c4f8628b4b0d56)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let numero = 7;
    let numero_formatado = format!("{:04}", numero);

    println!("{}", numero_formatado);
}
```
</details>

21 - Como você formataria um número de ponto flutuante para mostrar exatamente 2 casas decimais?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3da22e4446e4cd6bce9f65e22db114f8)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let pi = 3.14159265359;
    println!("Pi: {:.2}", pi);

    let pi_formatado = format!("{:.2}", pi);
    println!("Pi: {}", pi_formatado);    
}
```
</details>

22 - Demonstre como usar argumentos posicionais em format strings.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6eb7e95ff0e4df4a74c17c3a83542113)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let nome = "Snoopy";
    let idade = 8;
    let cidade = "Califórnia";
    
    // Argumentos posicionais
    println!("{0} tem {1} anos e mora na {2}", nome, idade, cidade);
    
    // Argumentos nomeados
    println!("{nome} tem {idade} anos e mora na {cidade}");
             
    // Misturado
    println!("{} tem {idade} anos e mora na {cidade}", nome);
}
```
</details>
    
23 - O que é ***shadowing*** em Rust? Explique com um exemplo de código e qual seria a saída.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=59a2a70416a82fd3a3d8946ed7392c90)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x = 5;
    println!("Primeiro x: {}", x);

    let x = x + 1;
    println!("Segundo x: {}", x);

    let x = x * 2;
    println!("Terceiro x: {}", x);

    let x = "Olá";
    println!("Quarto x: {}", x);
}
```
</details>

24 - Qual será a saída do seguinte código?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ee0b6fbf2f1f20acad9fc4e688aa7f42)

```rust
fn main () {
    let x = 5;
    let x = x + 1;
    {
        let x = x * 2;
        println!("O valor interno de x é: {}", x);
    }
    println!("O valor externo de x é: {}", x);
}
```
<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x = 5;
    let x = x + 1; // x = 6
    {
        let x = x * 2; // x = 12 
        println!("O valor interno de x é: {}", x); // Saida: 12
    }
    println!("O valor externo de x é: {}", x); // Saida: 6
}
```
</details>

25 - Qual será a saída do seguinte código? Explique por quê.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2dad8a48b1c9733652739c0171e7a67d)

```rust
fn main () {    
    let a = 10;
    {
        let b = 20;
        println!("Dentro do bloco: a = {}, b = {}", a, b);
    }
    println!("Fora do bloco: b = {}", b);
}
```
<details>
<summary>Resposta</summary>

```rust
fn main() {
    let a = 10;
    {
        let b = 20;
        println!("Dentro do bloco: a = {}, b = {}", a, b);
        // Saida: Dentro do bloco: a = 10, b = 20
    }
    // println!("Fora do bloco: b = {}", b);
    // Erro: b não está no escopo
}
```
</details>
