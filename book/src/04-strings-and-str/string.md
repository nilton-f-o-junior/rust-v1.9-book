# Strings

Strings são sequências de caracteres UTF-8 que podem formar uma palavra ou frase, incluindo letras, números, símbolos ou qualquer outro tipo de caractere especial.

`new()`

```rust
// cria uma string vazia
let cria_string: String = String::new();
println!("{}", cria_string);
```

`from()`

```rust
// cria uma string a partir de um literal de string (&str)
let cria_string: String = String::from("Grande texto!");
println!("{}", cria_string);
```

`to_string()`

```rust
// converte um literal de string (&str) em uma string
let cria_string: String = "Mais um grande texto!".to_string();
println!("{}", cria_string);
```

`mut`

```rust
let mut cria_string: String = String::from("Quase um grande texto!");
println!("{}", cria_string);

cria_string = "Último grande texto!".to_string();
println!("{}", cria_string);
```
