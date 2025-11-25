# Modifying Tuples

When changing tuple values, you need to specify the index of the element you want to modify. Tuple indices start at 0 and correspond to the position of each element.

```rust
//                   0      1    2
let mut person = ("Alice", 25, 1.70);

println!("Name: {:?}", person.0);
println!("Age: {:?}", person.1);
println!("Height: {:?}\n", person.2);

person.1 = 40;
person.2 = 1.55;

println!("Name: {:?}", person.0);
println!("Age: {:?}", person.1);
println!("Height: {:?}", person.2);
```

```rust
let mut person = ("Roberto", 90, 1.98);
println!("{:#?}", person);

person.0 = "Moana";
person.1 = 58;
person.2 = 1.62;

println!("{:#?}", person);
```
