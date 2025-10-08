# Modules

`mod`

```rust
mod cal {

    pub fn sum(a: i8, b: i8) -> i8 {
        a + b
    }

    pub fn sub(c: i8, d: i8) -> i8 {
        c - d
    }
}

mod text {

    pub fn tprint() {
        println!("Hello, world!");
    }
}

fn main() {
    let sum = cal::sum(1, 2);
    println!("Result: {}", sum);

    let sub = cal::sub(5, 2);
    println!("Result: {}", sub);

    text::tprint();
}
```

`files + mod`

```rust
// tree
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
pub fn cal_sum(a: i8, b: i8) -> i8 {
	a + b
}

// sub.rs
pub fn cal_sub(c: i8, d: i8) -> i8 {
	c - d
}

// mult.rs
pub fn cal_mult(e: i8, f: i8) -> i8 {
	e * f
}

// div.rs
pub fn cal_div(g: i8, h: i8) -> i8 {
	g / h
}

// main.rs
mod sum;
mod sub;
mod mult;
mod div;

fn main() {
   let result_sum = sum::cal_sum(1, 1);
   println!("Result sum = {}", result_sum);

   let result_sub = sub::cal_sub(2, 2);
   println!("Result sub = {}", result_sub);

   let result_mult = mult::cal_mult(3, 3);
   println!("Result multi = {}", result_mult);

   let result_div = mult::cal_div(4, 4);
   println!("Result div = {}", result_div);

}
