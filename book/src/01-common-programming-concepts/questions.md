# Perguntas - Conceitos Comuns de Programação

---

01 - Como você escreveria um comentário de linha única em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=11d0d9b36b3ec6d7e026556a2df259f3)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    // Este é um comentário de linha única    
}
```
</details>

02 - Qual é a sintaxe para comentários de bloco em Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=92ccdce85429042c3c19b90b2739c098)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b385f4e4d830c51899b10fd20c3df383)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6f1d77bf1df6b37e13be0394858d6faa)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    print!("Imprimir sem adicionar uma nova linha no final!");
}
```
</details>

05 - Qual macro você usaria para imprimir texto e adicionar automaticamente uma quebra de linha no final?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8e657af8456cd2e45c7071387a6e1f30)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("Imprimir e adicionar nova linha no final!");
}
```
</details>

06 - Escreva um código que imprima ***Hello*** e ***World*** na mesma linha usando a macro print!.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=7f19b20530592369971fba8bf265a206)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1473956c103116618b8e9d7b11d738d5)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("Primeira linha\nSegunda linha");
}
```
</details>

08 - Que outras sequências de escape você pode usar em strings Rust? Dê exemplos de pelo menos 3.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=eb0dfd113278e39b07935fe967a36e6f)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e2483e071f7668c29ab6d4c43e93d5bc)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=534c15c5dd3777cd8b43f590b00e6898)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=516e91b84059737ccbf05e4b66f15c2d)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=29057131611a1196cdecaf62afc029c5)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2dbb60ce1e47e1dba0338bd9926cc431)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=56db79c16dad160a119f64d290534508)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e2a10647f401827475c04cdef7c1d0f7)

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

16 - Como você declara uma constante chamada ***MAX_SPEED*** com o valor **9000** do tipo **i32**?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=04fd3ef402fdf49beb8bb112117619dd)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=88dc1eb25c3206e999c93e8851beba15)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=cd49fa3f7ed5e93e1c2b09a1c32ec5f7)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e8bf00347866354a8846b7856e928e96)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fa6ff56c34b23f750006cf361bdfee9d)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=7f5c318b55b23ad8c67664d73553952e)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0617076301d0e8a941832aca4336aa09)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a84aab3292962c745db08df5f13872e4)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ea29c33947406e6a40ca664127148c08)

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

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=efa60d3eeeae35d853049364b2106950)

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
