# Módulos - Internos

Módulos definidos diretamente no mesmo arquivo, úteis para organização sem a criação de arquivos separados.

`mod`

```rust
mod calculo {

    pub fn soma(a: i8, b: i8) -> i8 {
        a + b
    }

    pub fn sub(c: i8, d: i8) -> i8 {
        c - d
    }
}

mod texto {

    pub fn imprimir() {
        println!("Olá, mundo!");
    }
}

fn main() {
    let soma = calculo::soma(1, 2);
    println!("Resultado: {}", soma);

    let subtracao = calculo::sub(5, 2);
    println!("Resultado: {}", subtracao);

    texto::imprimir();
}
```
