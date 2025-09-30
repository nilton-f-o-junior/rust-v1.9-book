# Tuples

Combine multiple values of different types into a single compound data structure with a fixed size.

```rust
//
let data_types = ("a", 1);
println!("{:?}", data_types);
```

```rust
//
let data_types = (1., 2);
println!("{:#?}", data_types);
```

```rust
//
let data_types : (char, u8);
data_types = ('c', 3);
println!("{:?}", data_types);
```

```rust
//
let (name, num) : (&str, i8);
(name, num) = ("Alice", 4);
println!("{} and {}", name, num);
```

```rust
//
let (letter, yes) : (char, bool) = ('d', true);
let test =  (letter, yes);
println!("{:?}", test);
```

```rust
//
let person = ("Gregor", 64, 1.82);
let (name, weight, height) = person;
println!("My name is {}, i'm {} years old and my height is {}", name, weight, height);
```

## Tuples and mut

When changing tuple values, you need to specify the index of the element you want to modify. Tuple indices start at 0 and correspond to the position of each element:

```rust
//                   0      1    2 
let mut person = ("Alice", 25, 1.70);

println!("Name: {:?}", person.0);
println!("Age: {:?}", person.1);
println!("Height: {:?}\n", person.2);

//
person.1 = 40;
person.2 = 1.55;

println!("Name: {:?}", person.0);  
println!("Age: {:?}", person.1);   
println!("Height: {:?}", person.2);
```

```rust
//
let mut person = ("Roberto", 90, 1.98);
println!("{:#?}", person);

person.0 = "Moana";
person.1 = 58;
person.2 = 1.62;
println!("{:#?}", person);
```
