# Array

Uma sequência de elementos de tamanho fixo onde todos os itens devem ser do mesmo tipo de dado.

```rust
let lista: [u8; 3] = [1, 2, 3];
println!("{:?}", lista);
```

```rust
let lista: [u8; 3] = [4, 3, 2];
println!("{:?}", lista);
```

```rust
let lista = ['a', 'b', 'c' , 'd'];
println!("{:?}", lista);
```

```rust
let lista: [&str; 3];
lista = ["ab", "cd", "de"];
println!("{:?}", lista);
```

```rust
let [a, b, c]: [&str; 3] = ["xy", "yz", "zw"];
let lista = [a, b, c];
println!("{:?}", lista);
```

```rust
let lista = ["12", "23", "34"];
let [a, b, c] = lista;
println!("{:?} {:?} {:?}", a, b, c);
```
