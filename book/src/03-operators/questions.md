# Questões - Operadores

---

01 - Escreva um programa que declare duas variáveis inteiras, a com o valor 15 e b com o valor 7, e imprima a soma delas.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=7feb7d291368ebf581aaab5742f75e27)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let a: u8 = 15;
    let b: u8 = 7;

    println!("{:?}", a + b);
}
```
</details>

02 - Crie um código que subtraia o valor 3 de uma variável chamada total que é inicialmente igual a 10, e exiba o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a1e9b22a5c5153747a95ebb4fe8bf72c)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let total = 10;
    let sub = total - 3;
    println!("{:?}", sub);

    //
    let mut total = 10;
    total -= 3;
    println!("{:?}", total);
}
```
</details>

03 - Desenvolva um programa que multiplique duas variáveis, x igual a 6 e y igual a 8, e mostre o produto.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c8dee74c5746893c8162b93bbf9a2155)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x: u8 = 6;
    let y: u8 = 8;

    let result: u8 = x * y;
    println!("{:?}", result);
}
```
</details>

04 - Implemente um código que divida o número 20 por 5 e imprima o quociente.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c9c0957a0ce8bf388f3afcad0a5403f7)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let result = 20 / 5;
    println!("{}", result);
}
```
</details>

05 - Escreva um programa que calcule o resto da divisão de 23 por 4 e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2e11eab852acf6f01dced1298323bfdc)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut resto: u8 = 23;
    resto %= 4;

    println!("{:?}", resto);
}
```
</details>

06 - Declare duas variáveis num1 = 12 e num2 = 5 e imprima o resultado da soma delas diretamente dentro da macro println!.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2f8d469756ef776809c7842fef0dd459)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let num1: u8 = 12;
    let num2: u8 = 5;

    println!("{:?}", num1 + num2);
}
```
</details>

07 - Crie uma variável imutável chamada valor que seja a soma de 9 e 2, e imprima seu valor.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fc55a0910d4683d00f7128fb8354d510)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let valor: u8 = 9 + 2;
    println!("{:?}", valor);
}
```
</details>

08 - Declare uma variável mutável chamada contador com um valor inicial de 5. Incremente-a em 3 usando o operador de atribuição de adição (+=) e imprima o novo valor.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=22abc589c2df05f0d1755534aeb39673)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 5;
    contador += 3;

    println!("{:?}", contador);
}
```
</details>

09 - Crie uma variável mutável *score* inicializada com 20. Decremente-a em 5 usando o operador de atribuição de subtração (-=) e exiba o valor final.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=455fe1de3efee00f559f1cd93f31b0d0)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut score: u8 = 20;
    score -= 5;

    println!("{:?}", score);
}
```
</details>

10 - Declare uma variável mutável numero com o valor 2. Multiplique-a por 4 usando o operador de atribuição de multiplicação (*=) e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3381e440513bc705a5f40461a9349b7b)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut numero: u8 = 2;
    numero *= 4;

    println!("{:?}", numero);
}
```
</details>

11 - Inicialize uma variável mutável *size* com 30. Divida-a por 6 usando o operador de atribuição de divisão (/=) e mostre o valor resultante.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b29566fd9d99312fb3dc1ff57e5951b3)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut size: u8 = 30;
    size /= 6;

    println!("{:?}", size);
}
```
</details>

12 - Declare uma variável mutável numero com o valor 17. Calcule o resto da divisão por 5 usando o operador de atribuição de resto (%=) e imprima o valor.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2bd65bcb34bbb6cac33b9565c66eae3f)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut numero: u8 = 17;
    numero %= 5;

    println!("{:?}", numero);
}
```
</details>

13 - Declare duas variáveis do tipo &str, part1 com *Hello,* e part2 com Rust!. Concatene-as e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=097242c5284c799aff632b1b49f5a212)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let part1: &str = "Hello, ";
    let part2: &str = "Rust!";

    println!("{}{}", part1, part2);
}
```
</details>

14 - Crie duas variáveis do tipo string, s1 = "Linguagem " e s2 = "Rust.". Concatene-as e imprima a string resultante.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4f17b4ebd7cda1a51d4211862f23d149)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let s1: String = String::from("Linguagem ");
    let s2: String = String::from("Rust.");

    println!("{:?}", s1 + &s2);
}
```
</details>

15 - Declare uma variável do tipo &str chamada numero com o valor "Numero: ". Crie uma variável do tipo string chamada numero_str com o valor "42". Concatene-as e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8476876fd7949b8ff7dc33dd2e87a9f8)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let numero: &str = "Numero: ";
    let numero_str: String = String::from("42");

    println!("{:?}", numero.to_owned() + &numero_str);
}
```
</details>

16 - Declare uma tupla com dois i32. Inicialize-a com os valores (5, -2). Imprima a multiplicação desses dois valores.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d4ebdf281170d5443a1208f542aa80c3)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let tup: (i32, i32) = (5, -2);
    println!("{:?}", tup.0 * tup.1);
}
```
</details>

17 - Crie uma tupla aninhada: ((1, 2), (3, 4)). Some o primeiro elemento da primeira tupla ao segundo elemento da segunda tupla e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=bb8d475522354cddf835ceb615a68bc6)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let tup: ((u8, u8), (u8, u8)) = ((1, 2), (3, 4));
    println!("{:?}", tup.0 .0 + tup.1 .1);
}
```
</details>

18 - Declare duas tuplas, t1 com (2, 5) e t2 com (8, 1). Some todos os elementos das duas tuplas e imprima o total.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=370072efba7ba108d32eccb9ce76e99f)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let t1: (u8, u8) = (2, 5);
    let t2: (u8, u8) = (8, 1);

    println!("{:?}", t1.0 + t1.1 + t2.0 + t2.1);
}
```
</details>

19 - Declare um array = [i32; 5] com os valores [1, 3, 5, 7, 9]. Imprima a soma do primeiro e último elementos.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4bebed46cce9e86e39415d2bd1e13cad)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [i32; 5] = [1, 3, 5, 7, 9];
    println!("{:?} + {:?} = {:?}", arr[0], arr[4], arr[0] + arr[4]);
}
```
</details>

20 - Crie um array de [u16; 3]. Inicialize-o com os valores [10, 20, 30]. Imprima o produto de todos os elementos.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=7ef61f36ac502409b15823a54d524973)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [i32; 3];
    arr = [10, 20, 30];

    println!("{:?}", arr[0] * arr[1] * arr[2]);
}
```
</details>

21 - Declare um array multidimensional 2x2 com inteiros. Multiplique todos os elementos e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=96232ed146b87c4ad010e1bb7f41b2af)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [[i8; 2]; 2];
    arr = [[2, 2], [4, 4]];

    println!("{:?}", arr[0][0] * arr[0][1] * arr[1][0] * arr[1][1]);
}
```
</details>

22 - Declare uma variável x com valor 1. Crie um bloco interno onde você declare uma variável y com valor 2. Dentro do bloco, imprima a soma de x e y. Fora do bloco, tente imprimir y (o que acontecerá?).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8519e0370fd1db58ed0819cd1809ce93)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x: u8 = 1;
    {
        let y: u8 = 2;
        println!("{:?}", x + y);
    }
    
    println!("{:?}", x);
    // println!("{:?}", y); // Erro: `y` fora escopo
}
```
</details>

23 - Declare uma variável level1 com valor 10. Abra um novo bloco e declare uma variável level2 com valor 20. Dentro deste bloco, crie outro bloco e declare level3 com valor 30. Imprima a soma de level1, level2 e level3 dentro do bloco mais interno.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8021fc32068bfeb8124dddb8ad279a25)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let level1: u8 = 10;
    {
        let level2: u8 = 20;
        {
            let level3: u8 = 30;
            println!("{:?}", level1 + level2 + level3);
        }
        println!("{:?}", level2);
    }
    println!("{:?}", level1);
}
```
</details>

24 - Declare uma variável principal com valor 100. Crie um bloco onde você declare uma variável com o mesmo nome e atribua o valor 50.0. Imprima o valor da variável dentro do bloco e fora do bloco.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=978acb2a3ccd4fd2267198df38e2d6dc)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let num: u8 = 100;
    println!("{:?}", num);
    {
      let num: f32 = 50.;
      println!("{:?}", num);
    }
    println!("{:?}", num);
}
```
</details>

25 - Usando os valores de um array var = [2, 3], escreva um código que calcule e imprima o resultado de (var[0] + var[1]) * var[1].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f908146c0b9078f7b0333bf76268a411)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", (var[0] + var[1]) * var[1]);
}
```
</details>

26 - Ainda com a variável var = [2, 3], calcule e imprima var[0] * var[1] / var[1] % var[1].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=44430c88d99c08cdf35532a6ce96f627)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", var[0] * var[1] / var[1] % var[1]);
}
```
</details>

27 - Calcule e imprima var[0] + var[1] − var[0] + var[0] * var[0]. (Usando var com [2, 3]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=211402c21730bdf5f283c65022dde779)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", var[0] + var[1] - var[0] + var[0] * var[0]);
}
```
</details>

28 - Calcule e imprima ((var[0] + var[1]) − (var[0] + var[0]) * var[0]). (Usando var com [2, 3]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6b9bffb51d0539d84c56744e40df9d30)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [i8; 2] = [2, 3];
    println!("{:?}", (var[0] + var[1]) - (var[0] + var[0]) * var[0]);
}
```
</details>

29 - Declare duas variáveis inteiras, num1 com valor 10 e num2 com valor 10. Escreva um código que imprima se num1 é igual a num2 (==).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=394d1d21d32acaf849af1a5eae0669e1)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let num1: i8 = 10;
    let num2: i8 = 10;

    println!("Num1 = Num2? {:?} ", num1 == num2);
}
```
</details>

30 - Declare duas variáveis de ponto flutuante, f1 com 3.14 e f2 com 2.71. Escreva um código que imprima se f1 é diferente de f2 (!=).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f3656ae43e2ab188cae10600f2096ac8)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let f1: f32 = 3.14;
    let f2: f32 = 2.71;

    println!("f1 != f2? {}", f1 != f2);
}
```
</details>

31 - Declare duas variáveis inteiras, idade_a com 25 e idade_b com 30. Escreva um código que imprima se idade_a é maior que idade_b (>).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=02f5e82bcd5f3b0d2d04bad07c30b75c)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let idade_a: u8 = 25;
    let idade_b: u8 = 30;

    println!("Idade A > Idade B? {}", idade_a > idade_b);
}
```
</details>

32 - Declare duas variáveis inteiras, point1 com 5 e point2 com 8. Escreva um código que imprima se point1 é menor que point2 (<).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=37dcf64ec5f78e638d924d4b5a438bb6)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let point_1: u8 = 5;
    let point_2: u8 = 8;

    println!("Point-1 < Point-2? {}", point_1 < point_2);
}
```
</details>

33 - Declare duas variáveis inteiras, nota_a com 7 e nota_b com 7. Escreva um código que imprima se nota_a é maior ou igual a nota_b (>=).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1a792ff0ba3888a97b14a359971bf9b5)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let nota_a: u8 = 7;
    let nota_b: u8 = 7;

    println!("Nota A >= Nota B? {}", nota_a >= nota_b);
}
```
</details>

34 - Declare duas variáveis float, altura_a com 1.70 e altura_b com 1.65. Escreva um código que imprima se altura_a é menor ou igual a altura_b (<=).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=454112211f392feba14f52b52d241064)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let altura_a: f32 = 1.70;
    let altura_b: f32 = 1.65;

    println!("Altura A <= Altura B? {}", altura_a <= altura_b);
}
```
</details>

35 - Declare uma variável temp_a com 22.5 e temp_b com 20.0. Verifique se temp_a é maior que temp_b (>) e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=623d5d1e75e8863b1752f3ce644e3a01)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let temp_a: f32 = 22.5;
    let temp_b: f32 = 20.;

    println!("Temperatura A > Temperatura B? {}", temp_a > temp_b);
}
```
</details>






36 - Declare uma variável count_a com 100 e count_b com 99. Verifique se count_a é menor que count_b (<) e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2a8a501e2f6ff7c937b09863c4dd5dd4)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let count_a: u8 = 100;
    let count_b: u8 = 99;

    println!("Count A < Count B? {}", count_a < count_b);
}
```
</details>

37 - Declare duas variáveis u8, val_a com 8 e val_b com 3. Calcule a soma, subtraia 1 do resultado, e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=74c122d32f2e76180ae11a648ce8e34a)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let val_a: u8 = 8;
    let val_b: u8 = 3;

    println!("{:?}", (val_a + val_b) - 1);
}
```
</details>

38 - Declare um array [i32; 3] = [2, 4, 6]. Divida cada elemento por 2 (usando atribuição de divisão se aplicável) e imprima o array resultante.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e2eca68c484165860a912159e51ce310)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut arr: [i32; 3] = [2, 4, 6];

    arr[0] /= 2;
    arr[1] /= 2;
    arr[2] /= 2;

    println!("{:#?}", arr);
}
```
</details>

39 - Declare uma tupla (f64, f64) = (2.5, 3.5). Some os elementos e imprima o resultado formatado com duas casas decimais.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f9838f28b2592946eb30eebbf3c64831)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let tup: (f64, f64) = (2.5, 3.5);
    let result: f64 = tup.0 + tup.1;

    println!("{:.2}", result);
}
```
</details>

40 - Declare uma variável mensagem do tipo &str com "*Start*". Anexe a ela a String " -> End". Imprima o valor final de mensagem.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=315cf9e1bc21c3392111d5398889d6f1)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    //&str
    let mensagem: &str = "Start";
    println!("{}", mensagem.to_owned() + " -> End");
}
```

```rust
fn main() {
    // String
    let mut mensagem: String = String::from("Start");
    mensagem += " -> End";
    println!("{}", mensagem);
}
```
</details>
