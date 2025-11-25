# Array

A fixed-size sequence of elements where all items must be of the same data type.

```rust
let list: [u8; 3] = [1, 2, 3];
println!("{:?}", list);
```

```rust
let list: [u8; 3] = [4, 3, 2];
println!("{:#?}", list);
```

```rust
let list = ['a', 'b', 'c' , 'd'];
println!("{:?}", list);
```

```rust
let list: [&str; 3];
list = ["ab", "cd", "de"];
println!("{:#?}", list);
```

```rust
let [a, b, c]: [&str; 3] = ["xy", "yz", "zw"];
let list = [a, b, c];
println!("{:?}", list);
```

```rust
let list = ["12", "23", "34"];
let [a, b, c] = list;
println!("{:?} {:?} {:?}", a, b, c);
```
