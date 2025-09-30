# While

Repeats a block of code as long as a condition remains true.

Checks the condition before each iteration.

`while`

```rust
//
let mut count = 0;

while count <= 5 {
    println!("Count = {}", count);
    count += 1;
}
```

`while + continue`

```rust
//
let mut count = 0;
let max_value = 4;

while count <= max_value {
    //
    count += 1;

    if count % 2 == 0 {
        println!("Count is even! Value = {}", count);
        continue;
    }
    println!("---");
}
```
