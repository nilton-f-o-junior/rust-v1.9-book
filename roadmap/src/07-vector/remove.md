remove

```rust
// vector.remove[index]
let mut vector_delete: Vec<&str> = vec!["A", "B", "C", "D", "E"];
println!("Vector Remove = {:?}", vector_delete);

vector_delete.remove(1);
println!("Vector Remove = {:?}", vector_delete);

vector_delete.remove(3);
println!("Vector Remove = {:?}", vector_delete);
```
