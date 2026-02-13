# String e &str

A concatenação de String e &str é o processo de unir sequências de caracteres. Em Rust, você pode usar o operador + ou a macro format!() para concatenar strings.

`string`

```rust
let conc_texto_a: String = String::from("Sense");
let conc_texto_b: String = String::from(" Life");
println!("{}", conc_texto_a + &conc_texto_b);
```

`&str`

```rust
let conc_texto_a: &str = "Calvin";
let conc_texto_b: &str = " e Haroldo";
println!("{}", conc_texto_a.to_owned() + conc_texto_b);
```

`string + &str`

```rust
let parte_a: &str = "ão";
let parte_b: String = String::from("Lampi");
println!("{}", parte_b + parte_a);
```

```rust
let parte_a: &str = "O Menino";
let parte_b: String = String::from("Maluquinho");
println!("{}", parte_a.to_owned() + " " + &parte_b);
```

```rust
let parte_a: String = String::from("Rei de");
let parte_b: &str = "Lata";

let resultado: String =  parte_a + " " +parte_b;
println!("{}", resultado);
```
