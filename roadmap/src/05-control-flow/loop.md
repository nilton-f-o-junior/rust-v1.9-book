# Loop 

For infinite repetitions that continue until explicitly stopped with "break".

> Access: [Loop without the break](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9b6c6ebd14320801175b48fba7a10b6c)

`loop + break`

```rust
//
loop {
    println!("Hello, world!");
    break;
}
```

`loop + if`

```rust
//
let mut count = 0;

loop {
    println!("Cont: {}", count);
    count += 1;

    if count == 5 {
        break;
    }
}

println!("End of loop!");
```

`loop + break + continue`

```rust
//
let mut count = 0;
let max_value = 7;

loop {
    count += 1;

    if count % 2 == 0 {
        continue;
    }

    println!(" Odd = {}", count);
    
    if count >= max_value {
        break;
    }

    println!("---")
}
```
