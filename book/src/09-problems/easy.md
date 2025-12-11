# Fácil

01 - Crie uma função simples apenas para imprimir "Olá, mundo!" na tela.

```rust
fn texto() {
    println!("Olá, mundo!");
}

fn main() {
    texto();
}
```

02 - Crie uma função para imprimir um valor fornecido pelo usuário.

```rust
use std::io;

fn entrada_texto(mensagem: &str) -> String {
    loop {
        println!("{}", mensagem);

        let mut entrada = String::new();
        match io::stdin().read_line(&mut entrada) {
            Ok(_) => {
                let texto_final = entrada.trim();
                if !texto_final.is_empty() {
                    return texto_final.to_string();
                }
                println!("Por favor, digite algo!");
            }

            Err(erro) => {
                println!("Erro: {}", erro);
                println!("Tente novamente!");
            }
        }
    }
}

fn main() {
    let mensagem_usuario = entrada_texto("Digite um texto:");
    println!("\nTexto digitado: {}", mensagem_usuario);
}
```

03 - Crie um programa que:

- Solicite e receba dois valores numéricos digitados pelo usuário;
- Defina um módulo que implemente as quatro operações aritméticas básicas (adição, subtração, multiplicação e divisão);
- Utilize o módulo com os valores fornecidos e exiba o resultado de cada operação na tela.

```rust
use std::io;

fn funcao_entrada(mensagem: &str) -> f32 {
    loop {
        println!("{}", mensagem);
        let mut entrada = String::new();
        match io::stdin().read_line(&mut entrada) {
            Err(_) => {
                println!("Erro na entrada de dados!");
                continue;
            }
            Ok(_) => match entrada.trim().parse::<f32>() {
                Ok(numero) => return numero,
                Err(_) => {
                    println!("'{}' não é um número válido!", entrada.trim());
                    continue;
                }
            },
        }
    }
}

mod calculadora {
    pub fn soma(x: f32, y: f32) -> f32 {
        x + y
    }
    pub fn subtracao(x: f32, y: f32) -> f32 {
        x - y
    }
    pub fn multiplicacao(x: f32, y: f32) -> f32 {
        x * y
    }
    pub fn divisao(x: f32, y: f32) -> Result<f32, String> {
        if y == 0.0 {
            Err(String::from("Erro: Divisão por zero não é permitida!"))
        } else {
            Ok(x / y)
        }
    }
}

fn main() {
    let num_a = funcao_entrada("Entre com o primeiro valor (A):");
    let num_b = funcao_entrada("Entre com o segundo valor (B):");

    let som = calculadora::soma(num_a, num_b);
    let sub = calculadora::subtracao(num_a, num_b);
    let mul = calculadora::multiplicacao(num_a, num_b);
    let div = calculadora::divisao(num_a, num_b);

    println!("{} + {} = {}", num_a, num_b, som);
    println!("{} - {} = {}", num_a, num_b, sub);
    println!("{} * {} = {}", num_a, num_b, mul);

    match div {
        Ok(resultado) => println!("{} / {} = {}", num_a, num_b, resultado),
        Err(erro) => println!("Divisão: {}", erro),
    }
}
```

04 - Crie uma funcao apenas para usar o dead_code

```rust
#[allow(dead_code)]
fn code() {
    println!("Código apenas para exemplo!")
}

fn main() {
    println!("Um código que não vai ser usado!");
}
```

05 - Desenvolva um código que realize as seguintes ações:

- Crie um array (ou lista) vazio(a) com capacidade para 6 elementos.
- Solicite ao usuário que insira os 6 valores para preencher o array.
t- Calcule e imprima a soma de todos os elementos contidos no array.

```rust
use std::io;

fn entrada_dados(mensagem: &str) -> i16 {
    loop {
        println!("{}", mensagem);
        let mut entrada = String::new();
        match io::stdin().read_line(&mut entrada) {
            Ok(_) => match entrada.trim().parse::<i16>() {
                Ok(numero) => return numero,
                Err(_) => {
                    println!("'{}' não é um número válido!", entrada.trim());
                    continue;
                }
            },
            Err(_) => {
                println!("Erro na entrada de dados!");
                continue;
            }
        }
    }
}

fn array_vazio() -> [i16; 6] {
    let mut array_vazio: [i16; 6] = [0; 6];
    let mut index_array: usize = 0;

    loop {
        println!();
        array_vazio[index_array] = entrada_dados("Entre com o valor:");

        println!(
            "Array - Index: {} | Valor: {}",
            index_array, array_vazio[index_array]
        );

        index_array += 1;

        if index_array > 5 {
            println!("Array foi completamente preenchido!");
            break;
        }
    }

    array_vazio
}

fn main() {
    let array = array_vazio();
    let mut array_soma = 0;

    for i in 0..array.len() {
        array_soma += array[i];
    }

    println!("");
    println!("{}", array_soma);
}
```

// or

```rust
fn main() {
    let array = array_vazio();
    let array_soma: i16 = array.iter().sum();
    println!("");
    println!("A soma dos valores do array = {}", array_soma);
}
```

06 - Crie um programa que realize as seguintes tarefas:

A - Crie duas listas/arrays vazias:

- Lista A e B.
- Ambas as listas devem ter capacidade para exatamente 3 elementos cada.
- Inicialize duas variáveis de pontuação, Ponto_a e Ponto_b, com o valor inicial de 0.

B - O programa deve:

- Solicitar ao usuário 6 valores no total (3 para a Lista A e 3 para a Lista B);
- Tem que ser positivos;
- Menor que 100.

C - O programa deve realizar 3 comparações sequenciais, baseadas no índice de cada elemento (i= 0, 1, 2):

- Comparação 1: Lista A [0] vs. Lista B [0]
- Comparação 2: Lista A [1] vs. Lista B [1]
- Comparação 3: Lista A [2] vs. Lista B [2]

D - Atribuição de Pontos:

- Lista A [i] > Lista B [i] | A Lista A ganha 1 ponto;
- Lista A [i] < Lista B [i] | A Lista B ganha 1 ponto;
- Lista A [i] = Lista B [i] | Nenhum dos dois pontua.

E - Pontuação Final:

- Total de pontos da Lista A;
- Total de pontos da Lista B;
- O vencendor foi: " "

```rust
use std::io;

fn entrada(mensagem: &str) -> u8 {
    loop {
        println!("{}", mensagem);

        let mut entrada: String = String::new();
        match io::stdin().read_line(&mut entrada) {
            Ok(_) => match entrada.trim().parse::<u8>() {
                Ok(numero) => return numero,
                Err(_) => {
                    println!("'{}' não é número válido!", entrada.trim());
                    continue;
                }
            },
            Err(_) => {
                println!("Erro na entrada de dados!");
                continue;
            }
        }
    }
}

fn array_a() -> [u8; 3] {
    let mut array_vazio_a: [u8; 3] = [0; 3];
    let mut index_array_a: usize = 0;

    loop {
        println!();
        array_vazio_a[index_array_a] = entrada("Entre com o valor A:");

        println!(
            "Array A - Index: {} | Valor: {}",
            index_array_a, array_vazio_a[index_array_a]
        );

        index_array_a += 1;

        if index_array_a > 2 {
            println!("Array A, foi completamente preenchido!");
            break;
        }
    }
    array_vazio_a
}

fn array_b() -> [u8; 3] {
    let mut array_vazio_b: [u8; 3] = [0; 3];
    let mut index_array_b: usize = 0;

    loop {
        println!();
        array_vazio_b[index_array_b] = entrada("Entre com o valor B:");

        println!(
            "Array B - Index: {} | Valor: {}",
            index_array_b, array_vazio_b[index_array_b]
        );

        index_array_b += 1;

        if index_array_b > 2 {
            println!("Array B, foi completamente preenchido!");
            break;
        }
    }

    array_vazio_b
}

fn comparacao() {
    let array_a = array_a();
    let array_b = array_b();

    let mut pontuacao_a: u8 = 0;
    let mut pontuacao_b: u8 = 0;

    for i in 0..3 {
        if array_a[i] > array_b[i] {
            pontuacao_a += 1;
            println!(
                "Rodada {} - A ({}) > B ({}) - Ponto para A",
                i + 1,
                array_a[i],
                array_b[i]
            );
        } else if array_a[i] < array_b[i] {
            pontuacao_b += 1;
            println!(
                "Rodada {} - A ({}) < B ({}) - Ponto para B",
                i + 1,
                array_a[i],
                array_b[i]
            );
        } else {
            println!(
                "Rodada {} - A ({}) == B ({}) - Empate, sem pontos",
                i + 1,
                array_a[i],
                array_b[i]
            );
        }
    }

    println!("\n--- Resultado Final ---");
    println!("Total de pontos da Lista A: {}", pontuacao_a);
    println!("Total de pontos da Lista B: {}", pontuacao_b);

    if pontuacao_a > pontuacao_b {
        println!("O vencedor foi! A: {}", pontuacao_a);
    } else if pontuacao_a == pontuacao_b {
        println!(
            "Deu empate! A pontuação de - A: {} = B: {}",
            pontuacao_a, pontuacao_b
        );
    } else {
        println!("O vencedor foi! B: {}", pontuacao_b);
    }
}

fn main() {
    comparacao();
}
```
