# Questions

Crie um vetor vazio de inteiros em Rust.

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

Crie um vetor contendo os números de 1 a 4.

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

Crie um vetor contendo os números de 1 a 10 e imprima cada elemento usando um loop.

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

Crie um vetor vazio e solicite ao usuário 3 valores inteiros. Adicione esses valores ao vetor e imprima o resultado final.

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

Crie um programa que contenha pelo menos 3 numeros decimais e retorna a soma e multiplicacao dos elementos, usando o sum e product. Exemplo: [3.2, 5.8, 1.2]

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

Crie um programa que contenha pelo menos 3 numeros decimais e retorna a soma, subtracao, multiplicacao e divisao dos elementos, usando um loop. Exemplo: [3.2, 5.8, 1.2]

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

Crie um vetor com os valores ["a", "b", "c", "d"] e remova os dois últimos elementos. Imprima o vetor resultante.

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

Crie um vetor com alguns valores e adicione dois novos elementos ao vetor. Adicione tambem usando um índice específico (por exemplo, (2, 0)).

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

Crie um vetor de inteiros, imprima-o e solicite ao usuário um valor e remova a primeira ocorrência desse valor do vetor e imprima o resultado.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

Crie um vetor de strings e solicite ao usuário um valor. Verifique se esse valor está presente no vetor e exiba uma mensagem apropriada.


[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

Dado um vetor com pelo menos 4 elementos, imprima os 2 primeiros e os 2 últimos valores.


[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

Encontre e retorne o maior valor do vetor: [27, 3, 16, 8, 12, 7, 2, 19].


[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

Escreva um código que dobra o valor de todos os elementos de um vetor (modifique o vetor original).


[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

Escreva uma função que recebe um vetor de inteiros e retorna um novo vetor contendo apenas os valores pares.


[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

Crie uma função que remove todas as ocorrências de um valor específico de um vetor.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>


Crie uma função que remove todos os valores duplicados de um vetor, mantendo apenas a primeira ocorrência de cada valor.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>


Crie uma solução que reverte a ordem dos elementos de um vetor usando o método .reverse().

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>


Inverta um vetor sem usar o método .reverse(). Implemente sua própria lógica de reversão.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>


Dados dois vetores já ordenados, mescle-os em um único vetor que também esteja ordenado, sem usar .sort() no resultado final.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>


Crie uma função que divide um vetor em dois no índice especificado pelo usuário, retornando ambas as partes.Crie um vetor vazio de inteiros em Rust.


[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>


