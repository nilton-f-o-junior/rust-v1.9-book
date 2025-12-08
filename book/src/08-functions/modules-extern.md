# Módulos - Externos

Permitem a importação de funcionalidades de arquivos/módulos externos (fora do main.rs) para o projeto.

```rust
// Estrutura de Arquivos
/*
projeto/
├── Cargo.toml
└── src/
    ├── main.rs
    ├── soma.rs
    ├── sub.rs
    ├── mult.rs
    └── div.rs
*/

// soma.rs
pub fn calcular_soma(a: i8, b: i8) -> i8 { a + b }

// sub.rs
pub fn calcular_sub(c: i8, d: i8) -> i8 { c - d }

// mult.rs
pub fn calcular_mult(e: i8, f: i8) -> i8 { e * f }

// div.rs
pub fn calcular_div(g: i8, h: i8) -> i8 { g / h }

// main.rs
mod soma;
mod sub;
mod mult;
mod div;

use {soma::calcular_soma, sub::calcular_sub, mult::calcular_mult, div::calcular_div};

fn main() {
   println!("Soma: {}", calcular_soma(1, 1));
   println!("Subtração: {}", calcular_sub(2, 2));
   println!("Multiplicação: {}", calcular_mult(3, 3));
   println!("Divisão: {}", calcular_div(4, 4));
}
```
