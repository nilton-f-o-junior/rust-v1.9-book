# Questions - While

01 - Escreva um programa em Rust que use um loop while para imprimir os números de 1 a 5, um por linha.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count: u8 = 0;

    while count <= 5 {
        println!("Count = {}", count);
        count += 1;
    }
}
```
</details>

02 - Usando um loop while, crie um programa que imprima uma contagem regressiva de 10 a 1 e, em seguida, a mensagem "Launch!" (Lançar!).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count: u8 = 10;

    while count >= 1 {
        println!("{}", count);
        count -= 1;

        if count < 1 {
            println!("Lauch!");
        }
    }
}
```
</details>

03 - Escreva um programa que calcule a soma de todos os números inteiros de 1 a 100, usando um loop while. Imprima o resultado final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut sum: u16 = 0;
    let mut count: u8 = 1;

    while count <= 100 {
        sum += count as u16;
        count += 1;
    }
    println!("Sum = {}", sum);
}
```
</details>

04 - Crie um loop while que seja intencionalmente infinito, mas use a palavra-chave break para sair do loop quando um contador atingir o valor 7. Imprima o valor do contador em cada iteração antes de verificar a condição de saída.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count: u8 = 0;

    while count >= 0 {
        count += 1;
        println!("Count = {}", count);

        if count >= 7 {
            break;
        }
    }
}
```
</details>

05 - Verifique se um determinado número (por exemplo, num = 32) é uma potência de 2 usando um loop while. Imprima true (verdadeiro) ou false (falso).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    let mut number: u16 = input_number.trim().parse().expect("Converting error data!");

    if number <= 0 {
        println!("{}", false);
    } else if number == 1 {
        println!("{}", true);
    } else {
        while number % 2 == 0 {
            number /= 2;
        }

        if number == 1 {
            println!("{}", true);
        } else {
            println!("{}", false);
        }
    }
}
```
</details>

06 - Escreva um programa com um loop while que itere de 0 a 10. Se o número atual for ímpar, use continue para pular a impressão desse número. Imprima apenas os números pares.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count: u8 = 0;

    while count <= 10 {
        if count % 2 != 0 {
            count += 1;
            continue;
        }

        println!("Number even: {}", count);
        count += 1;
    }
}
```
</details>

07 - Escreva um programa que peça ao usuário para inserir um número maior que 10. Use um loop while para continuar pedindo a entrada até que um número válido seja fornecido.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut cond: u8 = 0;

    while cond <= 10 {
        println!("Enter number:");
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");
        let number: u8 = input_number.trim().parse().expect("Erro converting data!");
        println!("");

        cond = number;

        if cond <= 10 {
            println!("Number < 10");
            println!("Try again!\n");
        } else {
            println!("Number > 10!");
        }
    }
}
```
</details>

08 - Calcule o fatorial de um número (por exemplo, 5!) usando um loop while. Imprima o resultado.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!!");

    let number: u16 = input_number.trim().parse().expect("Error conveting data!");

    if number == 0 {
        println!("Factorial: 0 = 1");
    } else {

        let mut factorial: u16 = 1;
        let mut i: u16 = 1;

        while i <= number {
            factorial *= i;
            i += 1;
        }

        println!("Factorial: {} = {}", number, factorial);
    }
}
```
</details>

09 - Dado um número inteiro (por exemplo, 12345), use um loop while para imprimi-lo ao contrário (ou seja, 54321). Dica: use os operadores % (módulo) e / (divisão).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Code entry error!");

    let mut number: u16 = input_number.trim().parse().expect("Error converting data!");
    let save_number = number;
    let mut reverse_count: u16 = 0;

    if number == 0 {
        reverse_count = number;
    } else {
        while number > 0 {
            let digit = number % 10;
            reverse_count = (reverse_count * 10) + digit;
            number /= 10;
        }
    }

    println!("Original number: {}", save_number);
    println!("Reverse number: {}", reverse_count);
}
```
</details>

10 - Escreva um programa que conte o número de dígitos em um número inteiro positivo usando um loop while. Por exemplo, 12345 tem 5 dígitos.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Code entry error!");

    let mut number: u16 = input_number.trim().parse().expect("Error converting data!");
    let save_number: u16 = number;
    let mut count: u8 = 0;

    if number == 0 {
        count = 1;
    } else {
        while number > 0 {
            number /= 10;
            count += 1;
        }
    }

    println!("Count numbers {} = {}", save_number, count);
}
```
</details>

11 - Imprima os quadrados dos números de 1 a 7 usando um loop while.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count: u16 = 0;

    while count <= 7 {
        let number: u16 = count * count;
        println!("Square: {} = {}", count, number);
        count += 1;
    }
}
```
</details>

12 - Dado um número let mut num = 64;, use um loop while para dividi-lo repetidamente por 2 até que o resultado seja menor ou igual a 1. Imprima cada resultado da divisão.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut number: u8 = 64;

    while number > 1 {
        number /= 2;
        println!("Result = {}", number);
    }
}
```
</details>

13 - Encontre e imprima o primeiro número par maior que 50 usando um loop while.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut number: u8 = 51;

    while number % 2 > 0 {
        number += 1;
    }
    println!("Result = {}", number);
}
```
</details>

14 - Crie um número secreto (por exemplo, secret = 42). Peça ao usuário para adivinhar o número. Use um loop while para continuar o jogo até que o usuário adivinhe corretamente. Dê dicas ("muito alto", "muito baixo"). (Requer std::io para entrada do usuário).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut number: u8 = 0;
    let sort_number: u8 = 42;

    while number != sort_number {
        println!("Enter number:");
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");

        number = input_number
            .trim()
            .parse()
            .expect("Converting error number!");

        if number > sort_number {
            println!("Too High!!!");
        } else {
            println!("Too Low!!!");
        }
    }
    println!("YOU WIN!");
}
```
</details>

15 - Peça um número ao usuário e, usando um loop while, imprima os primeiros 5 múltiplos desse número.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entry number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    let number: u8 = input_number.trim().parse().expect("Error converting data!");
    let mut count: u8 = 0;
    let mut result: u8;

    println!();

    while count < 5 {
        count += 1;
        result = count * number;

        println!("{}", result);
    }
}
```
</details>

16 - Use loops while aninhados para imprimir um quadrado 3x3 de asteriscos.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number of rows: ");
    let mut input_row: String = String::new();
    io::stdin()
        .read_line(&mut input_row)
        .expect("Data entry error!");

    println!("Enter number of columns: ");
    let mut input_column: String = String::new();
    io::stdin()
        .read_line(&mut input_column)
        .expect("Data entry error!");

    let number_row: u8 = input_row.trim().parse().expect("Error converting data!");
    let number_column: u8 = input_column.trim().parse().expect("Error converting data!");
    let symbol: String = String::from("*");

    let mut row_count: u8 = 0;
    while row_count < number_row {
        let mut column_count: u8 = 0;
        while column_count < number_column {
            print!("{}", symbol);
            column_count += 1;
        }
        println!();
        row_count += 1;
    }
}
```
</details>

17 - Escreva um programa em Rust que solicite ao usuário a inserção de um número inteiro positivo. Em seguida, encontre e exiba os primeiros cinco divisores desse número. Se menos de cinco divisores forem encontrados, o programa deve informar que 'This is first 5 multiple numbers were not found!' (Os primeiros 5 números múltiplos não foram encontrados!).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entry number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    let number: u8 = input_number.trim().parse().expect("Error converting data!");
    let mut count: u8 = 0;
    let mut count_division: u8 = 0;

    while count_division < 5 {
        count += 1;

        if count == 0 {
            continue;
        }

        if number % count == 0 {
            count_division += 1;

            println!("{} % {} = 0", number, count);
        }

        if count > number && count_division < 5 {
            println!("This is first 5 multiple numbers were not found!");
            break;
        }
    }
}
```
</details>
