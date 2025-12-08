# Módulos - mod.rs

Arquivo especial usado para definir um módulo em um diretório, tornando-o público e servindo como ponto de entrada para estruturas hierárquicas.

```rust
// Estrutura de Arquivos
/*
projeto/
├── Cargo.toml
└── src/
    ├── main.rs
    └── calc/
        ├── mod.rs
        ├── soma.rs
        └── sub.rs
*/

// calc/mod.rs
pub mod sub;
pub mod soma;

pub use sub::calcular_sub;
pub use soma::calcular_soma;

// calc/soma.rs
pub fn calcular_soma(a: i8, b: i8) -> i8 {
    a + b
}

// calc/sub.rs
pub fn calcular_sub(c: i8, d: i8) -> i8 {
    c - d
}

// main.rs
mod calc;

use calc::{calcular_sub, calcular_soma};

fn main() {
    println!("Soma: {}", calcular_soma(7, 7));
    println!("Subtração: {}", calcular_sub(7, 7));
}
```
