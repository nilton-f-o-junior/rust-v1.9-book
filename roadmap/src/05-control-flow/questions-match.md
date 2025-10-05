# Questions - Match

01 - Write a program that inputs a character and indicates whether it is a vowel (a, e, i, o, u) or a consonant. Use match to validate.

[Playground!]()

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

A: 9 - 10
B: 7 - 8
C: 5 - 6
D: 3 - 4
E: 2 - 1
F: 0

[Playground!]()

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

0-12: Child
13-17: Teen
18-59: Adult
60+: Senior

[Playground!]()

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

("admin", "1234"): Admin logged in
("user", "pass"): User logged in
_: Invalid credentials

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

05 - Receive a temperature in Celsius and classify it:

Below 0: Freezing
0-15: Cold
16-25: Pleasant
26-35: Warm
Above 35: Very warm

[Playground!]()

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

1 - Sunday
2 - Monday
3 - Tuesday
4 - Wednesday
5 - Thursday
6 - Friday
7 - Saturday

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

Month name
How many days does it have (consider February with 28)

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

'0'..='9': Digit
'a'..='z' | 'A'..='Z': Letter
' ': Space
_: Special symbol

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

09 - Receive coordinates (x, y) and indicate which quadrant it is in:

(positive, positive): Quadrant I
(negative, positive): Quadrant II
(negative, negative): Quadrant III
(positive, negative): Quadrant IV
Origin if both are 0

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

10 - Receive the quantity of items purchased and the customer type ('N' = Normal, 'V' = VIP):

Use match with tuples (quantity, type)
VIP: 20% discount always
Normal: 10% if purchasing 10+ items, 5% if 5-9 items, no discount if less

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

11 - Make a calculator that takes two numbers and an operator (+, -, *, /) and returns the result using match for the operator.

[Playground!]()

<details>
<summary>Answers</summary>

```rust

```
</details>

12 - Receive the choices of two players (1 = Rock, 2 = Paper, 3 = Scissors) and determine the winner using tuple matching: match(player1, player2) { ... }

[Playground!]()

<details>
<summary>Answers</summary>

```rust
```
</details>
