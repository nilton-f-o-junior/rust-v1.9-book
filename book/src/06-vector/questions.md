# Questions

01 - Crie um vetor vazio de inteiros em Rust.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<u8> = vec![];
    println!("{:?}", vetor);
}
```
</details>

02 - Crie um vetor contendo os números de 1 a 4.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<u8> = vec![1, 2, 3, 4];
    println!("{:?}", vetor);   
}
```

```rust
fn main() {    
    let vetor: Vec<u8> = (1..=4).collect();
    println!("{:?}", vetor);    
}
```

```rust
fn main() {
    let mut vetor: Vec<u8> = vec![];
    vetor.push(1);
    vetor.push(2);
    vetor.push(3);
    vetor.push(4);
    println!("{:?}", vetor);
}
```

```rust
fn main() {
    let vetor: Vec<u8> = Vec::from([1, 2, 3, 4]);
    println!("{:?}", vetor);
}
```
</details>

03 - Crie um vetor contendo os números de 1 a 10 e imprima cada elemento usando um loop.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let vetor: Vec<u8> = (1..=10).collect();

    for i in &vetor {
        println!("{:?}", i);
    }
}
```

```rust
fn main () {
    let vetor: Vec<u8> = (1..=10).collect();
    let mut i = 0;

    while i < vetor.len() {
        println!("{:?}", vetor[i]);
        i += 1;
    }
}
```
</details>

04 - Crie um vetor vazio e solicite ao usuário 3 valores inteiros. Adicione esses valores ao vetor e imprima o resultado final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut vetor_entrada: Vec<i8> = vec![];

    while vetor_entrada.len() < 3 {
        println!("Digite o novo número {}/3: ", vetor_entrada.len() + 1);
        let mut entrada = String::new();

        match io::stdin().read_line(&mut entrada) {
            Err(_) => {
                println!("Erro na leitura de dados!");
            }
            Ok(_) => match entrada.trim().parse::<i8>() {
                Ok(numero) => {
                    vetor_entrada.push(numero);
                    println!("Número {} adicionado!\n", numero);
                }
                Err(_) => {
                    println!("'{}' não é um número válido!", entrada.trim());
                }
            },
        }
    }
    println!("Vetor completo: {:?}", vetor_entrada);
}
```
</details>

05 - Crie um programa que contenha pelo menos 3 numeros decimais e retorna a soma e multiplicacao dos elementos, usando o sum e product. Exemplo: [3.2, 5.8, 1.2]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<f32> = vec![3.2, 5.8, 1.2];
    let soma: f32 = vetor.iter().sum();
    println!("{}", soma);
}
```

```rust
fn main () {
    let vetor: Vec<f32> = vec![3.2, 5.8, 1.2];
    let produto: f32 = vetor.iter().product();
    println!("Produto = {:.2}", produto);
}
```

</details>

06 - Crie um programa que contenha pelo menos 3 numeros decimais e retorna a soma, subtracao, multiplicacao e divisao dos elementos, usando um loop. Exemplo: [3.2, 5.8, 1.2]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor_entrada: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut resultado: f64 = 0.0;

    for &i in &vetor_entrada {
        resultado += i;
    }

    println!("Soma = {:?}", resultado);
}
```

```rust
fn main() {
    let vetor_entrada_sub: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut resultado: f64 = vetor_entrada_sub[0];
    let mut i = 1;

    while i < vetor_entrada_sub.len() {
        resultado -= vetor_entrada_sub[i];
        i += 1;
    }
    println!("Subtração = {:?}", resultado);
}
```

```rust
fn main() {
    let vetor_entrada_mult: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut resultado: f64 = vetor_entrada_mult[0];
    let mut i = 1;

    loop {
        resultado *= vetor_entrada_mult[i];
        i += 1;

        if i >= vetor_entrada_mult.len() {
            break;
        }
    }

    println!("Multiplicação = {:.2}", resultado);
}
```

```rust
fn main() {
    let vetor_entrada_div: Vec<f64> = vec![3.2, 5.8, 1.2];
    let mut resultado = vetor_entrada_div[0];

    for &i in &vetor_entrada_div[1..] {
        resultado /= i;
    }

    println!("Divisão = {:.2}", resultado);
}
```

</details>

07 - Crie um vetor com os valores ["a", "b", "c", "d"] e remova os dois últimos elementos. Imprima o vetor resultante.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d"];
    vetor_entrada.pop();
    vetor_entrada.pop();
    println!("{:?}", vetor_entrada);
}
```

```rust
fn main() {
    let mut vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d"];
    vetor_entrada.remove(3);
    vetor_entrada.remove(2);
    println!("{:?}", vetor_entrada);
}
```

```rust
fn main() {
    let mut vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d"];
    vetor_entrada.truncate(2);
    println!("{:?}", vetor_entrada);
}
```

```rust
fn main() {
    let mut vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d"];
    vetor_entrada.drain(2..);
    println!("{:?}", vetor_entrada);
}
```
</details>

08 - Crie um vetor com alguns valores e adicione dois novos elementos ao vetor. Adicione tambem usando um índice específico (por exemplo, (2, 0)).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut vetor_entrada: Vec<u8> = vec![10, 20, 30, 40];
    vetor_entrada.push(90);
    println!("{:?}", vetor_entrada);
}
```

```rust
fn main() {
    let mut vetor_entrada: Vec<u8> = vec![10, 20, 30, 40];
    vetor_entrada.insert(2, 70);
    println!("{:?}", vetor_entrada);
}
```

```rust
fn main() {
    let mut vetor_entrada: Vec<u8> = vec![10, 20, 30, 40];
    vetor_entrada.extend([50, 60, 70]);
    println!("{:?}", vetor_entrada);
}
```

```rust
fn main() {
    let mut vetor_a: Vec<u8> = vec![10, 20, 30];
    let mut vetor_b: Vec<u8> = vec![40, 50, 60];
    vetor_a.append(&mut vetor_b);
    println!("{:?}", vetor_a);
    println!("{:?}", vetor_b);
}
```
</details>

09 - Crie um vetor de inteiros, imprima-o e solicite ao usuário um valor e remova a primeira ocorrência desse valor do vetor e imprima o resultado.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut vetor: Vec<u8> = vec![2, 4, 6, 8, 10, 12];
    println!("{:?}", vetor);

    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na entrada de dados!");

    let num: u8 = entrada.trim().parse().expect("Erro ao converter dados!");

    for i in (0..vetor.len()).rev() {
        if vetor[i] == num {
            vetor.remove(i);
        }
    }

    println!("\n{:?}", vetor);
}
```
</details>

> Começando do início: Se você remover um elemento, todos os elementos seguintes se movem para a frente e você perde o controle do índice: (0 → 5).

> Começando do fim: Você remove de trás para frente, e os elementos que estão na frente permanecem no mesmo lugar: (5 → 0).

10 - Crie um vetor de strings e solicite ao usuário um valor. Verifique se esse valor está presente no vetor e exiba uma mensagem apropriada.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let vetor: Vec<&str> = vec![
        "Boa Noite Punpun",
        "Alice no País das Maravilhas",
        "Gravity Falls",
        "Frankenstein",
        "Musashi",
    ];

    println!("Digite o título do livro:");
    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na entrada de dados!");

    let entrada = entrada.trim().to_lowercase();
    let mut livro: &str = "Livro não encontrado!";

    for i in &vetor {
        if i.to_lowercase() == entrada {
            // if i.to_lowercase().contains(&input) {
            livro = "Livro encontrado!";
            break;
        }
    }
    println!("\n{}", livro)
}
```
</details>

> .contains(&input): o resultado será diferente porque a busca considera qualquer palavra.

11 - Dado um vetor com pelo menos 4 elementos, imprima os 2 primeiros e os 2 últimos valores.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    println!("{:?}", vetor_entrada[0]);
    println!("{:?}", vetor_entrada[1]);

    vetor_entrada.reverse();
    println!("{:?}", vetor_entrada[0]);
    println!("{:?}", vetor_entrada[1]);
}
```

```rust
fn main() {
    let vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    let tam = vetor_entrada.len();

    println!("{:?}", vetor_entrada[0]);
    println!("{:?}", vetor_entrada[1]);
    println!("{:?}", vetor_entrada[tam - 2]);
    println!("{:?}", vetor_entrada[tam - 1]);
}
```

```rust
fn main() {
    let vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    let tam = vetor_entrada.len();

    println!("{:?}", &vetor_entrada[..2]);
    println!("{:?}", &vetor_entrada[tam - 2..]);
}
```

```rust
fn main() {
    let mut vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];
    let mut contador = 0;

    for i in &vetor_entrada {
        println!("{:?}", i);
        contador += 1;

        if contador >= 2 {
            break;
        }
    }

    vetor_entrada.reverse();
    contador = 0;

    for i in &vetor_entrada {
        println!("{:?}", i);
        contador += 1;

        if contador >= 2 {
            break;
        }
    }
}
```

```rust
fn main() {
    let vetor_entrada: Vec<&str> = vec!["a", "b", "c", "d", "e", "f"];

    for i in &vetor_entrada[..2] {
        println!("{:?}", i);
    }

    for i in &vetor_entrada[vetor_entrada.len() - 2..] {
        println!("{:?}", i);
    }
}
```
</details>

12 - Encontre e retorne o maior valor do vetor: [27, 3, 16, 8, 12, 7, 2, 19].

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut vetor: Vec<u8> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    vetor.sort();
    vetor.reverse();
    println!("{:?}", vetor[0]);
}
```

```rust
fn main() {
    let vetor: Vec<u8> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    println!("{:?}", vetor.iter().max());
}
```

```rust
fn main() {
    let vetor_entrada: Vec<u8> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    let mut valor = &vetor_entrada[0];

    for i in &vetor_entrada {
        if i > valor {
            valor = i;
        }
    }

    println!("{:?}", valor);
}
```
</details>

13 - Copie os dados do vetor a seguir para outro vetor vazio: vector_a = [10, 20, 30, 40].

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let vetor_a: Vec<u8> = vec![10, 20, 30, 40];
    let vetor_b = vetor_a.clone();
    
    println!("{:?}", vetor_a);
    println!("{:?}", vetor_b);
}
```

```rust
fn main () {
    let vetor_a: Vec<u8> = vec![10, 20, 30, 40];
    let vetor_b: Vec<u8> = vetor_a.to_vec();

    println!("{:?}", vetor_a);
    println!("{:?}", vetor_b);
}
```

```rust
fn main () {
    let vetor_a: Vec<u8> = vec![10, 20, 30, 40];
    let vetor_b: Vec<u8> = vetor_a.iter().copied().collect();

    println!("{:?}", vetor_a);
    println!("{:?}", vetor_b);
}
```

```rust
fn main () {
    let vetor_a: Vec<u8> = vec![10, 20, 30, 40];
    let mut vetor_b: Vec<u8> = Vec::new();
    vetor_b.extend(&vetor_a);

    println!("{:?}", vetor_a);
    println!("{:?}", vetor_b);
}
```

```rust
fn main () {
    let vetor_a: Vec<u8> = vec![10, 20, 30, 40];
    let mut vetor_b: Vec<u8> = Vec::new();

    for i in &vetor_a {
        vetor_b.push(*i);
    }

    println!("{:?}", vetor_a);
    println!("{:?}", vetor_b);
}
```

</details>

14 - Escreva um código que dobra o valor de todos os elementos de um vetor e adicione a outro vetor.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor_entrada: Vec<i16> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    let mut vetor: Vec<i16> = vec![];

    for i in &vetor_entrada {
        vetor.push(i * 2);
    }

    println!("{:?}", vetor_entrada);
    println!("{:?}", vetor);
}
```

```rust
fn main() {
    let vetor_entrada: Vec<i16> = vec![27, 3, 16, 8, 12, 7, 2, 19];
    let mut vetor: Vec<i16> = vetor_entrada.clone();

    for i in 0..vetor.len() {
        vetor[i] *= 2;
    }

    println!("Vetor 01 = {:?} \nVetor 02 = {:?}", vetor_entrada, vetor);
}
```
</details>

15 - Escreva um codigo que recebe um vetor de inteiros e retorna um novo vetor contendo apenas os valores pares.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<u8> = vec![1, 2, 3, 4, 5, 6, 7];
    let mut vetor_pares: Vec<u8> = vec![];

    for i in &vetor {
        if i % 2 == 0 {
            vetor_pares.push(*i);
        }
    }

    println!("{:?}", vetor);
    println!("{:?}", vetor_pares);
}
```
</details>

16 - Crie um vetor a parti do vetor a seguir e converta todos os dados para Lowercase ou Uppercase. Vec =  A, b, C, d, E, f, G.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<&str> = vec!["A", "b", "C", "d", "E", "f", "G"];
    let mut vetor_minusculo: Vec<String> = Vec::new();

    for i in &vetor {
        vetor_minusculo.push(i.to_lowercase());
    }

    println!("{:?}", vetor);
    println!("{:?}", vetor_minusculo);
}
```
</details>

17 - A parti do vetor a seguir: ["a", "d", "x", "y", "a", "u", "t", "y", "o", "e", "p", "b", "x", "q", "e"], crie um novo vetor com todos os valores repetidos. 

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<&str> = vec![
        "a", "d", "x", "y", "a", "u", "t", "y", "o", "e", "p", "b", "x", "q", "e",
    ];
    let mut vetor_duplicados = Vec::new();

    println!("{:?}", vetor);

    for i in 0..vetor.len() {
        for j in (i + 1)..vetor.len() {
            if vetor[i] == vetor[j] {
                vetor_duplicados.push(vetor[i]);
            }
        }
    }
    
    println!("{:?}", vetor_duplicados);
}
```
</details>

18 - Crie um codigo que pega todos os elementos repetidos de um vetor e adiciona a um vetor vazio. Vetor = "a", "a", "a", "b", "b", "c", "d", "d", "d", "e", "e", "e", "f", "g".

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let vetor: Vec<&str> = vec![
        "a", "a", "a", "b", "b", "c", "d", "d", "d", "e", "e", "e", "f", "g",
    ];
    let mut vetor_duplicados = Vec::new();

    println!("{:?}", vetor);

    for i in 0..vetor.len() {
        if vetor_duplicados.contains(&vetor[i]) {
            continue;
        }

        for j in (i + 1)..vetor.len() {
            if vetor[i] == vetor[j] {
                vetor_duplicados.push(vetor[i]);
                break;
            }
        }
    }

    println!("{:?}", vetor_duplicados);
}
```

```rust
fn main() {
    let vetor: Vec<&str> = vec![
        "a", "a", "a", "b", "b", "c", "d", "d", "d", "e", "e", "e", "f", "g",
    ];
    let mut vetor_duplicados = Vec::new();

    println!("{:?}", vetor);

    for i in 0..vetor.len() {
        for j in (i + 1)..vetor.len() {
            if vetor[i] == vetor[j] {
                if !vetor_duplicados.contains(&vetor[i]) {
                    vetor_duplicados.push(&vetor[i])
                };
            }
        }
    }

    println!("{:?}", vetor_duplicados);
}
```
</details>

19 - Crie uma solução que reverte a ordem dos elementos de um vetor usando o método .reverse().

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut vetor: Vec<&str> = vec!["a", "e", "i", "o", "u"];
    println!("{:?}", vetor);

    vetor.reverse();
    println!("{:?}", vetor);
}
```
</details>

20 - Crie um codigo que divide um vetor em dois no índice especificado pelo usuário, retornando ambas as partes.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let vetor: Vec<&str> = vec!["a", "c", "e", "g", "i", "k", "m", "o", "q"];
    println!("{:?}", vetor);

    let mut vetor_parte1: Vec<&str> = Vec::new();
    let mut vetor_parte2: Vec<&str> = Vec::new();

    println!("\nDigite o índice do vetor:");
    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na entrada de dados!");
    let indice_vetor: usize = entrada.trim().parse().expect("Erro ao converter dados!");

    for i in 0..vetor.len() {
        if i < indice_vetor {
            vetor_parte1.push(vetor[i]);
        } else {
            vetor_parte2.push(vetor[i]);
        }
    }

    println!("\n{:?}", vetor_parte1);
    println!("{:?}", vetor_parte2);
}
```

```rust
use std::io;

fn main() {
    let vetor: Vec<&str> = vec!["a", "c", "e", "g", "i", "k", "m", "o", "q"];
    println!("{:?}", vetor);

    let _vetor_parte1: Vec<&str> = Vec::new();
    let _vetor_parte2: Vec<&str> = Vec::new();

    println!("\nDigite o índice do vetor:");
    let mut entrada: String = String::new();
    io::stdin()
        .read_line(&mut entrada)
        .expect("Erro na entrada de dados!");
    let indice_vetor: usize = entrada.trim().parse().expect("Erro ao converter dados!");

    // o método split_at() retorna duas fatias (slices) &[&str]
    let (vetor_parte1, vetor_parte2) = vetor.split_at(indice_vetor);

    println!("\nParte 1 (Índices < {}): {:?}", indice_vetor, vetor_parte1);
    println!("Parte 2 (Índices >= {}): {:?}", indice_vetor, vetor_parte2);
}
```
</details>
