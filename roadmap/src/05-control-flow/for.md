# For

Iterates over collections, ranges, or any iterable.

Safer than manual indexing, handles bounds automatically.

`for`

```rust
//
for element in collection {

}
```

`0..4`

```rust
//
for i in 0..5 {
    println!("{}", i);
}
```

`0..=5`

```rust
//
for i in 0..=5 {
    println!("{}", i);
}
```

`.rev = 4..3..2..1..`

```rust
//
for i in (0..5).rev() {
    println!("{}", i);
}
```

```rust
// 5 - 0
for i in (0..=5).rev() {
    println!("{}", i);
}
```

`for + &str`

```rust
//
let name: &str = "Rust";
for i in name.chars() {
    println!("{}", i);
}
```

`for + array`

```rust
//
let arr = ["apple", "banana", "orange", "guava"];
for i in arr {
    println!("{:#?}", i)
}
```

`for + array bidimensional`

```rust
//
let arr: [[i32; 3]; 3] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for i in arr {
    for j in i {
        print!("{}", j);
    }
    println!();
}
```
