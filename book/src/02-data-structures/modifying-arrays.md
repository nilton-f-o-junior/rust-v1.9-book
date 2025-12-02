# Modificando Arrays

Ao alterar valores de array, você precisa especificar o índice do elemento que deseja modificar. Os índices do array começam em 0 e correspondem à posição de cada elemento:

```rust
//                0   1   2   3   4
let mut scores = [40, 50, 60, 70, 80];

println!("Score [0]: {}", scores[0]);
println!("Score [1]: {}", scores[1]);
println!("Score [2]: {}\n", scores[2]);

scores[0] = 10;
scores[1] = 20;
scores[2] = 30;

println!("Score [0]: {}", scores[0]);
println!("Score [1]: {}", scores[1]);
println!("Score [2]: {}", scores[2]);
```

```rust
let mut numero: [i32; 5] = [1, 2, 3, 4, 5];
println!("{:#?}", numero);

numero[0] = 10;
numero[2] = 30;
numero[4] = 50;

println!("{:#?}", numero);
```

```rust
let mut nomes: [&str; 3] = ["Cecília", "Maite", "Helena"];
println!("{:#?}", nomes);

nomes[0] = "Gael";
nomes[1] = "Theo";
nomes[2] = "Rafael";

println!("{:#?}", nomes);
```
