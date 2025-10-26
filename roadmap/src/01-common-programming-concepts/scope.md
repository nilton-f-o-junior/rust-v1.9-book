# Scope

Enclosing a block of code within curly braces {} creates a new scope that limits the visibility of variables defined within it. Variables defined in outer scopes remain accessible, but can be "shadowed" by variables with the same name in the inner scope.

```rust
let x = 1;
println!("{}", x);

{
  let x = 2;
  println!("{}", x);
}

println!("{}", x);
```

```rust
let name = "Alice";
println!("{}", name);

{
  let name = "Rodolfo";
  println!("{}", name);
}

println!("{}", name);
```
