# Expressão

Recebe parâmetros e retorna um valor

`(variavel:tipo, variavel:tipo) -> tipo`

```rust
fn expressao_01(x: i8, y: i8) -> i8 {    
    x + y
}

fn main() {    
    println!("{}", expressao_01(7, 7));
}
```

`sem retorno`

```rust
fn soma (x: i16, y: i16) -> i16 {
   let resultado = x + y;
   resultado
}

fn main () {
  println!("{}", soma(7, 7));
}
```

`return`

```rust
fn soma (x: i16, y: i16) -> i16 {
	 let resultado = x + y;
	 return resultado;
}

fn main () {
	println!("{}", soma(7, 7));
}
```

`Não vai usar`

```rust
// indica que a função não será usada
#[allow(dead_code)]
fn ola () {
	println!("Olá, mundo!");
}

fn main () {
	println!("...");
}
```
