# If

A declaração `if` funciona de forma simples: se uma condição for atendida, execute o código.

`if 1 + 1 for igual a 2, print "É igual a dois!"`

```rust
let num_1 = 1;
let num_2 = 1;

if num_1 + num_2 == 2 {
    println!("É igual a dois!");
};
```

`if`

```rust
let num: u8 = 2;

if num > 1 {
    println!("Num > 1!");
};
```

`if expression`

```rust
let valor: u8 = 8;

let result = if valor > 1 && valor % 2 == 0 {
    println!("Valor = {:?} é par", valor);
};
```
