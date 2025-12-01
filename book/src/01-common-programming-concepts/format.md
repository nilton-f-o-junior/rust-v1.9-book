# Formatação

A macro `format!` em Rust é usada para melhorar a formatação da saída de dados, utilizando `{}` como *placeholders* (espaços reservados) que serão preenchidos com a informação.

`{}`

```rust
let nome = "Franklin";
let idade = 8;
println!("Oi, eu sou {}, tenho {} anos", nome, idade);
```

```rust
let nome = "Schroeder";
let idade = 6;
println!("Oi, eu sou {nome}, tenho {idade} anos");
```

`format!`

Sempre retorna uma `String` com o conteúdo formatado.

```rust
let nome = "Marcie";
let idade = 9;

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
