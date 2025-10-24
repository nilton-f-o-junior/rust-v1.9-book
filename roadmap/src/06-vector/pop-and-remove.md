# Remove Elements

`pop`

Removes the last element from the vector.

```rust
//
let mut vector_delete: Vec<char> = vec!['a', 'b', 'c', 'd'];
println!("{:?}", vector_delete);

vector_delete.pop();
println!("{:?}", vector_delete);

vector_delete.pop();
println!("{:?}", vector_delete);
```

`remove`

Removes the element at a specific index, shifting all elements after it to the left.

```rust
// vector.remove[index]
let mut vector_delete: Vec<&str> = vec!["A", "B", "C", "D", "E"];
println!("{:?}", vector_delete);

vector_delete.remove(1);
println!("{:?}", vector_delete);

vector_delete.remove(3);
println!("{:?}", vector_delete);
