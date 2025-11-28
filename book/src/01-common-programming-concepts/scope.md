# Escopo

Envolver um bloco de código entre chaves `{}` cria um novo escopo que limita a visibilidade das variáveis definidas dentro dele.

```rust
let x = 1;
println!("{}", x);

{
  let x = 2;
  println!("{}", x);
}

println!("{}", x);
```

```rust
let name = "Alice";
println!("{}", name);

{
  let name = "Rodolfo";
  println!("{}", name);
}

println!("{}", name);
```
