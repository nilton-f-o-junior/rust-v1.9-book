# Else

Agora que entendemos como o "if" funciona, o "else" é o complemento. Pense assim: se algo for verdadeiro, faça isto; senão, faça aquilo.

`Se 1 + 1 for igual a 2, imprima "Hello, world!"; senão, imprima "Goodbye, World.".`

```rust
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
let num: u8 = 5;

if num >= 6 {
    println!("Num > ou = 6!");
} else {
    println!("Num < ou = 5!");
};
```

`expression`

```rust
let score = 51;
let nota = if score >= 50 { "+50"} else { "-50" };
println!("{}", nota);
```

```rust
let num: u8 = 24;

let result: String = if num > 20 || num <= 30 {
      String::from("Temperatura > 20 ou <= 30!")
} else {
      String::from("Temperatura < 20 ou >= 30!")
};

println!("Temperatura: {}", num);
println!("{}", result);
```
