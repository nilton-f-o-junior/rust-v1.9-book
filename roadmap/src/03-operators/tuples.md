# Tuples

Store multiple data items of different types in a fixed-size structure.

`tuple`

```rust
//
let tup: (u8, u8) = (1, 4);
println!("{:?}", tup.0 + tup.1);
```

```rust
//
let tup: (u8, u8);
tup = (3, 8);
println!("{:?}", tup.0 + tup.1);
```

`tuple + tuple`

```rust
//
let tup: ((u8, u8),(u8, u8)) = ((2, 4),(6, 16));
println!("{:?}", tup.0.0 + tup.0.1);
println!("{:?}", tup.1.0 + tup.1.1);
println!("{:?}", tup.0.0 + tup.1.0);
println!("{:?}", tup.0.1 + tup.1.1);
```

```rust
//
let tup_01: (u8, u8) = (1, 4);
let tup_02: (u8, u8) = (14, 9);

let result = tup_01.0 + tup_01.1 + tup_02.0 + tup_02.1;
println!("{:?}", result);
```
