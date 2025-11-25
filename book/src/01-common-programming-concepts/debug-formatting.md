# Debug Formatting

In Rust, `{:?}` and `{:#?}` are format specifiers that use the `Debug` trait to format values.

`{:?}`

```rust
let person: (&str, u8, f32) = ("Rodolfo", 40, 1.70);
println!("{:?}", person);
```

`{:#?}`

```rust
let person: (&str, u8, f32) = ("Rodolfo", 40, 1.70);
println!("{:#?}", person);
```

`{var:?}`

```rust
let person: (&str, u8, f32) = ("Rodolfo", 40, 1.70);
println!("{person:#?}");

```

`Error`

```rust 
let person: (&str, u8, f32) = ("Rodolfo", 40, 1.70);
println!("{}", person);
```
