# Índice - Vetor

Vetores podem ser acessados por índice usando colchetes `[posição]`.

`index`

```rust
let vetor_indice: Vec<&str> = vec!["a", "b", "c"];
println!("i[0] = {:?}", vetor_indice[0]);
println!("i[1] = {:?}", vetor_indice[1]);
println!("i[2] = {:?}", vetor_indice[2]);
```

`let + index`

```rust
let vetor_indice_alfa: Vec<&str> = vec!["x", "y"];
let valor_alfa: &str = vetor_indice_alfa[1];
println!("Valor Alfa = {}", valor_alfa);
```

`index + mut`

```rust
let mut vetor_indice: Vec<&str> = vec!["A", "B", "C"];
println!("{:#?}\n", vetor_indice);

vetor_indice[1] = "b";
println!("{:#?}", vetor_indice);
```

`repeat`

```rust
let vetor_repeticao: Vec<u8> = vec![0; 5];
println!("Vetor Repetição = {:#?}", vetor_repeticao);
```

```rust
let vetor_repeticao_str: Vec<&str> = vec!["Erro"; 3];
println!("Vetor Repetição = {:#?}", vetor_repeticao_str);
```
