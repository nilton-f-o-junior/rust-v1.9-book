# Vector

A vector in Rust is a dynamic, homogeneous collection that can be initialized empty and allows values to be added, modified, or removed at runtime.

`vector =`

```rust
let vector_str = vec!["a", "b", "c"];
println!("Vector = {:#?}", vector_str);
```

`Vec<type>`

```rust
let vector_u8: Vec<u8> = vec![1, 2, 3];
println!("Vector = {:#?}", vector_u8);
```

`Vec::new()`

```rust
let mut vector_i16: Vec<i16> = Vec::new();
vector_i16.push(10);
println!("Vector = {:#?}", vector_i16);
```

`Vec<_>`

```rust
let vector_no_type: Vec<_> = vec!["A", "B", "C"];
println!("Vector = {:#?}", vector_no_type);
```

`vec![value; quantity]`

```rust
let vector_default = vec![0; 6];
println!("Vector = {:#?}", vector_default);
```

`vector = array`

```rust
let vector_array = [10, 20, 30];
let vector = Vec::from(vector_array);
println!("Vector = {:#?}", vector);
```

`vector = tuple`

```rust

```
