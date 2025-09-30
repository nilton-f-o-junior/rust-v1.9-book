# Constant

The constant is a variable with a fixed, immutable value, explicit type, and can be declared in any scope.

```rust
//
const PI: f32 = 3.14159;

fn main () {
    println!("{:.2}", PI);
}
```

```rust
//
const ERROR_404: &str = "Error 404!";

fn main () {
    println!("{}", ERROR_404);
}
```

> The topic of **data types** will be covered in the next chapter.
