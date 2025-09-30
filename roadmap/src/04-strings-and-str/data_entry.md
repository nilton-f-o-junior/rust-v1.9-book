# Data Entry

`std::io`

```rust
use std::io;

fn main () {
    //
    println!("Enter text:");
    let mut input:String = Sring::new();
    io::stdin().read_line(&mut input).expect("Data entry error!");
    // io::stdin().read_line(&mut input).unwrap();
}
```
- unwrap() - If an error occurs, the program crashes with a panic;
- expect() - If an error occurs, it crashes but with your custom message.

`match`

```rust
use std::io;

fn main() {
    // 
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();

    match input.trim().parse::<u8>() {
        Ok(input) => input,
        Err(_) => {
            println!("Err!");
            return;
        }
    };
}
```

```rust
use std::io;

fn main () {
    //
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Data entry error!");

    let num: u8 = match input.trim().parse() {
        Ok(n) => n,
        Err(_) => {
          println!("Input error!");
          return;
        }
    };  
}
```
