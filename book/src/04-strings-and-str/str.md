# &str

Represents an immutable reference to a UTF-8 text sequence, used as strings without needing to allocate memory on the heap.

`&str`

```rust
let create_str: &str = "Hello, word!";
println!("{}", create_str);
```

```rust
let create_str = "Hello, word!";
println!("{}", create_str);
```

`slice`

```rust
let create_str = "Hello, word!";
let slice_str = &create_str[0..4];
println!("{}", slice_str);
```
