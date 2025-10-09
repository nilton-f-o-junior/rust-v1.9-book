# Modules - mod.rs

Special file used to define a module in a directory, making it public and serving as an entry point for hierarchical structures.

```rust
// Tree
/*
project/
├── Cargo.toml
└── src/
    ├── main.rs
    └── calc/
        ├── mod.rs
        ├── sum.rs
        └── sub.rs
*/

// calc/mod.rs
pub mod sub;
pub mod sum;

pub use sub::cal_sub;
pub use sum::cal_sum;

// calc/sum.rs
pub fn cal_sum(a: i8, b: i8) -> i8 {
    a + b
}

// calc/sub.rs
pub fn cal_sub(c: i8, d: i8) -> i8 {
    c - d
}

// main.rs
mod calc;

// use
use calc::{cal_sub, cal_sum};

fn main() {
    println!("Sum: {}", cal_sum(7, 7));
    println!("Sub: {}", cal_sub(7, 7));
}
```
