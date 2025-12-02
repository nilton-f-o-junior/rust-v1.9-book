# Precedência

A ordem na qual as operações são realizadas em uma expressão.

`()`

```rust
let preced: [i8; 2] = [5, 3];
println!("{:?}", preced[0] + preced[1] * preced[1]);

// ()
println!("{:?}", (preced[0] + preced[1]) * preced[1]);
```

`*, / and %`

```rust
let preced: [i8; 2] = [5, 3];
println!("{:?}", preced[0] * preced[1] / preced[1] % preced[1]);
```

`+ and -`

```rust
let preced: [i8; 2] = [5, 3];
println!("{:?}", preced[0] + preced[1] - preced[0] + preced[0] * preced[0]);
```
