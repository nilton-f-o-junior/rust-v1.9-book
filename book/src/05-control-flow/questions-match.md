# Questions - Match

---

01 - Escreva um programa que recebe um caractere e indica se é uma vogal (a, e, i, o, u) ou uma consoante. Use match para validar.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um caractere:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro no valor inserido!");

    let character = input.trim();

    match character {
        "a" | "e" | "i" | "o" | "u" => println!("O caractere '{}' é uma vogal!", character),
        "" => println!("Nenhum caractere foi inserido!"),
        _ => println!("O caractere {} é uma consoante!", character),
    };
}
```
</details>

02 - Crie um programa que recebe uma nota (0 a 10) e a converte para um conceito.

| Conceito | Notas  |
|----------|--------|
| A        | 9 - 10 |
| B        | 7 - 8  |
| C        | 5 - 6  |
| D        | 3 - 4  |
| E        | 1 - 2  |
| F        |   0    |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira sua nota:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro na inserção de dados!");

    let note: u8 = match input.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match note {
        9 | 10 => println!("Sua nota é: '{}' = 'A'", note),
        7 | 8 => println!("Sua nota é: '{}' = 'B'", note),
        5 | 6 => println!("Sua nota é: '{}' = 'C'", note),
        3 | 4 => println!("Sua nota é: '{}' = 'D'", note),
        1 | 2 => println!("Sua nota é: '{}' = 'E'", note),
        0 => println!("Sua nota é: '{}' = 'F'", note),
        _ => println!("O dado fornecido não é válido!"),
    };
}
```
</details>

03 - Insira uma idade e classifique-a como:

|   Idade  | Classificação  |
|----------|----------------|
|  0 - 12  | Criança        |
| 13 - 17  | Adolescente    |
| 18 - 59  | Adulto         |
|   +60    | Idoso          |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira sua idade:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro na inserção de dados!");

    let age: u8 = match input.trim().parse() {
        Ok(valid) => valid,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match age {
        0..=12 => println!("Criança!"),
        13..=17 => println!("Adolescente!"),
        18..=59 => println!("Adulto!"),
        60..=120 => println!("Idoso!"),
        _ => println!("Morto!"),
    };
}
```
</details>

04 - Receba nome de usuário e senha. Use o pareamento de tuplas (tuple matching) para validar:

| Entrada           | Resultado           |
|-------------------|---------------------|
| ("admin", "1234") | Admin logado        |
| ("user", "pass")  | User logado         |
|        _          | Invalid credentials |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira usuário:");
    let mut login = String::new();
    io::stdin()
        .read_line(&mut login)
        .expect("Erro na inserção de dados!");

    println!("Insira senha:");
    let mut password = String::new();
    io::stdin()
        .read_line(&mut password)
        .expect("Erro na inserção de dados!");

    let data: (&str, &str) = (login.trim(), password.trim());

    match data {
        ("admin", "1234") => println!("\nAdmin logado!"),
        ("user", "pass") => println!("\nUsuário logado!"),
        _ => println!("\nCredenciais inválidas!"),
    };
}
```
</details>

05 - Receba uma temperatura em Celsius e a classifique:

| Faixa      | Classificação |
|------------|---------------|
| Abaixo - 0 | Congelante    |
| 0 - 15     | Frio          |
| 16 - 25    | Agradável     |
| 26 - 35    | Quente        |
| Acima - 35 | Muito Quente  |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira a temperatura:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro na inserção de dados!");

    let temperature: f32 = match input.trim().parse() {
        Ok(valid) => valid,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match temperature {
        f32::MIN..=-1.0 => println!("Congelante"),
        0.0..=15.0 => println!("Frio"),
        16.0..=25.0 => println!("Agradável"),
        26.0..=35.0 => println!("Quente"),
        _ => println!("Muito Quente"),
    };
}
```
</details>

06 - Receba um número de 1 a 7 e imprima o dia da semana correspondente.

|Número | Dia da Semana  |
|-------|----------------|
|1      | Domingo        |
|2      | Segunda-feira  |
|3      | Terça-feira    |
|4      | Quarta-feira   |
|5      | Quinta-feira   |
|6      | Sexta-feira    |
|7      | Sábado         |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira o número");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro na inserção de dados!");

    let number: u8 = match input.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match number {
        1 => println!("Domingo"),
        2 => println!("Segunda-feira"),
        3 => println!("Terça-feira"),
        4 => println!("Quarta-feira"),
        5 => println!("Quinta-feira"),
        6 => println!("Sexta-feira"),
        7 => println!("Sábado"),
        _ => println!("Insira um valor válido!"),
    }
}
```
</details>

07 - Receba o número do mês (1-12) e retorne:

 - Nome do mês
- Quantos dias ele tem (considere Fevereiro com 28)

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira o número");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro na inserção de dados!");

    let number: u8 = match input.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match number {
        1 => println!("Janeiro - 31 Dias"),
        2 => println!("Fevereiro - 28 Dias"),
        3 => println!("Março - 31 Dias"),
        4 => println!("Abril - 30 Dias"),
        5 => println!("Maio - 31 Dias"),
        6 => println!("Junho - 30 Dias"),
        7 => println!("Julho - 31 Dias"),
        8 => println!("Agosto - 31 Dias"),
        9 => println!("Setembro - 30 Dias"),
        10 => println!("Outubro - 31 Dias"),
        11 => println!("Novembro - 30 Dias"),
        12 => println!("Dezembro - 31 Dias"),
        _ => println!("Insira um valor válido!"),
    }
}
```
</details>

08 - Receba um caractere e classifique-o usando match:

| Tipo           | Faixa            |
|----------------|------------------|
|0 - 9           | Dígito           |
|a - z           | Letra            |
|A - Z           | Letra            |
|'&nbsp;&nbsp;'  | Espaço           |
| _              | Símbolo Especial |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um caractere:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro na inserção de dados!");

    let ch: char = input.chars().next().unwrap();

    match ch {
        '0'..='9' => println!("Número: 0-9!"),
        'a'..='z' | 'A'..='Z' => println!("Letra: aA - zZ!"),
        ' ' => println!("Espaço!"),
        _ => println!("Símbolo especial!"),
    }
}
```
</details>

09 - Receba coordenadas (x, y) e indique em qual quadrante elas estão:

| Coordenada           | Quadrante    |
|----------------------|--------------|
| (0, 0)               | Origem       |
| (positivo, positivo) | Quadrante I  |
| (negativo, positivo) | Quadrante II |
| (negativo, negativo) | Quadrante III|
| (positivo, negativo) | Quadrante IV |

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira a coordenada (x):");

    let mut input_x = String::new();
    io::stdin()
        .read_line(&mut input_x)
        .expect("Erro na inserção de dados!");

    let x: i16 = match input_x.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    println!("Insira a coordenada (y):");

    let mut input_y = String::new();
    io::stdin()
        .read_line(&mut input_y)
        .expect("Erro na inserção de dados!");

    let y: i16 = match input_y.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match (x, y) {
        (0, 0) => println!("Origem"),
        (x, y) if x > 0 && y > 0 => println!("Quadrante I"),
        (x, y) if x < 0 && y > 0 => println!("Quadrante II"),
        (x, y) if x < 0 && y < 0 => println!("Quadrante III"),
        (x, y) if x > 0 && y < 0 => println!("Quadrante IV"),
        _ => println!("Sobre o eixo!"),
    };
}
```
</details>

10 - Receba a quantidade de itens comprados e o tipo de cliente ('N' = Normal, 'V' = VIP):

- Use match com tuplas (tipo, quantidade)
- VIP: 20% de desconto sempre
- Normal: 10% se comprar 10+ itens, 5% se 5-9 itens, sem desconto se menos

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::{io, u8};

fn main() {
    println!("Insira o tipo:");

    let mut input_type: String = String::new();
    io::stdin()
        .read_line(&mut input_type)
        .expect("Erro na inserção de dados!");

    let ty: char = input_type.chars().next().unwrap();

    println!("Insira a quantidade:");

    let mut input_quantity: String = String::new();
    io::stdin()
        .read_line(&mut input_quantity)
        .expect("Erro na inserção de dados!");

    let quantity: u8 = match input_quantity.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match (ty, quantity) {
        ('V' | 'v', u8::MIN..=u8::MAX) => println!("20% de desconto sempre!"),
        ('N' | 'n', 10..=u8::MAX) => println!("10% de desconto!"),
        ('N' | 'n', 5..=9) => println!("5% de desconto!"),
        _ => println!("Sem desconto!"),
    };
}
```
</details>

11 - Crie uma calculadora que recebe dois números e um operador (+, -, *, /) e retorna o resultado usando match para o operador.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    // a
    println!("Insira o número (A):");

    let mut input_a: String = String::new();
    io::stdin()
        .read_line(&mut input_a)
        .expect("Erro na inserção de dados!");

    let a: f32 = match input_a.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    // b
    println!("Insira o número (B):");

    let mut input_b: String = String::new();
    io::stdin()
        .read_line(&mut input_b)
        .expect("Erro na inserção de dados!");

    let b: f32 = match input_b.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    //
    println!("Insira o operador: +, -, *, /");

    let mut input_operator: String = String::new();
    io::stdin()
        .read_line(&mut input_operator)
        .expect("Erro na inserção de dados!");

    let operator: char = input_operator.trim().chars().next().unwrap();

    let _result = match operator {
        '+' => println!("\n{} + {} = {}", a, b, a + b),
        '-' => println!("\n{} - {} = {}", a, b, a - b),
        '*' => println!("\n{} * {} = {}", a, b, a * b),
        '/' => println!("\n{} / {} = {}", a, b, a / b),
        _ => println!("\nErro de cálculo!"),
    };
}
```
</details>

12 - Receba as escolhas de dois jogadores (1 = Pedra, 2 = Papel, 3 = Tesoura) e determine o vencedor usando pareamento de tuplas (tuple matching): match(jogador1, jogador2) { ... }

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("-- Start Game --");
    println!("");
    println!("Selecione:");
    println!("[1] Pedra");
    println!("[2] Papel");
    println!("[3] Tesoura");
    println!("");

    println!("Jogador 1:");
    let mut input_player1: String = String::new();
    io::stdin()
        .read_line(&mut input_player1)
        .expect("Erro na inserção de dados!");

    let player1: u8 = match input_player1.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    println!("\nJogador 2:");
    let mut input_player2: String = String::new();
    io::stdin()
        .read_line(&mut input_player2)
        .expect("Erro na inserção de dados!");

    let player2: u8 = match input_player2.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    let _result = match (player1, player2) {
        (1, 1) => println!("Jogo empatado!"),
        (1, 2) => println!("Jogador 2 - Vence!"),
        (1, 3) => println!("Jogador 1 - Vence!"),
        (2, 1) => println!("Jogador 1 - Vence!"),
        (2, 2) => println!("Jogo empatado!"),
        (2, 3) => println!("Jogador 2 - Vence!"),
        (3, 1) => println!("Jogador 2 - Vence!"),
        (3, 2) => println!("Jogador 1 - Vence!"),
        (3, 3) => println!("Jogo empatado!"),
        _ => println!("Erro ao processar jogo!"),
    };
}
```
</details>
