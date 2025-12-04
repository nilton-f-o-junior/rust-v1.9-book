# Tuplas

Combinam múltiplos valores de tipos diferentes em uma única estrutura de dados composta com um tamanho fixo.

`inferência de tipos`

```rust
let tipos_dados = ("a", 1);
println!("{:?}", tipos_dados);
```

```rust
let tipos_dados = ('b', 2.);
println!("{:?}", tipos_dados);
```

`inferência com atribuição explícita`

```rust
let tipos_dados: (&str, u8) = ("c", 3);
println!("{:?}", tipos_dados);
```

```rust
let tipos_dados: (String, bool) = (String::from("d"), true);
println!("{:?}", tipos_dados);
```

`Desestruturação com tipos explícitos`

```rust
let (texto, numero): (&str, i8);
(texto, numero) = ("e", 44);
println!("{}, {}", texto, numero);
```

```rust
let (texto, numero): (String, f64);
(texto, numero) = (String::from("f"), 128.5);
println!("{}, {}", texto, numero);
```

`Desestruturação simples`

```rust
let (letra, falso): (char, bool) = ('e', false);
let saida =  (letra, falso);
println!("{:?}", saida);
```

```rust
let pessoa = ("Gregorio", 64, 1.82);
let (nome, idade, altura) = pessoa;
println!("{}, {}, {}", nome, idade, altura);
```
