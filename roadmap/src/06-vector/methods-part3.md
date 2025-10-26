# Methods

`len() and capacity()`

```rust
let mut vector_methods: Vec<u8> = Vec::with_capacity(10);

println!(
    "len = {:?} \ncapacity = {:?}",
    vector_methods.len(),
    vector_methods.capacity()
);

vector_methods.push(1);
vector_methods.push(2);

println!(
    "\nlen = {:?} \ncapacity = {:?}",
    vector_methods.len(),
    vector_methods.capacity()
);
```

`is_empty()`

```rust
let vector_methods: Vec<&str> = vec![];
println!("{:?}", vector_methods.is_empty());

let vector_methods: Vec<&str> = vec!["a", "b", "c"];
println!("{:?}", vector_methods.is_empty());
```

`clear()`

```rust
let mut vector_methods: Vec<&str> = vec!["a", "b", "c"];
println!("{:?}", vector_methods);

vector_methods.clear();
println!("{:?}", vector_methods.is_empty());
```


`contains()`

```rust
let vector_methods: Vec<&str> = vec!["a", "b", "c"];
println!("{:?}", vector_methods.contains(&"c"));

let vector_methods: Vec<f32> = vec![1., 7.];
println!("{:?}", vector_methods.contains(&6.));
```

