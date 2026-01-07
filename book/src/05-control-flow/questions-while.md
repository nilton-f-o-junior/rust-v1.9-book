# Questões - While

---

01 - Escreva um programa em Rust que use um loop while para imprimir os números de 1 a 5, um por linha.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0;

    while contador <= 5 { 
        println!("Contador = {}", contador);
        contador += 1;
    }
}
```
</details>

02 - Usando um loop while, crie um programa que imprima uma contagem regressiva de 10 a 1 e, em seguida, a mensagem "Launch!" (Lançar!).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 10; 

    while contador >= 1 { 
        println!("{}", contador);
        contador -= 1;

        if contador < 1 { 
            println!("Lançamento!");
        }
    }
}
```
</details>

03 - Escreva um programa que calcule a soma de todos os números inteiros de 1 a 100, usando um loop while. Imprima o resultado final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut soma: u16 = 0;    
    let mut contador: u8 = 1;
    
    while contador <= 100 { 
        soma += contador as u16; 
        contador += 1; 
    }
    
    println!("Soma = {}", soma);
}
```
</details>

04 - Crie um loop while que seja intencionalmente infinito, mas use a palavra-chave break para sair do loop quando um contador atingir o valor 7. Imprima o valor do contador em cada iteração antes de verificar a condição de saída.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0;

    while contador >= 0 { 
        contador += 1; 
        println!("Contador = {}", contador);

        if contador >= 7 {
            break; 
        }
    }
}
```
</details>

05 - Verifique se um determinado número (por exemplo, num = 32) é uma potência de 2 usando um loop while. Imprima true (verdadeiro) ou false (falso).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");
    
    let mut entrada_numero: String = String::new(); 
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro de entrada de dados!"); 

    let mut numero: u16 = entrada_numero.trim().parse().expect("Erro na conversão de dados!"); 

    if numero <= 0 { 
        println!("{}", false); 
    } else if numero == 1 {
        println!("{}", true); 
    } else {
        while numero % 2 == 0 {
            numero /= 2;
        }

        if numero == 1 {
            println!("{}", true);
        } else {
            println!("{}", false);
        }
    }
}
```
</details>

06 - Escreva um programa com um loop while que itere de 0 a 10. Se o número atual for ímpar, use continue para pular a impressão desse número. Imprima apenas os números pares.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0; 
    while contador <= 10 { 
        
        if contador % 2 != 0 {
            contador += 1; 
            continue;
        }

        println!("Número par: {}", contador); 
        contador += 1; 
    }
}
```
</details>

07 - Escreva um programa que peça ao usuário para inserir um número maior que 10. Use um loop while para continuar pedindo a entrada até que um número válido seja fornecido.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut condicao: u8 = 0;  
    while condicao <= 10 { 
        println!("Insira um número:");        
        let mut entrada_numero: String = String::new();         
        io::stdin()
            .read_line(&mut entrada_numero)
            .expect("Erro de entrada de dados!"); 
            
        let numero: u8 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
        println!("");

        condicao = numero; 

        if condicao <= 10 {
            println!("Número <= 10.");
            println!("Tente novamente!\n");
        } else {
            println!("Número > 10!");
        }
    }
}
```
</details>

08 - Calcule o fatorial de um número (por exemplo, 5!) usando um loop while. Imprima o resultado.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");
    let mut entrada_numero: String = String::new(); 
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro de entrada de dados!!");

    let numero: u16 = entrada_numero.trim().parse().expect("Erro na conversão de dados!"); 

    if numero == 0 {
        println!("Fatorial: 0 = 1");
    } else {

        let mut fatorial: u16 = 1;
        let mut i: u16 = 1;

        while i <= numero {
            fatorial *= i;
            i += 1;
        }

        println!("Fatorial: {} = {}", numero, fatorial);
    }
}
```
</details>

09 - Dado um número inteiro (por exemplo, 12345), use um loop while para imprimi-lo ao contrário (ou seja, 54321). Dica: use os operadores % (módulo) e / (divisão).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");

    let mut entrada_numero: String = String::new();
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro na entrada de dados!");

    let mut numero: u16 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    let numero_salvo = numero;
    let mut numero_invertido: u16 = 0; 

    if numero == 0 {
        numero_invertido = numero;
    } else {
        while numero > 0 {
            let digito = numero % 10; 
             numero_invertido = (numero_invertido * 10) + digito; 
             numero /= 10;
        }
    }
    println!("Número original: {}", numero_salvo);
    println!("Número invertido: {}", numero_invertido);
}
```
</details>

10 - Escreva um programa que conte o número de dígitos em um número inteiro positivo usando um loop while. Por exemplo, 12345 tem 5 dígitos.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");     
    let mut entrada_numero: String = String::new();
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro na entrada de dados!");

    let mut numero: u16 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    let numero_salvo: u16 = numero;
    let mut contagem: u8 = 0;

    if numero == 0 {
        contagem = 1; 
    } else {
        while numero > 0 {
            numero /= 10;
            contagem += 1;
        }
    }
    println!("Contagem de dígitos de {} = {}", numero_salvo, contagem);
}
```
</details>

11 - Imprima os quadrados dos números de 1 a 7 usando um loop while.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u16 = 0;
    while contador <= 7 { 
        let quadrado: u16 = contador * contador;
        println!("Quadrado: {} = {}", contador, quadrado);
        contador += 1; 
    }
}
```
</details>

12 - Dado um número let mut num = 64;, use um loop while para dividi-lo repetidamente por 2 até que o resultado seja menor ou igual a 1. Imprima cada resultado da divisão.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut numero: u8 = 64; 
    while numero > 1 { 
        numero /= 2; 
        println!("Resultado = {}", numero); 
    }
}
```
</details>

13 - Encontre e imprima o primeiro número par maior que 50 usando um loop while.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut numero: u8 = 51; 
    while numero % 2 > 0 { 
        numero += 1;
    }
    println!("Resultado = {}", numero); 
}
```
</details>

14 - Crie um número secreto (por exemplo, secreto = 42). Peça ao usuário para adivinhar o número. Use um loop while para continuar o jogo até que o usuário adivinhe corretamente. Dê dicas ("muito alto", "muito baixo"). (Requer std::io para entrada do usuário).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut numero: u8 = 0;
    let numero_secreto: u8 = 42; 

    while numero != numero_secreto { 
        println!("Insira um número:");
        
        let mut entrada_numero: String = String::new(); 
        io::stdin()
            .read_line(&mut entrada_numero)
            .expect("Erro na entrada de dados!");

        numero = entrada_numero
            .trim()
            .parse()
            .expect("Erro na conversão do número!");

        if numero > numero_secreto {
            println!("Muito Alto!!!");
        } else {
            println!("Muito Baixo!!!");
        }
    }
    println!("VOCÊ VENCEU!");
}
```
</details>

15 - Peça um número ao usuário e, usando um loop while, imprima os primeiros 5 múltiplos desse número.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");
    let mut entrada_numero: String = String::new();
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro na entrada de dados!");

    let numero_base: u8 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    let mut contador: u8 = 0;
    let mut resultado: u8;
    println!();

    while contador < 5 { 
        contador += 1;
        resultado = contador * numero_base;

        println!("{}", resultado);
    }
}
```
</details>

16 - Use loops while aninhados para imprimir um quadrado 3x3 de asteriscos.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira o número de linhas:");    
    let mut entrada_linha: String = String::new(); 
    io::stdin()
        .read_line(&mut entrada_linha)
        .expect("Erro na entrada de dados!");

    println!("Insira o número de colunas:"); 
    let mut entrada_coluna: String = String::new(); 
    io::stdin()
        .read_line(&mut entrada_coluna)
        .expect("Erro na entrada de dados!");

    let num_linhas: u8 = entrada_linha.trim().parse().expect("Erro na conversão de dados!"); 
    let num_colunas: u8 = entrada_coluna.trim().parse().expect("Erro na conversão de dados!"); 
    let simbolo: String = String::from("*");
    let mut contador_linha: u8 = 0;
    
    while contador_linha < num_linhas {      
        let mut contador_coluna: u8 = 0; 
        while contador_coluna < num_colunas {
            print!("{}", simbolo); 
            contador_coluna += 1;
        }
        println!(); 
        contador_linha += 1;
    }
}
```
</details>

17 - Escreva um programa em Rust que solicite ao usuário a inserção de um número inteiro positivo. Em seguida, encontre e exiba os primeiros cinco divisores desse número. Se menos de cinco divisores forem encontrados, o programa deve informar que "Os primeiros 5 números múltiplos não foram encontrados!".

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Insira um número:");
    let mut entrada_numero: String = String::new();
    io::stdin()
        .read_line(&mut entrada_numero)
        .expect("Erro na entrada de dados!");

    let numero_base: u8 = entrada_numero.trim().parse().expect("Erro na conversão de dados!");
    let mut candidato_divisor: u8 = 0;
    let mut divisores_encontrados: u8 = 0;

    while divisores_encontrados < 5 {
        candidato_divisor += 1;

        if candidato_divisor == 0 {
            continue;
        }

        if numero_base % candidato_divisor == 0 {
            divisores_encontrados += 1;
            println!("{} % {} = 0", numero_base, candidato_divisor);
        }
 
        if candidato_divisor > numero_base && divisores_encontrados < 5 {
            println!("Os primeiros 5 múltiplos não foram encontrados!");
            break;
        }
    }
}
```
</details>
