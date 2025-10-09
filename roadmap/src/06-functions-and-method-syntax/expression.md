# Expression

Receives parameters and returns a value

`(let:type, let:type) → type`

```rust
fn expression_01(x: i8, y: i8) -> i8 {    
    x + y
}

fn main() {    
    println!("{}", expression_01(7, 7));
}
```

`not return`

```rust
fn sum (x: i16, y: i16) -> i16 {
   let result = x + y;
   result
}

fn main () {
  println!("{}", sum(7, 7));
}
```

`return + ;`

```rust
fn sum (x: i16, y: i16) -> i16 {
	 let result = x + y;
	 return result;
}

fn main () {
	println!("{}", sum(7, 7));
}
```


`Not use: indicates that the function will not be used`

```rust
#[allow(dead_code)]
fn hello () {
	println!("Hello, world!");
}

fn main () {
	println!("...");
}
```
