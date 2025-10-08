# Questions - Loop

01 - Create a program that uses a loop to count from 1 to 5. For each number, print the counter's value. The loop should stop when the counter reaches 6.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=867fd7cb75b2b7622583dacb97977227)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count_number: u8 = 0;

    //
    loop {
        //
        count_number += 1;
        println!("Count = {}", count_number);
        if count_number >= 5 {
            break;
        }
    }
}
```
</details>

02 - Define a constant LIMIT with the value 100. Use a loop to add numbers to a mutable variable sum starting from 1. Stop the loop when the value of sum exce
eds LIMIT and print the final value of sum.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6369cdd1db88650cc1a6bb61a62ec7ea)

<details>
<summary>Answers</summary>

```rust
const LIMIT: u8 = 100;

fn main() {
    //
    let mut start_sum: u8 = 1;

    //
    loop {
        println!("{}", start_sum);

        if start_sum >= LIMIT {
            break;
        }

        start_sum += start_sum;
    }
}
```
</details>

03 - Write a loop that repeatedly prints the message "I'm stuck in a loop!". Use a counter variable and an if statement to break the loop after the 3rd iterat
ion.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c73780d5b46ff6f81aae1caa7245a37f)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count_num: u8 = 0;

    //
    loop {
        //
        count_num += 1;

        if count_num >= 4 {
            break;
        }

        println!("I'm stuck in a loop!");
    }
}
```
</details>

04 - Use a loop to iterate from 1 to 10. Inside the loop, check if the current number is even or odd using the modulo operator (%). Print the formatted result
, such as "The number 3 is odd.". The loop should stop after the number 10.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=edfe6853280ab749a8958a379ad1185d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count_number: u8 = 0;

    loop {
        count_number += 1;

        if count_number % 2 == 0 {
            println!("The number {} is even.", count_number);
        } else {
            println!("The number {} is odd.", count_number);
        }

        if count_number >= 10 {
            break;
        }
    }
}
```
</details>

05 - Initialize a mutable variable of type f32 with 0.0. In a loop, add 0.5 to this variable in each iteration. Print the value at each step and stop the loop
 when the value is greater than or equal to 5.0.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bf06125d5593625f1c4c406230dbe135)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count_number: f32 = 0.;

    //
    loop {
        //
        count_number += 0.5;
        println!("{}", count_number);

        if count_number >= 5. {
            break;
        }
    }
}
```
</details>

06 - Create a turn-based game between player and monster:

HP: 100 <br>
Attack: 10 <br>
Defense: 10

- Player Attack and Monster Attack: Double damage for both 
- Player Attack and Monster Defend: Player takes half damage and monster takes no damage 
- Player Defend and Monster Attack: Player takes no damage and monster takes half damage 
- Player Defend and Monster Defend: Both block 

Using only loop, if/else/else if and rand (SystemTime, UNIX_EPOCH)


[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c826248086b4f66572399802c194237d)

<details>
<summary>Answers</summary>

```rust
use std::io;
use std::time::{SystemTime, UNIX_EPOCH};

const DAMAGE: i8 = 10;

fn main() {
    //
    let mut health_player: i8 = 100;
    let mut health_monster: i8 = 100;

    //
    let mut round = 0;

    //
    println!("--- Start Game ---");
    println!("Player vs Monster");
    println!("");

    //
    loop {
        //
        round += 1;

        println!("---- Statistics ----");
        println!(
            "Player:\n HP: {}\n Damage: 10\n Defense: 10\n",
            health_player
        );
        println!(
            "Monster:\n HP: {}\n Damage: 10\n Defense: 10\n",
            health_monster
        );

        println!("--- Player ---");
        println!("[1] Attack!\n[2] Defense\n");

        // player 1
        let mut input_select_player: String = String::new();
        io::stdin()
            .read_line(&mut input_select_player)
            .expect("Error entered data!");
        let select_player: i8 = input_select_player
            .trim()
            .parse()
            .expect("Error converting data!");

        // monster
        let input_select_monster = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .expect("Error time!")
            .as_nanos();

        // random
        let select_monster = (input_select_monster % 2 + 1) as i8;

        if select_player == 1 && select_monster == 1 {
            health_player = health_player - (DAMAGE * 2);
            health_monster = health_monster - (DAMAGE * 2);
            println!("---- Round {} ----", round);
            println!("Player: Attack\nMonster: Attack\n");
            println!("*** SUPER DAMAGE! ***\n");
        } else if select_player == 1 && select_monster == 2 {
            health_player = health_player - (DAMAGE / 2);
            println!("---- Round {} ----", round);
            println!("Player: Attack\nMonster: Defend\n");
            println!("*** PLAYER BLOCK! ***\n");
        } else if select_player == 2 && select_monster == 1 {
            health_monster = health_monster - (DAMAGE / 2);
            println!("---- Round {} ----", round);
            println!("Player: Defend\nMonster: Attack\n");
            println!("*** MONSTER BLOCK! ***\n");
        } else if select_player == 2 && select_monster == 2 {
            health_player = health_player - (DAMAGE * 2);
            health_monster = health_monster - (DAMAGE * 2);
            println!("---- Round {} ----", round);
            println!("Player: Defend\nMonster: Defend\n");
            println!("*** SUPER BLOCK! ***\n");
        }

        //
        if health_player <= 0 {
            println!("---- Statistics ----");
            println!(
                "Player:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_player
            );
            println!(
                "Monster:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_monster
            );
            println!("--- Player ---\n*** YOU LOSE! ***");
            break;
        }
        if health_monster <= 0 {
            println!("---- Statistics ----");
            println!(
                "Player:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_player
            );
            println!(
                "Monster:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_monster
            );
            println!("--- Player ---\n*** YOU WIN! ***");
            break;
        }
    }
}
```
</details>


07 - Create a counter that starts from 1 and goes onwards. Inside a loop, check the following conditions:

- If the number is divisible by both 3 and 5, print "FizzBuzz".
- If it's only divisible by 3, print "Fizz".
- If it's only divisible by 5, print "Buzz".
- Otherwise, print the number.
- Break the loop when the counter reaches 100.


[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9754ff3112bbd3c3d7cb5299e743af89)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    println!("Count 1 .. 100!");
    let mut count_number: u8 = 0;

    //
    loop {
        //
        count_number += 1;

        if count_number % 3 == 0 && count_number % 5 == 0 {
            println!("FizzBuzz");
        } else if count_number % 3 == 0 {
            println!("Fizz");
        } else if count_number % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", count_number);
        }

        if count_number > 100 {
            break;
        }
    }
}
```
</details>

08 - Start with capital = 1000.0 and goal = 2000.0. Each "year" (loop iteration), the capital increases by 7% (capital *= 1.07;). The loop should count how many years it takes for the capital to reach or exceed the goal. When the goal is reached, the loop should break, returning the number of years. Print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a25c0cbd3da158963b7ecbee36186210)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut cap: f32 = 1000.;
    let mut year: u8 = 0;

    loop {
        //
        cap *= 1.07;
        year += 1;
        println!("Cap = {} and Year = {}", cap, year);

        if cap >= 2000. {
            println!("Cap. = {}", cap);
            println!("Year = {}", year);
            break;
        }
    }
}
```
</details>

09 - Create a loop that starts with the character 'a' and prints each character up to 'f'. Use a mutable variable of type char and increment it. To increment, you can convert the char to u8, add 1, and convert back to char. Stop when the character is greater than 'f'.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2f2f96b7c5bdd75f8191bcf4b49c51b3)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut input_char: char = 'a';
    println!("-- Start --");

    //
    loop {
        //
        println!("Char: {}", input_char);
        let char_init = input_char as u8;
        let char_next = char_init + 1;
        input_char = char_next as char;

        if input_char > 'f' {
            break;
        }
    }
}
```
</details>

10 - Declare a mutable tuple let mut data = (0, false);. Create a loop that increments the first element of the tuple by 1 in each iteration. When the first element reaches the value 5, change the second element to true and break the loop. Print the final tuple outside the loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ea69a77ddaab3ae8c204184853930c7b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut data: (u8, bool) = (0, false);

    loop {
        println!("{:?}", data);
        data.0 += 1;

        //
        if data.0 > 5 {
            data.1 = true;
            println!("{:?}", data);
            break;
        }
    }
}
```
</details>

11 - Create a tuple named person with the values (Person, 0, 0.0). Then, change its data 3 times using a loop, prompting the user for the name, age, and height, and print the values.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f0d0d5271153cb6ed31eb70f45bb48ca)

<details>
<summary>Answers</summary>

```rust
use std::io;

fn main() {
    //
    let mut person: (String, u8, f32) = ("Person".to_string(), 0, 0.);
    println!("{:#?}", person);

    let mut amount: u8 = 0;

    //
    loop {
        //
        println!("Whats your name?");
        let mut input_person: String = String::new();
        io::stdin()
            .read_line(&mut input_person)
            .expect("Error entered data!");
        let name: String = input_person.trim().to_string();

        //
        println!("Whats your age?");
        let mut input_age: String = String::new();
        io::stdin()
            .read_line(&mut input_age)
            .expect("Error entered data!");
        let age: u8 = input_age.trim().parse().expect("Error convert data!");

        //
        println!("Whats your height?");
        let mut input_height: String = String::new();
        io::stdin()
            .read_line(&mut input_height)
            .expect("Error entered data!");
        let height: f32 = input_height.trim().parse().expect("Error convert data!");

        //
        amount += 1;

        //
        person = (name, age, height);
        println!("{:#?}", person);

        if amount >= 3 {
            break;
        }
    }
}
```
</details>

12 - Use a loop to display the elements of the following array: [u8; 5] = [10, 20, 30, 40, 50]

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=35b2aa19ba013aba1fb4bc5e061157c0)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let init_array: [u8; 5] = [10, 20, 30, 40, 50];
    let mut i = 0;

    //
    loop {
        //
        if i >= init_array.len() {
            break;
        }

        //
        println!("{}", init_array[i]);
        i += 1;
    }
}
```
</details>

13 - Use a loop to display the elements in reverse order of the following array: [u8; 5] = [1, 2, 3, 4, 5]

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f89ad0722eddecf65cd92ce5468114b9)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let init_array: [u8; 5] = [1, 2, 3, 4, 5];
    let mut i = init_array.len() - 1;

    loop {
        //
        if i <= 0 {
            println!("{}", init_array[i]);
            break;
        }

        println!("{}", init_array[i]);
        i -= 1;
    }
}
```
</details>

14 - Could you create code to print the following four arrays: [u8; 2] = [1, 2];, [f32; 3] = [2.5, 7.3, 9.2];, [char; 4] = ['A', 'B', 'C', 'D'];, and [&str; 5] = ["Ana", "Bruno", "Carla", "Daniel", "Elza"];"

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=318f3ee9f4004181ea62b7f54180e5c8)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let init_array_int: [u8; 2] = [1, 2];
    let init_array_float: [f32; 3] = [2.5, 7.3, 9.2];
    let init_array_char: [char; 4] = ['A', 'B', 'C', 'D'];
    let init_array_str: [&str; 5] = ["Ana", "Bruno", "Carla", "Daniel", "Elza"];

    //
    let mut i = 0;
    loop {
        //
        if i >= init_array_int.len() {
            break;
        }

        println!("{}", init_array_int[i]);
        i += 1;
    }
    println!("");

    //
    i = 0;
    loop {
        //
        if i >= init_array_float.len() {
            break;
        }

        println!("{}", init_array_float[i]);
        i += 1;
    }
    println!("");

    //
    i = 0;
    loop {
        //
        if i >= init_array_char.len() {
            break;
        }

        println!("{}", init_array_char[i]);
        i += 1;
    }
    println!("");

    //
    i = 0;
    loop {
        //
        if i >= init_array_str.len() {
            break;
        }

        println!("{}", init_array_str[i]);
        i += 1;
    }
}
```
</details>

15 - Create a code that sums the data in an array using a loop, here is an array: [u8; 4] = [1, 2, 4, 5]"

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9a958d6a636e016adb85842d9f329a76)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let init_array: [u8; 4] = [1, 2, 4, 5];

    //
    let mut i = 0;
    let mut sum = 0;

    loop {
        if i >= init_array.len() {
            break;
        }

        println!("Values = {:?}", init_array[i]);
        sum = sum + init_array[i];
        i += 1;
    }
    println!("Sum = {}", sum);
}
```
</details>

16 - Declare a mutable array of 5 positions of type i32, initialized with zeros: let mut my_array = [0; 5];. Use a loop and an index variable to fill the array with the values [10, 20, 30, 40, 50]. The loop should stop when the array is complete. Print the final array.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=dd46a736a7ce41bebafbb59864b556f0)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut init_array: [i32; 5] = [0; 5];
    let mut i = 0;

    //
    loop {
        //
        if i >= init_array.len() {
            break;
        }

        init_array[i] = (i as i32 + 1) * 10;
        i += 1;
    }

    println!("Array = {:?}", init_array);
}
```
</details>

17 - Calculate the factorial of 5 using a loop. You will need two mutable variables: one for the counter (from 1 to 5) and another to store the factorial result. Print the final result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=dc7d965aa4e4766b33e4895598461b97)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u8 = 1;
    let mut factorial: u8 = 1;

    loop {
        //
        println!("Facto = {}", factorial);

        factorial *= count;
        count += 1;

        if count > 5 {
            break;
        }
    }

    println!("Factorial = {}", factorial);
}
```
</details>

18 - Start with a variable number equal to 123. In a loop, divide the number by 2 and print the division result and the remainder (%). Continue the loop until the number is less than 1.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0024afeedc640391c45e5c8a8d4ae190)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut number: f32 = 123.;

    loop {
        //
        let division = number / 2.;
        let remainder = number % 2.;

        //
        number = division;

        //
        println!("123 / 2 = {:.2}\n123 % 2 = {:.2}\n", division, remainder);

        //
        if number < 1. {
            break;
        }
    }
}
```
</details>

19 - Inside a loop, calculate and print the result of the expression 5+counter∗2, where counter is a variable that starts at 0 and is incremented in each iteration. Use parentheses to change the precedence and calculate (5 + counter)∗2 in a second print. Stop the loop when the counter reaches 5.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=443eba26ed317a7cd49a85a6c60eed48)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut count: u8 = 0;

    //
    loop {
        //
        println!("Count = {} | 5 + count * 2 = {}", count, 5 + count * 2);
        println!("Count = {} | (5 + count) * 2 = {}", count, (5 + count) * 2);

        count += 1;
        if count > 5 {
            break;
        }
    }
}
```
</details>

20 - Define a constant SECRET_NUMBER: u8 = 42;. Create a loop that simulates guessing attempts. An attempt variable should be incremented in each iteration. Use if/else if/else to print "Too low", "Too high", or "You got it!" when the attempt is equal to SECRET_NUMBER. Break the loop when you guess correctly.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=03afec011f69112f495007c00436d370)

<details>
<summary>Answers</summary>

```rust
use std::io;

const SECRET_NUMBER: u8 = 42;

fn main() {
    println!("------- Start -------");
    println!("Player 1 VS Computer");
    println!("");
    println!("---------------------");
    println!("You have 3 attempts!");

    let mut attempts: u8 = 0;

    loop {
        println!("\nEnter a number:");
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Error entered data!");
        let player_number: u8 = input_number.trim().parse().expect("Error converting data!");

        if player_number > SECRET_NUMBER {
            println!("Too High!");
        } else if player_number < SECRET_NUMBER {
            println!("Too Low!");
        } else {
            println!("\nYou Win!");
            break;
        }

        attempts += 1;
        if attempts == 1 {
            println!("You have 2 attempts remaining!");
        } else if attempts == 2 {
            println!("You have 1 attempt remaining!");
        } else if attempts == 3 {
            println!("YOU LOSE!");
            break;
        }
    }
}
```
</details>

21 - Count down from 10 to 1. Use a loop and the format! macro to print messages like "Countdown: 10", "Countdown: 9", etc. When the counter reaches 0, print "Launch!" and break the loop.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2704726e927ec8d04e26926862ff645d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    println!("-- Start --");
    let mut init_count: i8 = 10;

    //
    loop {
        println!("Countdown: {}", init_count);

        init_count -= 1;
        if init_count < 1 {
            println!("Lauch!");
            break;
        }
    }
}
```
</details>

22 - Declare a mutable array of 10 positions ([0; 10]). Use a loop with a counter to fill it. If the array index is even, fill it with the index value itself.
 If it's odd, fill it with twice the index value. Stop the loop when the array is complete.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3682989bb8c6be462a4c38aa6363d432)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let mut init_array: [i8; 10] = [0; 10];
    let mut i = 0;

    loop {
        //
        if i >= init_array.len() {
            break;
        }

        //
        if i % 2 == 0 {
            init_array[i] = i as i8;
        } else {
            init_array[i] = i as i8 * 2;
        }

        //
        println!("Array = {:?}", init_array);
        i += 1;
    }
}
```
</details>
