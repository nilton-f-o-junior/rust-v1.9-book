# Escopo

Envolver um código entre chaves `{}` cria um novo escopo (bloco de código) que limita a visibilidade das variáveis definidas dentro dele, logo não pode ser acessada fora daquele bloco.

```rust
let numero = 40;
println!("{}", numero);

{
  let numero = 0;
  println!("{}", numero);
}

println!("{}", numero);
```

```rust
let nome = "Rerun";
println!("{}", nome);

{
  let nome = "Spike";
  println!("{}", nome);
}

println!("{}", nome);
```
