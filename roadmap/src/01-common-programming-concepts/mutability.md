# Mutability

Once a variable's value is set, you cannot change it later. However, using "mut" after "let" makes the created variable mutable.

`let mut`

```rust
//
let mut name = "Alice";
println!("What is your name: {}", name);

name = "Roberto";
println!("What is your name: {}", name);
```

```rust
//
let mut num = 24;
println!("Which number did you choose? {}", num);

num = 12;
println!("Which number did you choose? {}", num);
```

`not mut`

```rust
// error
let name = "Alice";
println!("What is your name: {}", name);

name = "Roberto";
println!("What is your name: {}", name);
```
