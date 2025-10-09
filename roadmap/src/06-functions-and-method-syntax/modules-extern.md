# Modules - Extern

```rust
// Tree
/*
project/
├── Cargo.toml
└── src/
    ├── main.rs
    ├── sum.rs
    ├── sub.rs
    ├── mult.rs
    └── div.rs
*/

// sum.rs
pub fn cal_sum(a: i8, b: i8) -> i8 { a + b }

// sub.rs
pub fn cal_sub(c: i8, d: i8) -> i8 { c - d }

// mult.rs
pub fn cal_mult(e: i8, f: i8) -> i8 { e * f }

// div.rs
pub fn cal_div(g: i8, h: i8) -> i8 { g / h }

// main.rs
mod sum;
mod sub;
mod mult;
mod div;

use {sum::cal_sum, sub::cal_sub, mult::cal_mult, div::cal_div};

fn main() {
   println!("Sum: {}", cal_sum(1, 1));
   println!("Sub: {}", cal_sub(2, 2));
   println!("Mult: {}", cal_mult(3, 3));
   println!("Div: {}", cal_div(4, 4));
}
```
