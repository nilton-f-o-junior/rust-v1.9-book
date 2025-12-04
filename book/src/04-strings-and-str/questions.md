# Perguntas - String and &str

01 - Escreva um código que crie uma string vazia e a imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=04697b24c6706d3d04a675d55693d184)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let cria_string: String = String::new();
    println!("{}", cria_string);
}
```
</details>

02 - Crie uma string a partir do literal de string "Pequeno, texto!".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4db7cde9056a6f5aedff39c44bf042b7)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let literal_string: String = String::from("Pequeno, texto!");
    println!("{}", literal_string);
}
```
</details>

03 - Declare uma variável que contenha uma fatia de string (&str) com o valor "Aprendendo Rust".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a0dd76fb9cabaa21d63a02cc7d85726a)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let contem_string: &str = "Aprendendo Rust";
    println!("{}", contem_string);
}
```
</details>

04 - Dada uma string, escreva o código para obter um &str que represente toda a string.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f55333f92be2d15599c6216497f318db)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let input_string: String = String::from("Aprendendo Rust!");
    let input_str: &str = &input_string;
    println!("{}", input_str);
}
```

```rust
fn main() {
    let input_string: String = String::from("Aprendendo Rust!");
    let input_str: &str = input_string.as_str();
    println!("{}", input_str);
}
```
</details>

05 - Escreva um código que receba um texto em string e o converta para &str e, em seguida, o imprima na tela.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=45661d7a96858a6849c87cca119d35cb)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com texto:");
    let mut input_string: String = String::new();
    io::stdin()
        .read_line(&mut input_string)
        .expect("Erro de entrada de dados!");
    let text_string: &str = input_string.as_str();
    println!("\nTexto convertido para &str: {}", text_string.trim());
}
```
</details>

06 - Converta um string = 123 em um inteiro.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b169066c7c9b4ebf6ac2ace822c32e63)

<details>
<summary>Resposta</summary>

```rust
fn main() {    
    let text: &str = "123";
    let num: u8 = text.parse().expect("Erro ao converter dados!");
    println!("{}", num);    
}
```

```rust
fn main() {
    let text: &str = "123";
     
    let num = match text.parse::<u8>() {
        Ok(num) => num,
        Err(_) => {
            println!("Erro ao converter dados!");
            return;
        }
    };
    println!("{}", num);
}
```
</details>

07 - Use o método .to_string() ou String::from() para criar uma nova string concatenando um &str e uma string existente.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f56a26d7a9431731e1bac8713d29de4d)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com texto:");
    let mut input_text: String = String::new();
    io::stdin()
        .read_line(&mut input_text)
        .expect("Erro de entrada de dados!");

    let text_01: &str = &input_text.as_str().trim();
    let text_02: String = String::from("+ string!");

    println!("{}", text_01.to_string() + &text_02);
}
```
</details>

08 - Crie uma string mutável e anexe um &str a ela usando o método push_str().

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=374a7767faa92d6933d7bfd559619754)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut string_mutavel: String = String::from("Pequeno, ");
    string_mutavel.push_str("texto!");
    println!("{}", string_mutavel);
}
```
</details>

09 - Adicione um único caractere (char) ao final de uma string mutável.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ebb09ff00d5882a8997a05495188fe53)

<details>
<summary>Resposta</summary>

```rust
fn main() {    
    let mut unico_char: String = String::from("Pequeno, texto");
    let caractere: char = '!';

    unico_char.push(caractere);
    println!("{}", unico_char);
}
```
</details>

10 - Combine um &str, uma string e um número em uma nova string usando a macro format!.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0a4d681c9bf4b7c88d0dc8e758743b99)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var_str: &str = "1";
    let var_string: String = String::from("2");
    let var_u8: u8 = 3;

    // a macro format! cria uma nova string
    let result = format!("{}{}{}", var_str, var_string, var_u8);
    println!("{}", result);
}
```
</details>

11 - Crie uma nova string removendo todos os espaços em branco de uma string.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e9bc2bba7b75db8bb89be0ab362019d0)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com texto:");
    let mut input_text: String = String::new();
    io::stdin().read_line(&mut input_text).err();

    let remove_espaco = input_text.replace(" ", "");
    println!("\nSem espaços = {}", remove_espaco.trim());
}
```
</details>

12 - Substitua todas as ocorrências da substring *error* por *success* em um &str, criando uma nova string.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a51483277e7c8b3fd2da1e427539e24e)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com texto:");
    let mut input_text: String = String::new();
    io::stdin().read_line(&mut input_text).err();

    let new_text = input_text.replace("error", "success");
    println!("{}", new_text.trim());
}
```
</details>

13 - Substitua apenas a primeira ocorrência de antes por depois em um &str, criando uma nova string.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=39113e025edc73e94a85bcc58e85618b)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com uma frase:");
    let mut input_phrase: String = String::new();
    io::stdin().read_line(&mut input_phrase).err();

    let phrase = input_phrase.replacen("antes", "depois", 1);
    println!("{}", phrase.trim());
}
```
</details>

14 - Verifique se um &str contém a substring Rust.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fd50790891d0c374ac75e1e446de9fd0)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com uma frase:");
    let mut input_text: String = String::new();
    io::stdin().read_line(&mut input_text).err();

    if input_text.contains("Rust") {
        println!("\n{} - contém 'Rust'", input_text.trim());
    } else {
        println!("\n{} - não contém 'Rust'", input_text.trim());
    }
}
```
</details>

15 - Verifique se um nome de arquivo em uma string termina com o sufixo .rs

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ab027074b26fe1a2914b27a3dde30176)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com o nome do arquivo:");
    let mut input_text: String = String::new();
    io::stdin().read_line(&mut input_text).err();

    if input_text.trim().ends_with(".rs") {
        println!("\n{} - termina com '.rs'", input_text.trim());
    } else {
        println!("\n{} - não termina com '.rs'", input_text.trim());
    }
}
```
</details>

16 - Verifique se um &str começa com o prefixo https://.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=00d799357ef4fa049b8d4a9b76791184)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entra com link:");
    let mut input_text: String = String::new();
    io::stdin().read_line(&mut input_text).err();

    if input_text.starts_with("https://") {
        println!("\n{} - começa com 'https://'", input_text.trim());
    } else {
        println!("\n{} - não começa com 'https://'", input_text.trim());
    }
}
```
</details>

17 - Crie um código que receba uma string e retorne uma fatia contendo apenas a primeira palavra. Assuma que as palavras são separadas por espaços.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e4cab2460584da834264f11abc2d91ba)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com uma frase:");
    let mut input_phrase: String = String::new();
    io::stdin().read_line(&mut input_phrase).err();

    let phrase = input_phrase.split_whitespace().next();
    println!("{}", phrase.unwrap());
}
```
</details>

18 - Encontre o índice de byte inicial da primeira ocorrência da substring rust.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0db8d18b8e76e9891aad5aa8f434dc9a)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com a frase:");
    let mut input_text: String = String::new();
    io::stdin().read_line(&mut input_text).err();

    if let Some(index) = input_text.find("rust") {
        println!("\nÍndice de bytes: rust = {}", index);
    } else {
        println!("\nNão tem: rust");
    }
}
```
</details>

19 - Escreva uma função que aceite uma string e retorne seu primeiro caractere como um char.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=42eaabc11ffc01f2811238c706cbcd85)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut input_word: String = String::new();
    io::stdin().read_line(&mut input_word).err();

    let mut first_letter: char = ' ';
    for i in input_word.trim_start().chars() {
        first_letter = i;
        break;
    }
    println!("Primeira letra = {}", first_letter);
}
```

```rust
use std::io;

fn main() {
    let mut input_word: String = String::new();
    io::stdin().read_line(&mut input_word).err();

    let first_letter: char = input_word.trim_start().chars().next().unwrap_or(' ');
    println!("Primeira letra = {}", first_letter);
}
```
</details>

20 - Escreva um código que conte o número de caracteres (char) em um &str, não o número de bytes.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=385b60b95507868496987576ed0ac020)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com uma palavra:");
    let mut input_word: String = String::new();
    io::stdin().read_line(&mut input_word).err();

    let word = input_word.trim().replace(" ", "");
    println!("{}", word);
    println!("{:?}", word.len());
}
```

```rust
use std::io;

fn main() {
    println!("Entre com uma palavra:");
    let mut input_word: String = String::new();
    io::stdin().read_line(&mut input_word).err();

    let word = input_word.trim();
    let mut count: u8 = 0;

    for _i in word.chars() {
        count += 1;
    }

    println!("{}", count);
}
```
</details>

21 - Escreva um código que receba um &mut string e substitua todos os caracteres a minúsculos por A maiúsculos, modificando a string original.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=37e24bee866c827120c3c76c6fdcc3ce)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com uma frase:");
    let mut input_phrase: String = String::new();
    io::stdin().read_line(&mut input_phrase).err();

    let phrase = input_phrase.trim().replace("a", "A");
    println!("{}", phrase);    
}
```
</details>

22 - Escreva um código que remova o último caractere de uma string.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=dd5087a9cb5fbb96a7f7fa4b0a2f6966)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Entre com texto:");
    let mut input_character: String = String::new();
    io::stdin()
        .read_line(&mut input_character)
        .expect("Erro de entrada de dados!");

    let mut character: String = input_character.trim_end().to_string();
    character.pop();
    println!("{}", character);
}
```

```rust
use std::io;

fn main() {
    println!("Entre com texto:");
    let mut input_character: String = String::new();
    io::stdin()
        .read_line(&mut input_character)
        .expect("Erro de entrada de dados!");

    let mut count = 0;
    let mut character: String = String::new();

    for i in input_character.trim_end().chars() {
        count += 1;

        if count < input_character.len() - 1 {
            character.push(i);
        }
    }
    println!("{}", character);
}
```
</details>

23 - Use o método .clear() para limpar uma string sem desalocar sua capacidade de memória.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=90c6e5c3cf23474740e21cf534acf57f)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut var_string: String = String::with_capacity(50);
    var_string.push_str("Pequeno, grande texto!");

    println!("String = {}", var_string);
    println!("Capacidade = {}", var_string.capacity());
    println!("Tamanho = {}", var_string.len());
    println!("");

    var_string.clear();
    println!("String = {}", var_string);
    println!("Capacidade = {}", var_string.capacity());
    println!("Tamanho = {}", var_string.len());
}
```
</details>
