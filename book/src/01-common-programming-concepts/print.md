# Print

A macro print! e suas variações são usadas para depuração, informar o usuário e gerar saída formatada.

`print!`

```rust
// imprime o texto sem quebra de linha
print!("Olá,");
print!("mundo!");
print!("...");
```

`println!`

```rust
// imprime o texto com quebra de linha
println!("Olá,");
println!("mundo!");
println!("...");
```

`eprint!`

```rust
// imprime o texto de erro sem quebra de linha
eprint!("ERRO:");
eprint!("Falha ao carregar arquivo!");
```

`eprintln!`

```rust
// imprime o texto de erro com quebra de linha
eprintln!("ERRO:");
eprintln!("Falha ao carregar arquivo!");
```

> Nota: O usuário pode redirecionar a saída normal de seu programa para um arquivo usando (>) e as mensagens de erro para o terminal.
