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
