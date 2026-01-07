# Questões - If e Else

---

01 - Escreva um programa que solicite ao usuário um número inteiro e determine se ele é par ou ímpar.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=742275e9c04a8c6e7e928f9a0ac1b8dd)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número inteiro:");

    let mut entrada_texto: String = String::new();
    io::stdin()
        .read_line(&mut entrada_texto)
        .expect("Erro na leitura do valor digitado!");

    let numero: i32 = match entrada_texto.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter o dado para número!");
            return;
        }
    };

    if numero % 2 == 0 {
        println!("Número {} é Par!", numero);
    } else {
        println!("Número {} é Ímpar!", numero);
    }
}
```
</details>

02 - Crie um programa que leia um número e imprima se ele é positivo, negativo ou zero.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fb05af80427459253ff20c4a89274261)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número: ");

    let mut entrada_num: String = String::new();
    io::stdin()
        .read_line(&mut entrada_num)
        .expect("Erro na leitura do valor digitado!");

    let numero: i8 = match entrada_num.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter o dado para número!");
            return;
        }
    };

    if numero > 0 {
        println!("O número {} é Positivo.", numero);
    } else if numero < 0 {
        println!("O número {} é Negativo.", numero);
    } else {
        println!("O número é Zero.");
    }
}
```
</details>

03 - Desenvolva um programa que receba dois números e mostre qual deles é o maior.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=cf5f06a8c735970f7dc9f43dc426ac4e)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite o primeiro número (A):");
    let mut entrada_num_a: String = String::new();
    io::stdin()
        .read_line(&mut entrada_num_a)
        .expect("Erro na leitura de A!");

    println!("Digite o segundo número (B):");
    let mut entrada_num_b: String = String::new();
    io::stdin()
        .read_line(&mut entrada_num_b)
        .expect("Erro na leitura de B!");
    
    let num_a: i8 = match entrada_num_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número A!");
            return;
        }
    };

    let num_b: i8 = match entrada_num_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número B!");
            return;
        }
    };

    if num_a > num_b {
        println!("O Número A ({}) é o maior.", num_a);
    } else if num_a < num_b {
        println!("O Número B ({}) é o maior.", num_b);
    } else {
        println!("Os números são iguais ({}).", num_a);
    }
}
```
</details>

04 - Crie um programa que receba 3 notas de um aluno (de 0 a 10) e, em seguida, calcule a média das notas e informe:

| Média        | Classificação  |
|--------------|----------------|
| >= 7         | aprovado       |
| < 5          | reprovado      |
| >= 5 e < 7   | em recuperação |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=148985dff3c722784ea8c63ae30cf2b8)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite sua nota para o Teste A (0-10):");
    let mut entrada_teste_a: String = String::new();
    io::stdin()
        .read_line(&mut entrada_teste_a)
        .expect("Erro ao digitar a primeira nota!");

    println!("Digite a nota para o Teste B (0-10):");
    let mut entrada_teste_b: String = String::new();
    io::stdin()
        .read_line(&mut entrada_teste_b)
        .expect("Erro ao digitar a segunda nota!");

    println!("Digite a nota para o Teste C (0-10):");
    let mut entrada_teste_c: String = String::new();
    io::stdin()
        .read_line(&mut entrada_teste_c)
        .expect("Erro ao digitar o terceiro teste!");

    let teste_a: f32 = match entrada_teste_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter: Teste A!");
            return;
        }
    };

    let teste_b: f32 = match entrada_teste_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter: Teste B!");
            return;
        }
    };

    let teste_c: f32 = match entrada_teste_c.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter: Teste C!");
            return;
        }
    };

    let media: f32 = (teste_a + teste_b + teste_c) / 3.0;
    println!("Sua média é: {:.2}", media);

    if media < 5.0 {
        println!("Situação: Reprovado!");
    } else if media >= 5.0 && media < 7.0 {
        println!("Situação: Recuperação!");
    } else {
        println!("Situação: Aprovado!");
    }
}
```
</details>

05 - Escreva um programa que leia a idade de uma pessoa e determine se ela pode votar (16 anos ou mais).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a80b88a89c5b5b69bdbc6de475a89982)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite sua idade:");

    let mut entrada_idade: String = String::new();
    io::stdin()
        .read_line(&mut entrada_idade)
        .expect("Erro na entrada!");

    let idade: u8 = match entrada_idade.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter idade!");
            return;
        }
    };

    if idade >= 18 && idade <= 59 {
        println!("Idade: {}\nVocê é obrigado(a) a votar!", idade);
    } else if idade >= 16 || idade >= 60 {
        println!("Idade: {}\nSeu voto é opcional!", idade);
    } else {
        println!("Idade: {}\nVocê não pode votar!", idade);
    }
}
```
</details>

06 - Desenvolva um programa que solicite três números e determine qual deles é o maior.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c409c528df58bf2aa718c03515185663)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    //
    println!("Digite o número A: ");
    let mut entrada_a: String = String::new();
    io::stdin()
        .read_line(&mut entrada_a)
        .expect("Erro na entrada!");

    //
    println!("Digite o número B: ");
    let mut entrada_b: String = String::new();
    io::stdin()
        .read_line(&mut entrada_b)
        .expect("Erro na entrada!");

    //
    println!("Digite o número C: ");
    let mut entrada_c: String = String::new();
    io::stdin()
        .read_line(&mut entrada_c)
        .expect("Erro na entrada!");

    //
    let num_a: i8 = match entrada_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número A!");
            return;
        }
    };

    let num_b: i8 = match entrada_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número B!");
            return;
        }
    };

    let num_c: i8 = match entrada_c.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter número C!");
            return;
        }
    };

    //
    if num_a == num_b && num_b == num_c {
        println!("A = B = C = {}", num_a);
    } else if num_a == num_b && num_a > num_c {
        println!("A = B = {} > C = {}", num_a, num_c);
    } else if num_a == num_b && num_a < num_c {
        println!("C = {} > A = B = {}", num_c, num_a);
    } else if num_a == num_c && num_a > num_b {
        println!("A = C = {} > B = {}", num_a, num_b);
    } else if num_a == num_c && num_a < num_b {
        println!("B = {} > A = C = {}", num_b, num_a);
    } else if num_b == num_c && num_b > num_a {
        println!("B = C = {} > A = {}", num_b, num_a);
    } else if num_b == num_c && num_b < num_a {
        println!("A = {} > B = C = {}", num_a, num_b);
    } else if num_a > num_b && num_a > num_c {
        println!("A = {}", num_a);
    } else if num_b > num_a && num_b > num_c {
        println!("B = {}", num_b);
    } else {
        println!("C = {}", num_c);
    }
}    
```
</details>

07 - Crie um programa que converta uma pontuação numérica (0 a 100) em uma nota literal, seguindo estas regras:

| Conceito  | Notas    |
|-----------|----------|
| A         | 90 - 100 |
| B         | 80 - 89  |
| C         | 70 - 79  |
| D         | 60 - 69  |
| F         | 0 - 59   |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=e63c1ea4601fc215e17d1d2b2cf85f20)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite a pontuação (0 - 100):");
    let mut entrada_pontuacao: String = String::new();
    io::stdin()
        .read_line(&mut entrada_pontuacao)
        .expect("Erro na entrada!");

    let pontuacao: u8 = match entrada_pontuacao.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter pontuação!");
            return;
        }
    };

    if pontuacao <= 59 {
        println!("Nota: F");
    } else if pontuacao <= 69 {
        println!("Nota: D");
    } else if pontuacao <= 79 {
        println!("Nota: C");
    } else if pontuacao <= 89 {
        println!("Nota: B");
    } else if pontuacao <= 100 {
        println!("Nota: A");
    } else {
        println!("Pontuação fora do intervalo (0-100)!");
    }
}
```
</details>

08 - Escreva um programa que receba os comprimentos dos três lados de um triângulo e determine se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=995d58dc32cb7147adf8b3b2b1a87174)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    // lado_a
    println!("Digite o tamanho do Lado A:");
    let mut entrada_a: String = String::new();
    io::stdin()
        .read_line(&mut entrada_a)
        .expect("Erro na entrada A!");

    // lado_b
    println!("Digite o tamanho do Lado B:");
    let mut entrada_b: String = String::new();
    io::stdin()
        .read_line(&mut entrada_b)
        .expect("Erro na entrada B!");

    // lado_c
    println!("Digite o tamanho do Lado C:");
    let mut entrada_c: String = String::new();
    io::stdin()
        .read_line(&mut entrada_c)
        .expect("Erro na entrada C!");

    let lado_a: f32 = match entrada_a.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter lado A!");
            return;
        }
    };

    let lado_b: f32 = match entrada_b.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter lado B!");
            return;
        }
    };

    let lado_c: f32 = match entrada_c.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter lado C!");
            return;
        }
    };

    if lado_a == lado_b && lado_b == lado_c {
        println!("O triângulo é Equilátero (todos os lados iguais).");
    } else if lado_a == lado_b || lado_b == lado_c || lado_a == lado_c {
        println!("O triângulo é Isósceles (dois lados iguais).");
    } else {
        println!("O triângulo é Escaleno (todos os lados diferentes).");
    }
}
```
</details>

09 - Crie um programa que receba um número de 1 a 7 e imprima o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.), indicando também se é "Dia útil" ou "Fim de semana".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ad122c1106d0d2ce04979c095bf6e158)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite um número para o dia da semana:");
    let mut entrada_dia: String = String::new();
    io::stdin()
        .read_line(&mut entrada_dia)
        .expect("Erro na entrada!");

    let dia: u8 = match entrada_dia.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter dia!");
            return;
        }
    };

    if dia == 1 || dia == 7 {
        if dia == 1 {
            println!("Domingo - Fim de semana!");
        } else {
            println!("Sábado - Fim de semana!");
        }
    } else if dia == 2 {
        println!("Segunda-feira - Dia útil!");
    } else if dia == 3 {
        println!("Terça-feira - Dia útil!");
    } else if dia == 4 {
        println!("Quarta-feira - Dia útil!");
    } else if dia == 5 {
        println!("Quinta-feira - Dia útil!");
    } else if dia == 6 {
        println!("Sexta-feira - Dia útil!");
    } else {
        println!("Erro!");
    }
}
```
</details>

10 - Escreva um programa que leia a idade de uma pessoa e a classifique nas seguintes categorias:

| Classificação  | Idade         |
|----------------|---------------|
| Criança        | 0 - 12 anos   |
| Adolescente    | 13 - 17 anos  |
| Adulto         | 18 - 59 anos  |
| Idoso          | + 60 anos     |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=fca9f43bb0eff0f8f98445fcb2bb80a9)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite sua idade:");
    let mut entrada_idade: String = String::new();
    io::stdin()
        .read_line(&mut entrada_idade)
        .expect("Erro na entrada!");

    let idade: u8 = match entrada_idade.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter idade!");
            return;
        }
    };

    if idade >= 1 && idade <= 12 {
        println!("Classificação: Criança!");
    } else if idade >= 13 && idade <= 17 {
        println!("Classificação: Adolescente!");
    } else if idade >= 18 && idade <= 59 {
        println!("Classificação: Adulto!");
    } else if idade >= 60 {
        println!("Classificação: Idoso!");
    } else {
        println!("Idade inválida!");
    }
}
```
</details>

11 - Crie um programa que funcione como uma calculadora. Ele deve receber dois números e um operador (+, -, *, /). O programa deve realizar a operação correspondente e mostrar o resultado. Além disso, trate a divisão por zero.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=ebffc6e0b413595fc2b869feca254324)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite o primeiro número:");
    let mut entrada_primeiro_num: String = String::new();
    io::stdin()
        .read_line(&mut entrada_primeiro_num)
        .expect("Erro ao receber o primeiro número!");

    println!("Digite o segundo número:");
    let mut entrada_segundo_num: String = String::new();
    io::stdin()
        .read_line(&mut entrada_segundo_num)
        .expect("Erro ao receber o segundo número!");

    println!("Insira o operador (+, -, *, /):");
    let mut entrada_operador: String = String::new();
    io::stdin()
        .read_line(&mut entrada_operador)
        .expect("Erro ao receber o operador matemático!");

    let primeiro_numero: f32 = match entrada_primeiro_num.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter o primeiro número!");
            return;
        }
    };

    let segundo_numero: f32 = match entrada_segundo_num.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter o segundo número!");
            return;
        }
    };

    let operador: char = match entrada_operador.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter o operador!");
            return;
        }
    };

    if operador == '+' {
        println!("Resultado: {} {} {} = {}", primeiro_numero, operador, segundo_numero, primeiro_numero + segundo_numero);
    } else if operador == '-' {
        println!("Resultado: {} {} {} = {}", primeiro_numero, operador, segundo_numero, primeiro_numero - segundo_numero);
    } else if operador == '*' {
        println!("Resultado: {} {} {} = {}", primeiro_numero, operador, segundo_numero, primeiro_numero * segundo_numero);
    } else if operador == '/' {
        if segundo_numero == 0.0 {
            println!("[Erro] Divisão por zero não é permitida.");
        } else {
            println!("Resultado: {} {} {} = {}", primeiro_numero, operador, segundo_numero, primeiro_numero / segundo_numero);
        }
    } else {
        println!("[Erro] Operador matemático não reconhecido!");
    }
}
```
</details>

12 - Desenvolva um programa que calcule um desconto com base no valor da compra:

- Compras abaixo de R$ 100: sem desconto;
- Compras de R$ 100 a R$ 500: 10% de desconto;
- Compras acima de R$ 500: 20% de desconto.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=8deff62212992da84e2fb0e47148982c)

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    println!("Digite o valor total da compra:");
    let mut entrada_valor: String = String::new();
    io::stdin()
        .read_line(&mut entrada_valor)
        .expect("Erro ao receber o valor!");

    let valor_compra: f32 = match entrada_valor.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("Erro ao converter valor!");
            return;
        }
    };

    if valor_compra < 100.0 {
        println!("Valor: R$ {:.2} - Sem desconto!", valor_compra);
    } else if valor_compra >= 100.0 && valor_compra <= 500.0 {
        let valor_desconto: f32 = valor_compra * 0.10; // 10%
        let novo_valor: f32 = valor_compra - valor_desconto;
        println!("Valor: R$ {:.2} - Desconto de 10% (R$ {:.2})\nNovo valor: R$ {:.2}", valor_compra, valor_desconto, novo_valor);
    } else if valor_compra > 500.0 {
        let valor_desconto: f32 = valor_compra * 0.20; // 20%
        let novo_valor: f32 = valor_compra - valor_desconto;
        println!("Valor: R$ {:.2} - Desconto de 20% (R$ {:.2})\nNovo valor: R$ {:.2}", valor_compra, valor_desconto, novo_valor);
    } else {
        println!("Valor inválido!");
    }
}
```
</details>

13 - Escreva um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa (peso / altura²) e classifique o resultado:

| IMC            | Classificação |
|----------------|---------------|
| Abaixo de 18.5 | Abaixo do peso|
| 18.5 - 24.9    | Peso normal   |
| 25.0 - 29.9    | Sobrepeso     |
| + 30.0         | Obesidade     |

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=03e5f62966813198574f7758f5d0f1ac)

<details>
<summary>Resposta</summary>

```rust
use std::io;

const MSG_ERRO_ENTRADA: &str = "Erro na leitura de dados!";
const MSG_ERRO_CONVERSAO: &str = "Erro ao converter valor para número!";

fn main() {
    println!("Digite o Peso (em kg):");
    let mut entrada_peso: String = String::new();
    io::stdin().read_line(&mut entrada_peso).expect(MSG_ERRO_ENTRADA);

    let peso: f32 = match entrada_peso.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("{}", MSG_ERRO_CONVERSAO);
            return;
        }
    };

    println!("Digite a Altura (em metros):");
    let mut entrada_altura: String = String::new();
    io::stdin().read_line(&mut entrada_altura).expect(MSG_ERRO_ENTRADA);

    let altura: f32 = match entrada_altura.trim().parse() {
        Ok(val) => val,
        Err(_) => {
            println!("{}", MSG_ERRO_CONVERSAO);
            return;
        }
    };

    let imc: f32 = peso / (altura * altura);
    println!("Seu IMC é: {:.2}", imc);

    if imc <= 18.5 {
        println!("Classificação: Abaixo do Peso!");
    } else if imc <= 24.9 {
        println!("Classificação: Peso Normal!");
    } else if imc <= 29.9 {
        println!("Classificação: Sobrepeso!");
    } else if imc >= 30.0 {
        println!("Classificação: Obesidade!");
    } else {
        println!("Erro ao calcular IMC ou faixa inválida!");
    }
}
```
</details>

14 - Crie um programa que solicite um nome de usuário e uma senha. Se o nome de usuário for "admin" e a senha for "1234", exiba "Acesso concedido". Caso contrário, exiba "Acesso negado".

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=6d082576f1e5a2df6b15028f0c9d984e)

<details>
<summary>Resposta</summary>

```rust
use std::io;

const USERNAME_CORRETO: &str = "admin";
const PASSWORD_CORRETA: &str = "1234";

fn main() {
    println!("Digite o Nome de Usuário:");
    let mut entrada_usuario: String = String::new();
    io::stdin()
        .read_line(&mut entrada_usuario)
        .expect("Erro na leitura!");
    let nome_usuario: &str = entrada_usuario.trim();

    println!("Digite a Senha:");
    let mut entrada_senha: String = String::new();
    io::stdin()
        .read_line(&mut entrada_senha)
        .expect("Erro na leitura!");
    let senha: &str = entrada_senha.trim();

    if nome_usuario == USERNAME_CORRETO && senha == PASSWORD_CORRETA {
        println!("Acesso Concedido! Bem-vindo(a), {}!", nome_usuario);
    } else {
        println!("Acesso Negado! Verifique seu usuário e senha.");
    }
}
```
</details>

15 - Crie o jogo "Pedra, Papel, Tesoura." Peça as escolhas de dois jogadores e determine o vencedor com base nas regras clássicas.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=29168d4cc32db4c03e59b06893ed90af)

<details>
<summary>Resposta</summary>

```rust
use std::io;
use std::time::{SystemTime, UNIX_EPOCH};

fn main() {
    //
    println!("--- Início ---");
    println!("Jogador 1");
    println!("Computador");
    println!("");

    println!("-- Selecionar --");
    println!("  Jogador 1  ");
    println!("");
    println!("[1] Pedra");
    println!("[2] Papel");
    println!("[3] Tesoura");
    println!("");
    println!("1 | 2 | 3");

    //
    let mut entrada_jogador: String = String::new();
    io::stdin()
        .read_line(&mut entrada_jogador)
        .expect("Erro na entrada de dados!");
    let mut jogador: &str = entrada_jogador.trim();

    //
    if jogador == "1" {
        jogador = "Pedra";
    } else if jogador == "2" {
        jogador = "Papel";
    } else {
        jogador = "Tesoura";
    }

    //
    println!("");
    println!("-- Selecionar --");
    println!("  Jogador 2  ");
    println!("");
    println!("-- Sorteando --");
    println!("[1] Pedra");
    println!("[2] Papel");
    println!("[3] Tesoura");
    println!("");

    //
    let nanos = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Erro")
        .as_nanos();

    let nano_computador = (nanos % 3 + 1) as u8;
    let computador: &str;

    if nano_computador == 1 {
        computador = "Pedra";
    } else if nano_computador == 2 {
        computador = "Papel";
    } else {
        computador = "Tesoura";
    }

    //
    if jogador == computador {
        println!("Jogador 1: {} e Computador: {}", jogador, computador);
        println!("O jogo é um empate!");
    } else if jogador == "Pedra" {
        if computador == "Papel" {
            println!("Jogador 1: {} e Computador: {}", jogador, computador);
            println!("Jogador 1: Você Perdeu!");
        }
        if computador == "Tesoura" {
            println!("Jogador 1: {} e Computador: {}", jogador, computador);
            println!("Jogador 1: Você Venceu!");
        }
    } else if jogador == "Papel" {
        if computador == "Pedra" {
            println!("Jogador 1: {} e Computador: {}", jogador, computador);
            println!("Jogador 1: Você Venceu!");
        }
        if computador == "Tesoura" {
            println!("Jogador 1: {} e Computador: {}", jogador, computador);
            println!("Jogador 1: Você Perdeu!");
        }
    } else { 
        if computador == "Pedra" {
            println!("Jogador 1: {} e Computador: {}", jogador, computador);
            println!("Jogador 1: Você Perdeu!");
        }
        if computador == "Papel" {
            println!("Jogador 1: {} e Computador: {}", jogador, computador);
            println!("Jogador 1: Você Venceu!");
        }
    }
}
```
</details>
