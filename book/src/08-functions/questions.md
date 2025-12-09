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

```


Crie uma funcao apenas para usar o dead_code





Criar uma funcao que solicita um indice especifico do vetor e o remove, depois imprimi o vetor

Crie uma funcao que solicita um numero de indices de um vector e os remove e depois os imprime para o usuario.
