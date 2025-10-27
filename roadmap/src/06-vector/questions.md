# Questions

Crie um vetor vazio de inteiros em Rust.

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

Crie um vetor contendo os números de 1 a 4.

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

Crie um vetor contendo os números de 1 a 10 e imprima cada elemento usando um loop.

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

Crie um vetor vazio e solicite ao usuário 3 valores inteiros. Adicione esses valores ao vetor e imprima o resultado final.

```rust


```


Crie uma função que recebe um vetor de números decimais (f64) e retorna a soma de todos os elementos.


Crie um vetor com os valores ["a", "b", "c", "d"] e remova os dois últimos elementos. Imprima o vetor resultante.


Crie um vetor com alguns valores e adicione um novo elemento em um índice específico (por exemplo, índice 2).


Crie um vetor de inteiros, imprima-o e solicite ao usuário um valor. Remova a primeira ocorrência desse valor do vetor e imprima o resultado.


Crie um vetor de strings e solicite ao usuário um valor. Verifique se esse valor está presente no vetor e exiba uma mensagem apropriada.


Dado um vetor com pelo menos 4 elementos, imprima os 2 primeiros e os 2 últimos valores.


Encontre e retorne o maior valor do vetor: [27, 3, 16, 8, 12, 7, 2, 19].


Escreva um código que dobra o valor de todos os elementos de um vetor (modifique o vetor original).


Escreva uma função que recebe um vetor de inteiros e retorna um novo vetor contendo apenas os valores pares.


Crie uma função que remove todas as ocorrências de um valor específico de um vetor.


Crie uma função que remove todos os valores duplicados de um vetor, mantendo apenas a primeira ocorrência de cada valor.


Crie uma solução que reverte a ordem dos elementos de um vetor usando o método .reverse().


Inverta um vetor sem usar o método .reverse(). Implemente sua própria lógica de reversão.


Dados dois vetores já ordenados, mescle-os em um único vetor que também esteja ordenado, sem usar .sort() no resultado final.


Crie uma função que divide um vetor em dois no índice especificado pelo usuário, retornando ambas as partes.Crie um vetor vazio de inteiros em Rust.



