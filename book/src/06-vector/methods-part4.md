# Métodos - Parte 4

`.first() e .last()`

```rust
// retornam uma referência ao primeiro e ao último elemento
let vetor_metodos: Vec<&str> = vec!["a", "b", "c"];

println!("{:?}", vetor_metodos.first());
println!("{:?}", vetor_metodos.last());
```

`[0] != .first()`

```rust
// [0] - causa panic em tempo de execução
let vetor_metodos: Vec<&str> = vec![];
println!("{:?}", vetor_metodos[0]); 
```
```rust
// first() - retorna none
let vetor_metodos: Vec<&str> = vec![];
println!("{:?}", vetor_metodos.first());
```

`.swap(indice_a, indice_b)`

```rust
// troca a posição de dois elementos dentro do vetor
let mut vetor_metodos: Vec<&str> = vec!["a", "b", "c", "d"];
vetor_metodos.swap(0, 3); 
println!("{:?}", vetor_metodos);
```

`.reverse()`

```rust
// inverte a ordem de todos os elementos no vetor
let mut vetor_metodos: Vec<char> = vec!['1', '2', '3', '4'];
vetor_metodos.reverse();
println!("{:?}", vetor_metodos);
```

`[i..n].reverse()`

```rust
// inverte apenas uma seção (slice) do vetor
let mut vetor_metodos: Vec<char> = vec!['1', '2', '3', '4', '5', '6'];
vetor_metodos[3..5].reverse();
println!("{:?}", vetor_metodos);
```

`sort()`

```rust
// implementa uma ordenação estável
let mut vetor_metodos: Vec<char> = vec!['6', '2', '4', '1', '3', '5'];
vetor_metodos.sort();
println!("{:?}", vetor_metodos);
```

`sort_unstable()`

```rust
// implementa uma ordenação instável, é mais rápida
let mut vetor_metodos: Vec<char> = vec!['6', '2', '4', '1', '3', '5'];
vetor_metodos.sort_unstable(); 
println!("{:?}", vetor_metodos);
```

> Nota: Embora `.sort()` e `.sort_unstable()` gerem resultados semelhantes para elementos simples, eles são recomendados em situações diferentes.
