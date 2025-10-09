# Vector

A vector in Rust is a homogeneous array that can be started empty, so values can be added, modified, or removed.

- inicialized

```rust
//
let my_vector_u8: Vec<u8> = vec![0, 1, 2, 3, 4];
println!("Vector u8 = {:#?}", my_vector_u8);

//
let my_vector_str: Vec<&str> = vec!["a", "b", "c", "d"];
println!("Vector &str = {:?}", my_vector_str);

//
let my_vector_f32 = vec![0.1, 0.2];
println!("Vector f32 = {:?}", my_vector_f32);
```

- index

```rust
//
let vector_index: Vec<u16> = vec![0, 1, 2];
println!("i[0] = {:?}", vector_index[0]);
println!("i[0] = {:?}", vector_index[1]);
println!("i[0] = {:?}", vector_index[2]);

// let + index
let vector_index_alph: Vec<&str> = vec!["x", "y"];
let vector_alph: &str = vector_index_alph[1];
println!("Vector Alph = {}", vector_alph);
```

- push

```rust
//
let mut vector_push_add: Vec<u8> = Vec::new();
vector_push_add.push(0);
println!("Vector Add = {:?}", vector_push_add);

vector_push_add.push(1);
println!("Vector Add = {:?}", vector_push_add);

vector_push_add.push(2);
println!("Vector Add = {:?}", vector_push_add);
```

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

- pop

```rust
//
let mut vector_pop_delete: Vec<char> = vec!['a', 'b', 'c', 'd'];
println!("Vector Pop = {:#?}", vector_pop_delete);

vector_pop_delete.pop();
println!("Vector Pop = {:#?}", vector_pop_delete);

vector_pop_delete.pop();
println!("Vector Pop = {:#?}", vector_pop_delete);
```

- remove

```rust
// vector.remove[index]
let mut vector_delete: Vec<&str> = vec!["A", "B", "C", "D", "E"];
println!("Vector Remove = {:?}", vector_delete);

vector_delete.remove(1);
println!("Vector Remove = {:?}", vector_delete);

vector_delete.remove(3);
println!("Vector Remove = {:?}", vector_delete);
```

- repeat

```rust
//
let vector_repeat: Vec<u8> = vec![0; 5];
println!("Vector Repeat = {:#?}", vector_repeat);
```
