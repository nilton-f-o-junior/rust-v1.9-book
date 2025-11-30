# Constante

A constante é uma identificador com valor fixo e imutável, tipo explícito e pode ser declarada em qualquer escopo.

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

> O tópico de **tipos de dados** será abordado no próximo capítulo.
