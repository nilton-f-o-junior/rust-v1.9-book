# Formatação para Depuração

Em Rust, `{:?}` e `{:#?}` são especificadores de formato que utilizam o *trait* Debug para formatar valores.

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

`Erro`

```rust 
let person: (&str, u8, f32) = ("Rodolfo", 40, 1.70);
println!("{}", person);
```
