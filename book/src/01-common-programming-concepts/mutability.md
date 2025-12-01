# Mutabilidade

Uma vez que o valor de uma variável é definido, você não pode alterá-lo posteriormente. No entanto, usar `mut` após let torna a variável criada mutável.

`let mut`

```rust
let mut nome = "Lucy";
println!("Qual é o seu nome: {}", nome);

nome = "Linus";
println!("Qual é o seu nome: {}", nome);
```

```rust
let mut idade = 8;
println!("Qual sua idade? {}", idade);

idade = 6;
println!("Qual sua idade? {}", idade);
```
