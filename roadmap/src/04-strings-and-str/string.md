# Strings

Sequence of UTF-8 characters that can form a word or a phrase, including letters, numbers, symbols, or any other type of special character.

Think of your memory as a cabinet, a variable as a drawer, and a string as a piece of paper.

When you create a "string" variable, you use the entire drawer. But when you create a "&str" variable, you use a piece of paper to write down the information and then put it inside the drawer.

`new()`

```rust
// new()
let create_string: String = String::new();
println!("{}", create_string);
```

`from()`

```rust
// from()
let create_string: String = String::from("Create text!");
println!("{}", create_string);
```

`to_string()`

```rust
// to_string()
let create_string: String = "Create text!".to_string();
println!("{}", create_string);
```

`mut`

```rust
// mut
let mut create_string: String = String::from("Create text!");
println!("{}", create_string);

create_string = "Create new text!".to_string();
println!("{}", create_string);
```
