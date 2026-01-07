# Questões - Match

---

01 - Escreva um programa que recebe um caractere e indica se é uma vogal (a, e, i, o, u) ou uma consoante. Use match para validar.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um caractere (a-z):");

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na leitura da entrada!");

    let caractere = entrada.trim();

    match caractere {
        "a" | "e" | "i" | "o" | "u" => println!("O caractere '{}' é uma vogal!", caractere),
        "" => println!("Nenhum caractere foi inserido!"),
        _ => println!("O caractere '{}' é uma consoante!", caractere),
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
    println!("Insira sua nota (0 a 10):");

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na leitura da entrada!");

    let nota: u8 = match entrada.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro: O dado inserido não é um número válido!");
            return;
        }
    };

    match nota {
        9 | 10 => println!("Sua nota é: '{}' = 'A'", nota),
        7 | 8 => println!("Sua nota é: '{}' = 'B'", nota),
        5 | 6 => println!("Sua nota é: '{}' = 'C'", nota),
        3 | 4 => println!("Sua nota é: '{}' = 'D'", nota),
        1 | 2 => println!("Sua nota é: '{}' = 'E'", nota),
        0 => println!("Sua nota é: '{}' = 'F'", nota),
        _ => println!("A nota '{}' fornecida não é válida (fora do intervalo 0-10)!", nota),
    };
}
```
</details>

03 - Insira uma idade e classifique-a como:

| Idade    | Classificação  |
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

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na leitura da entrada!");

    let idade: u8 = match entrada.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro: O dado inserido não é um número válido!");
            return;
        }
    };

    match idade {
        0..=12 => println!("Criança!"),
        13..=17 => println!("Adolescente!"),
        18..=59 => println!("Adulto!"),
        60..=120 => println!("Idoso!"),
        _ => println!("Idade fora do limite de análise!"),
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

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na inserção de dados!");

    let temperatura: f32 = match entrada.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match temperatura {
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

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na inserção de dados!");

    let numero: u8 = match entrada.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match numero {
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

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na inserção de dados!");

    let numero:u8 = match entrada.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match numero {
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

    let mut entrada_x = String::new();
    io::stdin()
        .read_line(&mut entrada_x)
        .expect("Erro na inserção de dados!");

    let coordenada_x: i16 = match entrada_x.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    println!("Insira a coordenada (y):");

    let mut entrada_y = String::new();
    io::stdin()
        .read_line(&mut entrada_y)
        .expect("Erro na inserção de dados!");

    let coordenada_y: i16 = match entrada_y.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match (coordenada_x, coordenada_y) {
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
    println!("Insira o tipo (V ou N):");

    let mut entrada_tipo: String = String::new();
    io::stdin()
        .read_line(&mut entrada_tipo)
        .expect("Erro na inserção de dados!");

    let tipo: char = entrada_tipo.chars().next().unwrap();

    println!("Insira a quantidade:");

    let mut entrada_quantidade: String = String::new();
    io::stdin()
        .read_line(&mut entrada_quantidade)
        .expect("Erro na inserção de dados!");

    let quantidade: u8 = match entrada_quantidade.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    match (tipo, quantidade) {
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
    println!("Insira o número (A):");

    let mut entrada_a: String = String::new();
    io::stdin()
        .read_line(&mut entrada_a)
        .expect("Erro na inserção de dados!");

    let numero_a: f32 = match entrada_a.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    println!("Insira o número (B):");

    let mut entrada_b: String = String::new();
    io::stdin()
        .read_line(&mut entrada_b)
        .expect("Erro na inserção de dados!");

    let numero_b: f32 = match entrada_b.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    println!("Insira o operador: +, -, *, /");

    let mut entrada_operador: String = String::new();
    io::stdin()
        .read_line(&mut entrada_operador)
        .expect("Erro na inserção de dados!");

    let operador: char = entrada_operador.trim().chars().next().unwrap();

    let _resultado = match operador {
        '+' => println!("\n{} + {} = {}", numero_a, numero_b, numero_a + numero_b),
        '-' => println!("\n{} - {} = {}", numero_a, numero_b, numero_a - numero_b),
        '*' => println!("\n{} * {} = {}", numero_a, numero_b, numero_a * numero_b),
        '/' => println!("\n{} / {} = {}", numero_a, numero_b, numero_a / numero_b),
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
    println!("-- Início do Jogo --");
    println!("");
    println!("Selecione:");
    println!("[1] Pedra");
    println!("[2] Papel");
    println!("[3] Tesoura");
    println!("");

    println!("Jogador 1:");
    let mut entrada_jogador1: String = String::new();
    io::stdin()
        .read_line(&mut entrada_jogador1)
        .expect("Erro na inserção de dados!");

    let escolha_jogador1: u8 = match entrada_jogador1.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    println!("\nJogador 2:");
    let mut entrada_jogador2: String = String::new();
    io::stdin()
        .read_line(&mut entrada_jogador2)
        .expect("Erro na inserção de dados!");

    let escolha_jogador2: u8 = match entrada_jogador2.trim().parse() {
        Ok(valor) => valor,
        Err(_) => {
            println!("Erro na conversão de dados!");
            return;
        }
    };

    let _resultado = match (escolha_jogador1, escolha_jogador2) {
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
