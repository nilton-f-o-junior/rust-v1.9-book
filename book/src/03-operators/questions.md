# Questions - Operators

---

01 - Write a program that declares two integer variables, 'a' with the value 15 and 'b' with the value 7, and prints their sum.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2dd573923ebbe05a917740fd976012ae)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let a: u8 = 15;
    let b: u8 = 7;

    println!("{:?}", a + b);
}
```
</details>

02 - Create code that subtracts the value 3 from a variable called 'total' that initially equals 10, and displays the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e9270331929212ac8e2c1abd17dfcecd)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let total = 10;
    let sub = total - 3;
    println!("{:?}", sub);

    //
    let mut total = 10;
    total -= 3;
    println!("{:?}", total);
}
```
</details>

03 - Develop a program that multiplies two variables, 'x' equals 6 and 'y' equals 8, and shows the product.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=02e9864b7aeb56fb1ea58bbf628b556d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let x: u8 = 6;
    let y: u8 = 8;

    let result: u8 = x * y;
    println!("{:?}", result);
}
```
</details>

04 - Implement code that divides the number 20 by 5 and prints the quotient.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=82efdbfaf100e94137c547e0f8be4aad)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let result = 20 / 5;
    println!("{}", result);
}
```
</details>

05 - Write a program that calculates the remainder of the division of 23 by 4 and prints the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fadc1249e4d04ca1f03e12d3f4a11a88)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut remainder: u8 = 23;
    remainder %= 4;

    println!("{:?}", remainder);
}
```
</details>

06 - Declare two variables num1 (12) and num2 (5) and print the result of their sum directly within the println! macro.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bffa01732376c29ac6dfe7987f8aae36)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let num1: u8 = 12;
    let num2: u8 = 5;

    println!("{:?}", num1 + num2);
}
```
</details>

07 - Create an immutable variable called 'value' that is the sum of 9 and 2, and print its value.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=46978024506ccf4c2d94b9d689e765ef)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let value: u8 = 9 + 2;
    println!("{:?}", value);
}
```
</details>

08 - Declare two variables 'first' (7) and 'second' (3) and print the result of their multiplication.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1172562b9a9a328d2f754d4b4831598f)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let first: u8 = 7;
    let second: u8 = 3;

    println!("{:?}", first * second);
}
```
</details>

09 - Declare two variables 'dividend' (18) and 'divisor' (3) and store the result of the division in a variable called 'result', printing it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=01fa7e609b8970f7a92718dceda24ce1)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let dividend: u8 = 18;
    let divisor: u8 = 3;

    let result: u8 = dividend / divisor;
    println!("{:?}", result);
}
```
</details>

10 - Declare two variables n1 (25) and n2 (7). Calculate and print the remainder of the division of n1 by n2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5187f84f3dca36c039e36da25650bb4a)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let n1: u8 = 25;
    let n2: u8 = 7;

    println!("{:?}", n1 % n2);
}
```
</details>

11 - Declare a mutable variable named counter with an initial value of 5. Increment it by 3 using the addition assignment operator and print the new value.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d5fe82ffa2b390fac2900b37aed7605e)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut counter: u8 = 5;
    counter += 3;

    println!("{:?}", counter);
}
```
</details>

12 - Create a mutable variable score initialized with 20. Decrement it by 5 using the subtraction assignment operator and display the final value.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e9f23c8fdfb324fd7daaef74d2714eb3)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut score: u8 = 20;
    score -= 5;

    println!("{:?}", score);
}
```
</details>

13 - Declare a mutable variable number with the value 2. Multiply it by 4 using the multiplication assignment operator and print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8afd848dc184fbdb477fda1c20c51904)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut number: u8 = 2;
    number *= 4;

    println!("{:?}", number);
}
```
</details>

14 - Initialize a mutable variable size with 30. Divide it by 6 using the division assignment operator and show the resulting value.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b64b7b3516a797a6d85c486276f0f301)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut size: u8 = 30;
    size /= 6;

    println!("{:?}", size);
}
```
</details>

15 - Declare a mutable variable number with the value 17. Calculate the remainder of the division by 5 using the remainder assignment operator and print the value.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9635857ef38c0adf2698dcda7200f237)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut number: u8 = 17;
    number %= 5;

    println!("{:?}", number);
}
```
</details>

16 - Declare two variables of type &str, part1 with "Hello, " and part2 with "Rust!". Concatenate them and print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=972a2c883ea82a9961dd7ec97cb07168)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let part1: &str = "Hello, ";
    let part2: &str = "Rust!";

    println!("{}{}", part1, part2);
}
```
</details>

17 - Create two String variables, s1 with "Language" and s2 with "Rust.". Concatenate them and print the resulting string.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1e1f4ef4370cba2881ac35600134b161)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let s1: String = String::from("Language ");
    let s2: String = String::from("Rust.");

    println!("{:?}", s1 + &s2);
}
```
</details>

18 - Declare a variable of type &str called number with the value "Number: ". Create a variable of type String called number_str with the value "42". Concatenate them and print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fcdad93b10119349d3d6161012274aad)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let number: &str = "Number: ";
    let number_str: String = String::from("42");

    println!("{:?}", number.to_owned() + &number_str);
}
```
</details>

19 - Create a String variable called initial_message with "Welcome ". Declare a &str variable called name with "User". Concatenate them and print the complete message.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d016bce7ce892b58002919ecb0a3b8c2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let initial_message: String = String::from("Welcome ");
    let name: &str = "User";

    println!("{:?}", initial_message.to_owned() + name);
}
```
</details>

20 - Declare two variables greeting of type String with "Good " and period of type &str with "day!". Concatenate them and print the complete greeting.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=432caa3643846bc7f7c2bcbf459a6b85)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let greeting: String = String::from("Good ");
    let period: &str = "day!";

    println!("{}", greeting + period);
}
```
</details>

21 - Declare a tuple of two i32. Initialize it with the values (5, -2). Print the multiplication of these two values.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ad8177f1f4af00bcb2fee8c41a5bfed2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let tup: (i32, i32) = (5, -2);
    println!("{:?}", tup.0 * tup.1);
}
```
</details>

22 - Create a nested tuple: ((1, 2), (3, 4)). Add the first element of the first tuple to the second element of the second tuple and print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d274b8f3143f7beabefd16fcac10127d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let tup: ((u8, u8), (u8, u8)) = ((1, 2), (3, 4));
    println!("{:?}", tup.0 .0 + tup.1 .1);
}
```
</details>

23 - Declare two tuples, t1 with (2, 5) and t2 with (8, 1). Add all the elements of the two tuples and print the total.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1d1f0675b3ed8617bef4d58195137271)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let t1: (u8, u8) = (2, 5);
    let t2: (u8, u8) = (8, 1);

    println!("{:?}", t1.0 + t1.1 + t2.0 + t2.1);
}
```
</details>

24 - Create a tuple with an f32 and an i32. Print each element separately.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b0fb47f453ce24dcb7a6f0bf3a24f868)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut t1: (f32, i32) = (0.0, 0);
    t1.0 = -2.;
    t1.1 = 2;

    println!("{:#?}", t1);
}
```
</details>

25 - Declare an array of 5 i32 with the values [1, 3, 5, 7, 9]. Print the sum of the first and last elements.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a3afc4e6bc32c2d85a8ce522363d7113)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [i32; 5] = [1, 3, 5, 7, 9];
    println!("{:?} + {:?} = {:?}", arr[0], arr[4], arr[0] + arr[4]);
}
```
</details>

26 - Create an array of 3 u16. Initialize it with the values [10, 20, 30]. Print the product of all elements.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c0d710a477f36454e1f1df99d29ab8e6)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [i32; 3];
    arr = [10, 20, 30];

    println!("{:?}", arr[0] * arr[1] * arr[2]);
}
```
</details>

27 - Declare a 2x2 multidimensional array with integers.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=56dd598ff7acafc4a2905f65593ca8ef)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [[i8; 2]; 2];
    arr = [[2, 2], [4, 4]];

    println!("{:?}", arr[0][0] * arr[0][1] * arr[1][0] * arr[1][1]);
}
```
</details>

28 - Create two arrays of two f32. Sum the corresponding elements of the two arrays and print the results of the sums.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d39f9a2b3a17a013005578db9b38d5cc)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr1: [i8; 2] = [5, 3];
    let arr2: [i8; 2] = [3, 8];

    println!("{:?} + {:?} = {:?}", arr1[0], arr1[1], arr1[0] + arr1[1]);
    println!("{:?} + {:?} = {:?}", arr2[0], arr2[1], arr2[0] + arr2[1]);
}
```
</details>

29 - Declare two arrays a1 with [4, 2] and a2 with [3, 6]. Calculate and print the product of all elements from both arrays.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1955fa70e8f372bef1d1b8ca61cb146c)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let a1: [u8; 2] = [4, 2];
    let a2: [u8; 2] = [3, 6];

    println!("{:?}, {:?}", a1[0] * a1[1], a2[0] * a2[1]);
}
```
</details>

30 - Declare a variable x with value 1. Create an inner block where you declare a variable y with value 2. Inside the block, print the sum of x and y. Outside the block, try to print y (what will happen?).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a8eee9e045481c6225487c8d9e6ccf6b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let x: u8 = 1;
    {
        let y: u8 = 2;
        println!("{:?}", x + y);
    }
    
    println!("{:?}", x);
    // println!("{:?}", y); cannot find value `y` in this scope
}
```
</details>

31 - Declare a variable level1 with value 10. Open a new block and declare a variable level2 with value 20. Inside this block, create another block and declare level3 with value 30. Print the sum of level1 and level3 inside the innermost block.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f3c11d1e7f2f573ddee4c3588e12da5c)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let level1: u8 = 10;
    {
        let level2: u8 = 20;
        {
            let level3: u8 = 30;
            println!("{:?}", level1 + level2 + level3);
        }
        println!("{:?}", level2);
    }
    println!("{:?}", level1);
}
```
</details>

32 - Declare a main variable with value 100. Create a block where you declare a variable with the same name and assign the value 50.0. Print the value of the variable inside the block and outside the block.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d6515b06f90570307789c304cdf7e5fa)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let num: u8 = 100;
    println!("{:?}", num);
    {
      let num: f32 = 50.;
      println!("{:?}", num);
    }
    println!("{:?}", num);
}
```
</details>

33 - Using the same array values, write code that calculates and prints the result of (values[0] + values[1]) * values[1].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a72aa866f68f71460c7672fe734aef96)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", (var[0] + var[1]) * var[1]);
}
```
</details>

34 - Still with values, calculate and print values[0] * values[1] / values[1] % values[1].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c03a4df0f1ea4dbcda0eeea3b498b629)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", var[0] * var[1] / var[1] % var[1]);
}
```
</details>

35 - Calculate and print values[0] + values[1] − values[0] + values[0] * values[0].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=73793964a7262dd2ad335e3bf39fae1d)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", var[0] + var[1] - var[0] + var[0] * var[0]);
}
```
</details>

36 - Calculate and print ((values[0] + values[1]) − (values[0] + values[0]) * values[0]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a9ec68e45c8483fcd7439302bc965b14)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let var: [i8; 2] = [2, 3];
    println!("{:?}", (var[0] + var[1]) - (var[0] + var[0]) * var[0]);
}
```
</details>

37 - Declare two integer variables, num1 with value 10 and num2 with value 10. Write code that prints if num1 is equal to num2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5bcc69b905099a9fcb510768afd624fe)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let num1: i8 = 10;
    let num2: i8 = 10;

    println!("Num1 = Num2? {:?} ", num1 == num2);
}
```
</details>

38 - Declare two floating-point variables, f1 with 3.14 and f2 with 2.71. Write code that prints if f1 is different from f2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=46592fd394907a22d60fa9be8cdd55d2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let f1: f32 = 3.14;
    let f2: f32 = 2.71;

    println!("f1 != f2? {}", f1 != f2);
}
```
</details>

39 - Declare two integer variables, age1 with 25 and age2 with 30. Write code that prints if age1 is greater than age2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8b1bcf4bc47e307252523e8fe644435b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let age1: u8 = 25;
    let age2: u8 = 30;

    println!("Age-1 > Age-2? {}", age1 > age2);
}
```
</details>

40 - Declare two integer variables, point1 with 5 and point2 with 8. Write code that prints if point1 is less than point2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=74b5c2baf83da2b9cc0d86de052a2ac8)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let point_1: u8 = 5;
    let point_2: u8 = 8;

    println!("Point-1 < Point-2? {}", point_1 < point_2);
}
```
</details>

41 - Declare two integer variables, grade1 with 7 and grade2 with 7. Write code that prints if grade1 is greater than or equal to grade2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=70eac7d5e8bd5966ce5c5de43e90ea2f)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let grade_1: u8 = 7;
    let grade_2: u8 = 7;

    println!("Grade-1 >= Grade-2? {}", grade_1 >= grade_2);
}
```
</details>

42 - Declare two float variables, height1 with 1.70 and height2 with 1.65. Write code that prints if height1 is less than or equal to height2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=55c4862333201c4a96d61c1e671a590c)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let height_1: f32 = 1.70;
    let height_2: f32 = 1.65;

    println!("Height_1 <= Height_2? {}", height_1 <= height_2);
}
```
</details>

43 - Declare an integer variable x with 5 and another y with 10. Check if x is not equal to y and print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2e94624a4eb43d0bdb03835551153edc)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let x: u8 = 5;
    let y: u8 = 10;

    println!("x != y? {}", x != y);
}

```
</details>

44 - Declare a variable temp1 with 22.5 and temp2 with 20.0. Check if temp1 is greater than temp2 and print.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b36510d0c04af97cd8cd682761452929)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let temp_1: f32 = 22.5;
    let temp_2: f32 = 20.;

    println!("Temp1 > Temp2? {}", temp_1 > temp_2);
}
```
</details>

45 - Declare a variable count1 with 100 and count2 with 99. Check if count1 is less than count2 and print.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2463fcc21af0b4f059f6226c91b20f2e)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let count_1: u8 = 100;
    let count_2: u8 = 99;

    println!("Count 1 < Count 2? {}", count_1 < count_2);
}
```
</details>

46 - Declare two u8 variables, val1 with 8 and val2 with 3. Calculate the sum, subtract 1 from the result, and print.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=48e82f4f87c68414f88eabcab20c2873)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let val_1: u8 = 8;
    let val_2: u8 = 3;

    println!("{:?}", (val_1 + val_2) - 1);
}
```
</details>

47 - Create a tuple (u32, u32) with values (5, 10). Multiply the two elements and assign the result to a new variable, then print it.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4c4099f912452524978fea6aaa1f88c2)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr_1: (u32, u32) = (5, 10);
    let arr_2 = arr_1.0 * arr_1.1;

    println!("{:?}", arr_2);
}
```
</details>

48 - Declare an array [i32; 3] with values [2, 4, 6]. Divide each element by 2 (using division assignment if applicable) and print the resulting array.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a9fdeb1204fe8ea81ae7f236aa300b16)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let mut arr: [i32; 3] = [2, 4, 6];

    arr[0] /= 2;
    arr[1] /= 2;
    arr[2] /= 2;

    println!("{:#?}", arr);
}
```
</details>

49 - Declare a tuple (f64, f64) with (2.5, 3.5). Sum the elements and print the result formatted to two decimal places.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a2dfc15481f15eea7e00239ece931c35)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let tup: (f64, f64) = (2.5, 3.5);
    let result: f64 = tup.0 + tup.1;

    println!("{:.2}", result);
}
```
</details>

50 - Declare an array [u16; 2] with [100, 200]. Multiply the first element by 2 and the second by 3, then sum the results and print.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=480b70cf7845c463d094a209999d9851)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let arr: [u16; 2] = [100, 200];
    println!("{:?}", (arr[0] * 2) + (arr[1] * 3));
}
```
</details>

51 - Declare a variable message with "&str" "Start". Append to it the String " -> End". Print the final value of message.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c81873c4170bc7d9d94636972e079df9)

<details>
<summary>Answers</summary>

```rust
fn main() {
    //&str
    let message: &str = "Start";
    println!("{}", message.to_owned() + " -> End");

    // string
    let mut message: String = String::from("Start");
    message += " -> End";
    println!("{}", message);
}
```
</details>

52 - Create a tuple (i8, i8, i8) with (1, 2, 3). Sum all three numbers and print the result.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d78efbf191f8c64e77c2a06f7212be8a)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let tup: (i8, i8, i8) = (1, 2, 3);
    println!("{:?}", tup.0 + tup.1 + tup.2);
}
```
</details>

53 - Given an array data with [3, 2], calculate and print the result of data[0] + data[1] * 5 . Then, calculate and print (data[0] + data[1]) * 5.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=daf576a80983021df67723b1b36bd21b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let data: [u8; 2] = [3, 2];

    println!("{:?}", data[0] + data[1] * 5);
    println!("{:?}", (data[0] + data[1]) * 5);
}
```
</details>

54 - Given an array calc_values with [10, 3, 2], calculate and print calc_values[0] / calc_values[1] + calc_values[2]. Then, calculate and print calc_values[0] / (calc_values[1] + calc_values[2]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=55a82c237b746e0ce32693392866149b)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let calc_values: [u8; 3] = [10, 3, 2];

    println!("{:?}", calc_values[0] / calc_values[1] + calc_values[2]);
    println!("{:?}", calc_values[0] / (calc_values[1] + calc_values[2]));
}
```
</details>

55 - Declare a global_factor variable with 2. Inside a block, declare an array nums with [1, 2, 3]. Sum the array elements and multiply the result by global_factor, printing the final result inside the block.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4deda5e29a4261aeec7e13b490873669)

<details>
<summary>Answers</summary>

```rust
fn main() {
    let global_factor: u8 = 2;
    {
        let block: [u8; 3] = [1, 2, 3];
        let result = (block[0] + block[1] + block[2]) * global_factor;
        println!("{:?}", result);
    }
}
```
</details>
