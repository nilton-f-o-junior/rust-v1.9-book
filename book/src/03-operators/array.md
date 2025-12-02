# Array

Uma lista de itens de dados que são todos do mesmo tipo e têm um tamanho fixo.

`array`

```rust
let arr: [u8; 2] = [1, 4];
println!("{:?}", arr[0] + arr[1]);
```

```rust
let arr: [u8; 2];
arr = [3, 8];
println!("{:?}", arr[0] + arr[1]);
```

`array + array`

```rust
let arr: [[u8; 2]; 2] = [[2, 4], [6, 16]];

println!("{:?}", arr[0][0] + arr[0][1]);
println!("{:?}", arr[1][0] + arr[1][1]);
println!("{:?}", arr[0][0] + arr[1][0]);
println!("{:?}", arr[0][1] + arr[1][1]);
```

```rust
let arr_01: [u8; 2] = [1, 4];
let arr_02: [u8; 2] = [14, 9];

let result = arr_01[0] + arr_01[1] + arr_02[0] + arr_02[1];
println!("{:?}", result);
```
