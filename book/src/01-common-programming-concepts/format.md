# Formatação

A macro `format!` em Rust é usada para melhorar a formatação da saída de dados, utilizando `{}` como *placeholders* (espaços reservados) que serão preenchidos com a informação.

`{}`

```rust
let nome = "Rafael";
let idade = 12;
println!("Oi, eu sou {}, tenho {} anos", nome, idade);
```

```rust
let nome = "Manuela";
let idade = 37;
println!("Oi, eu sou {nome}, tenho {idade} anos");
```

`format!`

Sempre retorna uma `String` com o conteúdo formatado.

```rust
let nome = "Arthur";
let idade = 69;

let texto = format!("Oi, eu sou {}, tenho {} anos", nome, idade);
println!("{}", texto);
```

```rust
let nome = "Charlie Brown";
let idade = 8;

let texto = format!("Eu sou o {nome}, tenho {idade} anos");
println!("{}", texto);
```
> Para mais informações: [std::fmt](https://doc.rust-lang.org/std/fmt/)
