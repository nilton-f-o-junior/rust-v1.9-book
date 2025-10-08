# Questions - While

01 - Write a Rust program that uses a while loop to print numbers from 1 to 5, one per line.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6c606193a0612c9484434406017eff98)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u8 = 0;

    while count <= 5 {
        println!("Count = {}", count);
        count += 1;
    }
}
```
</details>

02 - Using a while loop, create a program that prints a countdown from 10 to 1, and then the message "Launch!".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=af0ecf913e30cf4e96042d5bc31f5570)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u8 = 10;

    while count >= 1 {
        println!("{}", count);
        count -= 1;

        if count < 1 {
            println!("Lauch!");
        }
    }
}
```
</details>

03 - Write a program that calculates the sum of all integers from 1 to 100, using a while loop. Print the final result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f17968f81015350d5d69a32adb5fe38f)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut sum: u16 = 0;
    let mut count: u8 = 1;

    while count <= 100 {
        //
        sum += count as u16;
        count += 1;
    }
    println!("Sum = {}", sum);
}
```
</details>

04 - Create a while loop that is intentionally infinite, but uses the break keyword to exit the loop when a counter reaches the value 7. Print the counter's value
in each iteration before checking the exit condition.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=cb3b6772003cd26fc05f75d3ecff21b8)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u8 = 0;

    while count >= 0 {
        count += 1;
        println!("Count = {}", count);

        if count >= 7 {
            break;
        }
    }
}
```
</details>

05 - Check if a given number (e.g., num = 32) is a power of 2 using a while loop. Print true or false.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=84ede3138e7c8a3570712d1bfff7eddf)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    //
    let mut number: u16 = input_number.trim().parse().expect("Converting error data!");

    //
    if number <= 0 {
        println!("{}", false);
    } else if number == 1 {
        println!("{}", true);
    } else {
        while number % 2 == 0 {
            number /= 2;
        }

        if number == 1 {
            println!("{}", true);
        } else {
            println!("{}", false);
        }
    }
}
```
</details>

06 - Write a program with a while loop that iterates from 0 to 10. If the current number is odd, use continue to skip printing that number. Print only the even num
bers.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=26e94d0fdc56bc1a8e18a1954b142007)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u8 = 0;

    while count <= 10 {
        if count % 2 != 0 {
            count += 1;
            continue;
        }

        println!("Number even: {}", count);
        count += 1;
    }
}
```
</details>

07 - Write a program that asks the user to enter a number greater than 10. Use a while loop to keep asking for input until a valid number is provided.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d2ef6ded76e0c624916c42dd0039ae05)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    let mut cond: u8 = 0;

    while cond <= 10 {
        //
        println!("Enter number:");
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");
        let number: u8 = input_number.trim().parse().expect("Erro converting data!");
        println!("");

        cond = number;

        //
        if cond <= 10 {
            println!("Number < 10");
            println!("Try again!\n");
        } else {
            println!("Number > 10!");
        }
    }
}
```
</details>

08 - Calculate the factorial of a number (e.g., 5!) using a while loop. Print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=12eeeb3aaa2ea442b27a068766ed040a)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!!");

    //
    let number: u16 = input_number.trim().parse().expect("Error conveting data!");

    //
    if number == 0 {
        println!("Factorial: 0 = 1");
    } else {
        //
        let mut factorial: u16 = 1;
        let mut i: u16 = 1;

        while i <= number {
            factorial *= i;
            i += 1;
        }

        println!("Factorial: {} = {}", number, factorial);
    }
}
```
</details>

09 - Given an integer (e.g., 12345), use a while loop to print it in reverse (i.e., 54321). Hint: use the % (modulo) and / (division) operators.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e18fea358b844939d6d963c1f23df47f)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Code entry error!");

    //
    let mut number: u16 = input_number.trim().parse().expect("Error converting data!");
    let save_number = number;
    let mut reverse_count: u16 = 0;

    //
    if number == 0 {
        reverse_count = number;
    } else {
        while number > 0 {
            let digit = number % 10;
            reverse_count = (reverse_count * 10) + digit;
            number /= 10;
        }
    }

    println!("Original number: {}", save_number);
    println!("Reverse number: {}", reverse_count);
}
```
</details>

10 - Write a program that counts the number of digits in a positive integer using a while loop. For example, 12345 has 5 digits.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=84d604c67276b5442d1de02035c1d3ba)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Code entry error!");

    //
    let mut number: u16 = input_number.trim().parse().expect("Error converting data!");
    let save_number: u16 = number;
    let mut count: u8 = 0;

    if number == 0 {
        count = 1;
    } else {
        while number > 0 {
            number /= 10;
            count += 1;
        }
    }

    println!("Count numbers {} = {}", save_number, count);
}
```
</details>

11 - Print the squares of numbers from 1 to 7 using a while loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f4b8bf705ddbc9a7d4175f825df9fef7)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u16 = 0;

    while count <= 7 {
        //
        let number: u16 = count * count;
        println!("Square: {} = {}", count, number);
        count += 1;
    }
}
```
</details>

12 - Given a number let mut num = 64;, use a while loop to repeatedly divide it by 2 until the result is less than or equal to 1. Print each division result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1a35c940aa55015ab3d60fec178b295a)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut number: u8 = 64;

    //
    while number > 1 {
        number /= 2;
        println!("Result = {}", number);
    }
}
```
</details>

13 - Find and print the first even number greater than 50 using a while loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4a7ad5515ab4546ff981a00eb2dceb97)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut number: u8 = 51;

    //
    while number % 2 > 0 {
        number += 1;
    }
    println!("Result = {}", number);
}
```
</details>

14 - Create a secret number (e.g., secret = 42). Ask the user to guess the number. Use a while loop to continue the game until the user guesses correctly. Give hin
ts ("too high", "too low"). (Requires std::io for user input).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f1f171bfec92179a17e67b78a000252f)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    let mut number: u8 = 0;
    let sort_number: u8 = 42;

    //
    while number != sort_number {
        //
        println!("Enter number:");
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");

        //
        number = input_number
            .trim()
            .parse()
            .expect("Converting error number!");

        if number > sort_number {
            println!("Too High!!!");
        } else {
            println!("Too Low!!!");
        }
    }
    println!("YOU WIN!");
}
```
</details>

15 - Ask the user for a number and, using a while loop, print the first 5 multiples of that number.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6cdacad8eb74c441d0b2d67486c32dc8)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Entry number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    //
    let number: u8 = input_number.trim().parse().expect("Error converting data!");
    let mut count: u8 = 0;
    let mut result: u8;

    //
    println!();

    //
    while count < 5 {
        count += 1;
        result = count * number;

        println!("{}", result);
    }
}
```
</details>

16 - Using nested while loops to print a 3x3 square of asterisks.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9b9d56184faad52a32e6150cffeb5f21)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number of rows: ");
    let mut input_row: String = String::new();
    io::stdin()
        .read_line(&mut input_row)
        .expect("Data entry error!");

    //
    println!("Enter number of columns: ");
    let mut input_column: String = String::new();
    io::stdin()
        .read_line(&mut input_column)
        .expect("Data entry error!");

    //
    let number_row: u8 = input_row.trim().parse().expect("Error converting data!");
    let number_column: u8 = input_column.trim().parse().expect("Error converting data!");
    let symbol: String = String::from("*");

    //
    let mut row_count: u8 = 0;
    while row_count < number_row {
        let mut column_count: u8 = 0;
        while column_count < number_column {
            print!("{}", symbol);
            column_count += 1;
        }
        println!();
        row_count += 1;
    }
}
```
</details>

17 - Write a Rust program that prompts the user to enter a positive integer. Then, find and display the first five divisors of that number. If fewer than five divi
sors are found, the program should state that 'This is first 5 multiple numbers were not found!'.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c58a3551f1c999359e625eb943958a92)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Entry number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    //
    let number: u8 = input_number.trim().parse().expect("Error converting data!");
    let mut count: u8 = 0;
    let mut count_division: u8 = 0;

    //
    while count_division < 5 {
        count += 1;

        if count == 0 {
            continue;
        }

        if number % count == 0 {
            count_division += 1;

            println!("{} % {} = 0", number, count);
        }

        if count > number && count_division < 5 {
            println!("This is first 5 multiple numbers were not found!");
            break;
        }
    }
}
```
</details>

