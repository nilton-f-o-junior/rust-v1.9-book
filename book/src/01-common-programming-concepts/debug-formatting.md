# Formatação para Debugging

Em Rust, `{:?}` e `{:#?}` são especificadores de formato que utilizam o *trait* `Debug` para exibir a representação interna de valores. São especialmente úteis para depuração e inspeção durante o desenvolvimento.


`{:?}`

```rust
// saída compacta
let pessoa: (&str, u8, f32) = ("Laura", 19, 1.77);
println!("{:?}", pessoa);
```

`{:#?}`

```rust
// saída mais legível
let pessoa: (&str, u8, f32) = ("Pedro", 90, 1.90);
println!("{:#?}", pessoa);
```

`{var:?} ou {var:#?}`

```rust
let pessoa: (&str, u8, f32) = ("Violet", 28, 1.58);
println!("{pessoa:?}");
```
```rust
let pessoa: (&str, u8, f32) = ("Violet", 28, 1.58);
println!("{pessoa:#?}");
```
