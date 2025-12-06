# Métodos - Parte 2

`.pop()`

```rust
// remove e retorna o último elemento do vetor
let mut vetor_deletar: Vec<char> = vec!['a', 'b', 'c', 'd'];
println!("{:?}", vetor_deletar);

vetor_deletar.pop();
println!("{:?}", vetor_deletar);

vetor_deletar.pop();
println!("{:?}", vetor_deletar);
```

`.remove(indice)`

Removes the element at a specific index, shifting all elements after it to the left.

```rust
// remove e retorna o elemento no índice específico
let mut vetor_deletar: Vec<&str> = vec!["A", "B", "C", "D", "E"];
println!("{:?}", vetor_deletar);

vetor_deletar.remove(1);
println!("{:?}", vetor_deletar);

vetor_deletar.remove(3);
println!("{:?}", vetor_deletar);
```
