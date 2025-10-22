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
