# Shadowing

Você pode declarar uma nova variável com o mesmo nome de uma variável existente, mas o valor da variável anterior será substituído.

```rust
let food = "bread";
println!("{}", food);

let food = "milk";
println!("{}", food);

let food = "pizza";
println!("{}", food);
```

```rust
let animal = "Cat";
println!("{}", animal);

let animal = "Dog";
println!("{}", animal);

let animal = "Bird";
println!("{}", animal);
```

```rust
let num: i8 = 2;
println!("{}", num);

let num: f32 = 4.;
println!("{}", num);
```
