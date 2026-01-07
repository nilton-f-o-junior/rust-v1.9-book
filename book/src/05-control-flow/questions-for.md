# Questões - for

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
    let mut soma: u16 = 0;

    for i in 1..=100 {
        soma += i;
        println!("{}", i);
        println!("{}", soma);
        println!();
    }

    println!("{}", soma);
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
    println!("Insira um número:");
    let mut entrada_numero: String = String::new();
    io::stdin().read_line(&mut entrada_numero).err();
    let numero_limite: i16 = entrada_numero.trim().parse().expect("");

    println!("");
    for i in 0..=numero_limite {
        println!("Número: {:02} = {:b}", i, i);
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

06 - Escreva um programa que imprime a multiplicação de um número fornecido pelo usuário (de 1 a 10) usando um laço for.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");
    let mut entrada_numero: String = String::new();
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro na entrada de dados!");

    let numero_base: i16 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    println!();

    for i in 1..=10 {
        let resultado: i16 = numero_base * i;
        println!("{} x {} = {}", numero_base, i, resultado);
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
    println!("Insira um texto:");

    let mut entrada_texto: String = String::new();
    io::stdin()
        .read_line(&mut entrada_texto)
        .expect("Erro na entrada de dados!");

    let texto_original: String = entrada_texto.trim().to_string();
    let mut texto_invertido = String::new();

    for i in texto_original.chars().rev() {
        texto_invertido.push(i);
        println!("{}", texto_invertido);
    }

    println!("\n{}", texto_invertido);
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
    println!("Insira um número:");
    let mut entrada_numero: String = String::new();
    io::stdin().read_line(&mut entrada_numero).err();

    let mut soma_resultado: i16 = 0;

    for i in entrada_numero.trim().chars() {
        let digito_convertido: i16 = i.to_string().parse().expect("Erro na conversão de dados!");
        soma_resultado += digito_convertido;
    }

    println!("{}", soma_resultado);
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
    println!("Insira um texto:");

    let mut entrada_texto: String = String::new();
    io::stdin()
        .read_line(&mut entrada_texto)
        .expect("Erro na entrada de dados!");

    let texto_minusculo: String = entrada_texto.trim().to_lowercase().to_string();
    let mut qtd_vogais: u8 = 0;

    for i in texto_minusculo.chars() {
        if i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' {
            qtd_vogais += 1;
        }
    }
    println!("Qtd. = {}", qtd_vogais);
}
```
</details>

10 - Escreva um programa que encontra o maior número em uma lista de números usando um laço for. Lista = [17, 43, 5, 54, 93]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let array: [u8; 5] = [17, 43, 5, 54, 93];
    let mut maior_numero: u8 = 0;

    for (_i, j) in array.iter().enumerate() {
        if *j > maior_numero {
            maior_numero = *j;
        }
    }
    println!("{}", maior_numero);
}
```
</details>

11 - Crie um programa que encontra o menor número em uma lista de números usando um laço for. Lista = [63, 36, 57, 7, 82]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let array: [u8; 5] = [63, 36, 57, 7, 82];
    let mut menor_numero: u8 = array[1];

    for (_i, j) in array.iter().enumerate() {
        if *j < menor_numero {
            menor_numero = *j;
        }
    }
    println!("{}", menor_numero);
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
    println!("Insira um número:");
    let mut entrada_numero: String = String::new();
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro na entrada de dados!");

    let numero_limite: u8 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    let mut fatorial: u8 = 1;

    for i in 1..=numero_limite {
        fatorial *= i;
        println!("Fatorial Parcial = {}", fatorial);
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
    println!("Insira uma palavra:");

    let mut entrada_palavra: String = String::new();
    io::stdin()
        .read_line(&mut entrada_palavra)
        .expect("Erro na entrada de dados!");

    let palavra_original: String = entrada_palavra.trim().to_lowercase().to_string();
    let mut palavra_invertida: String = String::new();

    for i in palavra_original.chars().rev() {
        palavra_invertida.push(i);
    }

    if palavra_original == palavra_invertida {
        println!("A palavra {} é um palíndromo!", palavra_original)
    } else {
        println!("A palavra {} não é um palíndromo!", palavra_original);
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
    println!("Insira uma palavra:");

    let mut entrada_palavra: String = String::new();
    io::stdin()
        .read_line(&mut entrada_palavra)
        .expect("Erro na entrada de dados!");

    let palavra_base: String = entrada_palavra.trim().to_lowercase().to_string();

    println!("\nInsira o caractere de busca: ");

    let mut entrada_caractere: String = String::new();
    io::stdin()
        .read_line(&mut entrada_caractere)
        .expect("Erro na entrada de dados!");

    let caractere_busca: char = entrada_caractere.trim().parse().expect("Erro na entrada de dados!");

    let mut contagem: u8 = 0;

    for i in palavra_base.chars() {
        if i == caractere_busca {
            contagem += 1;
        }
    }

    if contagem >= 1 {
        println!("\nA letra '{}' se repete '{}' vezes!", caractere_busca, contagem);
    } else {
        println!("\nA letra '{}' não se repete.", caractere_busca);
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
    let mut array_entrada: [i8; 5] = [0; 5];

    for i in 0..array_entrada.len() {
        println!("\nInsira o número para a posição {}:", i);
        let mut entrada_numero: String = String::new();
        io::stdin().read_line(&mut entrada_numero).expect("Erro ao ler dados!");
        array_entrada[i] = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    }

    println!("\nArray preenchido: {:?}", array_entrada);
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
    let mut array_numeros: [i8; 10] = [0; 10];
    let mut soma: u8 = 0;

    for i in 0..array_numeros.len() {

        println!("Insira o número:");
        let mut entrada_numero: String = String::new();
        io::stdin()
            .read_line(&mut entrada_numero)
            .expect("Erro na entrada de dados!");
        array_numeros[i] = entrada_numero.trim().parse().expect("Erro na conversão de dados!");

        soma += array_numeros[i] as u8;
    }

    soma /= 10;
    println!("Média = {}", soma);
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
    println!("Insira 5 números:");
    let mut array_entrada: [i8; 5] = [0; 5];
    let mut contagem: u8 = 0;

    for i in 0..array_entrada.len() {

        let mut entrada_numero: String = String::new();
        io::stdin()
            .read_line(&mut entrada_numero)
            .expect("Erro na entrada de dados!");
        array_entrada[i] = entrada_numero.trim().parse().expect("Erro na conversão de dados!");

        if array_entrada[i] < 0 {
            contagem += 1;
        }
    }

    println!("Contagem de números negativos = {}", contagem);
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
    println!("Insira 5 números:");
    let mut array_entrada: [i8; 5] = [0; 5];
    let mut array_pares: [i8; 5] = [0; 5];

    for i in 0..array_entrada.len() {

        let mut entrada_numero: String = String::new();
        io::stdin()
            .read_line(&mut entrada_numero)
            .expect("Erro na entrada de dados!");
        array_entrada[i] = entrada_numero.trim().parse().expect("Erro na conversão de dados!");

        if array_entrada[i] % 2 == 0 {
            array_pares[i] = array_entrada[i];
        }
    }

    println!("\nArray de pares (ímpares são 0): {:?}", array_pares);
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
    println!("Insira o número de usuários que deseja adicionar:");
    let mut entrada_contagem: String = String::new();
    io::stdin().read_line(&mut entrada_contagem).expect("Erro ao ler a contagem!");
    let quantidade: u8 = entrada_contagem.trim().parse().expect("Erro na conversão de dados!");

    let mut dados_usuario: (String, u8);

    for _i in 0..quantidade {
        println!("\nInsira o nome:");
        let mut entrada_nome: String = String::new();
        io::stdin().read_line(&mut entrada_nome).expect("Erro ao ler o nome!");
        let nome = entrada_nome;

        println!("\nInsira a idade:");
        let mut entrada_idade: String = String::new();
        io::stdin().read_line(&mut entrada_idade).expect("Erro ao ler a idade!");
        let idade: u8 = entrada_idade.trim().parse().expect("Erro na conversão de dados!");

        dados_usuario = (nome, idade);
        println!("\nNome:{} Idade:{}", dados_usuario.0, dados_usuario.1);
    }
}
```
</details>
