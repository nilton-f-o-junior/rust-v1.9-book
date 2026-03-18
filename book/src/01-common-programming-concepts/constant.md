# Constante

A constante é um identificador com valor fixo e imutável, avaliado em tempo de compilação. Por convenção, o nome de constantes em Rust é escrito em `SCREAMING_SNAKE_CASE`.

```rust
const PI: f32 = 3.14159;

fn main () {
    println!("{:.2}", PI);
}
```

```rust
const ERROR_404: &str = "Erro 404";

fn main () {
    println!("{}", ERROR_404);
}
```

> O tópico de **tipos de dados** será abordado em detalhes no próximo capítulo.
