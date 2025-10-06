# Questions - Common Programming Concepts

---

01 - How would you write a single-line comment in Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fa6df3232303522183223ee5f24dfbff)

<details>
<summary>Answers</summary>

```rust
fn main() {
    // This is a single-line comment    
}
```
</details>

02 - What is the syntax for block comments in Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e90815976bb96fe60d16cdebf67efaae)

<details>
<summary>Answers</summary>

```rust
fn main() {
    /*
      This is a
      block comment
      that spans multiple lines
    */
}
```
</details>

03 - Can you nest block comments in Rust? Give an example.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5ebf53782f73c4983cb8e122751a29f8)

<details>
<summary>Answers</summary>

```rust
fn main() {
    /*
       This is an outer comment
       /* This is a nested comment */
       End of outer comment
    */    
}
```
</details>

04 - Which macro would you use to print text on the same line, without adding a newline at the end?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4e02ed5b47aad35837a799a8a0a0c4d7)

<details>
<summary>Answers</summary>

```rust
fn main() {
    print!("Print without adding a newline at the end!");
}
```
</details>

05 - Which macro would you use to print text and automatically add a newline at the end?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a5eea68123268d97baee293221c6756e)

<details>
<summary>Answers</summary>

```rust
fn main() {
    println!("Print and add newline at the end!");
}
```
</details>

06 - Write code that prints "Hello" and "World" on the same line using the print! macro.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=686866a6b4a19384ac1eb0b52760c5bc)

<details>
<summary>Answers</summary>

```rust
fn main() {
    print!("Hello ");
    print!("World");
}
```
</details>

07 - How do you insert an explicit newline within a string that is being printed with println!?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6013598006585c63a7e0770fe792420c)

<details>
<summary>Answers</summary>

```rust
fn main() {
    println!("First line\nSecond line");
}
```
</details>

08 - What other escape sequences can you use in Rust strings? Give examples of at least 3.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6634c445572d88f455155b7b1b46fe12)

<details>
<summary>Answers</summary>

```rust
fn main() {
    println!("Tab character:\tTabbed text");
    println!("Backslash: \\");
    println!("Quote: \"Hello\"");
    println!("Carriage return:\rOverwritten");
}
```
</details>

09 - How do you declare a variable named score and assign it the value 100?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e5dd834f9998a707399dfb6651cb03b5)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let score = 100;
    println!("Score: {}", score);
}
```
</details>

10 - Write a line of code that declares a variable city with the value "Paris" and then prints it to the screen.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9a2895ed4e82f3c19abd6b8ec95088bd)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let city = "Paris";
    println!("City: {}", city);
}
```
</details>

11 - What happens if you try to use a variable before declaring it in Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a9aa6e4f7515cc541b42e4db75ca663d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    // This would cause a compile-time error:
    // println!("{}", x);
    // let x = 5;    
```
</details>

12 - Can you declare a variable without initializing it in Rust? If yes, show how to use it safely.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=eb0651b37f9b2fa6c63d168c1a45d9d0)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let x: i32; 
    x = 42;     
    println!("x = {}", x);
}
```
</details>

13 - Which keyword is used to declare a variable that can have its value changed after initialization?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=548092becfd664d530907c9eee56d38a)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut x = 5;
    x = 10;
    println!("x = {}", x);
}
```
</details>

14 - Declare a mutable variable named counter initialized with 0. Then, write the code to change the value of counter to 5 and print it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0795b5acd1166e2678bda3a5b29a0178)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut counter = 0;
    println!("Counter = {}", counter);
    
    counter = 5;
    println!("Counter = {}", counter);
}
```
</details>

15 - What happens if you try to modify an immutable variable in Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=486320f5b8aa62db833f89ebe2c30034)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let x = 1;
    
    x = 2;
    println!("x = {}", x);
}
```
</details>

16 - How do you declare a constant named `MAX_SPEED` with the value 9000 of type i32?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f286434d3dd401bcde002918e1458345)

<details>
<summary>Answers</summary>

```rust
const MAX_SPEED: i32 = 9000;

fn main() {
    println!("Max Speed: {}", MAX_SPEED);
}
 ```
</details>

17 - Is it possible to change the value of a constant after its declaration?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b76b5d986e417394cb9c633eb3963232)

<details>
<summary>Answers</summary>

```rust
fn main() {
    const MAX_VALUE: i32 = 100;
    MAX_VALUE = 200;
}
```
</details>

18 - What are the main differences between constants and immutable variables in Rust?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b60d2a9f6bd14c3b757e6344611c942d)

<details>
<summary>Answers</summary>

```rust
const GLOBAL_CONSTANT: i32 = 100;

fn main() {
let immutable_var = 200;
// Constants:
// - Always immutable (no mut keyword allowed)
// - Must have explicit type annotation
// - Can be declared in global scope
// - Must be set to constant expressions only

// Immutable variables:
// - Can be made mutable with mut
// - Type can be inferred
// - Local to their scope
// - Can be set to any expression

println!("Constant: {}, Variable: {}", GLOBAL_CONSTANT, immutable_var);
}
```
</details>

19 - How would you use the format! macro to create the string "The value is: 42" from the number 42?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2e62fb1c39369ab5990cc9dfecf30f5a)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let number = 42;
    let formatted = format!("The value is: {}", number);
    println!("{}", formatted);
}
```
</details>

20 - How can you format the number 7 so that it is displayed as "0007" using format!?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=70323570b221dc4c61f4b898cea8e4af)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let number = 7;

    let formatted = format!("{:04}", number);
    println!("{}", formatted);

    println!("{:04}", number);
}
```
</details>

21 - How would you format a floating-point number to show exactly 2 decimal places?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e3abe04bf06f34178ef7b1740cd9dd6f)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let pi = 3.14159265359;
    
    let formatted = format!("{:.2}", pi);
    println!("Pi with 2 decimals: {}", formatted);

    println!("Pi: {:.2}", pi);
}
```
</details>

22 - Demonstrate how to use positional arguments in format strings.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=91818e7dff05501474500359c5290376)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let name = "Alice";
    let age = 30;
    let city = "New York";
    
    // Positional arguments
    println!("{0} is {1} years old and lives in {2}", name, age, city);
    
    // Named arguments
    println!("{name} is {age} years old and lives in {city}");
             
    // Mixed
    println!("{} is {age} years old and lives in {city}", name);
}
```
</details>
    
23 - What is "shadowing" in Rust? Explain with a code example and what the output would be.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d34fb4b6af83324f752d40fb382e6d0e)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let x = 5;
    println!("First x: {}", x);

    let x = x + 1;
    println!("Second x: {}", x);

    let x = x * 2;
    println!("Third x: {}", x);

    let x = "hello";
    println!("Fourth x: {}", x);
}
```
</details>

24 - What will be the output of the following code?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=edf169bafd5895861b543463ef95512e)

```rust
fn main () {
    let x = 5;
    let x = x + 1;
    {
        let x = x * 2;
        println!("The inner value of x is: {}", x);
    }
    println!("The outer value of x is: {}", x);
}
```
<details>
<summary>Answers</summary>

```rust
fn main() {
    let x = 5;
    let x = x + 1; // x = 6
    {
        let x = x * 2; // x = 12 
        println!("The inner value of x is: {}", x); // Output: 12
    }
    println!("The outer value of x is: {}", x); // Output: 6
}
```
</details>

25 - What will be the output of the following code? Explain why.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5053be000290bf4132df56d1d3761517)

```rust
let a = 10;
{
    let b = 20;
    println!("Inside the block: a = {}, b = {}", a, b);
}
println!("Outside the block: b = {}", b);
```
<details>
<summary>Answers</summary>

```rust
fn main() {
    let a = 10;
    {
        let b = 20;
        println!("Inside the block: a = {}, b = {}", a, b);
        // Output: Inside the block: a = 10, b = 20
    }
    // println!("Outside the block: b = {}", b);
    // b is not in scope outside the block where it was declared
}
```
</details>
