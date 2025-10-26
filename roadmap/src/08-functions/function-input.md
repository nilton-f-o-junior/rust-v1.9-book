# Function - Input

`input`

```rust
use std::io;

fn function_input(prompt: &str) -> f32 {
    //
    loop {
        println!("{}", prompt);
        let mut input = String::new();

        match io::stdin().read_line(&mut input) {
            Err(_) => {
                println!("Data entry error!");
                continue;
            }

            Ok(_) => match input.trim().parse::<f32>() {
                Ok(number) => return number,
                Err(_) => {
                    println!("'{}' is not a valid number!", input.trim());
                    continue;
                }
            },
        }
    }
}

fn main() {
    //
    let number = function_input("Enter number:");
    println!("Number chosen: {}", number);
}
```



