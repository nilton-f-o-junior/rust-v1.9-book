# Expression:

`(let:type, let:type) → type`

```rust
fn expression_01(x: i8, y: i8) -> i8 {
    // 01
    x + y
}

fn main() {
    // 01
    println!("{}", expression_01(7, 7));
}
```

`Not use: indicates that the function will not be used`

```rust
#[allow(dead_code)]
fn hello () {
	println!("Hello, world!");
}

fn main () {
	println!("...");
}
```

> Organize your code using modules, in the same file or outside it
