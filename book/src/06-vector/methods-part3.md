# Métodos - Parte 3

`.len()`

```rust
// retorna o número de elementos
let mut vetor_metodos: Vec<u8> = vec![1, 2, 3];
println!("Tamanho: {}", vetor_metodos.len());
```

`.capacity()`

```rust
// retorna o número de elementos que o vetor pode armazenar
// antes de precisar realocar a memória (crescer).
let mut vetor_metodos: Vec<char> = Vec::with_capacity(3);
println!("Capacidade: {}\n", vetor_metodos.capacity());

vetor_metodos.push('a');
vetor_metodos.push('b');

println!("Capacidade: {}", vetor_metodos.capacity());
println!("Tamanho: {}", vetor_metodos.len());
```

`.is_empty()`

```rust
// indica se o vetor contém elementos
let vetor_metodos_vazio: Vec<&str> = vec![];
println!("{:?}", vetor_metodos_vazio.is_empty());
```
```rust
let vetor_metodos_preenchido: Vec<&str> = vec!["a", "b", "c"];
println!("{:?}", vetor_metodos_preenchido.is_empty());
```

`.clear()`

```rust
// remove todos os elementos de um vetor
let mut vetor_metodos: Vec<&str> = vec!["a", "b", "c"];
println!("{:?}", vetor_metodos);

vetor_metodos.clear();
println!("{:?}", vetor_metodos.is_empty());
```

`.contains()`

```rust
// retorna true se o vetor contiver o elemento especificado
let vetor_metodos: Vec<&str> = vec!["a", "b", "c"];
println!("{:?}", vetor_metodos.contains(&"c"));
```
```rust
let vetor_metodos: Vec<f32> = vec![1., 7.];
println!("{:?}", vetor_metodos.contains(&6.));
```
