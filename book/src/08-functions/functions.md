# Functions and Parameters

To declare a function in Rust just use:

`fn name( ) { }`

```rust
fn basic() {
    println!("Hello, world!");
}

fn main() {
    basic();
}
```

Within the parentheses we can add the input parameters, which are variables with their respective data types that the function will receive and use in its body.

`(let:type)`

```rust
fn parameter(x: i8) {
    println!("x = {}", x);
}

fn main() {
    parameter(1);
}
```

We can pass multiple parameters separated by commas

`(let: type, let: type)`

```rust
fn parameter_00(x: i8, y: i8) {
    println!("{} + {} = {}", x, y, x + y);
}

fn main() {
    parameter_00(1, 2);
}    
```
