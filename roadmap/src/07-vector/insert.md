# Insert

Adds an element at a specific index, shifting all elements after it to the right.

`vector.inset[index, element]`

```rust
let mut vector_add: Vec<u8> = Vec::new();

vector_add.insert(0, 10);
vector_add.insert(1, 20);

println!(
  "Vector[0] = {:#?} \nVector[1] = {:#?}",
  vector_add[0], vector_add[1]
);
```
