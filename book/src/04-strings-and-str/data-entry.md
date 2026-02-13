# Entrada de Dados

Refere-se à entrada de dados, ou seja, à sua captura, validação e processamento.

`std::io`

```rust
// importa o módulo io
use std::io;

fn main () {
    //
    println!("Entrada de texto:");
    let mut input:String = Sring::new();
    io::stdin().read_line(&mut input).expect("Erro de entrada de dados!");
    // io::stdin().read_line(&mut input).unwrap();
}
```
- unwrap() - Se ocorrer um erro, o programa trava com um panic;
- expect() - Se ocorrer um erro, ele trava, mas com a sua mensagem personalizada.

`char`

```rust
use std::io;

fn main() {
    println!("Entrada do caractere:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro de entrada de dados!");

    // trim() remove espaços em branco, chars() itera sobre caracteres, next() pega o primeiro
    let ch: char = input.trim().chars().next().unwrap();
    println!("{}", ch);
}
```

`match`

```rust
use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();

    match input.trim().parse::<u8>() {
        Ok(input) => input,
        Err(_) => {
            println!("Erro!");
            return;
        }
    };
}
```

```rust
use std::io;

fn main () {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Erro de entrada de dados!");

    let ch: u8 = match input.trim().parse() {
        Ok(n) => n,
        Err(_) => {
          println!("Erro de entrada!");
          return;
        }
    };  
}
```
