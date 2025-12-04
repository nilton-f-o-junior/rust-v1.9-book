# Perguntas - Estruturas de Dados

---

01 - Declare uma variável com nome positivo do tipo u32 com o valor 100. Declare outra variável com nome negativo do tipo i32 com o valor -100. Imprima ambas. Agora, tente atribuir -5 à variável positivo. O que acontece ao tentar compilar e por quê?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=762fa5a6ee5fbd6a01e4f6a2e2352c32)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let positivo: u32 = 100;
    println!("{:?}", positivo);
   
    let negativo: i32 = -100;
    println!("{:?}", negativo);

    // Erro:
    // let positivo: u32 = -5;
}
```
</details>

02 - Escreva código Rust para declarar uma variável max_u8 do tipo u8 e atribua a ela o maior valor possível para esse tipo. Imprima esse valor e em seguida, no seu código, tente atribuir max_u8 + 1 a uma nova variável u8. O que acontece durante a execução?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=9c7ceb057a84ff7406593de10f9f7510)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let max_u8: u8 = u8::MAX;
    println!("{:?}", max_u8);

    // erro: causaria um overflow (estouro)
    // let max_u8: u8 = u8::MAX + 1;
    // println!("{:?}");
}
```
</details>

03 - Declare uma variável chamada populacao do tipo u64 e atribua a ela o valor "7_800_000_000". Em seguida, imprima o valor da variável formatada.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=7b2dd4c30f41e8af103bc111ce4435e2)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let populacao: u64 = 7_800_000_000;
    println!("População: {populacao:?}");
}
```
</details>

04 - Você precisa armazenar a contagem de visualizações de vídeos, que pode chegar a bilhões, mas nunca será negativo. Escolha o tipo não assinado mais apropriado (u32 ou u64). Declare uma variável *video_views* com este tipo, atribua "2500000000" a ela e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=792bc57f2e1170e4f56d620ef8a50e03)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let video_views: u64 = 2_500_000_000;
    println!("{:?}", video_views);
}
```
</details>

05 - Declare duas variáveis, min_val_i8 e max_val_i8, ambas do tipo i8. Atribua a elas, respectivamente, o menor e o maior valor possível para o tipo i8. Imprima ambos os valores.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=2b058d76b81eb1c618eced7c71c8a57a)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let min_val_i8: i8 = i8::MIN;
    println!("{:?}", min_val_i8);
   
    let max_val_i8: i8 = i8::MAX;
    println!("{:?}", max_val_i8);
}
```
</details>

06 - Tente declarar uma variável valor_a do tipo u8 com 10 e valor_b do tipo u8 com -10. O que acontece com valor_b durante a compilação?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=907d8d41de48f2274b8870609cfba41d)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let valor_a: u8 = 10;
    println!("{:?}", valor_a);

    let valor_b: u8 = -10;
    println!("{:?}", valor_b);
}
```
</details>

07 - Em um sistema embarcado com memória limitada, você precisa armazenar uma leitura de sensor que varia de -10.0 a +10.0 com duas casas decimais de precisão. Declare uma variável leitura_do_sensor usando f32 e atribua 7.89.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=467533d3ecf12c2ae3e70b631e1a3eae)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let leitura_do_sensor: f32 = 7.89;
    println!("{:?}", leitura_do_sensor);
}
```
</details>

08 - Declare um caractere ASCII char_ascii = 'Z'; e um caractere unicode char_unicode = 'Ω';. Use std::mem::size_of_val(&char_ascii) e std::mem::size_of_val(&char_unicode) para imprimir o tamanho em bytes de cada um. O que você observa?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=acd43048cb353bfa61f91d7365acc8e1)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let char_ascii: char = 'Z';
    println!("{:?}", char_ascii);

    let char_unicode: char = 'Ω';
    println!("{:?}", char_unicode);

    println!("{:?}", std::mem::size_of_val(&char_ascii));
    println!("{:?}", std::mem::size_of_val(&char_unicode));
}
```
</details>

09 - Tente declarar uma variável char com mais de um caractere, por exemplo: let not_a_char: char = 'ab';. O que acontece ao tentar compilar?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=b99af6bc24264ae2d407a06cda9a6b08)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    // erro: deve ter apenas um caractere
    let not_a_char : char = 'ab';
    println!("{:?}", not_a_char);
}
```
</details>

10 - Declare uma variável arquivo_carregado e atribua *true*. Declare apresenta_erro e atribua *false*. Imprima ambas e em seguida, tente atribuir o inteiro 1 a uma variável booleana. O que o compilador Rust diz?

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=161a6b2bace3e1c68a191753f6d36ed8)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let arquivo_carregado: bool = true;
    println!("{:?}", arquivo_carregado);

    let apresenta_erro: bool = false;
    println!("{:?}", apresenta_erro);

    // Tipos incompatíveis, esperava-se `bool`, encontrado inteiro
    // let valor: bool = 1;
    // println!("{:?}", valor);
}
```
</details>

11 - Crie uma tupla registro que contenha um nome (&str), uma idade (u8), e uma nota de aprovação (f32). Exemplo: ("Maria", 22, 7.5). Imprima a tupla inteira.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a27d1e2e86a5c02a258dfc2720bb45ac)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let registro: (&str, u8, f32) = ("Maria", 22, 7.5);
    println!("{:#?}", registro);
}
```
</details>

12 - Crie uma tupla chamada *server_response* que contenha um código de *status* HTTP (u16) e uma mensagem de resposta (&str), como (404, *"Not Found"*). Imprima a tupla.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=90d02b310161c18de79d363f2a22cb7e)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let server_response: (u16, &str) = (404, "Not Found");
    println!("{:?}", server_response);
}
```
</details>

13 - Dada a tupla let produto_info = ("Laptop XPTO", 1250.99, 15); (nome, preço, quantidade em estoque), acesse e imprima o preço e a quantidade usando a indexação de tupla (ex: product_info.1).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=01fa6de60ad2dbc546bbd6b56515aff0)

<details>
<summary>Resposta</summary>

```rust
fn main() {    
    let produto_info: (&str, f32, u16) = ("Laptop XPTO", 1.250_000, 15);
    let (nome, preco, quantidade_estoque) = produto_info;

    println!(
        "Produto: {} \nQuantidade em Estoque: {}",
        produto_info.0, produto_info.2
    );    
}
```
</details>

14 - Dada a tupla let color_rgb = (255, 128, 0);, desestruture-a nas variáveis *red*, *green* e *blue*. Imprima cada variável separadamente.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1d5e4e4f745e9761ae5f508f8623fc1b)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let color_rgb: (u8, u8, u8) = (255, 128, 0);
    let (red, green, blue) = color_rgb;

    println!("Red: {} \nGreen: {} \nBlue: {}", red, green, blue);
}
```
</details>

15 - Declare uma tupla *api_result* com um booleano indicando sucesso, um u64 para um ID e uma string para uma mensagem. Ex: (true, 1234567890, String::from(*"Successful operation"*)). Imprima usando {:#?}.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d0e73bd37751172ffc26a518f8ce02a0)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let api_result: (bool, u64, String) = (true, 1234567890, String::from("Successful operation"));
    println!("{:#?}", api_result);
}
```
</details>

16 - Declare uma tupla let config = ("localhost", 8080);. Tente modificar o segundo elemento para 8081 (ex: config.1 = 8081;). O que acontece ao compilar? Agora, redeclare-a como let mut config = ("localhost", 8080); e tente a mesma modificação.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d9e75d648eceacf486e6ec446ac74680)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    // erro: 
    // let config: (&str, u16) = ("localhost", 8080);
    // config.1 = 8180;
    
    let mut config: (&str, u16) = ("localhost", 8080);
    println!("{:?}", config);

    config.1 = 8180;
    println!("{:?}", config);
}
```
</details>

17 - Declare uma tupla mutável *player_status* para armazenar nome (&str), *score* (i32) e vidas (u8). Inicialize com (*"Hero"*, 0, 3). Em seguida, modifique a pontuação para 1500 e as vidas para 2. Imprima a tupla atualizada.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=1055b59be9f51a685510763916bd06c5)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let player_status: (&str, i32, u8) = ("Hero", 0, 3);
    let (nome, mut score, vidas) = player_status;
    println!("Name: {nome}\nScore: {score}\nLives: {vidas}\n");
    
    score = 1500;
    println!("Name: {nome}\nScore: {score}\nLives: {vidas}");
}
```
</details>

18 - Crie uma tupla mutável let mut point = (10.0, 20.0);. Modifique o primeiro elemento para 15.5 e o segundo para 25.0 usando a sintaxe de acesso por índice. Imprima a tupla.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=c6a2ff5f58b690c5a472c583ef40f49d)

<details>
<summary>Resposta</summary>

```rust
fn main() {
    let mut point: (f32, f32) = (10., 20.);
    println!("{:#?}", point);

    point.0 = 15.5;
    point.1 = 25.;
    println!("{:#?}", point);
}
```
</details>

19 - Crie uma tupla mutável *file_details* contendo nome do arquivo (String), tamanho (u64) e se é editável (bool). Inicialize-a. Em seguida, modifique o nome do arquivo (anexando "_v2" ao nome original) e mude o *status* de editável. Imprima a tupla.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4aa72a46e7ea4f52e828af74395573ce)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let file_details: (String, u64, bool) = (String::from("test.txt"), 127, true);
    println!("{:#?}", file_details);

    let mut file_details_v2 = file_details;
    file_details_v2.0 = String::from("teste_v2.txt");
    file_details_v2.2 = false;

    println!("{:#?}", file_details_v2);
}
```
</details>

20 - Declare um array meses contendo os nomes dos três primeiros meses do ano como string *slices*. Imprima o nome do segundo mês (lembre-se da indexação baseada em zero).

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=26393a352228d5e79fd2d317aa890a16)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let meses: [&str; 3] = ["Janeiro", "Fevereiro", "Março"];

    println!("{:#?}\n", meses);
    println!("{:#?}", meses[1])
}
```
</details>

21 - Declare um array numeros de 6 elementos do tipo u32. Inicialize-o com os valores [1, 2, 4, 8, 16, 32]. Imprima o último elemento do array usando indexação.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=308cda5bbd20145c7e609b90d3be56d7)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let numeros: [u8; 6] = [1, 2, 4, 8, 16, 32];
    println!("{numeros:#?}\n");
    
    let numeros: [u8; 6] = [1, 2, 4, 8, 16, 32];
    println!("{:#?}", numeros[5]);
}
```
</details>

22 - Declare um array let *scores* = [100, 90, 80];. Tente modificar o segundo elemento para 95. O que acontece? Agora, declare-o como mut, faça a modificação e imprima.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=51f6763c194ff3e39be5e8a1bae04af0)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let scores = [100, 90, 80];
    println!("{:?}", scores);

    // scores[1] = 95;
    // println!("{:?}", scores);

    let mut scores = [10, 30, 60];
    println!("{:?}", scores);

    scores[1] = 0;
    println!("{:?}", scores);
}
```
</details>

23 - Declare um array mutável contador de 4 elementos do tipo u16, inicializado com [10, 25, 5, 30]. Modifique a contagem do primeiro item para 12 e do terceiro para 8. Imprima o array atualizado.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=a535592a4b7e3a8858732b7890f5f27e)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let mut contador: [u16; 4] = [10, 25, 5, 30];

    contador[0] = 12;
    contador[3] = 8;

    println!("{:?}", contador);
}
```
</details>

24 - Crie um array mutável servicos_ativos: [bool; 3] inicializado como [true, false, true]. Modifique o segundo serviço para *true* e o último para *false*. Imprima o array.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=4b380922973da309b12e0085d2798fa0)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let mut servicos_ativos:[bool; 3] = [true, false, true];
    println!("{:?}", servicos_ativos);

    servicos_ativos[1] = true;
    servicos_ativos[2] = false;
    println!("{:?}", servicos_ativos);
}
```
</details>

25 - Crie um array mutável pixel_colors: [[u8; 3]; 2] para representar dois pixels, cada um com componentes R, G, B. Inicialize-o como [[255, 0, 0], [0, 255, 0]] (um pixel vermelho, um verde). Modifique o primeiro pixel para ser azul ([0, 0, 255]) e o segundo para ser amarelo ([255, 255, 0]). Imprima o array de pixels.

[Playground!](https://play.rust-lang.org/?version=stable&mode=debug&edition=2024&gist=d4c64d7affe4fe5a1f01f576394ca5dd)

<details>
<summary>Resposta</summary>

```rust
fn main () {
    let mut pixel_colors: [[u8; 3]; 2] = [[255, 0, 0], [0, 255, 0]];
    println!("Vermelho: {:?}", pixel_colors[0]);
    println!("Verde: {:?}", pixel_colors[1]);

    // Red > Blue
    pixel_colors[0][0] = 0;
    pixel_colors[0][1] = 0;
    pixel_colors[0][2] = 255;

    // Green > Yellow
    pixel_colors[1][0] = 255;
    pixel_colors[1][1] = 255;
    pixel_colors[1][2] = 0;
    
    println!("Azul: {:?}", pixel_colors[0]);    
    println!("Amarelo: {:?}", pixel_colors[1]);
}
```
</details>
