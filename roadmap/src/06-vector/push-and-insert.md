# Adding Elements

`push`

Adds an element to the end of the vector.

```rust
let mut vector_push_add: Vec<u8> = Vec::new();

vector_push_add.push(0);
println!("{:?}", vector_push_add);

vector_push_add.push(1);
println!("{:?}", vector_push_add);

vector_push_add.push(2);
println!("{:?}", vector_push_add);
```

`insert`

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

`Error`

When adding an index that does not exist or does not follow the order.

```rust
let mut vector_add: Vec<u8> = Vec::new();

vector_add.insert(0, 10);
vector_add.insert(10, 20);

println!(
  "Vector[0] = {:#?} \nVector[1] = {:#?}",
  vector_add[0], vector_add[10]  
);
```


