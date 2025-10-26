# Array

A fixed-size sequence of elements where all items must be of the same data type.

```rust
let list: [u8; 3] = [1, 2, 3];
println!("{:?}", list);
```

```rust
let list: [u8; 3] = [4, 3, 2];
println!("{:#?}", list);
```

```rust
let list = ['a', 'b', 'c' , 'd'];
println!("{:?}", list);
```

```rust
let list: [&str; 3];
list = ["ab", "cd", "de"];
println!("{:#?}", list);
```

```rust
let [a, b, c]: [&str; 3] = ["xy", "yz", "zw"];
let list = [a, b, c];
println!("{:?}", list);
```

```rust
let list = ["12", "23", "34"];
let [a, b, c] = list;
println!("{:?} {:?} {:?}", a, b, c);
```

## Array and mut

When changing array values, you need to specify the index of the element you want to modify. Array indices start at 0 and correspond to the position of each element:

```rust
//                 0   1   2   3   4
let mut scores = [85, 92, 78, 90, 88];

println!("First score: {}", scores[0]); 
println!("Second score: {}", scores[1]);
println!("Third score: {}\n", scores[2]);

scores[0] = 90;
scores[2] = 82; 

println!("First score: {}", scores[0]); 
println!("Second score: {}", scores[1]);
println!("Third score: {}\n", scores[2]);
```

```rust
let mut number: [i32; 5] = [10, 20, 30, 40, 50];
println!("{:?}", number);

number[0] = 100;
number[2] = 300;

println!("{:?}", number);
```

```rust
let mut names: [&str; 3] = ["Alice", "Bob", "Charlie"];
println!("{:?}", names);

names[0] = "Ane";
names[1] = "Bren";

println!("{:?}", names);
```
