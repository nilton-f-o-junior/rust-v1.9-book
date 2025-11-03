# Questions - Data Structures

---

01 - Declare a variable positive_only of type u32 with the value 100. Declare another variable can_be_negative of type i32 with the value -100. Print both. Now, try to assign -5 to the positive_only variable. What happens when you try to compile and why?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e234672215be4a964b847798d0d36b9a)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let positive_only: u32 = 100;
    println!("{:?}", positive_only);

    //
    let can_be_negative: i32 = -100;
    println!("{:?}", can_be_negative);

    // error: attempt to compute `u8::MAX + 1_u8`, which would overflow
    // let positive_only: u32 = -5;
    // println!("{:?}", positive_only);
}
```
</details>

02 - Write Rust code to declare a variable max_u8 of type u8 and assign it the largest possible value for this type. Print this value. Then, in your code, try to assign max_u8 + 1 to a new u8 variable. What happens during compilation or execution (especially in debug vs. release mode, if you know)?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bc0095a362d7352255ab863df698bbf9)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let max_u8: u8 = u8::MAX;
    println!("{:?}", max_u8);

    // error: attempt to compute `u8::MAX + 1_u8`, which would overflow
    // let max_u8: u8 = u8::MAX + 1;
    // println!("{:?}");
}
```
</details>

03 - Declare a variable named world_population of type u64 and assign it the value 7800000000. Then, print the variable's value formatted with thousand separators (research how to do this if necessary, or just print the number).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=837583c25287bc90d5d70d5b88471041)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let world_population: u64 = 7_800_000_000;
    println!("World Population: {world_population:?}");
}
```
</details>

04 - You need to store the number of video views, which can reach billions but will never be negative. Choose the most appropriate unsigned type (u32 or u64). Declare a variable video_views with this type, assign 2500000000 to it, and print.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=000d4cacf88ec0136ee00771e6e96098)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let video_views: u64 = 2_500_000_000;
    println!("{:?}", video_views);
}
```
</details>

05 - Declare two variables, min_val_i8 and max_val_i8, both of type i8. Assign them the smallest an largest possible value, respectively, for the i8 type. Print both values.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=64c38f068bb7a3bd4c20446600eaba94)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let min_val_i8: i8 = i8::MIN;
    println!("{:?}", min_val_i8);

    //
    let max_val_i8: i8 = i8::MAX;
    println!("{:?}", max_val_i8);
}
```
</details>

06 - Declare a variable named current_altitude_change of type i16 to represent an altitude change in meters. Assign it the value -350 (a descent of 350 meters). Print this value.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5fefa9d7ce4cc1d65c3f62254be008ee)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let current_altitude_change: i16 = -350;
    println!("Altitude: {:?} meters", current_altitude_change);
}
```
</details>

07 - You are processing financial transactions where the values can be very large and represent both credits and debits (in cents, to avoid floating-point issues). Declare a variable transaction_value_cents of type i64 and assign it a value like -12345678900 (representing a debit of over 123million). Print it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=867ba34d76a855770a2b244eae1c3706)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let transaction_value_cents: i64 = -12_345_678_900;
    println!("Debit = {:.3} million", transaction_value_cents);
}

/*
    Debugging: The code below attempts to assign a value that exceeds the limit of i32. Correct the code by choosing
    a larger i type that can accommodate the value 2_200_000_000.

    fn main() {
        let large_positive: i32 = 2_200_000_000; // Exceeds the limit of i32 println!("{}", large_positive);
    }
*/

// the literal `2_200_000_000` does not fit into the type `i32` whose range is `-2147483648..=2147483647`
```
</details>

08 - Try declaring a variable value_a of type u8 with 10 and value_b of type u8 with -10. What happens to value_b during compilation?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d22d2b41277ecb5d06e61a19b994c7d8)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let value_a: u8 = 10;
    println!("{:?}", value_a);

    //
    let value_b: u8 = -10;
    println!("{:?}", value_b);
}
```
</details>

09 - Declare a variable precise_measurement of type f64 with the value 123.456789123456. Print it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=774ca7ceba9370f8c4efd0e791727faf)

<details>
<summary>Answers</summary>

```rust
fn main() {  
    let precise_measurement: f64 = 123.456_789_123_456;
    println!("{:?}", precise_measurement);
}
```
</details>

10 - In an embedded system with limited memory, you need to store a sensor reading that ranges from -10.0 to +10.0 with two decimal places of precision. Declare a variable sensor_reading using f32 and assign 7.89. Print it. Justify why f32 might be suitable here.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4fbf9ae6f66c00ea0a62f776a2a0a64b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let limited_memory: f32 = 10.00;
    println!("{:?}", limited_memory);

    //
    let limited_memory: f32 = -10.00;
    println!("{:?}", limited_memory);

    //
    let sensor_reading: f32 = 7.89;
    println!("{:?}", sensor_reading);
}
```
</details>

11 - Declare a character char_ascii = 'Z'; and a Unicode character char_unicode = 'Ω'; (Greek letter Omega). Use std::mem::size_of_val(&char_ascii) and std::mem::size_of_val(&char_unicode) to print the size in bytes of each. What do you observe?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9a25a88b9bf2bd2fddf69e5dd32e8bfe)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let char_ascii: char = 'Z';
    println!("{:?}", char_ascii);

    //
    //let char_unicode: char = ' ';
    //println!("{:?}", char_unicode);

    //
    let char_unicode: char = 'Ω';
    println!("{:?}", char_unicode);

    //
    println!("{:?}", std::mem::size_of_val(&char_ascii));
    println!("{:?}", std::mem::size_of_val(&char_unicode));
}
```
</details>

12 - Declare a variable my_initial of type char and assign it the first letter of your name. Print it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b146d46c965a35609541cc2ce8a0fa56)

<details>
<summary>Answers</summary>

```rust
fn main() {    
    let my_ini: char = 'n';      
    println!("{}", my_ini);
}
```
</details>

13 - Declare three char variables: emoji_char with '😊', math_symbol with '∑', and arrow_char with '→'. Print all of them.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b26ad1efbfb8a3599d6a0cddaaade0b9)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let emoji_char: char = '😊';
    let math_symbol: char = '∑';
    let arrow_char: char = '→';

    println!("{}\n{}\n{}", emoji_char, math_symbol, arrow_char);
}
```
</details>

14 - Try to declare a char variable with more than one character, for example: let not_a_char: char = 'ab';. What happens when you try to compile?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f5c00b54ac22ede25fb827b4b0a5e772)

<details>
<summary>Answers</summary>

```rust
fn main() {
    // syntax Error: Literal must be one character long
    let not_a_char : char = 'ab';
}
```
</details>

15 - Declare a variable is_file_loaded and assign it true. Declare has_errors and assign false. Print both. Then, try to assign the integer 1 to a boolean variable. What does the Rust compiler say?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=dbef312edf852d777c30b58ff75f0f70)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //
    let is_file_loaded: bool = true;
    println!("{:?}", is_file_loaded);

    //
    let has_errors: bool = false;
    println!("{:?}", has_errors);

    // mismatched types  expected `bool`, found integer
    // let assing: bool = 1;
    // println!("{:?}", assing);
}
```
</details>

16 - Create a tuple record that contains a name (&str), an age (u8), and a passing grade (f32). For example: ("Maria", 22, 7.5). Print the entire tuple.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0c600bfa3b6760850c4ead99dba25809)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let record: (&str, u8, f32) = ("Maria", 22, 7.5);
    println!("{:#?}", record);
}
```
</details>

17 - Create a tuple called server_response that contains an HTTP status code (u16) and a response message (&str), such as (404, "Not Found"). Print the tuple.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=868e32891563fa84cf656dec9b178ba2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let server_response: (u16, &str) = (404, "Not Found");
    println!("{:?}", server_response);
}
```
</details>

18 - Given the tuple let product_info = ("Laptop XPTO", 1250.99, 15); (name, price, quantity in stock), access and print the product price and the quantity in stock using tuple indexing (e.g., product_info.1).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=df771a044efc4bb68545d2c998176266)

<details>
<summary>Answers</summary>

```rust
fn main() {    
    let product_info: (&str, f32, u16) = ("Laptop XPTO", 1.250_000, 15);
    let (name, price, quantity_and_stock) = product_info;

    //
    println!(
        "Product: {} \nQuantity and Stock: {}",
        product_info.0, product_info.2
    );

    //
    println!("{:#?}", product_info);

    //
    println!(
        "Product: {} \nPrice: {:.3} \nQuantity and Stock: {}",
        name, price, quantity_and_stock
    );
}
```
</details>

19 - Given the tuple let color_rgb = (255, 128, 0); (representing Orange), destructure it into the variables red, green, and blue. Print each variable separately.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c5c1f723885d4f0b13a77de39255b301)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let color_rgb: (u8, u8, u8) = (255, 128, 0);
    let (red, green, blue) = color_rgb;

    println!("Red: {} \nGreen: {} \nBlue: {}", red, green, blue);
}
```
</details>

20 - Declare a tuple api_result with a boolean indicating success, a u64 for an ID, and a String for a message. Ex: (true, 1234567890, String::from("Successful operation")). Print using {:#?}.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9e4ed3d61f81b80b5c2569ddba149db3)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let api_result: (bool, u64, String) = (true, 1234567890, String::from("Successful operation"));
    println!("{:#?}", api_result);
}
```
</details>

21 - Declare a tuple let config = ("localhost", 8080);. Try to modify the second element to 8081 (e.g., config.1 = 8081;). What happens when compiling? Now, redeclare it as let mut config = ("localhost", 8080); and try the same modification. Print config.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4ddd90d53cc03f303e21cdafa712ca4e)

<details>
<summary>Answers</summary>

```rust
fn main() {
    // let config: (&str, u16) = ("localhost", 8080);
    //println!("{:?}", config);
    //config.1 = 8180; // cannot assign to `config.1`, as `config` is not declared as mutable  cannot assign

    //
    let mut config: (&str, u16) = ("localhost", 8080);
    println!("{:?}", config);

    config.1 = 8180;
    println!("{:?}", config);
}
```
</details>

22 - Declare a mutable tuple player_stats to store name (&str), score (i32), and lives (u8). Initialize with ("Hero", 0, 3). Then, modify the score to 1500 and the lives to 2. Print the updated tuple.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=afe9fd02595b65c96f93d8c0b1a0889d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut player_stats: (&str, i32, u8) = ("Hero", 0, 3);
    println!("{:#?}", player_stats);

    player_stats.1 = 1500;
    player_stats.2 = 2;
    
    println!("{:#?}", player_stats);
}
```
</details>

23 - Create a mutable tuple let mut point = (10.0, 20.0);. Modify the first element to 15.5 and the second to 25.0 using index access syntax. Imprint the tuple.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=158f2254800b8b22ebc49564654e724d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut point: (f32, f32) = (10., 20.);
    println!("{:#?}", point);

    point.0 = 15.5;
    point.1 = 25.;
    println!("{:#?}", point);
}
```
</details>

24 - Create a mutable tuple file_details containing file name (String), size (u64), and whether it's editable (bool). Initialize it. Then, modify the file name (appending "_v2" to the original name) and change the editable status. Print the tuple.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fd54c369b8a7c0f6471c06c07461f15b)

<details>
<summary>Answers</summary>

```rust
fn main () {
    //
    let file_details: (String, u64, bool) = (String::from("test.txt"), 127, true);
    println!("{:#?}", file_details);

    //
    let mut file_details_v2 = file_details;
    file_details_v2.0 = String::from("teste_v2.txt");
    file_details_v2.1 = 256;

    println!("{:#?}", file_details_v2);
}
```
</details>

25 - Declare an array months containing the names of the first three months of the year as string slices. Print the name of the second month (remember zero-basedindexing).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9a2be874096ce8f12a83c7f28e609e7b)

<details>
<summary>Answers</summary>

```rust
fn main () {
    let months: [&str; 3] = ["January", "February", "March"];
    println!("{:#?}", months);

    println!("{:#?}", months[1])
}
```
</details>

26 - Declare an array powers_of_two of 6 elements of type u32. Initialize it with the values [1, 2, 4, 8, 16, 32]. Print the last element of the array using indexing.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8292c18f34221aa2a44d6ff6f0233b03)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let powers_of_two: [u32; 6] = [1, 2, 4, 8, 16, 32];
    println!("{:?}, {:?}, {:?}", powers_of_two[3], powers_of_two[4], powers_of_two[5]);
}
```
</details>

27 - Declare an array let fixed_scores = [100, 90, 80];. Try to modify the second element to 95 (e.g., fixed_scores[1] = 95;). What happens? Now, declare it as let mut fixed_scores = [100, 90, 80];, make the modification, and print it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=06c01117ac75e40389b4e78e4c2acdb4)

<details>
<summary>Answers</summary>

```rust
fn main () {
    //
    let fixed_scores = [100, 90, 80];
    println!("{:?}", fixed_scores);

    // fixed_scores[1] = 95;
    // println!("{:?}", fixed_scores);

    //
    let mut fixed_scores = [10, 30, 60];
    println!("{:?}", fixed_scores);

    fixed_scores[1] = 0;
    println!("{:?}", fixed_scores);
}
```
</details>

28 - Declare a mutable array inventory_counts of 4 elements of type u16, initialized with [10, 25, 5, 30]. Modify the count of the first item to 12 and the third to 8. Print the updated array.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9dffc18405335409699ed4f444113923)

<details>
<summary>Answers</summary>

```rust
fn main () {
    let mut inventory_counts: [u16; 4] = [10, 25, 5, 30];

    inventory_counts[0] = 12;
    inventory_counts[3] = 8;

    println!("{:?}", inventory_counts);
}
```
</details>

29 - Create a mutable array active_services: [bool; 3] initialized as [true, false, true]. Modify the second service to true and the last to false. Print the array.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b9df12fc30ffb9767ef0c67908dd667e)

<details>
<summary>Answers</summary>

```rust
fn main () {
    let mut active_services:[bool; 3] = [true, false, true];
    println!("{:?}", active_services);

    active_services[1] = true;
    active_services[2] = false;
    println!("{:?}", active_services);

    println!("{:?}, {:?}, {:?}", active_services[0], active_services[1], active_services[2]);
}
```
</details>

30 - Create a mutable array pixel_colors: [[u8; 3]; 2] to represent two pixels, each with R, G, B components. Initialize it as [[255, 0, 0], [0, 255, 0]] (one red pixel, one green). Modify the first pixel to be blue ([0, 0, 255]) and the second to be yellow ([255, 255, 0]). Print the pixel array.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c6f8dcaaef0ad4bc945db471d36818cd)

<details>
<summary>Answers</summary>

```rust
fn main () {
    let mut pixel_colors: [[u8; 3]; 3] = [[255, 0, 0], [0, 255, 0], [0, 0, 255]];
    println!("{:#?}", pixel_colors);

    pixel_colors[0][0] = 0;
    pixel_colors[0][1] = 255;
    pixel_colors[1][0] = 255;
    
    println!("{:#?}", pixel_colors);
}
```
</details>
