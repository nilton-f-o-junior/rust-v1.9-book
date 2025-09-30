# Else

Now that we understand how "if" works, "else" is the complement. Think of it like this: if something is true, do this; otherwise, do that.

If 1 + 1 equals 2, print "Hello, world!"; otherwise, print "Goodbye, World."

```rust
//
let num_1 = 1;
let num_2 = 1;

if num_1 + num_2 == 3 {
    println!("Hello, world!");
}

else {
    println!("Goodbye, World!");
}
```


`if and else`

```rust
//
let num: u8 = 5;

if num >= 6 {
    println!("Num > or = 6!");
} else {
    println!("Num <= 5!");
};
```

`expression`

```rust
//
let score = 51;
let grade = if score >= 50 { "+50"} else { "-50" };
println!("{}", grade);

```

```rust
//
let num: u8 = 24;

let result: String = if num > 20 || num <= 30 {
      String::from("Temp > 20 or <= 30!")
} else {
      String::from("Temp < 20 or >= 30!")
};

println!("Temp: {}", num);
println!("{}", result);
```
