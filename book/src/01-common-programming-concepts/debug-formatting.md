# Formatação para Debugging

Em Rust, `{:?}` e `{:#?}` são especificadores de formato que utilizam o *trait* Debug para formatar valores.

`{:?}`

```rust
let person: (&str, u8, f32) = ("Peppermint", 9, 1.37);
println!("{:?}", person);
```

`{:#?}`

```rust
let person: (&str, u8, f32) = ("Sally", 5, 1.12);
println!("{:#?}", person);
```

`{var:?}`

```rust
let person: (&str, u8, f32) = ("Violet", 8, 1.28);
println!("{person:#?}");

```
