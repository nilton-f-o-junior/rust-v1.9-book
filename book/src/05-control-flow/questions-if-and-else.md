# Questions - If and Else

> A repetição de código nas respostas é intencional. Quando chegarmos ao capítulo sobre "Funções e Módulos", retornaremos a essas perguntas para refatorá-las.

01 - Escreva um programa que solicite ao usuário um número inteiro e determine se ele é par ou ímpar.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=742275e9c04a8c6e7e928f9a0ac1b8dd)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro no valor digitado!");

    let num: i32 = match input.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter dados!");
            return;
        }
    };

    if num % 2 == 0 {
        println!("Num = {}\nPar!", num);
    } else {
        println!("Num = {}\nÍmpar!", num);
    }
}
```
</details>

02 - Crie um programa que leia um número e imprima se ele é positivo, negativo ou zero.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fb05af80427459253ff20c4a89274261)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número: ");

    let mut input_num: String = String::new();
    io::stdin()
        .read_line(&mut input_num)
        .expect("Erro no valor digitado!");

    let num: i8 = input_num.trim().parse().expect("Erro ao converter dados!");

    if num > 0 {
        println!("Num = {}!\nPositivo", num);
    } else if num < 0 {
        println!("Num = {}!\nNegativo", num);
    } else {
        println!("Num = {}!\nZero", num);
    }
}
```
</details>

03 - Desenvolva um programa que receba dois números e mostre qual deles é o maior.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=cf5f06a8c735970f7dc9f43dc426ac4e)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número (a):");
    let mut input_num_a: String = String::new();
    io::stdin()
        .read_line(&mut input_num_a)
        .expect("Erro no valor digitado!");

    println!("Digite um número (b):");
    let mut input_num_b: String = String::new();
    io::stdin()
        .read_line(&mut input_num_b)
        .expect("Erro no valor digitado!");
    
    let num_a: i8 = match input_num_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter dados (A)!");
            return;
        }
    };

    let num_b: i8 = match input_num_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter dados (B)!");
            return;
        }
    };

    if num_a > num_b {
        println!("Num A > Num B");
    } else if num_a < num_b {
        println!("Num A < Num B");
    } else {
        println!("Num A == Num B");
    }
}
```
</details>

04 - Crie um programa que receba 3 notas de um aluno (de 0 a 10) e, em seguida, calcule a média das notas e informe:

|              |                |
|--------------|----------------|
| >= 7         | aprovado       |
| < 5          | reprovado      |
| >= 5 and < 7 | em recuperação |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=148985dff3c722784ea8c63ae30cf2b8)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite sua nota para o primeiro teste:");
    let mut input_test_a: String = String::new();
    io::stdin()
        .read_line(&mut input_test_a)
        .expect("Erro ao digitar a primeira nota!");

    println!("Digite a nota para o segundo teste:");
    let mut input_test_b: String = String::new();
    io::stdin()
        .read_line(&mut input_test_b)
        .expect("Erro ao digitar a segunda nota!");

    println!("Digite a nota para o terceiro teste:");
    let mut input_test_c: String = String::new();
    io::stdin()
        .read_line(&mut input_test_c)
        .expect("Erro ao digitar o terceiro teste!");

    let test_a: f32 = match input_test_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter: Teste A!");
            return; // Adicionado 'return' para interromper o programa em caso de erro de conversão. O código original continha um comentário ''.
        }
    };

    let test_b: f32 = match input_test_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter: Teste B!");
            return;
        }
    };

    let test_c: f32 = match input_test_c.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter: Teste C!");
            return;
        }
    };

    let ava: f32 = (test_a + test_b + test_c) / 3.;

    if ava < 5. {
        println!("Você foi reprovado!");
    } else if ava >= 5. && ava < 7. {
        println!("Você está em recuperação!");
    } else {
        println!("Você foi aprovado!");
    }
}
```
</details>

05 - Escreva um programa que leia a idade de uma pessoa e determine se ela pode votar (16 anos ou mais).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a80b88a89c5b5b69bdbc6de475a89982)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite sua idade:");

    let mut input_age: String = String::new();
    io::stdin()
        .read_line(&mut input_age)
        .expect("Erro na entrada!");

    let age: u8 = match input_age.trim().parse() {
        Ok(age) => age,
        Err(_) => {
            println!("Erro ao converter idade!");
            return;
        }
    };

    if age >= 16 && age <= 59 {
        println!("Você é obrigado a votar!");
    } else if age >= 60 && age <= 100 {
        println!("Seu voto é opcional!");
    } else {
        println!("Você não pode votar!");
    }
}
```
</details>

06 - Desenvolva um programa que solicite três números e determine qual deles é o maior.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c409c528df58bf2aa718c03515185663)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    // a
    println!("Digite um número! A: ");
    let mut input_a: String = String::new();
    io::stdin()
        .read_line(&mut input_a)
        .expect("Erro na entrada!");

    // b
    println!("Digite um número! B: ");
    let mut input_b: String = String::new();
    io::stdin()
        .read_line(&mut input_b)
        .expect("Erro na entrada!");

    // c
    println!("Digite um número! C: ");
    let mut input_c: String = String::new();
    io::stdin()
        .read_line(&mut input_c)
        .expect("Erro na entrada!");

    //
    let num_a: i8 = match input_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número A!");
            return;
        }
    };

    let num_b: i8 = match input_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número B!");
            return;
        }
    };

    let num_c: i8 = match input_c.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número C!");
            return;
        }
    };

    //
    if num_a == num_b && num_b == num_c {
        println!("A = B = C = {}", num_a);
    } else if num_a == num_b && num_a > num_c {
        println!("A = B = {} > C = {}", num_a, num_c);
    } else if num_a == num_b && num_a < num_c {
        println!("C = {} > A = B = {}", num_c, num_a);
    } else if num_a == num_c && num_a > num_b {
        println!("A = C = {} > B = {}", num_a, num_b);
    } else if num_a == num_c && num_a < num_b {
        println!("B = {} > A = C = {}", num_b, num_a);
    } else if num_b == num_c && num_b > num_a {
        println!("B = C = {} > A = {}", num_b, num_a);
    } else if num_b == num_c && num_b < num_a {
        println!("A = {} > B = C = {}", num_a, num_b);
    } else if num_a > num_b && num_a > num_c {
        println!("A = {}", num_a);
    } else if num_b > num_a && num_b > num_c {
        println!("B = {}", num_b);
    } else {
        println!("C = {}", num_c);
    }
}    
```
</details>

07 - Crie um programa que converta uma pontuação numérica (0 a 100) em uma nota literal, seguindo estas regras:

|   |          |
|---|----------|
| A | 90 - 100 |
| B | 80 - 89  |
| C | 70 - 79  |
| D | 60 - 69  |
| F | 0 - 59   |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e63c1ea4601fc215e17d1d2b2cf85f20)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número (0 - 100):");
    let mut input_num: String = String::new();
    io::stdin()
        .read_line(&mut input_num)
        .expect("Erro na entrada!");

    let num: u8 = match input_num.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número:");
            return;
        }
    };

    if num > 0 && num <= 59 {
        println!("F");
    } else if num >= 60 && num <= 69 {
        println!("D");
    } else if num >= 70 && num <= 79 {
        println!("C");
    } else if num >= 80 && num <= 89 {
        println!("B");
    } else if num >= 90 && num <= 100 {
        println!("A");
    } else {
        println!("Erro!");
    }
}
```
</details>

08 - Escreva um programa que receba os comprimentos dos três lados de um triângulo e determine se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=995d58dc32cb7147adf8b3b2b1a87174)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    // a
    println!("Digite o tamanho do lado A:");
    let mut input_a: String = String::new();
    io::stdin()
        .read_line(&mut input_a)
        .expect("Erro na entrada!");

    // b
    println!("Digite o tamanho do lado B:");
    let mut input_b: String = String::new();
    io::stdin()
        .read_line(&mut input_b)
        .expect("Erro na entrada!");

    // c
    println!("Digite o tamanho do lado C:");
    let mut input_c: String = String::new();
    io::stdin()
        .read_line(&mut input_c)
        .expect("Erro na entrada!");

    let a: f32 = match input_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número A:");
            return;
        }
    };

    let b: f32 = match input_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número B:");
            return;
        }
    };

    let c: f32 = match input_c.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número C:");
            return;
        }
    };

    if a == b && b == c {
        println!("Equilátero");
    } else if a == b || b == c || a == c {
        println!("Isósceles");
    } else {
        println!("Escaleno");
    }
}
```
</details>

09 - Crie um programa que receba um número de 1 a 7 e imprima o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.), indicando também se é "Dia útil" ou "Fim de semana".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ad122c1106d0d2ce04979c095bf6e158)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número de 1 a 7:");
    let mut input_day: String = String::new();
    io::stdin()
        .read_line(&mut input_day)
        .expect("Erro na entrada!");

    let day: u8 = match input_day.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter dia!");
            return;
        }
    };

    if day == 1 || day == 7 {
        if day == 1 {
            println!("Domingo - Fim de semana!");
        } else {
            println!("Sábado - Fim de semana!");
        }
    } else if day == 2 {
        println!("Segunda-feira - Dia útil!");
    } else if day == 3 {
        println!("Terça-feira - Dia útil!");
    } else if day == 4 {
        println!("Quarta-feira - Dia útil!");
    } else if day == 5 {
        println!("Quinta-feira - Dia útil!");
    } else if day == 6 {
        println!("Sexta-feira - Dia útil!");
    } else {
        println!("Erro!");
    }
}
```
</details>

10 - Escreva um programa que leia a idade de uma pessoa e a classifique nas seguintes categorias:

|             |               |
|-------------|---------------|
| Criança     | 0 - 12 anos   |
| Adolescente | 13 - 17 anos  |
| Adulto      | 18 - 59 anos  |
| Idoso       | + 60 anos     |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fca9f43bb0eff0f8f98445fcb2bb80a9)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite sua idade:");
    let mut input_age: String = String::new();
    io::stdin()
        .read_line(&mut input_age)
        .expect("Erro na entrada!");

    let age: u8 = match input_age.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter idade!");
            return;
        }
    };

    if age >= 1 && age <= 12 {
        println!("Criança!");
    } else if age >= 13 && age <= 17 {
        println!("Adolescente!");
    } else if age >= 18 && age <= 59 {
        println!("Adulto");
    } else if age >= 60 && age <= 112 {
        println!("Idoso!");
    } else {
        println!("Erro: Idade > 112!");
    }
}
```
</details>

11 - Crie um programa que funcione como uma calculadora. Ele deve receber dois números e um operador (+, -, *, /). O programa deve realizar a operação correspondente e mostrar o resultado. Além disso, trate a divisão por zero.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ebffc6e0b413595fc2b869feca254324)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite o primeiro número:");
    let mut input_first_number: String = String::new();
    io::stdin()
        .read_line(&mut input_first_number)
        .expect("Erro ao receber o primeiro número!");

    println!("Digite o segundo número:");
    let mut input_second_number: String = String::new();
    io::stdin()
        .read_line(&mut input_second_number)
        .expect("Erro ao receber o primeiro número!");

    println!("Insira o operador matemático:");
    let mut input_operator: String = String::new();
    io::stdin()
        .read_line(&mut input_operator)
        .expect("Erro ao receber o operador matemático!");

    let first_number: f32 = match input_first_number.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número!");
            return;
        }
    };

    let second_number: f32 = match input_second_number.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número!");
            return;
        }
    };

    let operator: char = match input_operator.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número!");
            return;
        }
    };

    if operator == '+' {
        println!(
            "{} {} {} = {}",
            first_number,
            operator,
            second_number,
            first_number + second_number
        );
    } else if operator == '-' {
        println!(
            "{} {} {} = {}",
            first_number,
            operator,
            second_number,
            first_number - second_number
        );
    } else if operator == '*' {
        println!(
            "{} {} {} = {}",
            first_number,
            operator,
            second_number,
            first_number * second_number
        );
    } else if operator == '/' {
        if second_number == 0. {
            println!("[Erro] Segundo número igual a 0.");
        } else {
            println!(
                "{} {} {} = {}",
                first_number,
                operator,
                second_number,
                first_number / second_number
            );
        }
    } else {
        println!("[Erro] Operador matemático não permitido!");
    }
}
```
</details>

12 - Desenvolva um programa que calcule um desconto com base no valor da compra:

- Compras abaixo de R$ 100: sem desconto;
- Compras de R$ 100 a R$ 500: 10% de desconto;
- Compras acima de R$ 500: 20% de desconto.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8deff62212992da84e2fb0e47148982c)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite o valor:");
    let mut input_value: String = String::new();
    io::stdin()
        .read_line(&mut input_value)
        .expect("Erro ao receber valor!");

    let value: f32 = match input_value.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter valor!");
            return;
        }
    };

    if value < 100. {
        println!("Valor: {} - Sem desconto!", value);
    } else if value >= 100. && value <= 500. {
        let discount = value - ((value * 10.) / 100.);
        println!("Valor: {} - Desconto 10%\nNovo valor: {}", value, discount);
    } else if value > 500. {
        let discount = value - ((value * 20.) / 100.);
        println!("Valor: {} - Desconto 20%\nNovo valor: {}", value, discount);
    } else {
        println!("Erro!");
    }
}
```
</details>

13 - Escreva um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa (peso / altura²) e classifique o resultado:

|                |               |
|----------------|---------------|
| Abaixo de 18.5 | Abaixo do peso|
| 18.5 - 24.9    | Peso normal   |
| 25.0 - 29.9    | Sobrepeso     |
| + 30.0         | Obesidade     |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=03e5f62966813198574f7758f5d0f1ac)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    const ERROR_INPUT: &str = "Erro na entrada de dados!";
    const ERROR_CONVERTING: &str = "Erro ao converter valor!";

    println!("Digite o Peso:");
    let mut input_weight: String = String::new();
    io::stdin().read_line(&mut input_weight).expect(ERROR_INPUT);

    let weight: f32 = match input_weight.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("{}", ERROR_CONVERTING);
            return;
        }
    };

    println!("Digite a Altura:");
    let mut input_height: String = String::new();
    io::stdin().read_line(&mut input_height).expect(ERROR_INPUT);

    let height: f32 = match input_height.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("{}", ERROR_CONVERTING);
            return;
        }
    };

    let bmi: f32 = weight / (height * height);

    if bmi <= 18.5 {
        println!("Abaixo do peso!");
    } else if bmi <= 24.9 {
        println!("Peso normal!");
    } else if bmi <= 29.9 {
        println!("Sobrepeso!");
    } else if bmi >= 30.0 {
        println!("Obesidade!");
    } else {
        println!("Erro ao calcular IMC ou faixa inválida!");
    }
}
```
</details>

14 - Crie um programa que solicite um nome de usuário e uma senha. Se o nome de usuário for "admin" e a senha for "1234", exiba "Acesso concedido". Caso contrário, exiba "Acesso negado".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6d082576f1e5a2df6b15028f0c9d984e)

<details>
<summary>Resposta</summary>

```rust
use std::io;

const ERROR_INPUT: &str = "Erro na entrada de dados!";

fn main() {
    println!("Nome de usuário:");
    let mut input_username: String = String::new();
    io::stdin()
        .read_line(&mut input_username)
        .expect(ERROR_INPUT);
    let username: &str = input_username.trim();

    println!("Senha:");
    let mut input_password: String = String::new();
    io::stdin()
        .read_line(&mut input_password)
        .expect(ERROR_INPUT);
    let password: &str = input_password.trim();

    if username == "admin" && password == "1234" {
        println!("Acesso Concedido!");
    } else {
        println!("Acesso Negado!");
    }
}
```
</details>

15 - Crie o jogo "Pedra, Papel, Tesoura." Peça as escolhas de dois jogadores e determine o vencedor com base nas regras clássicas.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=29168d4cc32db4c03e59b06893ed90af)

<details>
<summary>Resposta</summary>

```rust
use std::io;
use std::time::{SystemTime, UNIX_EPOCH};

fn main() {
    //
    println!("--- Início ---");
    println!("Jogador 1");
    println!("Computador");
    println!("");

    println!("-- Selecionar --");
    println!("  Jogador 1  ");
    println!("");
    println!("[1] Pedra");
    println!("[2] Papel");
    println!("[3] Tesoura");
    println!("");
    println!("1 | 2 | 3");

    //
    let mut input_player1: String = String::new();
    io::stdin()
        .read_line(&mut input_player1)
        .expect("Erro na entrada de dados!");
    let mut player1: &str = input_player1.trim();

    //
    if player1 == "1" {
        player1 = "Pedra";
    } else if player1 == "2" {
        player1 = "Papel";
    } else {
        player1 = "Tesoura";
    }

    //
    println!("");
    println!("-- Selecionar --");
    println!("  Jogador 2  ");
    println!("");
    println!("-- Sorteando --");
    println!("[1] Pedra");
    println!("[2] Papel");
    println!("[3] Tesoura");
    println!("");

    //
    let nanos = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Erro")
        .as_nanos();

    let nano_computer = (nanos % 3 + 1) as u8;
    let computer: &str;

    if nano_computer == 1 {
        computer = "Pedra";
    } else if nano_computer == 2 {
        computer = "Papel";
    } else {
        computer = "Tesoura";
    }

    //
    if player1 == computer {
        println!("Jogador 1: {} e Computador: {}", player1, computer);
        println!("O jogo é um empate!");
    } else if player1 == "Pedra" {
        if computer == "Papel" {
            println!("Jogador 1: {} e Computador: {}", player1, computer);
            println!("Jogador 1: Você Perdeu!");
        }
        if computer == "Tesoura" {
            println!("Jogador 1: {} e Computador: {}", player1, computer);
            println!("Jogador 1: Você Venceu!");
        }
    } else if player1 == "Papel" {
        if computer == "Pedra" {
            println!("Jogador 1: {} e Computador: {}", player1, computer);
            println!("Jogador 1: Você Venceu!");
        }
        if computer == "Tesoura" {
            println!("Jogador 1: {} e Computador: {}", player1, computer);
            println!("Jogador 1: Você Perdeu!");
        }
    } else { // player1 == "Tesoura"
        if computer == "Pedra" {
            println!("Jogador 1: {} e Computador: {}", player1, computer);
            println!("Jogador 1: Você Perdeu!");
        }
        if computer == "Papel" {
            println!("Jogador 1: {} e Computador: {}", player1, computer);
            println!("Jogador 1: Você Venceu!");
        }
    }
}
```
</details>
