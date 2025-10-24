# Index

Vectors can be accessed by index using square brackets [position].

`index`

```rust
let vector_index: Vec<&str> = vec!["a", "b", "c"];
println!("i[0] = {:?}", vector_index[0]);
println!("i[1] = {:?}", vector_index[1]);
println!("i[2] = {:?}", vector_index[2]);
```

`let + index`

```rust
let vector_index_alph: Vec<&str> = vec!["x", "y"];
let vector_alph: &str = vector_index_alph[1];
println!("Vector Alph = {}", vector_alph);
```

`index + mut`

```rust
let mut vector_index: Vec<&str> = vec!["A", "B", "C"];
println!("{:#?}\n", vector_index);

vector_index[1] = "b";
println!("{:#?}", vector_index);
```

`repeat`

```rust
//
let vector_repeat: Vec<u8> = vec![0; 5];
println!("Vector Repeat = {:#?}", vector_repeat);
```

```rust
let vector_repeat: Vec<&str> = vec!["Error"; 3];
println!("Vector Repeat = {:#?}", vector_repeat);
```
