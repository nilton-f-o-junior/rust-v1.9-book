# Loop 

Para repetições infinitas que continuam até serem explicitamente paradas com break.

> Acesse: [Loop sem break](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9b6c6ebd14320801175b48fba7a10b6c)

`loop + break`

```rust
loop {
    println!("Hello, world!");
    break;
}
```

`loop + if`

```rust
let mut count = 0;

loop {
    println!("Contagem: {}", count);
    count += 1;

    if count == 5 {
        break;
    }
}

println!("Fim do Loop!");
```

`loop + break + continue`

```rust
let mut count = 0;
let max_valor = 7;

loop {
    count += 1;
    if count % 2 == 0 {
        continue;
    }

    println!("Ímpar = {}", count);
    if count >= max_valor {
        break;
    }

    println!("---")
}
```
