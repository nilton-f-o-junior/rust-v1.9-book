# Else if

Baseando-se em if e else, o else if permite que você verifique múltiplas condições em sequência. Pense nisso como: se a primeira condição for verdadeira, faça isto; senão se a segunda condição for verdadeira, faça aquilo; senão, faça outra coisa.

`Se score igual a 90, imprima "Excelente!"; senão se score igual a 80, imprima "Bom!"; senão, imprima "Esforce-se mais!".`

```rust
let score = 84;

if score >= 90 {
    println!("Excelente!");
}
else if score >= 80 {
    println!("Bom!");
}
else {
    println!("Esforce-se mais!");
}
```

```rust
let temp: i8 = 30;

if temp < 0 {
    println!("Temperatura = 0°C");
} else if temp >= 0 && temp < 10 {
    println!("Temperatura >= 0°C e < 10°C");
} else if temp >= 10 && temp < 20 {
    println!("Temperatura >= 10°C e < 20°C");
} else if temp >= 20 && temp < 30 {
    println!("Temperatura >= 20°C e < 30°C");
} else {
    println!("Temperatura >= 30°C!");
};
```
