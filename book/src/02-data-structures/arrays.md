# Array

Uma sequência de elementos de tamanho fixo onde todos os itens devem ser do mesmo tipo de dado.

```rust
let lista = ["Batata", "Cebola", "Alho", "Cenoura"];
println!("{:?}", lista);
```

```rust
let lista: [f32; 4] = [0.2, 0.4, 0.6, 0.8];
println!("{:?}", lista);
```

```rust
let lista: [&str; 4];
lista = ["Canadá", "Japão", "Brasil", "Egito"];
println!("{:?}", lista);
```

```rust
let [a, b, c]: [char; 3] = ['1', '2', '3'];
let lista = [a, b, c];
println!("{:?}", lista);
```

```rust
let lista: [String; 3] = [String::from("A1"), String::from("B2"), String::from("C3")];
let [a, b, c] = lista;
println!("{:?}, {:?}, {:?}", a, b, c);
```
