# Métodos - Parte 2

Usados para manipulação e modificação de conteúdo de texto.

`is_empty()`

```rust
// verifica se a string está vazia
let text = "Hello, world!";
println!("{}", text.is_empty());
```

`contains()`

```rust
// verifica se contém substring
let text = "Hello, world!";
println!("{}", text.contains("ello"));
```

`starts_with() / ends_with()`

```rust
// verifica se a string começa/termina com a substring fornecida
let text = "Hello, world!";
println!("{}", text.starts_with("He"));
println!("{}", text.ends_with("d!"));
```

`find()`

```rust
// encontra posição(índice) de substring
let text = "Hello, world!";
println!("{:?}", text.find("H"));
```

`to_uppercase() / to_lowercase()`

```rust
// conversão para maiúsculas/minúsculas
let text = "Hello, world!";
println!("{:?}", text.to_uppercase());
println!("{:?}", text.to_lowercase());
```

`trim()`

```rust
// remove espaços das extremidades
let text = "  Hello, world!  ";
println!("{:?}", text.trim());
```

`replace()`

```rust
// substitui todas as ocorrências
let text = "Hello, world!";
println!("{:?}", text.replace("word", "Snoopy"));
```

`replacen()`

```rust
// substitui apenas N ocorrências
let text = "Hello, world!";
println!("{:?}", text.replacen("o", "a", 1));
```
