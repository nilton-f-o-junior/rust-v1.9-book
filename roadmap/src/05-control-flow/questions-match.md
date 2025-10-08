# Questions - Match

01 - Write a program that inputs a character and indicates whether it is a vowel (a, e, i, o, u) or a consonant. Use match to validate.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4a083a004ec7b5f6ca4b4ddb393b9510)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter with character:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error in the value entered!");

    let character = input.trim();

    match character {
        "a" | "e" | "i" | "o" | "u" => println!("The character '{}' is vowel!", character),
        "" => println!("No character was entered!"),
        _ => println!("The character {} is consonant!", character),
    };
}
```
</details>

02 - Create a program that inputs a grade (0 to 10) and converts it to a grade.

|   |        |
|---|--------|
| A | 9 - 10 |
| B | 7 - 8  |
| C | 5 - 6  |
| D | 3 - 4  |
| E | 1 - 2  |
| F |   0    |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=73982e827eda1f6ac231ec9b0efb3fb4)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter your note:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error entered data!");

    let note: u8 = match input.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    match note {
        9 | 10 => println!("Your note is: '{}' = 'A'", note),
        7 | 8 => println!("Your note is: '{}' = 'B'", note),
        5 | 6 => println!("Your note is: '{}' = 'C'", note),
        3 | 4 => println!("Your note is: '{}' = 'D'", note),
        1 | 2 => println!("Your note is: '{}' = 'E'", note),
        0 => println!("Your note is: '{}' = 'F'", note),
        _ => println!("The data provided is not valid!"),
    };
}
```
</details>

03 - Enter an age and classify it as:

|          |           |
|----------|-----------|
|  0 - 12  | Child     |
| 13 - 17  | Teen      |
| 18 - 59  | Adult     |
|   +60    | Senior    |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2c16bc60eb88ad00cb81ef516e3a0089)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter your age:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error entered data!");

    let age: u8 = match input.trim().parse() {
        Ok(valid) => valid,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    match age {
        0..=12 => println!("Child!"),
        13..=17 => println!("Teen!"),
        18..=59 => println!("Adult!"),
        60..=120 => println!("Senior!"),
        _ => println!("Your Dead!"),
    };
}
```
</details>

04 - Receive username and password. Use tuple matching to validate:

|                   |                     |
|-------------------|---------------------|
| ("admin", "1234") | Admin logged        |
| ("user", "pass")  | User logged         |
|        _          | Invalid credentials |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=271c2d14814579f5521d1b98fb07c366)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter character:");
    let mut login = String::new();
    io::stdin()
        .read_line(&mut login)
        .expect("Error entered data!");

    println!("Enter character:");
    let mut password = String::new();
    io::stdin()
        .read_line(&mut password)
        .expect("Error entered data!");

    let data: (&str, &str) = (login.trim(), password.trim());

    match data {
        ("admin", "1234") => println!("\nAdmin logged!"),
        ("user", "pass") => println!("\nUser logged!"),
        _ => println!("\nInvalid credentials!"),
    };
}
```
</details>

05 - Receive a temperature in Celsius and classify it:

|          |           |
|----------|-----------|
| Below 0  | Freezing  |
| 0 - 15   | Cold      |
| 16 - 25  | Pleasant  |
| 26 - 35  | Warm      |
| Above 35 | Very warm |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bd6854ea08c65ab5b05bb9429aca8d62)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter temperature:");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error entered data!");

    let temperature: f32 = match input.trim().parse() {
        Ok(valid) => valid,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    match temperature {
        f32::MIN..=-1.0 => println!("Freezing"),
        0.0..=15.0 => println!("Cold"),
        16.0..=25.0 => println!("Pleasant"),
        26.0..=35.0 => println!("Warm"),
        _ => println!("Very warm"),
    };
}
```
</details>

06 - Receive a number from 1-7 and print the corresponding day of the week.

| | |
|-|----------|
|1| Sunday   |
|2| Monday   |
|3| Tuesday  |
|4| Wednesday|
|5| Thursday |
|6| Friday   |
|7| Saturday |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=575e0c3d4f772c17f42807eb4d5d928f)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error entered data!");

    let number: u8 = match input.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    match number {
        1 => println!("Sunday"),
        2 => println!("Monday"),
        3 => println!("Tuesday"),
        4 => println!("Wednesday"),
        5 => println!("Thursday"),
        6 => println!("Friday"),
        7 => println!("Saturday"),
        _ => println!("Enter a valid value!"),
    }
}
```
</details>

07 - Receive the month number (1-12) and return:

- Month name
- How many days does it have (consider February with 28)

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number");

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error entered data!");

    let number: u8 = match input.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    match number {
        1 => println!("January - 31 Days"),
        2 => println!("February - 28 Days"),
        3 => println!("March - 31 Days"),
        4 => println!("April - 30 Days"),
        5 => println!("May - 31 Days"),
        6 => println!("June - 30 Days"),
        7 => println!("July - 31 Days"),
        8 => println!("August - 31 Days"),
        9 => println!("September - 30 Days"),
        10 => println!("October - 31 Days"),
        11 => println!("November - 30 Days"),
        12 => println!("December - 31 Days"),
        _ => println!("Enter a valid value!"),
    }
}
```
</details>

08 - Receive a character and sort it using match:

|      |        |
|------|--------|
|0-9   | Digit  |
|a - z | Letter |
|A - Z | Letter |
|'&nbsp;&nbsp;' | Space  |
| _    | Special Symbol |

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter character:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error entered data!");

    let ch: char = input.chars().next().unwrap();

    match ch {
        '0'..='9' => println!("Number: 0-9!"),
        'a'..='z' | 'A'..='Z' => println!("Letter: aA - zZ!"),
        ' ' => println!("Space!"),
        _ => println!("Special symbol!"),
    }
}
```
</details>

09 - Receive coordinates (x, y) and indicate which quadrant it is in:

|                      |             |
|----------------------|-------------|
|      (0, 0)          | Origin      |
| (positive, positive) | Quadrant I  |
| (negative, positive) | Quadrant II |
| (negative, negative) | Quadrant III|
| (positive, negative) | Quadrant IV |

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter coordinate (x):");

    let mut input_x = String::new();
    io::stdin()
        .read_line(&mut input_x)
        .expect("Error entered data!");

    let x: i16 = match input_x.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error coverting data!");
            return;
        }
    };

    println!("Enter coordinate (y):");

    let mut input_y = String::new();
    io::stdin()
        .read_line(&mut input_y)
        .expect("Error entered data!");

    let y: i16 = match input_y.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    match (x, y) {
        (0, 0) => println!("Origin"),
        (x, y) if x > 0 && y > 0 => println!("Quadrant I"),
        (x, y) if x < 0 && y > 0 => println!("Quadrant II"),
        (x, y) if x < 0 && y < 0 => println!("Quadrant III"),
        (x, y) if x > 0 && y < 0 => println!("Quadrant IV"),
        _ => println!("On axis!"),
    };
}
```
</details>

10 - Receive the quantity of items purchased and the customer type ('N' = Normal, 'V' = VIP):

- Use match with tuples (type, quantity)
- VIP: 20% discount always
- Normal: 10% if purchasing 10+ items, 5% if 5-9 items, no discount if less

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::{io, u8};

fn main() {
    //
    println!("Enter type:");

    let mut input_type: String = String::new();
    io::stdin()
        .read_line(&mut input_type)
        .expect("Error entered data!");

    let ty: char = input_type.chars().next().unwrap();

    //
    println!("Enter quantity:");

    let mut input_quantity: String = String::new();
    io::stdin()
        .read_line(&mut input_quantity)
        .expect("Error entered data!");

    let quantity: u8 = match input_quantity.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    //
    match (ty, quantity) {
        ('V' | 'v', u8::MIN..=u8::MAX) => println!("2o% discount always!"),
        ('N' | 'n', 10..=u8::MAX) => println!("10% discount!"),
        ('N' | 'n', 5..=9) => println!("5% discount!"),
        _ => println!("No discount!"),
    };
}
```
</details>

11 - Make a calculator that takes two numbers and an operator (+, -, *, /) and returns the result using match for the operator.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("Enter number (A):");

    let mut input_a: String = String::new();
    io::stdin()
        .read_line(&mut input_a)
        .expect("Error entered data!");

    let a: f32 = match input_a.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    //
    println!("Enter number (B):");

    let mut input_b: String = String::new();
    io::stdin()
        .read_line(&mut input_b)
        .expect("Error entered data!");

    let b: f32 = match input_b.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    //
    println!("Enter operator: +, -, *, /");

    let mut input_operator: String = String::new();
    io::stdin()
        .read_line(&mut input_operator)
        .expect("Error entered data!");

    let operator: char = input_operator.trim().chars().next().unwrap();

    let _result = match operator {
        '+' => println!("\n{} + {} = {}", a, b, a + b),
        '-' => println!("\n{} - {} = {}", a, b, a - b),
        '*' => println!("\n{} * {} = {}", a, b, a * b),
        '/' => println!("\n{} / {} = {}", a, b, a / b),
        _ => println!("\nCalculation error!"),
    };
}
```
</details>

12 - Receive the choices of two players (1 = Rock, 2 = Paper, 3 = Scissors) and determine the winner using tuple matching: match(player1, player2) { ... }

[Playground!]()

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    println!("-- Start Game --");
    println!("");
    println!("Select:");
    println!("[1] Rock");
    println!("[2] Paper");
    println!("[3] Scissors");
    println!("");

    println!("Player 1:");
    let mut input_player1: String = String::new();
    io::stdin()
        .read_line(&mut input_player1)
        .expect("Entered error data!");

    let player1: u8 = match input_player1.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    println!("\nPlayer 2:");
    let mut input_player2: String = String::new();
    io::stdin()
        .read_line(&mut input_player2)
        .expect("Entered error data!");

    let player2: u8 = match input_player2.trim().parse() {
        Ok(value) => value,
        Err(_) => {
            println!("Error converting data!");
            return;
        }
    };

    let _result = match (player1, player2) {
        (1, 1) => println!("Game tied!"),
        (1, 2) => println!("Player 2 - Win!"),
        (1, 3) => println!("Player 1 - Win!"),
        (2, 1) => println!("Player 1 - Win!"),
        (2, 2) => println!("Game tied!"),
        (2, 3) => println!("Player 2 - Win!"),
        (3, 1) => println!("Player 2 - Win!"),
        (3, 2) => println!("Player 1 - Win!"),
        (3, 3) => println!("Game tied!"),
        _ => println!("Error processing game!"),
    };
}
```
</details>
