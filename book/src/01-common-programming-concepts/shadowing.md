# Shadowing (Sombreamento)

Você pode declarar uma nova variável com o mesmo nome de uma variável existente, mas o valor da variável anterior será substituído.

```rust
let comida = "Pizza";
println!("{}", comida);

let comida = "Biscoitos";
println!("{}", comida);

let comida = "Sorvete";
println!("{}", comida);
```

```rust
let animal = "Cachorro";
println!("{}", animal);

let animal = "Pássaro";
println!("{}", animal);

let animal = "Gato";
println!("{}", animal);
```

```rust
let numero: i8 = 80;
println!("{}", numero);

let numero: f32 = 2.;
println!("{}", numero);
```
