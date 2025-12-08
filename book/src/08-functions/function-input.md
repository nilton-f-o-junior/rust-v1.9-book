# Função - Entrada

```rust
use std::io;

fn funcao_entrada(aviso: &str) -> f32 {

    loop {
        println!("{}", aviso);
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

fn main() {
    let numero = funcao_entrada("Insira um número:");
    println!("Número escolhido: {}", numero);
}
```



