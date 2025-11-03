# Questions - for

01 - Write a program that prints numbers from 1 to 10 using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8e0c132681340ae51c97ed8b778980a2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    for i in 1..=10 {
        println!("{}", i);
    }
}
```
</details>

02 - Create a program that calculates the sum of numbers from 1 to 100 using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=aaaa202b0cab697d983548c550bf21cc)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut sum: u16 = 0;

    for i in 1..=100 {
        sum += i;
        println!("{}", i);
        println!("{}", sum);
        println!();
    }

    println!("{}", sum);
}
```
</details>

03 - Develop a program that prints all even numbers from 0 to 20 using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=71a5ccec53e79980a0587bf223852ae2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    for i in 0..=20 {
        if i % 2 == 0 {
            println!("{}", i);
        }
    }
}
```
</details>

04 - Write a program that prints all numbers in binary up to the requested number entered.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1b1cb4491734804add978c883c1e8c19)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin().read_line(&mut input_number).err();
    let number: i16 = input_number.trim().parse().expect("");

    println!("");
    for i in 0..=number {
        println!("Number: {:02} = {:b}", i, i);
    }
}
```
</details>

05 - Develop a program that generates all possible combinations of two digits (00 to 99) using nested for loops.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=986c0b7b44e1e0fb6b6a5f78ab44baa9)

<details>
<summary>Answers</summary>

```rust
fn main() {
    for i in 0..=100 {
        println!("{:02}", i);
    }
}
```

```rust
fn main() {
    for i in 0..=100 {
        if i < 10 {
            println!("0{}", i)
        } else {
            println!("{}", i);
        }
    }
}
```

</details>

06 - Write a program that prints the multiplication table for a user-provided number (from 1 to 10) using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=72a448bf52b52c55fd2dfd6827e2ada3)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    let number: i16 = input_number.trim().parse().expect("Error converting data!");
    println!();

    for i in 1..=10 {
        let mult: i16 = number * i;
        println!("{} x {} = {}", number, i, mult);
    }
}
```
</details>

07 - Create a program that reverses a user-provided string using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=97d4126348ad5f7e7ab840c1a1ff2994)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter text:");

    let mut input_string: String = String::new();
    io::stdin()
        .read_line(&mut input_string)
        .expect("Data entry error!");

    let inver_string: String = input_string.trim().to_string();
    let mut rever = String::new();

    for i in inver_string.chars().rev() {
        rever.push(i);
        println!("{}", rever);
    }

    println!("\n{}", rever);
}
```
</details>

08 - Create a program that calculates the sum of the digits of an integer using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f8a165d4e84d226e6f8b65aaf83797bf)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin().read_line(&mut input_number).err();

    let mut result_sum: i16 = 0;

    for i in input_number.trim().chars() {
        let convert_number: i16 = i.to_string().parse().expect("Error converting data!");
        result_sum += convert_number;
    }
    
    println!("{}", result_sum);
}
```
</details>

09 - Develop a program that counts how many vowels (a, e, i, o, u) are in a string using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=caf29564628427f1e7442ff40bc58081)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter text:");

    let mut input_string: String = String::new();
    io::stdin()
        .read_line(&mut input_string)
        .expect("Data entry error!");

    let vowels_string: String = input_string.trim().to_lowercase().to_string();
    let mut qtd_vowels: u8 = 0;

    for i in vowels_string.chars() {
        if i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' {
            qtd_vowels += 1;
        }
    }

    println!("Qtd. = {}", qtd_vowels);
}
```
</details>

10 - Write a program that finds the largest number in a list of numbers using a for loop. List = [17, 43, 5, 54, 93]

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f7a61e61eb5ce664621a685bfb436ce7)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [u8; 5] = [17, 43, 5, 54, 93];
    let mut number_larger: u8 = 0;

    for (_i, j) in arr.iter().enumerate() {
        if *j > number_larger {
            number_larger = *j;
        }
    }

    println!("{}", number_larger);
}
```
</details>

11 - Create a program that finds the smallest number in a list of numbers using a for loop. List = [63, 36, 57, 7, 82]

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bda230ea0dc0dfdb6e9465733067531b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [u8; 5] = [63, 36, 57, 7, 82];
    let mut number_larger: u8 = arr[1];

    for (_i, j) in arr.iter().enumerate() {
        if *j < number_larger {
            number_larger = *j;
        }
    }

    println!("{}", number_larger);
}
```
</details>

12 - Develop a program that calculates the factorial of a positive integer provided by the user using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b34833e25dede8eb3cde7a29a29fc919)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter number:");
    let mut input_number: String = String::new();
    io::stdin()
        .read_line(&mut input_number)
        .expect("Data entry error!");

    let number: u8 = input_number.trim().parse().expect("Error converting data!");
    let mut factorial: u8 = 1;

    for i in 1..=number {
        factorial *= i;
        println!("Facto = {}", factorial);
    }
}
```
</details>

13 - Write a program that prints the elements of a list in reverse order using a for loop. List = [1, 2, 3, 4, 5];

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ad9505d0f9d386871b70a4854f97984e)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [u8; 5] = [1, 2, 3, 4, 5];

    for i in arr.iter().rev() {
        println!("{:#?}", i);
    }
}
```
</details>

14 - Create a program that checks if a word is a palindrome (reads the same forwards and backward) using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bc06987eee4b704705dc157b75a53a6a)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter word:");

    let mut input_word: String = String::new();
    io::stdin()
        .read_line(&mut input_word)
        .expect("Error entry data!");

    let word: String = input_word.trim().to_lowercase().to_string();
    let mut rever_word: String = String::new();

    for i in word.chars().rev() {
        rever_word.push(i);
    }
    
    if word == rever_word {
        println!("Word {} is polindrome!", word)
    } else {
        println!("Word {} not is polindrome!", word);
    }
}
```
</details>

15 - Write a program that counts how many times a specific character appears in a string using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=db6822cea7a7033395e87e354c2b727d)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter word:");

    let mut input_word: String = String::new();
    io::stdin()
        .read_line(&mut input_word)
        .expect("Error entry data!");

    let word: String = input_word.trim().to_lowercase().to_string();

    println!("\nEnter character: ");

    let mut input_character: String = String::new();
    io::stdin()
        .read_line(&mut input_character)
        .expect("Error entry data!");

    let character: char = input_character.trim().parse().expect("Data entry error!");

    let mut count: u8 = 0;

    for i in word.chars() {
        if i == character {
            count += 1;
        }
    }

    if count >= 1 {
        println!("\nThe letter '{}' repeats '{}' times!", character, count);
    } else {
        println!("\nThe letter '{}' does not repeat", character);
    }
}
```
</details>

16 - Create a program that calculates the product of all numbers in a list using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ccc27fdc5847a0515476b176eb8c56d2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [u8; 5] = [1, 2, 3, 4, 5];
    let mut mult: u8 = 1;

    for i in arr.iter() {
        mult *= i;
        println!("Stage {:?} = {:?}", i, mult);
    }
}
```
</details>

17 - Write a program that receives 5 integer values, entered by the user, using an array and for.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4eb86145005ddd4e94c44f60258e439e)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    let mut input_array: [i8; 5] = [0; 5];

    for i in 0..input_array.len() {
        //
        println!("\nEnter number:");
        let mut input_number: String = String::new();
        io::stdin().read_line(&mut input_number).err();
        input_array[i] = input_number.trim().parse().expect("Error converting data!");
    }
    
    println!("\n{:?}", input_array);
}
```
</details>

18 - Develop a program that finds the average of a list of numbers using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fd6698594ecdf61600e5e1ddcce27b9d)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    let mut init_array: [i8; 10] = [0; 10];
    let mut sum: u8 = 0;

    for i in 0..init_array.len() {
    
        println!("Enter number:");
        let mut input_array: String = String::new();
        io::stdin()
            .read_line(&mut input_array)
            .expect("Data entry error!");
        init_array[i] = input_array.trim().parse().expect("Erro converting data!");

        sum += init_array[i] as u8;
    }

    sum /= 10;
    println!("Average = {}", sum);
}
```
</details>

19 - Develop a program that counts the number of negative numbers in a list using a for loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=85421c114bab58b35002a8ed1a6283d4)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter with 5 numbers:");
    let mut input_array: [i8; 5] = [0; 5];
    let mut count: u8 = 0;

    for i in 0..input_array.len() {
        
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");
        input_array[i] = input_number.trim().parse().expect("Error converting data!");

        if input_array[i] < 0 {
            count += 1;
        }
    }

    println!("Count numbers negative = {}", count);
}
```
</details>

20 - Write a code that receives 5 numbers entered by the user and adds them to an empty tuple, checks if there are even numbers and if so, adds them to another empty list.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8573114a8109e94e03d51cd3b298fff8)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter with 5 numbers:");
    let mut input_array: [i8; 5] = [0; 5];
    let mut even_array: [i8; 5] = [0; 5];

    for i in 0..input_array.len() {

        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Data entry error!");
        input_array[i] = input_number.trim().parse().expect("Error converting data!");

        if input_array[i] % 2 == 0 {
            even_array[i] = input_array[i];
        }
    }

    println!("\n{:?}", even_array);
}
```
</details>

21 - Write a program that receives the name and age of a user and stores them in a tuple using for.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8b21fbfdba4cdfbf94b1013d5ee6012c)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    println!("Enter the number of users you want to add:");
    let mut input_count: String = String::new();
    io::stdin().read_line(&mut input_count).err();
    let count: u8 = input_count.trim().parse().expect("Error converting data!");

    let mut input_array: (String, u8);

    for _i in 0..count {
        println!("\nEnter name:");
        let mut input_name: String = String::new();
        io::stdin().read_line(&mut input_name).err();
        let name = input_name;

        println!("\nEnter age:");
        let mut input_age: String = String::new();
        io::stdin().read_line(&mut input_age).err();
        let age: u8 = input_age.trim().parse().expect("Error converting data!");

        input_array = (name, age);
        println!("\nName:{}Age={}", input_array.0, input_array.1);
    }
}
```
</details>
