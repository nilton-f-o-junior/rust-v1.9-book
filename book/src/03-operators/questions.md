# Perguntas - Operadores

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

08 - Declare duas variáveis prime = 7 e segund = 3 e imprima o resultado da multiplicação delas.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=dff06e53764fc2e5887ca44cc21b662a)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let prime: u8 = 7;
    let segund: u8 = 3;

    println!("{:?}", prime * segund);
}
```
</details>

09 - Declare duas variáveis dividend = 18 e divisor = 3 e armazene o resultado da divisão em uma variável chamada result, imprimindo-a.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e9daea5ed375a0c0da4fdf985d253317)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let dividend: u8 = 18;
    let divisor: u8 = 3;

    let result: u8 = dividend / divisor;
    println!("{:?}", result);
}
```
</details>

10 - Declare duas variáveis n1 = 25 e n2 = 7. Calcule e imprima o resto da divisão de n1 por n2.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2600d2d848d534e3aaa2bf2fb67abd88)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let n1: u8 = 25;
    let n2: u8 = 7;

    println!("{:?}", n1 % n2);
}
```
</details>

11 - Declare uma variável mutável chamada *counter* com um valor inicial de 5. Incremente-a em 3 usando o operador de atribuição de adição (+=) e imprima o novo valor.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f63cbffddd3af57eec53c66b615d2fc7)

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

12 - Crie uma variável mutável *score* inicializada com 20. Decremente-a em 5 usando o operador de atribuição de subtração (-=) e exiba o valor final.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=173aa5cf4bb453cd4c48454e92fb51df)

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

13 - Declare uma variável mutável numero com o valor 2. Multiplique-a por 4 usando o operador de atribuição de multiplicação (*=) e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=3861559d639cb683688dfd4ced1f0da6)

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

14 - Inicialize uma variável mutável *size* com 30. Divida-a por 6 usando o operador de atribuição de divisão (/=) e mostre o valor resultante.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=59e6d707fff079efc0b6b7057462cf31)

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

15 - Declare uma variável mutável numero com o valor 17. Calcule o resto da divisão por 5 usando o operador de atribuição de resto (%=) e imprima o valor.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=7c50cae8896363b58b3aa4c2433a9fae)

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

16 - Declare duas variáveis do tipo &str, part1 com *Hello,* e part2 com Rust!. Concatene-as e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=556b1d1022d50b922483af8c8310e934)

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

17 - Crie duas variáveis do tipo string, s1 = "Language " e s2 = "Rust.". Concatene-as e imprima a string resultante.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2c1d86e6e63b8cdfa868cba40b184208)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let s1: String = String::from("Language ");
    let s2: String = String::from("Rust.");

    println!("{:?}", s1 + &s2);
}
```
</details>

18 - Declare uma variável do tipo &str chamada numero com o valor "Numero: ". Crie uma variável do tipo string chamada numero_str com o valor "42". Concatene-as e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=576d6196a0dd17b14600dccd19c0e638)

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

19 - Crie uma variável string chamada mensagem_inicial = "Seja bem vindo, ". Declare uma variável &str chamada nome = "*user*". Concatene-as e imprima a mensagem completa.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4a22d4a8af416c12ad8080688d6ca62e)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mensagem_inicial: String = String::from("Seja bem vindo, ");
    let nome: &str = "user";

    println!("{:?}", mensagem_inicial.to_owned() + nome);
}
```
</details>

20 - Declare duas variáveis saudacao do tipo String com "Bom " e periodo do tipo &str com "dia!". Concatene-as e imprima a saudação completa.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=401a3078bc45ccd764252e54dfbf5c96)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let saudacao: String = String::from("Bom ");
    let periodo: &str = "dia!";

    println!("{}", saudacao + periodo);
}
```
</details>

21 - Declare uma tupla com dois i32. Inicialize-a com os valores (5, -2). Imprima a multiplicação desses dois valores.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d110e75977388857d688199be35cb777)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let tup: (i32, i32) = (5, -2);
    println!("{:?}", tup.0 * tup.1);
}
```
</details>

22 - Crie uma tupla aninhada: ((1, 2), (3, 4)). Some o primeiro elemento da primeira tupla ao segundo elemento da segunda tupla e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5209b7b830df0fb7812b456fceb71859)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let tup: ((u8, u8), (u8, u8)) = ((1, 2), (3, 4));
    println!("{:?}", tup.0 .0 + tup.1 .1);
}
```
</details>

23 - Declare duas tuplas, t1 com (2, 5) e t2 com (8, 1). Some todos os elementos das duas tuplas e imprima o total.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=5edca084b59a561d5008595628ce75b3)

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

24 - Crie uma tupla com um f32 e um i32. Imprima cada elemento separadamente.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=301d4c2a08ce8e387617265f5567d916)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut t1: (f32, i32) = (0.0, 0);
    t1.0 = -2.;
    t1.1 = 2;

    println!("{:#?}", t1);
}
```
</details>

25 - Declare um array = [i32; 5] com os valores [1, 3, 5, 7, 9]. Imprima a soma do primeiro e último elementos.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e785d140df74a032c6dfe145444e0a47)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [i32; 5] = [1, 3, 5, 7, 9];
    println!("{:?} + {:?} = {:?}", arr[0], arr[4], arr[0] + arr[4]);
}
```
</details>

26 - Crie um array de [u16; 3]. Inicialize-o com os valores [10, 20, 30]. Imprima o produto de todos os elementos.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8247ad86766b335ad492562baa5d62d7)

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

27 - Declare um array multidimensional 2x2 com inteiros. Multiplique todos os elementos e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=888d54a798c7cd4e1e0339d95737956b)

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

28 - Crie dois arrays de dois f32. Some os elementos correspondentes dos dois arrays e imprima os resultados das somas.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=33bd55908dc18049ce5d27e8802aeab7)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr1: [i8; 2] = [5, 3];
    let arr2: [i8; 2] = [3, 8];

    println!("{:?} + {:?} = {:?}", arr1[0], arr1[1], arr1[0] + arr1[1]);
    println!("{:?} + {:?} = {:?}", arr2[0], arr2[1], arr2[0] + arr2[1]);
}
```
</details>

29 - Declare dois arrays a1 = [4, 2] e a2 = [3, 6]. Calcule e imprima o produto de todos os elementos de ambos os arrays.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4f9b99177deee932ad099a64024325b5)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let a1: [u8; 2] = [4, 2];
    let a2: [u8; 2] = [3, 6];

    println!("{:?}, {:?}", a1[0] * a1[1], a2[0] * a2[1]);
}
```
</details>

30 - Declare uma variável x com valor 1. Crie um bloco interno onde você declare uma variável y com valor 2. Dentro do bloco, imprima a soma de x e y. Fora do bloco, tente imprimir y (o que acontecerá?).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=252ada81364a91f39a53edbd2bf6da8f)

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

31 - Declare uma variável level1 com valor 10. Abra um novo bloco e declare uma variável level2 com valor 20. Dentro deste bloco, crie outro bloco e declare level3 com valor 30. Imprima a soma de level1, level2 e level3 dentro do bloco mais interno.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d02ee6350d3991b43e843c17aff02c6b)

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

32 - Declare uma variável principal com valor 100. Crie um bloco onde você declare uma variável com o mesmo nome e atribua o valor 50.0. Imprima o valor da variável dentro do bloco e fora do bloco.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d01401188bbe2f45627748dd2c23d09f)

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

33 - Usando os valores de um array var = [2, 3], escreva um código que calcule e imprima o resultado de (var[0] + var[1]) * var[1].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b6cf8880b015076b24cd5083edbda088)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", (var[0] + var[1]) * var[1]);
}
```
</details>

34 - Ainda com a variável var = [2, 3], calcule e imprima var[0] * var[1] / var[1] % var[1].

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f5a43a82ea700a87479afa8f52053066)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", var[0] * var[1] / var[1] % var[1]);
}
```
</details>

35 - Calcule e imprima var[0] + var[1] − var[0] + var[0] * var[0]. (Usando var com [2, 3]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1664cfc03782a543d2abaaaa506ed515)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [u8; 2] = [2, 3];
    println!("{:?}", var[0] + var[1] - var[0] + var[0] * var[0]);
}
```
</details>

36 - Calcule e imprima ((var[0] + var[1]) − (var[0] + var[0]) * var[0]). (Usando var com [2, 3]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=266c9da2f27ee2e2c2f609fd3b230983)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let var: [i8; 2] = [2, 3];
    println!("{:?}", (var[0] + var[1]) - (var[0] + var[0]) * var[0]);
}
```
</details>

37 - Declare duas variáveis inteiras, num1 com valor 10 e num2 com valor 10. Escreva um código que imprima se num1 é igual a num2 (==).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0d35170fab6e1394552809add0225bb7)

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

38 - Declare duas variáveis de ponto flutuante, f1 com 3.14 e f2 com 2.71. Escreva um código que imprima se f1 é diferente de f2 (!=).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=17243cc056ff2cc3520ed37820db239b)

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

39 - Declare duas variáveis inteiras, idade_a com 25 e idade_b com 30. Escreva um código que imprima se idade_a é maior que idade_b (>).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6a9feca2f1a561b1f0dc81d02f926b50)

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

40 - Declare duas variáveis inteiras, point1 com 5 e point2 com 8. Escreva um código que imprima se point1 é menor que point2 (<).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9d92128e4c38f3f471f11354f96ddf3e)

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

41 - Declare duas variáveis inteiras, nota_a com 7 e nota_b com 7. Escreva um código que imprima se nota_a é maior ou igual a nota_b (>=).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=22baaad00f35f748c788eae88f1adb0a)

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

42 - Declare duas variáveis float, altura_a com 1.70 e altura_b com 1.65. Escreva um código que imprima se altura_a é menor ou igual a altura_b (<=).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=f454d0bdc8133153dbbf33e50c63046d)

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

43 - Declare uma variável inteira x com 5 e outra y com 10. Verifique se x é diferente de y (!=) e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=29fcafe14b098097df2c3b0e5d35dac1)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let x: u8 = 5;
    let y: u8 = 10;

    println!("x != y? {}", x != y);
}

```
</details>

44 - Declare uma variável temp_a com 22.5 e temp_b com 20.0. Verifique se temp_a é maior que temp_b (>) e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=eb12f0a19f72b0e7d02e5ae19882d862)

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

45 - Declare uma variável count_a com 100 e count_b com 99. Verifique se count_a é menor que count_b (<) e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2ffe5333150eebf0f436e33449d54ea1)

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

46 - Declare duas variáveis u8, val_a com 8 e val_b com 3. Calcule a soma, subtraia 1 do resultado, e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b0ba0a5cee50e5352e8754f8735970ce)

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

47 - Crie uma tupla (u32, u32) com valores (5, 10). Multiplique os dois elementos e atribua o resultado a uma nova variável, depois imprima-a.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=27551719be73c10a91230d97f2bd4c38)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr_1: (u32, u32) = (5, 10);
    let arr_2 = arr_1.0 * arr_1.1;

    println!("{:?}", arr_2);
}
```
</details>

48 - Declare um array [i32; 3] = [2, 4, 6]. Divida cada elemento por 2 (usando atribuição de divisão se aplicável) e imprima o array resultante.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=18f956e4dd9529cd29694d1cbd6910e5)

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

49 - Declare uma tupla (f64, f64) = (2.5, 3.5). Some os elementos e imprima o resultado formatado com duas casas decimais.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=096fe9e0bbe2f52c6434011c6736805d)

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

50 - Declare um array [u16; 2] = [100, 200]. Multiplique o primeiro elemento por 2 e o segundo por 3, em seguida, some os resultados e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=688a4317ceac8a99a9e363c6a7a64b59)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arr: [u16; 2] = [100, 200];
    println!("{:?}", (arr[0] * 2) + (arr[1] * 3));
}
```
</details>

51 - Declare uma variável mensagem do tipo &str com "*Start*". Anexe a ela a String " -> End". Imprima o valor final de mensagem.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0f0c4f391eedf0f58c4889d24c9828f3)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    //&str
    let mensagem: &str = "Start";
    println!("{}", mensagem.to_owned() + " -> End");

    let mut mensagem: String = String::from("Start");
    mensagem += " -> End";
    println!("{}", mensagem);
}
```
</details>

52 - Crie uma tupla (i8, i8, i8) com (1, 2, 3). Some todos os três números e imprima o resultado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=90d00093f37ddba7e9c3c0cd62f43e1f)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let tup: (i8, i8, i8) = (1, 2, 3);
    println!("{:?}", tup.0 + tup.1 + tup.2);
}
```
</details>

53 - Dado um array data = [3, 2], calcule e imprima o resultado de data[0] + data[1] * 5. Em seguida, calcule e imprima (data[0] + data[1]) * 5.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=65b91c0fcf6619f874f5b7b9b438eef2)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let data: [u8; 2] = [3, 2];

    println!("{:?}", data[0] + data[1] * 5);
    println!("{:?}", (data[0] + data[1]) * 5);
}
```
</details>

54 - Dado um array calc_valor = [10, 3, 2], calcule e imprima calc_valor[0] / calc_valor[1] + calc_valor[2]. Em seguida, calcule e imprima calc_valor[0] / (calc_valor[1] + calc_valor[2]).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=0386e809b6ac4233dc6c22110b1fd9f3)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let calc_valor: [u8; 3] = [10, 3, 2];

    println!("{:?}", calc_valor[0] / calc_valor[1] + calc_valor[2]);
    println!("{:?}", calc_valor[0] / (calc_valor[1] + calc_valor[2]));
}
```
</details>
