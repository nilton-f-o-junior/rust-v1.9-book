# Questions - for

---

01 - Escreva um programa que imprime os números de 1 a 10 usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    for i in 1..=10 {
        println!("{}", i);
    }
}
```
</details>

02 - Crie um programa que calcula a soma dos números de 1 a 100 usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut sum: u16 = 0;

    for i in 1..=100 {
        sum += i;
        println!("{}", i);
        println!("{}", sum);
        println!();
    }

    println!("{}", sum);
}
```
</details>

03 - Desenvolva um programa que imprime todos os números pares de 0 a 20 usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    for i in 0..=20 {
        if i % 2 == 0 {
            println!("{}", i);
        }
    }
}
```
</details>

04 - Escreva um programa que imprime todos os números em binário até o número solicitado inserido.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin().read_line(&mut input_number).err();
    let number: i16 = input_number.trim().parse().expect("");

    println!("");
    for i in 0..=number {
        println!("Number: {:02} = {:b}", i, i);
    }
}
```
</details>

05 - Desenvolva um programa que gera todas as combinações possíveis de dois dígitos (00 a 99) usando laços for aninhados.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    for i in 0..=100 {
        println!("{:02}", i);
    }
}
```

```rust
fn main() {
    for i in 0..=100 {
        if i < 10 {
            println!("0{}", i)
        } else {
            println!("{}", i);
        }
    }
}
```

</details>

06 - Escreva um programa que imprime a tabuada de um número fornecido pelo usuário (de 1 a 10) usando um laço for.

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

    let number: i16 = input_number.trim().parse().expect("Error converting data!");
    println!();

    for i in 1..=10 {
        let mult: i16 = number * i;
        println!("{} x {} = {}", number, i, mult);
    }
}
```
</details>

07 - Crie um programa que inverte uma string fornecida pelo usuário usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter text:");

    let mut input_string: String = String::new();
    io::stdin()
        .read_line(&mut input_string)
        .expect("Data entry error!");

    let inver_string: String = input_string.trim().to_string();
    let mut rever = String::new();

    for i in inver_string.chars().rev() {
        rever.push(i);
        println!("{}", rever);
    }

    println!("\n{}", rever);
}
```
</details>

08 - Crie um programa que calcula a soma dos dígitos de um inteiro usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin().read_line(&mut input_number).err();

    let mut result_sum: i16 = 0;

    for i in input_number.trim().chars() {
        let convert_number: i16 = i.to_string().parse().expect("Error converting data!");
        result_sum += convert_number;
    }
    
    println!("{}", result_sum);
}
```
</details>

09 - Desenvolva um programa que conta quantas vogais (a, e, i, o, u) estão em uma string usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter text:");

    let mut input_string: String = String::new();
    io::stdin()
        .read_line(&mut input_string)
        .expect("Data entry error!");

    let vowels_string: String = input_string.trim().to_lowercase().to_string();
    let mut qtd_vowels: u8 = 0;

    for i in vowels_string.chars() {
        if i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' {
            qtd_vowels += 1;
        }
    }

    println!("Qtd. = {}", qtd_vowels);
}
```
</details>

10 - Escreva um programa que encontra o maior número em uma lista de números usando um laço for. Lista = [17, 43, 5, 54, 93]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [u8; 5] = [17, 43, 5, 54, 93];
    let mut number_larger: u8 = 0;

    for (_i, j) in arr.iter().enumerate() {
        if *j > number_larger {
            number_larger = *j;
        }
    }

    println!("{}", number_larger);
}
```
</details>

11 - Crie um programa que encontra o menor número em uma lista de números usando um laço for. Lista = [63, 36, 57, 7, 82]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [u8; 5] = [63, 36, 57, 7, 82];
    let mut number_larger: u8 = arr[1];

    for (_i, j) in arr.iter().enumerate() {
        if *j < number_larger {
            number_larger = *j;
        }
    }

    println!("{}", number_larger);
}
```
</details>

12 - Desenvolva um programa que calcula o fatorial de um inteiro positivo fornecido pelo usuário usando um laço for.

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

    let number: u8 = input_number.trim().parse().expect("Error converting data!");
    let mut factorial: u8 = 1;

    for i in 1..=number {
        factorial *= i;
        println!("Facto = {}", factorial);
    }
}
```
</details>

13 - Escreva um programa que imprime os elementos de uma lista em ordem inversa usando um laço for. Lista = [1, 2, 3, 4, 5];

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [u8; 5] = [1, 2, 3, 4, 5];

    for i in arr.iter().rev() {
        println!("{:#?}", i);
    }
}
```
</details>

14 - Crie um programa que verifica se uma palavra é um palíndromo (lê-se da mesma forma de frente para trás e de trás para frente) usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter word:");

    let mut input_word: String = String::new();
    io::stdin()
        .read_line(&mut input_word)
        .expect("Error entry data!");

    let word: String = input_word.trim().to_lowercase().to_string();
    let mut rever_word: String = String::new();

    for i in word.chars().rev() {
        rever_word.push(i);
    }
    
    if word == rever_word {
        println!("Word {} is polindrome!", word)
    } else {
        println!("Word {} not is polindrome!", word);
    }
}
```
</details>

15 - Escreva um programa que conta quantas vezes um caractere específico aparece em uma string usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter word:");

    let mut input_word: String = String::new();
    io::stdin()
        .read_line(&mut input_word)
        .expect("Error entry data!");

    let word: String = input_word.trim().to_lowercase().to_string();

    println!("\nEnter character: ");

    let mut input_character: String = String::new();
    io::stdin()
        .read_line(&mut input_character)
        .expect("Error entry data!");

    let character: char = input_character.trim().parse().expect("Data entry error!");

    let mut count: u8 = 0;

    for i in word.chars() {
        if i == character {
            count += 1;
        }
    }

    if count >= 1 {
        println!("\nThe letter '{}' repeats '{}' times!", character, count);
    } else {
        println!("\nThe letter '{}' does not repeat", character);
    }
}
```
</details>

16 - Crie um programa que calcula o produto de todos os números em uma lista usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [u8; 5] = [1, 2, 3, 4, 5];
    let mut mult: u8 = 1;

    for i in arr.iter() {
        mult *= i;
        println!("Stage {:?} = {:?}", i, mult);
    }
}
```
</details>

17 - Escreva um programa que recebe 5 valores inteiros, inseridos pelo usuário, usando um array e for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut input_array: [i8; 5] = [0; 5];

    for i in 0..input_array.len() {
        //
        println!("\nEnter number:");
        let mut input_number: String = String::new();
        io::stdin().read_line(&mut input_number).err();
        input_array[i] = input_number.trim().parse().expect("Error converting data!");
    }
    
    println!("\n{:?}", input_array);
}
```
</details>

18 - Desenvolva um programa que encontra a média de uma lista de números usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut init_array: [i8; 10] = [0; 10];
    let mut sum: u8 = 0;

    for i in 0..init_array.len() {
    
        println!("Enter number:");
        let mut input_array: String = String::new();
        io::stdin()
            .read_line(&mut input_array)
            .expect("Data entry error!");
        init_array[i] = input_array.trim().parse().expect("Erro converting data!");

        sum += init_array[i] as u8;
    }

    sum /= 10;
    println!("Average = {}", sum);
}
```
</details>

19 - Desenvolva um programa que conta o número de números negativos em uma lista usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter with 5 numbers:");
    let mut input_array: [i8; 5] = [0; 5];
    let mut count: u8 = 0;

    for i in 0..input_array.len() {
        
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");
        input_array[i] = input_number.trim().parse().expect("Error converting data!");

        if input_array[i] < 0 {
            count += 1;
        }
    }

    println!("Count numbers negative = {}", count);
}
```
</details>

20 - Escreva um código que recebe 5 números inseridos pelo usuário e os adiciona a uma tupla vazia, verifica se há números pares e, se sim, os adiciona a outra lista vazia.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter with 5 numbers:");
    let mut input_array: [i8; 5] = [0; 5];
    let mut even_array: [i8; 5] = [0; 5];

    for i in 0..input_array.len() {

        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");
        input_array[i] = input_number.trim().parse().expect("Error converting data!");

        if input_array[i] % 2 == 0 {
            even_array[i] = input_array[i];
        }
    }

    println!("\n{:?}", even_array);
}
```
</details>

21 - Escreva um programa que recebe o nome e a idade de um usuário e os armazena em uma tupla usando for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Enter the number of users you want to add:");
    let mut input_count: String = String::new();
    io::stdin().read_line(&mut input_count).err();
    let count: u8 = input_count.trim().parse().expect("Error converting data!");

    let mut input_array: (String, u8);

    for _i in 0..count {
        println!("\nEnter name:");
        let mut input_name: String = String::new();
        io::stdin().read_line(&mut input_name).err();
        let name = input_name;

        println!("\nEnter age:");
        let mut input_age: String = String::new();
        io::stdin().read_line(&mut input_age).err();
        let age: u8 = input_age.trim().parse().expect("Error converting data!");

        input_array = (name, age);
        println!("\nName:{}Age={}", input_array.0, input_array.1);
    }
}
```
</details>
