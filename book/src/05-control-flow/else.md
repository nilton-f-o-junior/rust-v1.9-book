# Else

Agora que entendemos como o `if` funciona, o `else` é o complemento.<br>

`Se 1 + 1 for igual a 2, imprima "Igual a dois!"; senão, imprima "Diferente de dois!".`

```rust
let num_1 = 1;
let num_2 = 2;

if num_1 + num_2 == 2 {
    println!("Igual a dois!");
}

else {
    println!("Diferente de dois!");
}
```

`if e else`

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
let valor = 51;
let resultado = if valor > 50 { "Maior que 50"} else { "Menor que 50" };
println!("{}", resultado);
```

```rust
let temperatura: u8 = 24;

let valor: String = if temperatura >= 20 || temperatura <= 30 {
      String::from("Temperatura >= 20 ou <= 30!")
} else {
      String::from("Temperatura < 20 ou > 30!")
};

println!("Temperatura: {}", temperatura);
println!("{}", valor);
```
