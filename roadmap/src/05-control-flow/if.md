# If

The "if" statement works simply: if a condition is met, execute some code.

If 1 + 1 equals 2, print "Hello, world!"

```rust
//
let num_1 = 1;
let num_2 = 1;

if num_1 + num_2 == 2 {
    println!("Hello, world!");
};
```

`if`

```rust
//
let num: u8 = 2;

if num > 1 {
    println!("Num > 1!");
};
```

`if expression`

```rust
//
let code: u8;
code = 8;

let result = if code > 1 && code % 2 == 0 {
    println!("Code = {:?} even", code);
};
```
