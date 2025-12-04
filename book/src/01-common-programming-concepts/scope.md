# Escopo

Envolver um código entre chaves `{}` cria um novo escopo (bloco de código) que limita a visibilidade das variáveis definidas dentro dele, logo não pode ser acessada fora daquele bloco.

```rust
let nome = "Aurora";
println!("{}", nome);

{
  let nome = "Ravi";
  println!("{}", nome);
}

println!("{}", nome);
```

```rust
let numero = 40;
println!("{}", numero);

{
  let numero = 0;
  println!("{}", numero);
}

println!("{}", numero);
```

