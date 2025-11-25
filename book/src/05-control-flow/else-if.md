# Else if

Building on "if" and "else", "else if" allows you to check multiple conditions in sequence. Think of it as: if the first condition is true, do this; if the second condition is true, do that; otherwise, do something else.

If score equals 90, print "Excellent"; else if score equals 80, print "Good"; else, print "Try harder"

```rust
//
let score = 84;

if score >= 90 {
    println!("Excellent!");
}

else if score >= 80 {
    println!("Good!");
}

else {
    println!("Try harder!");
}

``` 

```rust
//
let temp: i8 = 30;

//
if temp < 0 {
    println!("Temp == 0°C");
} else if temp >= 0 && temp < 10 {
    println!("Temp >= 0°C and < 10°C");
} else if temp >= 10 && temp < 20 {
    println!("Temp >= 10°C and < 20°C");
} else if temp >= 20 && temp < 30 {
    println!("Temp >= 20°C and < 30°C");
} else {
    println!("Temp >= 30°C!");
};
```
