# Questões - Loop

---

01 - Crie um programa que use um loop para contar de 1 a 5. Para cada número, imprima o valor do contador. O loop deve parar quando o contador chegar a 6.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0;

    loop {
        contador += 1;
        println!("Contagem = {}", contador);
        if contador >= 5 {
            break;
        }
    }
}
```
</details>

02 - Defina uma constante LIMITE com o valor 100. Use um loop para somar números a uma variável mutável sum começando de 1. Pare o loop quando o valor de sum exceder LIMIT e imprima o valor final de sum.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
const LIMITE: u8 = 100; 

fn main() {
    let mut soma_atual: u8 = 1; 

    loop {
        println!("{}", soma_atual);

        if soma_atual >= LIMITE {
            break;
        }

        soma_atual += soma_atual; 
    }
}
```
</details>

03 - Escreva um loop que imprima repetidamente a mensagem "Estou preso em um loop!". Use uma variável contadora e uma declaração if para interromper (*break*) o loop após a 3ª iteração.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0;

    loop {
        contador += 1; 

        if contador >= 4 { 
            break;
        }

        println!("Estou preso em um loop!"); 
    }
}
```
</details>

04 - Use um loop para iterar de 1 a 10. Dentro do loop, verifique se o número atual é par ou ímpar usando o operador de módulo (%). Imprima o resultado formatado, como "O número 3 é ímpar." O loop deve parar após o número 10.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0; 

    loop {
        contador += 1;

        if contador % 2 == 0 { 
            println!("O número {} é par.", contador);
        } else {
            println!("O número {} é ímpar.", contador);
        }

        if contador >= 10 { 
            break;
        }
    }
}
```
</details>

05 - Inicialize uma variável mutável do tipo f32 com 0.0. Em um loop, adicione 0.5 a essa variável em cada iteração. Imprima o valor em cada passo e pare o loop quando o valor for maior ou igual a 5.0.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: f32 = 0.0; 

    loop {
        contador += 0.5; 
        println!("{}", contador);

        if contador >= 5.0 { 
            break;
        }
    }
}
```
</details>

06 - Crie um jogo baseado em turnos entre jogador e monstro:

HP: 100 <br>
Ataque: 10 <br>
Defesa: 10

- Ataque do Jogador e Ataque do Monstro: Dano duplo para ambos
- Ataque do Jogador e Defesa do Monstro: Jogador recebe metade do dano e monstro não recebe dano
- Defesa do Jogador e Ataque do Monstro: Jogador não recebe dano e monstro recebe metade do dano
- Defesa do Jogador e Defesa do Monstro: Ambos bloqueiam

Usando apenas loop, if/else/else if e rand (SystemTime, UNIX_EPOCH)

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;
use std::time::{SystemTime, UNIX_EPOCH};

const DANO: i8 = 10;

fn main() {
    
    let mut vida_jogador: i8 = 100; 
    let mut vida_monstro: i8 = 100; 

    let mut rodada = 0; 

    println!("--- Início do Jogo ---");
    println!("Jogador vs Monstro");
    println!("");
    
    loop {
        rodada += 1;

        println!("---- Estatísticas ----");
        println!(
            "Jogador:\n HP: {}\n Dano: 10\n Defesa: 10\n",
            vida_jogador 
        );
        println!(
            "Monstro:\n HP: {}\n Dano: 10\n Defesa: 10\n",
            vida_monstro 
        );

        println!("--- Jogador ---");
        println!("[1] Atacar!\n[2] Defender\n");

        let mut entrada_selecao_jogador: String = String::new(); 
        io::stdin()
            .read_line(&mut entrada_selecao_jogador)
            .expect("Erro ao inserir dados!"); 
        let selecao_jogador: i8 = entrada_selecao_jogador 
            .trim()
            .parse()
            .expect("Erro ao converter dados!"); 
        
        let entrada_selecao_monstro = SystemTime::now() 
            .duration_since(UNIX_EPOCH)
            .expect("Erro de tempo!") 
            .as_nanos();
        
        let selecao_monstro = (entrada_selecao_monstro % 2 + 1) as i8; 

        if selecao_jogador == 1 && selecao_monstro == 1 {
            vida_jogador = vida_jogador - (DANO * 2);
            vida_monstro = vida_monstro - (DANO * 2);
            println!("---- Rodada {} ----", rodada);
            println!("Jogador: Atacar\nMonstro: Atacar\n");
            println!("*** DANO DUPLO! ***\n"); 
        } else if selecao_jogador == 1 && selecao_monstro == 2 {
            vida_jogador = vida_jogador - (DANO / 2);
            println!("---- Rodada {} ----", rodada);
            println!("Jogador: Atacar\nMonstro: Defender\n");
            println!("*** JOGADOR BLOQUEADO! ***\n"); 
        } else if selecao_jogador == 2 && selecao_monstro == 1 {
            vida_monstro = vida_monstro - (DANO / 2);
            println!("---- Rodada {} ----", rodada);
            println!("Jogador: Defender\nMonstro: Atacar\n");
            println!("*** MONSTRO BLOQUEADO! ***\n"); 
        } else if selecao_jogador == 2 && selecao_monstro == 2 {
            vida_jogador = vida_jogador - (DANO * 2);
            vida_monstro = vida_monstro - (DANO * 2);
            println!("---- Rodada {} ----", rodada);
            println!("Jogador: Defender\nMonstro: Defender\n");
            println!("*** BLOQUEIO DUPLO! ***\n");
        }

        if vida_jogador <= 0 {
            println!("---- Estatísticas Finais ----");
            println!(
                "Jogador:\n HP: {}\n Dano: 10\n Defesa: 10\n",
                vida_jogador
            );
            println!(
                "Monstro:\n HP: {}\n Dano: 10\n Defesa: 10\n",
                vida_monstro
            );
            println!("--- Jogador ---\n*** VOCÊ PERDEU! ***");
            break;
        }
        if vida_monstro <= 0 {
            println!("---- Estatísticas Finais ----");
            println!(
                "Jogador:\n HP: {}\n Dano: 10\n Defesa: 10\n",
                vida_jogador
            );
            println!(
                "Monstro:\n HP: {}\n Dano: 10\n Defesa: 10\n",
                vida_monstro
            );
            println!("--- Jogador ---\n*** VOCÊ VENCEU! ***"); 
            break;
        }
    }
}
```
</details>

07 - Crie um contador que comece de 1 e avance. Dentro de um loop, verifique as seguintes condições:

- Se o número for divisível por 3 e 5, imprima "FizzBuzz";
- Se for divisível apenas por 3, imprima "Fizz";
- Se for divisível apenas por 5, imprima "Buzz";
- Caso contrário, imprima o número;
- Pare o loop quando o contador chegar a 100.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("Contando de 1 .. 100!");
    let mut contador: u8 = 0;

    loop {
        contador += 1;

        if contador % 3 == 0 && contador % 5 == 0 {
            println!("FizzBuzz");

        } else if contador % 3 == 0 {
            println!("Fizz");

        } else if contador % 5 == 0 {
            println!("Buzz");

        } else {
            println!("{}", contador);
        }

        if contador > 100 {
            break;
        }
    }
}
```
</details>

08 - Comece com capital = 1000.0 e a meta = 2000.0. A cada ano (iteração do loop), o capital aumenta em 7% (capital *= 1.07;). O loop deve contar quantos anos leva para o capital atingir ou exceder a meta. Quando a meta for atingida, o loop deve parar, retornando o número de anos. Imprima o resultado.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {  
    let mut capital: f32 = 1000.0; 
    let mut ano: u8 = 0; 

    loop {
        capital *= 1.07; 
        ano += 1;
        println!("Capital = {} e Ano = {}", capital, ano); 

        if capital >= 2000.0 {
            println!("Capital final = {}", capital);
            println!("Anos necessários = {}", ano);
            break;
        }
    }
}
```
</details>

09 - Crie um loop que comece com o caractere 'a' e imprima cada caractere até 'f'. Use uma variável mutável do tipo char e incremente-a. Para incrementar, você pode converter o char para u8, adicionar 1 e converter de volta para char. Pare quando o caractere for maior que 'f'.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut caractere_atual: char = 'a'; 
    println!("-- Início --"); 

    loop {
        println!("Caractere: {}", caractere_atual); 
        let valor_inicial_char = caractere_atual as u8; 
        let proximo_valor_char = valor_inicial_char + 1;      
        caractere_atual = proximo_valor_char as char; 

        if caractere_atual > 'f' {
            break;
        }
    }
}
```
</details>

10 - Declare uma tupla mutável let mut data = (0, false);. Crie um loop que incremente o primeiro elemento da tupla em 1 a cada iteração. Quando o primeiro elemento atingir o valor 5, altere o segundo elemento para true e pare o loop. Imprima a tupla final fora do loop.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut estado: (u8, bool) = (0, false); 

    loop {
        println!("{:?}", estado);
        estado.0 += 1; 

        if estado.0 > 5 {
            estado.1 = true; 
            println!("{:?}", estado);
            break;
        }
    }
}
```
</details>

11 - Crie uma tupla chamada person com os valores (Person, 0, 0.0). Em seguida, altere seus dados 3 vezes usando um loop, solicitando ao usuário o nome, idade e altura, e imprima os valores.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

fn main() {
    let mut pessoa: (String, u8, f32) = ("Pessoa".to_string(), 0, 0.0);
    println!("{:#?}", pessoa);

    let mut quantidade: u8 = 0; 

    loop {
        println!("Qual é o seu nome?"); 
        let mut entrada_nome: String = String::new(); 
        io::stdin()
            .read_line(&mut entrada_nome)
            .expect("Erro ao inserir dados!"); 
        let nome: String = entrada_nome.trim().to_string(); 

        println!("Qual é a sua idade?"); 
        let mut entrada_idade: String = String::new(); 
        io::stdin()
            .read_line(&mut entrada_idade)
            .expect("Erro ao inserir dados!");
        let idade: u8 = entrada_idade.trim().parse().expect("Erro ao converter dados!"); 

        println!("Qual é a sua altura?"); 
        let mut entrada_altura: String = String::new(); 
        io::stdin()
            .read_line(&mut entrada_altura)
            .expect("Erro ao inserir dados!");
        let altura: f32 = entrada_altura.trim().parse().expect("Erro ao converter dados!"); 

        quantidade += 1;

        pessoa = (nome, idade, altura);
        println!("{:#?}", pessoa);

        if quantidade >= 3 { 
            break;
        }
    }
}
```
</details>

12 - Use um loop para exibir os elementos do seguinte array: [u8; 5] = [10, 20, 30, 40, 50]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {

    let array_inicial: [u8; 5] = [10, 20, 30, 40, 50];   
    let mut indice = 0; 

    loop {
        if indice >= array_inicial.len() {
            break;
        }

        println!("{}", array_inicial[indice]);
        indice += 1;
    }
}
```
</details>

13 - Use um loop para exibir os elementos na ordem inversa do seguinte array: [u8; 5] = [1, 2, 3, 4, 5]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {

    let array_inicial: [u8; 5] = [1, 2, 3, 4, 5];
    
    let mut indice = array_inicial.len() - 1; 

    loop {
        if indice <= 0 {
            println!("{}", array_inicial[indice]);
            break;
        }

        println!("{}", array_inicial[indice]); 
        indice -= 1;
    }
}
```
</details>

14 - Você poderia criar um código para imprimir os quatro arrays a seguir: [u8; 2] = [1, 2];, [f32; 3] = [2.5, 7.3, 9.2];, [char; 4] = ['A', 'B', 'C', 'D']; e [&str; 5] = ["Ana", "Bruno", "Carla", "Daniel", "Elza"];

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let array_int_inicial: [u8; 2] = [1, 2];
    let array_float_inicial: [f32; 3] = [2.5, 7.3, 9.2];
    let array_char_inicial: [char; 4] = ['A', 'B', 'C', 'D'];
    let array_str_inicial: [&str; 5] = ["Ana", "Bruno", "Carla", "Daniel", "Elza"];

    let mut indice = 0;

    loop {
        if indice >= array_int_inicial.len() {
            break;
        }

        println!("{}", array_int_inicial[indice]);
        indice += 1;
    }
    println!("");

    indice = 0;
   
    loop {
        if indice >= array_float_inicial.len() {
            break;
        }

        println!("{}", array_float_inicial[indice]);
        indice += 1;
    }
    println!("");

    indice = 0;
   
    loop {
        if indice >= array_char_inicial.len() {
            break;
        }

        println!("{}", array_char_inicial[indice]);
        indice += 1;
    }
    println!("");

    indice = 0;
  
    loop {
        if indice >= array_str_inicial.len() {
            break;
        }

        println!("{}", array_str_inicial[indice]);
        indice += 1;
    }
}
```
</details>

15 - Crie um código que some os dados em um array usando um loop; aqui está o array: [u8; 4] = [1, 2, 4, 5]

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let array_inicial: [u8; 4] = [1, 2, 4, 5]; 
    let mut indice = 0;
    let mut soma = 0;

    loop { 
        if indice >= array_inicial.len() {
            break;
        }

        println!("Valor = {:?}", array_inicial[indice]);
        soma = soma + array_inicial[indice];
        indice += 1;
    }      
    println!("Soma = {}", soma);
}
```
</details>

16 - Declare um array mutável de 5 posições do tipo i32, inicializado com zeros: let mut my_array = [0; 5];. Use um loop e uma variável de índice para preencher o array com os valores [10, 20, 30, 40, 50]. O loop deve parar quando o array estiver completo. Imprima o array final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut array_preencher: [i32; 5] = [0; 5];
    let mut indice = 0;

    loop {
        if indice >= array_preencher.len() {
            break;
        }
        array_preencher[indice] = (indice as i32 + 1) * 10;
        indice += 1;
    }
    println!("Array = {:?}", array_preencher);
}
```
</details>

17 - Calcule o fatorial de 5 usando um loop. Você precisará de duas variáveis mutáveis: uma para o contador (de 1 a 5) e outra para armazenar o resultado do fatorial. Imprima o resultado final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 1; 
    let mut fatorial: u8 = 1; 

    loop {
        println!("Fatorial Parcial = {}", fatorial); 

        fatorial *= contador;
        contador += 1;

        if contador > 5 { 
            break;
        }
    }
    println!("Resultado do Fatorial = {}", fatorial);
}
```
</details>

18 - Comece com uma variável number igual a 123. Em um loop, divida o número por 2 e imprima o resultado da divisão e o resto (%). Continue o loop até que o número seja menor que 1.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut numero: f32 = 123.0; 

    loop {
        let divisao = numero / 2.0; 
        let resto = numero % 2.0;

        numero = divisao; 
        println!("123 / 2 = {:.2}\n123 % 2 = {:.2}\n", divisao, resto);

        if numero < 1.0 { 
            break;
        }
    }
}
```
</details>

19 - Dentro de um loop, calcule e imprima o resultado da expressão 5 + counter * 2, onde counter é uma variável que começa em 0 e é incrementada em cada iteração. Use parênteses para alterar a precedência e calcule (5 + counter) * 2 em uma segunda impressão. Pare o loop quando o contador chegar a 5.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut contador: u8 = 0; 

    loop {
        println!(
            "Contador = {} | 5 + contador * 2 = {}", 
            contador, 
            5 + contador * 2
        );
        
        println!(
            "Contador = {} | (5 + contador) * 2 = {}", 
            contador, 
            (5 + contador) * 2
        );

        contador += 1;        
        if contador > 5 {
            break;
        }
    }
}
```
</details>

20 - Defina uma constante NUMERO_SECRETO: u8 = 42;. Crie um loop que simule tentativas de adivinhação. Uma variável de tentativa deve ser incrementada em cada iteração. Use if/else if/else para imprimir "Muito Baixo", "Muito Alto" ou "Você acertou!" quando a tentativa for igual ao NUMERO_SECRETO. Pare o loop (break) quando você adivinhar corretamente.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

const NUMERO_SECRETO: u8 = 42;

fn main() {
    println!("------- Início -------");
    println!("Jogador 1 VS Computador");
    println!("");
    println!("---------------------");
    println!("Você tem 3 tentativas!");

    let mut tentativas: u8 = 0;

    loop {
        println!("\nInsira um número:");
        
        let mut entrada_numero: String = String::new();
        io::stdin()
            .read_line(&mut entrada_numero)
            .expect("Erro ao inserir dados!");
            
        let numero_jogador: u8 = entrada_numero 
            .trim()
            .parse()
            .expect("Erro ao converter dados!");

        if numero_jogador > NUMERO_SECRETO {
            println!("Muito Alto!"); 
        } else if numero_jogador < NUMERO_SECRETO {
            println!("Muito Baixo!"); 
        } else {
            println!("\nVocê Venceu!"); 
            break;
        }

        tentativas += 1;
        if tentativas == 1 {
            println!("Você tem 2 tentativas restantes!"); 
        } else if tentativas == 2 {
            println!("Você tem 1 tentativa restante!");
        } else if tentativas == 3 {
            println!("VOCÊ PERDEU!");
            break;
        }
    }
}
```
</details>

21 - Faça uma contagem regressiva de 10 a 1. Use um loop e a macro format! para imprimir mensagens como:"Contagem Regressiva: 10", "Contagem Regressiva: 9", etc. Quando o contador chegar a 0, imprima "Lançamento!" e pare o loop.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("-- Início --");
    let mut contador: i8 = 10; 

    loop {
        println!("Contagem Regressiva: {}", contador);
        contador -= 1; 
        if contador < 1 { 
            println!("Lançamento!");
            break;
        }
    }
}
```
</details>

22 - Declare um array mutável de 10 posições ([0; 10]). Use um loop com um contador para preenchê-lo. Se o índice do array for par, preencha-o com o próprio valor do índice. Se for ímpar, preencha-o com o dobro do valor do índice. Pare o loop quando o array estiver completo.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut array_preencher: [i8; 10] = [0; 10];   
    let mut indice = 0; 

    loop {
        if indice >= array_preencher.len() {
            break;
        }

        if indice % 2 == 0 {
            array_preencher[indice] = indice as i8;
        } else {
            array_preencher[indice] = indice as i8 * 2;
        }

        println!("Array = {:?}", array_preencher);
        indice += 1;
    }
}
```
</details>
