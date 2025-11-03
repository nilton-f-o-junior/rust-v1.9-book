# Match

Match compares a value against different patterns and executes the code corresponding to the first pattern that matches. It's like a more powerful and safer switch. 

It ensures that all possible cases are covered, preventing common bugs. Unlike traditional switch, it doesn't need break and always returns a value.

```rust
let a = 3;

match a {
  1 => println!("1"),
  2 => println!("2"),
  3 => println!("3"),
  _ => println!("else"),
};
```

`range`

```rust
let age = 63;

let category = match age {
  0..=11 => "child",
  12..=17 => "teenager",
  18..=64 => "adult",
  _ => "elderly",
};

println!("{}", category);
```

`println!()`

```rust
let alph = 'g';

println!("{:?}", match alph {
  'A'..='Z' => "A ... Z",
  'a'..='z' => "a ... z",
  _ => "other",
});
```

`operation`

```rust
let number = 20;

let result = match number {
  1 | 3 | 5 | 7 | 9 => "odd",
  2 | 4 | 6 | 8 | 10 => "even",
  _=> "else",
};

println!("{}", result);
```

`equal`

```rust
let even = (2, -2);

let result = match even {
  (x, y) if x == y => "equal",
  (x, _) if x % 2 == 0 => "first even",
  _=> "none",
};

println!("{:?}", result);
```
