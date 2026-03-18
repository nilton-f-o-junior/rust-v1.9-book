# Print

A macro `print!` e suas variações são usadas para depuração, informar o usuário e gerar saída formatada.

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

> Em terminais Unix, você pode redirecionar a saída padrão com `>` e a saída de erro com `2>`:
 > ```bash
 > cargo run > saida.txt 2> erros.txt
 > ```
