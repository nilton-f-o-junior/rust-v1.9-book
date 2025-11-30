# Shadowing (Sombreamento)

Você pode declarar uma nova variável com o mesmo nome de uma variável existente, mas o valor da variável anterior será substituído.

```rust
let comida = "pão";
println!("{}", comida);

let comida = "leite";
println!("{}", comida);

let comida = "pizza";
println!("{}", comida);
```

```rust
let animal = "gato";
println!("{}", animal);

let animal = "cachorro";
println!("{}", animal);

let animal = "pássaro";
println!("{}", animal);
```

```rust
let numero: i8 = 2;
println!("{}", numero);

let numero: f32 = 4.;
println!("{}", numero);
```
