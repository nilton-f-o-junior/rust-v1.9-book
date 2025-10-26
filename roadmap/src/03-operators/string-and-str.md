# String and &str

String and &str concatenation is the process of joining character sequences. In Rust, you can use the + operator or the format!() macro to concatenate strings

`string`

```rust
let conc_text1: String = String::from("1");
let conc_text2: String = String::from("2");
println!("{:?}", conc_text1 + &conc_text2);
```

`&str`

```rust
let conc_text1: &str = "1";
let conc_text2: &str = "2";
println!("{:?}", conc_text1.to_owned() + conc_text2);
```

`string + &str`

```rust
let part_01: &str = "10";
let part_02: String = String::from("20");
println!("{}", part_01.to_owned() + &part_02);
```

```rust
let part_01: String = String::from("Hello, ");
let part_02: &str = "World";

let result: String =  part_01 + part_02;
println!("Reseult = {}", result);
```
