# Escopo

Envolver um código entre chaves `{}` cria um novo escopo (bloco de código) que limita a visibilidade das variáveis definidas dentro dele, logo não pode ser acessada fora daquele bloco.

```rust
let numero = 1;
println!("{}", numero);

{
  let numero = 2;
  println!("{}", numero);
}

println!("{}", numero);
```

```rust
let nome = "Fulano";
println!("{}", nome);

{
  let nome = "Siclano";
  println!("{}", nome);
}

println!("{}", nome);
```
