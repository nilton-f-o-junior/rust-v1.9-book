# Métodos - Parte 2

Usados para manipulação e modificação de conteúdo de texto.

`is_empty()`

```rust
// verifica se a string está vazia
let text = "Hello, word!";
println!("{}", text.is_empty());
```

`contains()`

```rust
// verifica se contém substring
let text = "Hello, word!";
println!("{}", text.contains("ello"));
```

`starts_with() and ends_with()`

```rust
// verifica se a string começa/termina com a substring fornecida
let text = "Hello, word!";
println!("{}", text.starts_with("He"));
println!("{}", text.ends_with("d!"));
```

`find()`

```rust
// encontra posição(índice) de substring
let text = "Hello, word!";
println!("{:?}", text.find("H"));
```

`to_uppercase() and to_lowercase()`

```rust
// conversão para maiúsculas/minúsculas
let text = "Hello, word!";
println!("{:?}", text.to_uppercase());
println!("{:?}", text.to_lowercase());
```

`trim()`

```rust
// remove espaços das extremidades
let text = "  Hello, word!  ";
println!("{:?}", text.trim());
```

`replace()`

```rust
// substitui todas as ocorrências
let text = "Hello, word!";
println!("{:?}", text.replace("word", "hello"));
```

`replacen()`

```rust
// substitui apenas N ocorrências
let text = "Hello, word!";
println!("{:?}", text.replacen("o", "a", 1));
```
