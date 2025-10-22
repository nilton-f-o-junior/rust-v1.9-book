- insert

```rust
// vector.insert[index, element]
let mut vector_add: Vec<u8> = Vec::new();

vector_add.insert(0, 0);
println!("Vector Insert = {:?}", vector_add);

vector_add.insert(1, 1);
println!("Vector Insert = {:?}", vector_add);

vector_add.insert(0, 2);
println!("Vector Insert = {:?}", vector_add);

vector_add.insert(1, 3);
println!("Vector Insert = {:?}", vector_add);
```
