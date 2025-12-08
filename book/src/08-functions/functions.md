# Funções e Parâmetros

Para declarar uma função em Rust, basta usar:

`fn nome( ) { }`

```rust
fn basica() {
    println!("Olá, mundo!");
}

fn main() {
    basica();
}
```

Dentro dos parênteses, podemos adicionar os parâmetros de entrada, que são variáveis com seus respectivos tipos de dados que a função receberá e usará em seu corpo.

`(variavel:tipo)`

```rust
fn parametro(x: i8) {
    println!("x = {}", x);
}

fn main() {
    parametro(1);
}
```

Podemos passar múltiplos parâmetros separados por vírgulas:

`(variavel: tipo, variavel: tipo)`

```rust
fn parametro_00(x: i8, y: i8) {
    println!("{} + {} = {}", x, y, x + y);
}

fn main() {
    parametro_00(1, 2);
}
```
