# Match

Compara um valor contra diferentes padrões (*patterns*) e executa o código correspondente ao primeiro padrão que corresponde. É como um *switch* mais poderoso e mais seguro.

Ele garante que todos os casos possíveis são cobertos, prevenindo erros comuns. Diferente do *switch* tradicional, ele não precisa de *break* e sempre retorna um valor.

```rust
let a = 3;

match a {
  1 => println!("1"),
  2 => println!("2"),
  3 => println!("3"),
  _ => println!("Nenhuma!"),
};
```

`range`

```rust
let idade = 63;

let categoria = match idade {
  0..=11 => "Criança",
  12..=17 => "Adolescente",
  18..=64 => "Adulto",
  _ => "Idoso",
};

println!("{}", categoria);
```

`println!()`

```rust
let letra = 'g';

println!("{:?}", match letra {
  'A'..='Z' => "A ... Z",
  'a'..='z' => "a ... z",
  _ => "Outro",
});
```

`operation`

```rust
let numero = 20;

let result = match numero {
  1 | 3 | 5 | 7 | 9 => "Ímpar",
  2 | 4 | 6 | 8 | 10 => "Par",
  _=> "Nenhum!",
};

println!("{}", result);
```

`equal`

```rust
let even = (2, -2);

let result = match even {
  (x, y) if x == y => "x é igual a y",
  (x, _) if x % 2 == 0 => "o valor x é par",
  _=> "Nenhuma!",
};

println!("{:?}", result);
```
