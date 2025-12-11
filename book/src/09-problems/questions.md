# Questões - Funções

Crie uma função simples apenas para imprimir "Olá, mundo!" na tela.

```rust
fn texto() {
    println!("Olá, mundo!");
}

fn main() {
    texto();
}
```

Crie uma função para imprimir um valor fornecido pelo usuário.

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

Crie um programa que:

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

Crie uma funcao apenas para usar o dead_code

```rust
#[allow(dead_code)]
fn code() {
    println!("Código apenas para exemplo!")
}

fn main() {
    println!("Um código que não vai ser usado!");
}
```

