# Questions

1. Crie um vetor vazio de inteiros em Rust.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let vector: Vec<u8> = vec![];
    println!("{:?}", vector);

    //
    let vector: Vec<&str> = Vec::new();
    println!("{:?}", vector);

    //
    let vector: Vec<f32> = Vec::with_capacity(4);
    println!("{:?}", vector);
}
```
</details>

2. Crie um vetor contendo os números de 1 a 4.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let vector: Vec<u8> = vec![1, 2, 3, 4];
    println!("{:?}", vector);

    // .collect()
    let vector: Vec<u8> = (1..=4).collect();
    println!("{:?}", vector);

    // .push
    let mut vector: Vec<u8> = vec![];
    vector.push(1);
    vector.push(2);
    vector.push(3);
    vector.push(4);
    println!("{:?}", vector);

    // convert array
    let vector: Vec<u8> = Vec::from([1, 2, 3, 4]);
    println!("{:?}", vector);
}
```

</details>

3. Crie um vetor contendo os números de 1 a 10 e imprima cada elemento usando um loop.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let vector: Vec<u8> = (1..=10).collect();
    let mut i = 0;

    loop {
        println!("{:?}", vector[i]);
        i += 1;

        if i >= vector.len() {
            break;
        }
    }
}
```

```rust
fn main () {
    let vector: Vec<u8> = (1..=10).collect();

    for i in &vector {
        println!("{:?}", i);
    }
}
```

```rust
fn main () {
    let vector: Vec<u8> = (1..=10).collect();

    for i in 0..vector.len() {
        println!("{:?}", vector[i]);
    }
}
```

```rust
fn main () {
    let vector: Vec<u8> = (1..=10).collect();
    let mut i = 0;

    while i < vector.len() {
        println!("{:?}", vector[i]);
        i += 1;
    }
}
```

```rust
fn main() {    
    let input_vector_mult: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut result: f64 = input_vector_mult[0];
    let mut i = 1;

    loop {
        result *= input_vector_mult[i];
        i += 1;

        if i >= input_vector_mult.len() {
            break;
        }
    }
    
    println!("Mult = {:.2}", result);
}
```

</details>

4. Crie um vetor vazio e solicite ao usuário 3 valores inteiros. Adicione esses valores ao vetor e imprima o resultado final.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    let mut input_vector: Vec<i8> = vec![];

    while input_vector.len() < 3 {
        println!("Enter new number {}/3: ", input_vector.len() + 1);
        let mut input = String::new();

        match io::stdin().read_line(&mut input) {
            Err(_) => {
                println!("Data entry error!");
            }
            Ok(_) => match input.trim().parse::<i8>() {
                Ok(number) => {
                    input_vector.push(number);
                    println!("Number {} added!\n", number);
                }
                Err(_) => {
                    println!("'{}' is not a valid number!", input.trim());
                }
            },
        }
    }
    println!("Vector complete: {:?}", input_vector);
}
```
</details>

5. Crie um programa que contenha pelo menos 3 numeros decimais e retorna a soma e multiplicacao dos elementos, usando o sum e product. Exemplo: [3.2, 5.8, 1.2]

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let vector: Vec<f32> = vec![3.2, 5.8, 1.2];
    let sum: f32 = vector.iter().sum();
    println!("{}", sum);
}
```

```rust
fn main () {
    let vector: Vec<f32> = vec![3.2, 5.8, 1.2];
    let product: f32 = vector.iter().product();
    println!("Product = {:.2}", product);
}
```

</details>

6. Crie um programa que contenha pelo menos 3 numeros decimais e retorna a soma, subtracao, multiplicacao e divisao dos elementos, usando um loop. Exemplo: [3.2, 5.8, 1.2]

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    // sum
    let input_vector: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut result: f64 = 0.0;

    for &i in &input_vector {
        result += i;
    }

    println!("Sum = {:?}", result);
}
```

```rust
fn main() {
    // sub
    let input_vector_sub: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut result: f64 = input_vector_sub[0];
    let mut i = 1;

    while i < input_vector_sub.len() {
        result -= input_vector_sub[i];
        i += 1;
    }
    println!("Sub = {:?}", result);
}
```

```rust
fn main() {
    // mult
    let input_vector_mult: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut result: f64 = input_vector_mult[0];
    let mut i = 1;

    loop {
        result *= input_vector_mult[i];
        i += 1;

        if i >= input_vector_mult.len() {
            break;
        }
    }

    println!("Mult = {:.2}", result);
}
```

```rust
fn main() {
    // div
    let input_vector_div: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut result = input_vector_div[0];

    // for &i in input_vector_div.iter().skip(1) {
    for &i in &input_vector_div[1..] {
        result /= i;
    }

    println!("Div = {:.2}", result);
}
```

</details>

7. Crie um vetor com os valores ["a", "b", "c", "d"] e remova os dois últimos elementos. Imprima o vetor resultante.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    // pop
    let mut input_vector: Vec<&str> = vec!["a", "b", "c", "d"];
    input_vector.pop();
    input_vector.pop();
    println!("{:?}", input_vector);
}
```

```rust
fn main() {
    // remove
    let mut input_vector: Vec<&str> = vec!["a", "b", "c", "d"];
    input_vector.remove(3);
    input_vector.remove(2);
    println!("{:?}", input_vector);
}
```

```rust
fn main() {
    // truncate
    let mut input_vector: Vec<&str> = vec!["a", "b", "c", "d"];
    input_vector.truncate(2);
    println!("{:?}", input_vector);    
}
```

```rust
fn main() {
    // drain
    let mut input_vector: Vec<&str> = vec!["a", "b", "c", "d"];
    input_vector.drain(2..);
    println!("{:?}", input_vector);
}
```

</details>

8. Crie um vetor com alguns valores e adicione dois novos elementos ao vetor. Adicione tambem usando um índice específico (por exemplo, (2, 0)).

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    // push
    let mut input_vector: Vec<u8> = vec![10, 20, 30, 40];
    input_vector.push(90);
    println!("{:?}", input_vector);
}
```

```rust
fn main() {
    // insert
    let mut input_vector: Vec<u8> = vec![10, 20, 30, 40];
    input_vector.insert(2, 70);
    println!("{:?}", input_vector);  
}
```

```rust
fn main() {
    // extend
    let mut input_vector: Vec<u8> = vec![10, 20, 30, 40];
    input_vector.extend([50, 60, 70]);
    println!("{:?}", input_vector);    
}
```

```rust
fn main() {
    // append
    let mut vector_a: Vec<u8> = vec![10, 20, 30];
    let mut vector_b: Vec<u8> = vec![40, 50, 60];
    vector_a.append(&mut vector_b);
    println!("{:?}", vector_a);
    println!("{:?}", vector_b);
}
```
</details>

9. Crie um vetor de inteiros, imprima-o e solicite ao usuário um valor e remova a primeira ocorrência desse valor do vetor e imprima o resultado.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    let mut vector: Vec<u8> = vec![2, 4, 6, 8, 10, 12];
    println!("{:?}", vector);

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Data entry error!");

    let num: u8 = input.trim().parse().expect("Error converting data!");

    for i in (0..vector.len()).rev() {
        if vector[i] == num {
            vector.remove(i);
        }
    }

    println!("\n{:?}", vector);
}
```
</details>

> Starting from the beginning: If you remove someone, everyone behind moves forward and you lose track: (0 → 5).

> Starting from the end: You remove from back to front, those in front stay in the same place: (5 → 0).

10. Crie um vetor de strings e solicite ao usuário um valor. Verifique se esse valor está presente no vetor e exiba uma mensagem apropriada.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    let vector: Vec<&str> = vec![
        "Boa Noite Punpun",
        "Alice no País das Maravilhas",
        "Gravity Falls",
        "Frankenstein",
        "Musashi",
    ];

    println!("Enter the book title:");
    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Data entry error!");

    let input = input.trim().to_lowercase();
    let mut book: &str = "Book not found!";

    for i in &vector {
        if i.to_lowercase() == input {
     // if i.to_lowercase().contains(&input) {
            book = "Book found!";
            break;
        }
    }
    println!("\n{}", book)
}
```
</details>

> .contains(&input): the result will be different because the search considers any word.

11. Dado um vetor com pelo menos 4 elementos, imprima os 2 primeiros e os 2 últimos valores.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut vector_input: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    println!("{:?}", vector_input[0]);
    println!("{:?}", vector_input[1]);

    vector_input.reverse();
    println!("{:?}", vector_input[0]);
    println!("{:?}", vector_input[1]);
}
```

```rust
fn main() {
    let vector_input: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    let len = vector_input.len();

    println!("{:?}", vector_input[0]);
    println!("{:?}", vector_input[1]);
    println!("{:?}", vector_input[len - 2]);
    println!("{:?}", vector_input[len - 1]);
}
```

```rust
fn main() {
    let vector_input: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    let len = vector_input.len();

    println!("{:?}", &vector_input[..2]);
    println!("{:?}", &vector_input[len - 2..]);
}
```

```rust
fn main() {
    let mut vector_input: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    let mut count = 0;

    for i in &vector_input {
        println!("{:?}", i);
        count += 1;

        if count >= 2 {
            break;
        }
    }

    vector_input.reverse();
    count = 0;

    for i in &vector_input {
        println!("{:?}", i);
        count += 1;

        if count >= 2 {
            break;
        }
    }
}
```

```rust
fn main() {
    let vector_input: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];

    for i in &vector_input[..2] {
        println!("{:?}", i);
    }

    for i in &vector_input[vector_input.len() - 2..] {
        println!("{:?}", i);
    }
}
```

</details>

12. Encontre e retorne o maior valor do vetor: [27, 3, 16, 8, 12, 7, 2, 19].

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut vector: Vec<u8> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    vector.sort();
    vector.reverse();
    println!("{:?}", vector[0]);
}
```

```rust
fn main() {
    let vector: Vec<u8> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    println!("{:?}", vector.iter().max());
}
```

```rust
fn main() {
    let input_vector: Vec<u8> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    let mut value = &input_vector[0];

    for i in &input_vector {
        if i > value {
            value = i;
        }
    }

    println!("{:?}", value);
}
```

</details>

13. Copie os dados do vetor a seguir para outro vetor vazio: vector_a = [10, 20, 30, 40].

[Playground!]()

<details>
<summary>Answers</summary>

```rust
// .clone()
fn main () {
    let vector_a: Vec<u8> = vec![10, 20, 30, 40];
    let vector_b = vector_a.clone();
    
    println!("{:?}", vector_a);
    println!("{:?}", vector_b);
}
```

```rust
// .to_vec
fn main () {
    let vector_a: Vec<u8> = vec![10, 20, 30, 40];
    let vector_b: Vec<u8> = vector_a.to_vec();

    println!("{:?}", vector_a);
    println!("{:?}", vector_b);
}
```

```rust
// iter().copied().collect()
fn main () {
    let vector_a: Vec<u8> = vec![10, 20, 30, 40];
    let vector_b: Vec<u8> = vector_a.iter().copied().collect();

    println!("{:?}", vector_a);
    println!("{:?}", vector_b);
}
```

```rust
// .extend()
fn main () {
    let vector_a: Vec<u8> = vec![10, 20, 30, 40];
    let mut vector_b: Vec<u8> = Vec::new();
    vector_b.extend(&vector_a);

    println!("{:?}", vector_a);
    println!("{:?}", vector_b);
}
```

```rust
// for
fn main () {
    let vector_a: Vec<u8> = vec![10, 20, 30, 40];
    let mut vector_b: Vec<u8> = Vec::new();

    for i in &vector_a {
        vector_b.push(*i);
    }

    println!("{:?}", vector_a);
    println!("{:?}", vector_b);
}
```

</details>

15. Escreva um código que dobra o valor de todos os elementos de um vetor e adicione a outro vetor.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let input_vector: Vec<i16> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    let mut vector: Vec<i16> = vec![];

    for i in &input_vector {
        vector.push(i * 2);
    }

    println!("{:?}", input_vector);
    println!("{:?}", vector);
}
```

```rust
fn main() {
    let input_vector: Vec<i16> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    let mut vector: Vec<i16> = input_vector.clone();

    for i in 0..vector.len() {
        vector[i] *= 2;
    }

    println!("Vector 01 = {:?} \nVector 02 = {:?}", input_vector, vector);
}
```
</details>

16. Escreva um codigo que recebe um vetor de inteiros e retorna um novo vetor contendo apenas os valores pares.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let vector: Vec<u8> = vec![1, 2, 3, 4, 5, 6, 7];
    let mut vector_even: Vec<u8> = vec![];

    for i in &vector {
        if i % 2 == 0 {
            vector_even.push(*i);
        }
    }

    println!("{:?}", vector);
    println!("{:?}", vector_even);
}
```
</details>

17. Crie um vetor a parti do vetor a seguir e converta todos os dados para Lowercase ou Uppercase. Vec =  A, b, C, d, E, f, G.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let vector: Vec<&str> = vec!["A", "b", "C", "d", "E", "f", "G"];
    let mut vector_lowercase: Vec<String> = Vec::new();

    for i in &vector {
        vector_lowercase.push(i.to_lowercase());
    }

    println!("{:?}", vector);
    println!("{:?}", vector_lowercase);
}
```
</details>

18. A parti do vetor a seguir: ["a", "d", "x", "y", "a", "u", "t", "y", "o", "e", "p", "b", "x", "q", "e"], crie um novo vetor com todos os valores repetidos. 

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let vector: Vec<&str> = vec![
        "a", "d", "x", "y", "a", "u", "t", "y", "o", "e", "p", "b", "x", "q", "e",
    ];
    let mut vector_duplicates = Vec::new();

    println!("{:?}", vector);

    for i in 0..vector.len() {
        for j in (i + 1)..vector.len() {
            if vector[i] == vector[j] {
                vector_duplicates.push(vector[i]);
            }
        }
    }
    
    println!("{:?}", vector_duplicates);
}
```
</details>

19. Crie um codigo que pega todos os elementos repetidos de um vetor e adiciona a um vetor vazio. Vetor = "a", "a", "a", "b", "b", "c", "d", "d", "d", "e", "e", "e", "f", "g".

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let vector: Vec<&str> = vec![
        "a", "a", "a", "b", "b", "c", "d", "d", "d", "e", "e", "e", "f", "g",
    ];
    let mut vector_duplicates = Vec::new();

    println!("{:?}", vector);

    for i in 0..vector.len() {
        if vector_duplicates.contains(&vector[i]) {
            continue;
        }

        for j in (i + 1)..vector.len() {
            if vector[i] == vector[j] {
                vector_duplicates.push(vector[i]);
                break;
            }
        }
    }

    println!("{:?}", vector_duplicates);
}
```

```rust
fn main() {
    let vector: Vec<&str> = vec![
        "a", "a", "a", "b", "b", "c", "d", "d", "d", "e", "e", "e", "f", "g",
    ];
    let mut vector_duplicates = Vec::new();

    println!("{:?}", vector);

    for i in 0..vector.len() {
        for j in (i + 1)..vector.len() {
            if vector[i] == vector[j] {
                if !vector_duplicates.contains(&vector[i]) {
                    vector_duplicates.push(&vector[i])
                };
            }
        }
    }

    println!("{:?}", vector_duplicates);
}
```
</details>

20. Crie uma solução que reverte a ordem dos elementos de um vetor usando o método .reverse().

[Playground!]()

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut vector: Vec<&str> = vec!["a", "e", "i", "o", "u"];
    println!("{:?}", vector);

    vector.reverse();
    println!("{:?}", vector);
}
```
</details>

23. Crie um codigo que divide um vetor em dois no índice especificado pelo usuário, retornando ambas as partes.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
// for
use std::io;

fn main() {
    let vector: Vec<&str> = vec!["a", "c", "e", "g", "i", "k", "m", "o", "q"];
    println!("{:?}", vector);

    let mut vector_part1: Vec<&str> = Vec::new();
    let mut vector_part2: Vec<&str> = Vec::new();

    println!("\nEnter the vector index:");
    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Data entry error!");
    let vector_index: usize = input.trim().parse().expect("Error converting data!");

    for i in 0..vector.len() {
        if i < vector_index {
            vector_part1.push(vector[i]);
        } else {
            vector_part2.push(vector[i]);
        }
    }

    println!("\n{:?}", vector_part1);
    println!("{:?}", vector_part2);
}
```

```rust
// split_at
use std::io;

fn main() {
    let vector: Vec<&str> = vec!["a", "c", "e", "g", "i", "k", "m", "o", "q"];
    println!("{:?}", vector);

    let _vector_part1: Vec<&str> = Vec::new();
    let _vector_part2: Vec<&str> = Vec::new();

    println!("\nEnter the vector index:");
    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Data entry error!");
    let vector_index: usize = input.trim().parse().expect("Error converting data!");

    let (vector_part1, vector_part2) = vector.split_at(vector_index);

    println!("\n{:?}", vector_part1);
    println!("{:?}", vector_part2);
}
```

</details>

19. Crie uma função que remove todos os valores duplicados de um vetor, mantendo apenas a primeira ocorrência de cada valor.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

21. Inverta um vetor sem usar o método .reverse(). Implemente sua própria lógica de reversão.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

22. Dados dois vetores já ordenados, mescle-os em um único vetor que também esteja ordenado, sem usar .sort() no resultado final.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

