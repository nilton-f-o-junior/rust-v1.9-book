# Tuples

Combine multiple values of different types into a single compound data structure with a fixed size.

```rust
let data_types = ("a", 1);
println!("{:?}", data_types);
```

```rust
let data_types = (1., 2);
println!("{:#?}", data_types);
```

```rust
let data_types : (char, u8);
data_types = ('c', 3);
println!("{:?}", data_types);
```

```rust
let (name, num) : (&str, i8);
(name, num) = ("Alice", 4);
println!("{} and {}", name, num);
```

```rust
let (letter, yes) : (char, bool) = ('d', true);
let test =  (letter, yes);
println!("{:?}", test);
```

```rust
let person = ("Gregor", 64, 1.82);
let (name, weight, height) = person;
println!("My name is {}, i'm {} years old and my height is {}", name, weight, height);
```
