# Métodos - Parte 1

`.push()`

```rust
// adiciona um elemento ao final
let mut vetor_push_add: Vec<u8> = Vec::new();

vetor_push_add.push(0);
println!("{:?}", vetor_push_add);

vetor_push_add.push(1);
println!("{:?}", vetor_push_add);

vetor_push_add.push(2);
println!("{:?}", vetor_push_add);
```

`.insert(indice, elemento)`

```rust
// adiciona um elemento em um índice específico, deslocando os outros para a direita
let mut vetor_adicionar: Vec<u8> = Vec::new();

vetor_adicionar.insert(0, 10);
vetor_adicionar.insert(1, 20);

println!(
  "Vetor[0] = {:#?} \nVetor[1] = {:#?}",
  vetor_adicionar[0], vetor_adicionar[1]
);
```

Usar o método .insert() com um índice que não existe ou que não segue a ordem sequencial de índices pode causar um erro fatal (panic).

```rust
let mut vetor_adicionar: Vec<u8> = Vec::new();

vetor_adicionar.insert(0, 10);
vetor_adicionar.insert(10, 20);

println!(
  "Vetor[0] = {:#?} \nVetor[1] = {:#?}",
  vetor_adicionar[0], vetor_adicionar[10]
);
```


