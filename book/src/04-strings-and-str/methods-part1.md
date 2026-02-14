# Métodos - Parte 1

Usados para manipular e modificar o conteúdo de texto.

`push()`

```rust
// adiciona um caractere
let mut text = String::from("Hello");
text.push(',');
text.push(' ');
text.push('w');
text.push('o');
text.push('r');
text.push('l');
text.push('d');
text.push('!');
println!("{:?}", text);
```

`push_str()`

```rust
// adiciona uma fatia de string
let mut text = String::from("Hello");
text.push_str(", world!");
println!("{:?}", text);
```

`slice()`

```rust
// retorna só uma parte da string
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// H e l l o ,   w o r l  d  !
let cria_str = "Hello, world!!";
let slice_str = &cria_str[0..3];
println!("{}", slice_str);
```

`pop()`

```rust
// remove o último caractere
let mut text = String::from("Hello, world!");
let _text_last = text.pop();
let _text_last = text.pop();
let text_last = text.pop();
println!("{:?}", text_last);
println!("{:?}", text);
```

`insert()`

```rust
// insere caracteres em uma posição especifica
// 0 1 2 3 4 5 6
// H e e l l o ,
let mut text = String::from("Hello,");
text.insert(6,  ' ');
text.insert(7,  'w');
text.insert(8,  'o');
text.insert(9,  'r');
text.insert(10, 'l');
text.insert(11, 'd');
text.insert(12, '!');
println!("{:?}", text);
```

`remove()`

```rust
// remove caracteres em uma posição especifica
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// H e l l o ,   w o r l  d  !
let mut text: String = String::from("Hello, world!");
let _text_letter = text.remove(11);
let _text_letter = text.remove(10);
let _text_letter = text.remove(9);
println!("{}", text);
```

`len()`

```rust
// retorna o comprimento da string em bytes
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// H e l l o ,   w o r l  d  !
let text: String = String::from("Hello, world!");
let number = text.len();
println!("{}", number);
```

`clear()`

```rust
// remove todo o conteúdo
let mut text: String = String::from("Hello, world!");
text.clear();
println!("{}", text);
```

`truncate()`

```rust
// corta a string em um índice específico
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// H e l l o ,   w o r l  d  !
let mut text: String = String::from("Hello, world");
text.truncate(5);
println!("{}", text);
```
