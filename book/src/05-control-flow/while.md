# While

Repete um bloco de código enquanto uma condição permanecer verdadeira. Verifica a condição antes de cada iteração.

`while`

```rust
let mut count = 0;

while count <= 5 {
    println!("Valor = {}", count);
    count += 1;
}
```

`while + continue`

```rust
let mut count = 0;
let max_value = 4;

while count <= max_value {
    count += 1;

    if count % 2 == 0 {
        println!("Valor = {} é par!", count);
        continue;
    }
    println!("---");
}
```
