# Mutabilidade

Uma vez que o valor de uma variável é definido, você não pode alterá-lo posteriormente. No entanto, usar `mut` após let torna a variável criada mutável.

`let mut`

```rust
let mut nome = "Fulano";
println!("Qual é o seu nome: {}", nome);

nome = "Ciclano";
println!("Qual é o seu nome: {}", nome);
```

```rust
let mut num = 24;
println!("Qual número você escolheu? {}", num);

num = 12;
println!("Qual número você escolheu? {}", num);
```

`sem mut`

```rust
// erro
let nome = "Fulano";
println!("Qual é o seu nome: {}", nome);

nome = "Ciclano";
println!("Qual é o seu nome: {}", nome);
```
