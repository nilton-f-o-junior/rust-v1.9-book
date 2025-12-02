# Tuplas

Combinam múltiplos valores de tipos diferentes em uma única estrutura de dados composta com um tamanho fixo.

```rust
let tipos_dados = ("a", 1);
println!("{:#?}", tipos_dados);
```

```rust
let tipos_dados = (1., 2);
println!("{:#?}", tipos_dados);
```

```rust
let tipos_dados : (char, u8);
tipos_dados = ('c', 3);
println!("{:#?}", tipos_dados);
```

```rust
let (nome, idade) : (&str, i8);
(nome, idade) = ("Noah", 4);
println!("{}\n{}", nome, idade);
```

```rust
let (letra, verdadeiro) : (char, bool) = ('d', true);
let saida =  (letra, verdadeiro);
println!("{:#?}", saida);
```

```rust
let pessoa = ("Gregorio", 64, 1.82);
let (nome, idade, altura) = pessoa;
println!("{}\n{}\n{}", nome, idade, altura);
```
