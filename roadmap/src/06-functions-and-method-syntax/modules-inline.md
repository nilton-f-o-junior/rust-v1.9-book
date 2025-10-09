# Modules - Inline

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
    //
    let sum = cal::sum(1, 2);
    println!("Result: {}", sum);

    let sub = cal::sub(5, 2);
    println!("Result: {}", sub);

    //
    text::tprint();
}
```
