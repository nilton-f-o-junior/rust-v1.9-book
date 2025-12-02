# Mutabilidade

Uma vez que o valor de uma variável é definido, você não pode alterá-lo posteriormente. No entanto, usar `mut` após let torna a variável criada mutável.

`let mut`

```rust
let mut nome = "Miguel";
println!("Qual é o seu nome: {}", nome);

nome = "Sophia";
println!("Qual é o seu nome: {}", nome);
```

```rust
let mut idade = 87;
println!("Qual sua idade? {}", idade);

idade = 49;
println!("Qual sua idade? {}", idade);
```
