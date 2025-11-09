# Format

The format! macro in Rust is used to improve data output formatting by using curly braces "{}" as placeholders that will be filled with the information.

`{}`

```rust
let name = "Alice";
let years = 30;
println!("Hi, I'm {}, {} years old", name, years);
```

```rust
let name = "Alice";
let years = 30;
println!("Hi, I'm {name}, {years} years old");
```

`format!`

Always returns a `String` with the formatted content.

```rust
let name = "Alice";
let years = 30;

let text = format!("Hi, I'm {}, {} years old", name, years);
println!("{}", text);
```

```rust
let name = "Alice";
let years = 30;

let text = format!("Hi, I'm {name}, {years} years old");
println!("{}", text);
```
> For more information, see the [Rust std::fmt documentation](https://doc.rust-lang.org/std/fmt/).
