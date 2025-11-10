# Shadowing

You can declare a new variable with the same name as an existing one, but the previous one will have its value replaced.

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

> The topic of **data types** will be covered in the next chapter.
