# Methods

`first() and last()`

```rust
let vector_methods: Vec<&str> = vec!["a", "b", "c"];

println!("{:?}", vector_methods.first());
println!("{:?}", vector_methods.last());
```

`[0] != first()`

```rust
// [0]
let vector_methods: Vec<&str> = vec![];
println!("{:?}", vector_methods[0]);
```
```rust
// first()
let vector_methods: Vec<&str> = vec![];
println!("{:?}", vector_methods.first());
```

`swap()`

```rust
let mut vector_methods: Vec<&str> = vec!["a", "b", "c", "d"];
vector_methods.swap(0, 3);
println!("{:?}", vector_methods);
```

`reverse()`

```rust
let mut vector_methods: Vec<char> = vec!['1', '2', '3', '4'];
vector_methods.reverse();
println!("{:?}", vector_methods);
```

`[0..n].reverse()`

```rust
let mut vector_methods: Vec<char> = vec!['1', '2', '3', '4', '5', '6'];
vector_methods[3..5].reverse();
println!("{:?}", vector_methods);
```

`sort()`

```rust
let mut vector_methods: Vec<char> = vec!['6', '2', '4', '1', '3', '5'];
vector_methods.sort();
println!("{:?}", vector_methods);
```

`sort_unstable()`

```rust
let mut vector_methods: Vec<char> = vec!['6', '2', '4', '1', '3', '5'];
vector_methods.sort();
println!("{:?}", vector_methods);  
```

> Even though `sort()` and `sort_unstable()` generate similar results, they are recommended in different situations. We will discuss this in more detail in the Methods chapter after studying Constructs.
