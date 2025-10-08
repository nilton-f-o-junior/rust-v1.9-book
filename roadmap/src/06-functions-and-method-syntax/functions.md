# Functions and Parameters

`fn`

```rust
fn basic() {
    println!("Hello, world!");
}

fn main() {
    // 
    basic();
}
```

`(let:type)`

```rust
fn parameter(x: i8) {
    println!("x = {}", x);
}

fn main() {
    // 
    parameter(1);
}
```

```rust
fn parameter_00(x: i8, y: i8) {
    // 
    println!("{} + {} = {}", x, y, x + y);
}

fn main() {
    // 
    parameter_00(1, 2);
}    
```
