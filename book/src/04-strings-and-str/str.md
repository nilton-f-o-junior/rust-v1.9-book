# &str

Também conhecido como string *slice* ou fatia de string, representa uma referência imutável a uma sequência de texto UTF-8. É usado como string sem a necessidade de alocar memória no *heap*.

`&str`

```rust
let cria_str: &str = "Pequeno texto!";
println!("{}", cria_str);
```

```rust
let cria_str = "Outro pequeno texto!";
println!("{}", cria_str);
```

`slice`

```rust
let cria_str = "Último pequeno texto!";
let slice_str = &cria_str[0..8];
println!("{}", slice_str);
```
