# Formatação para Debugging

Em Rust, `{:?}` e `{:#?}` são especificadores de formato que utilizam o *trait* Debug para formatar valores.

`{:?}`

```rust
let pessoa: (&str, u8, f32) = ("Laura", 19, 1.77);
println!("{:?}", pessoa);
```

`{:#?}`

```rust
let pessoa: (&str, u8, f32) = ("Pedro", 90, 1.90);
println!("{:#?}", pessoa);
```

`{var:?}`

```rust
let pessoa: (&str, u8, f32) = ("Violet", 28, 1.28);
println!("{pessoa:#?}");

```
