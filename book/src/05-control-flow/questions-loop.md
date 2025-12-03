# Questions - Loop

---

01 - Crie um programa que use um loop para contar de 1 a 5. Para cada número, imprima o valor do contador. O loop deve parar quando o contador chegar a 6.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count_number: u8 = 0;

    loop {
        count_number += 1;
        println!("Count = {}", count_number);
        if count_number >= 5 {
            break;
        }
    }
}
```
</details>

02 - Defina uma constante LIMIT com o valor 100. Use um loop para somar números a uma variável mutável sum começando de 1. Pare o loop quando o valor de sum exceder LIMIT e imprima o valor final de sum.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
const LIMIT: u8 = 100;

fn main() {
    let mut start_sum: u8 = 1;

    loop {
        println!("{}", start_sum);

        if start_sum >= LIMIT {
            break;
        }

        start_sum += start_sum;
    }
}
```
</details>

03 - Escreva um loop que imprima repetidamente a mensagem "I'm stuck in a loop!" (Estou preso em um loop!). Use uma variável contadora e uma declaração if para interromper (break) o loop após a 3ª iteração.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count_num: u8 = 0;

    loop {
        count_num += 1;

        if count_num >= 4 {
            break;
        }

        println!("I'm stuck in a loop!");
    }
}
```
</details>

04 - Use um loop para iterar de 1 a 10. Dentro do loop, verifique se o número atual é par ou ímpar usando o operador de módulo (%). Imprima o resultado formatado, como "The number 3 is odd." (O número 3 é ímpar). O loop deve parar após o número 10.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count_number: u8 = 0;

    loop {
        count_number += 1;

        if count_number % 2 == 0 {
            println!("The number {} is even.", count_number);
        } else {
            println!("The number {} is odd.", count_number);
        }

        if count_number >= 10 {
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
    let mut count_number: f32 = 0.;

    loop {
        count_number += 0.5;
        println!("{}", count_number);

        if count_number >= 5. {
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

const DAMAGE: i8 = 10;

fn main() {
    //
    let mut health_player: i8 = 100;
    let mut health_monster: i8 = 100;

    let mut round = 0;

    println!("--- Start Game ---");
    println!("Player vs Monster");
    println!("");

    //
    loop {
        round += 1;

        println!("---- Statistics ----");
        println!(
            "Player:\n HP: {}\n Damage: 10\n Defense: 10\n",
            health_player
        );
        println!(
            "Monster:\n HP: {}\n Damage: 10\n Defense: 10\n",
            health_monster
        );

        println!("--- Player ---");
        println!("[1] Attack!\n[2] Defense\n");

        // player 1
        let mut input_select_player: String = String::new();
        io::stdin()
            .read_line(&mut input_select_player)
            .expect("Error entered data!");
        let select_player: i8 = input_select_player
            .trim()
            .parse()
            .expect("Error converting data!");

        // monster
        let input_select_monster = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .expect("Error time!")
            .as_nanos();

        // random
        let select_monster = (input_select_monster % 2 + 1) as i8;

        if select_player == 1 && select_monster == 1 {
            health_player = health_player - (DAMAGE * 2);
            health_monster = health_monster - (DAMAGE * 2);
            println!("---- Round {} ----", round);
            println!("Player: Attack\nMonster: Attack\n");
            println!("*** SUPER DAMAGE! ***\n");
        } else if select_player == 1 && select_monster == 2 {
            health_player = health_player - (DAMAGE / 2);
            println!("---- Round {} ----", round);
            println!("Player: Attack\nMonster: Defend\n");
            println!("*** PLAYER BLOCK! ***\n");
        } else if select_player == 2 && select_monster == 1 {
            health_monster = health_monster - (DAMAGE / 2);
            println!("---- Round {} ----", round);
            println!("Player: Defend\nMonster: Attack\n");
            println!("*** MONSTER BLOCK! ***\n");
        } else if select_player == 2 && select_monster == 2 {
            health_player = health_player - (DAMAGE * 2);
            health_monster = health_monster - (DAMAGE * 2);
            println!("---- Round {} ----", round);
            println!("Player: Defend\nMonster: Defend\n");
            println!("*** SUPER BLOCK! ***\n");
        }

        //
        if health_player <= 0 {
            println!("---- Statistics ----");
            println!(
                "Player:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_player
            );
            println!(
                "Monster:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_monster
            );
            println!("--- Player ---\n*** YOU LOSE! ***");
            break;
        }
        if health_monster <= 0 {
            println!("---- Statistics ----");
            println!(
                "Player:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_player
            );
            println!(
                "Monster:\n HP: {}\n Damage: 10\n Defense: 10\n",
                health_monster
            );
            println!("--- Player ---\n*** YOU WIN! ***");
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
    println!("Count 1 .. 100!");
    let mut count_number: u8 = 0;

    loop {
        count_number += 1;

        if count_number % 3 == 0 && count_number % 5 == 0 {
            println!("FizzBuzz");
        } else if count_number % 3 == 0 {
            println!("Fizz");
        } else if count_number % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", count_number);
        }

        if count_number > 100 {
            break;
        }
    }
}
```
</details>

08 - Comece com capital = 1000.0 e goal = 2000.0 (meta). A cada "ano" (iteração do loop), o capital aumenta em 7% (capital *= 1.07;). O loop deve contar quantos anos leva para o capital atingir ou exceder a meta. Quando a meta for atingida, o loop deve parar, retornando o número de anos. Imprima o resultado.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut cap: f32 = 1000.;
    let mut year: u8 = 0;

    loop {
        cap *= 1.07;
        year += 1;
        println!("Cap = {} and Year = {}", cap, year);

        if cap >= 2000. {
            println!("Cap. = {}", cap);
            println!("Year = {}", year);
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
    let mut input_char: char = 'a';
    println!("-- Start --");

    loop {
        println!("Char: {}", input_char);
        let char_init = input_char as u8;
        let char_next = char_init + 1;
        input_char = char_next as char;

        if input_char > 'f' {
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
    let mut data: (u8, bool) = (0, false);

    loop {
        println!("{:?}", data);
        data.0 += 1;

        if data.0 > 5 {
            data.1 = true;
            println!("{:?}", data);
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
    let mut person: (String, u8, f32) = ("Person".to_string(), 0, 0.);
    println!("{:#?}", person);

    let mut amount: u8 = 0;

    loop {
        println!("Whats your name?");
        let mut input_person: String = String::new();
        io::stdin()
            .read_line(&mut input_person)
            .expect("Error entered data!");
        let name: String = input_person.trim().to_string();

        println!("Whats your age?");
        let mut input_age: String = String::new();
        io::stdin()
            .read_line(&mut input_age)
            .expect("Error entered data!");
        let age: u8 = input_age.trim().parse().expect("Error convert data!");

        println!("Whats your height?");
        let mut input_height: String = String::new();
        io::stdin()
            .read_line(&mut input_height)
            .expect("Error entered data!");
        let height: f32 = input_height.trim().parse().expect("Error convert data!");

        amount += 1;

        person = (name, age, height);
        println!("{:#?}", person);

        if amount >= 3 {
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
    let init_array: [u8; 5] = [10, 20, 30, 40, 50];
    let mut i = 0;

    loop {
        if i >= init_array.len() {
            break;
        }

        println!("{}", init_array[i]);
        i += 1;
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
    let init_array: [u8; 5] = [1, 2, 3, 4, 5];
    let mut i = init_array.len() - 1;

    loop {
        if i <= 0 {
            println!("{}", init_array[i]);
            break;
        }

        println!("{}", init_array[i]);
        i -= 1;
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
    let init_array_int: [u8; 2] = [1, 2];
    let init_array_float: [f32; 3] = [2.5, 7.3, 9.2];
    let init_array_char: [char; 4] = ['A', 'B', 'C', 'D'];
    let init_array_str: [&str; 5] = ["Ana", "Bruno", "Carla", "Daniel", "Elza"];

    let mut i = 0;
    
    loop {
        if i >= init_array_int.len() {
            break;
        }

        println!("{}", init_array_int[i]);
        i += 1;
    }
    println!("");

    i = 0;
    loop {
        //
        if i >= init_array_float.len() {
            break;
        }

        println!("{}", init_array_float[i]);
        i += 1;
    }
    println!("");

    i = 0;
    loop {
        //
        if i >= init_array_char.len() {
            break;
        }

        println!("{}", init_array_char[i]);
        i += 1;
    }
    println!("");

    i = 0;
    loop {
        //
        if i >= init_array_str.len() {
            break;
        }

        println!("{}", init_array_str[i]);
        i += 1;
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
    let init_array: [u8; 4] = [1, 2, 4, 5];

    let mut i = 0;
    let mut sum = 0;

    loop {
        if i >= init_array.len() {
            break;
        }

        println!("Values = {:?}", init_array[i]);
        sum = sum + init_array[i];
        i += 1;
    }
    println!("Sum = {}", sum);
}
```
</details>

16 - Declare um array mutável de 5 posições do tipo i32, inicializado com zeros: let mut my_array = [0; 5];. Use um loop e uma variável de índice para preencher o array com os valores [10, 20, 30, 40, 50]. O loop deve parar quando o array estiver completo. Imprima o array final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
 fn main() {
    let mut init_array: [i32; 5] = [0; 5];
    let mut i = 0;

    loop {
        if i >= init_array.len() {
            break;
        }

        init_array[i] = (i as i32 + 1) * 10;
        i += 1;
    }

    println!("Array = {:?}", init_array);
}
```
</details>

17 - Calcule o fatorial de 5 usando um loop. Você precisará de duas variáveis mutáveis: uma para o contador (de 1 a 5) e outra para armazenar o resultado do fatorial. Imprima o resultado final.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut count: u8 = 1;
    let mut factorial: u8 = 1;

    loop {
        println!("Facto = {}", factorial);

        factorial *= count;
        count += 1;

        if count > 5 {
            break;
        }
    }

    println!("Factorial = {}", factorial);
}
```
</details>

18 - Comece com uma variável number igual a 123. Em um loop, divida o número por 2 e imprima o resultado da divisão e o resto (%). Continue o loop até que o número seja menor que 1.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut number: f32 = 123.;

    loop {
        let division = number / 2.;
        let remainder = number % 2.;

        number = division;

        println!("123 / 2 = {:.2}\n123 % 2 = {:.2}\n", division, remainder);

        if number < 1. {
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
    let mut count: u8 = 0;

    loop {
        println!("Count = {} | 5 + count * 2 = {}", count, 5 + count * 2);
        println!("Count = {} | (5 + count) * 2 = {}", count, (5 + count) * 2);

        count += 1;
        if count > 5 {
            break;
        }
    }
}
```
</details>

20 - Defina uma constante SECRET_NUMBER: u8 = 42;. Crie um loop que simule tentativas de adivinhação. Uma variável de tentativa deve ser incrementada em cada iteração. Use if/else if/else para imprimir "Too low" (Muito baixo), "Too high" (Muito alto) ou "You got it!" (Você acertou!) quando a tentativa for igual ao SECRET_NUMBER. Pare o loop (break) quando você adivinhar corretamente.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
use std::io;

const SECRET_NUMBER: u8 = 42;

fn main() {
    println!("------- Start -------");
    println!("Player 1 VS Computer");
    println!("");
    println!("---------------------");
    println!("You have 3 attempts!");

    let mut attempts: u8 = 0;

    loop {
        println!("\nEnter a number:");
        let mut input_number: String = String::new();
        io::stdin()
            .read_line(&mut input_number)
            .expect("Error entered data!");
        let player_number: u8 = input_number.trim().parse().expect("Error converting data!");

        if player_number > SECRET_NUMBER {
            println!("Too High!");
        } else if player_number < SECRET_NUMBER {
            println!("Too Low!");
        } else {
            println!("\nYou Win!");
            break;
        }

        attempts += 1;
        if attempts == 1 {
            println!("You have 2 attempts remaining!");
        } else if attempts == 2 {
            println!("You have 1 attempt remaining!");
        } else if attempts == 3 {
            println!("YOU LOSE!");
            break;
        }
    }
}
```
</details>

21 - Faça uma contagem regressiva de 10 a 1. Use um loop e a macro format! para imprimir mensagens como "Countdown: 10", "Countdown: 9", etc. Quando o contador chegar a 0, imprima "Launch!" e pare o loop.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
fn main() {
    println!("-- Start --");
    let mut init_count: i8 = 10;

    loop {
        println!("Countdown: {}", init_count);

        init_count -= 1;
        if init_count < 1 {
            println!("Lauch!");
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
    let mut init_array: [i8; 10] = [0; 10];
    let mut i = 0;

    loop {
        if i >= init_array.len() {
            break;
        }

        if i % 2 == 0 {
            init_array[i] = i as i8;
        } else {
            init_array[i] = i as i8 * 2;
        }

        println!("Array = {:?}", init_array);
        i += 1;
    }
}
```
</details>
