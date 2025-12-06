# Vetor

Um vetor em Rust é uma coleção dinâmica e homogênea que pode ser inicializada vazia e permite que valores sejam adicionados, modificados ou removidos em tempo de execução.

`vec![]`

```rust
let vetor_str = vec!["a", "b", "c"];
println!("Vetor = {:#?}", vetor_str);
```

`Vec<type>`

```rust
let vetor_u8: Vec<u8> = vec![1, 2, 3];
println!("Vetor = {:#?}", vetor_u8);
```

`Vec::new()`

```rust
let mut vetor_i16: Vec<i16> = Vec::new();
vetor_i16.push(10);
println!("Vetor = {:#?}", vetor_i16);
```

`Vec<_>`

```rust
let vetor_sem_tipo: Vec<_> = vec!["A", "B", "C"];
println!("Vetor = {:#?}", vetor_sem_tipo);
```

`vec![valor; quantidade]`

```rust
let vetor_padrao = vec![0; 6];
println!("Vetor = {:#?}", vetor_padrao);
```

`vector = array`

```rust
let vetor_array = [10, 20, 30];
let vetor = Vec::from(vetor_array);
println!("Vetor = {:#?}", vetor);
```

`vector = tuple`

```rust
let vetor_tupla: Vec<(f32, &str)> = vec![(2., "Vetor 1"), (7., "Vetor 2")];
println!("{:#?}", vetor_tupla);
```
