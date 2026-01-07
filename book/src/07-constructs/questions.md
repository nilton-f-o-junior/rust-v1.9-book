# Questões - Construtos

---

01 - Crie uma struct chamada Livro com os seguintes campos:

- titulo (String);
- autor (String);
- paginas (u32).

Em seguida, crie uma instância dessa struct e imprima seus valores.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
struct Livro {
    titulo: String,
    autor: String,
    paginas: u16,
}

fn main() {
    let livro = Livro {
        titulo: String::from("Overlord - O Rei Morto-vivo"),
        autor: String::from("Kugane Maruyama"),
        paginas: 272,
    };

    println!("Título: {}", livro.titulo);
    println!("Autor: {}", livro.autor);
    println!("Páginas: {}", livro.paginas);
}
```
</details>

> Adicionando `#[derive(Debug)]` acima da struct Livro {}, você pode imprimir a struct inteira.

02 - Crie uma struct Carro com os campos:

- marca (String);
- modelo (String);
- ano (u16).

Use impl para criar uma função associada novo() para facilitar a criação de novos carros.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
struct Carro {
    marca: String,
    modelo: String,
    ano: u16,
}

impl Carro {
    fn novo_carro(marca: String, modelo: String, ano: u16) -> Self {
        Carro { marca, modelo, ano }
    }
}

fn main() {
    let carro = Carro::novo_carro(String::from("Volkswagen"), String::from("Fusca"), 1959);

    println!("Marca: {:?}", carro.marca);
    println!("Modelo: {:?}", carro.modelo);
    println!("Ano: {:?}", carro.ano);
}
```
</details>

03 - Crie duas structs:

Endereco com:

- rua (String);
- numero (u16);
- cidade (String).

Cliente com:

- nome (String);
- email (String);
- endereco (Endereco).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
#[derive(Debug)]
struct Endereco {
    cidade: String,
    rua: String,
    numero: u16,
}

impl Endereco {
    fn novo_endereco(cidade: String, rua: String, numero: u16) -> Self {
        Self {
            cidade,
            rua,
            numero,
        }
    }
}

#[derive(Debug)]
struct Cliente {
    nome: String,
    email: String,
    endereco: Endereco,
}

impl Cliente {
    fn novo_cliente(nome: String, email: String, endereco: Endereco) -> Self {
        Self {
            nome,
            email,
            endereco,
        }
    }
}

fn main() {
    let cliente = Cliente {
        nome: String::from("Rodolfo Silva"),
        email: String::from("rodolfo_silva@email.com"),
        endereco: Endereco {
            cidade: String::from("Manaus"),
            rua: String::from("Rua das Flores"),
            numero: 654,
        },
    };

    println!("{:#?}", cliente);
}
```
</details>

04 - Crie uma struct Contador com um único campo:

- valor (i32)

Implemente três métodos:

- novo() - cria um contador começando em 0;
- incrementar(&mut self) - adiciona 1 ao valor;
- obter_valor(&self) - retorna o valor atual.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
struct Contador {
    valor: i32,
}

impl Contador {
    fn novo() -> Contador {
        Contador { valor: 0 }
    }

    fn incrementar(&mut self) {
        self.valor += 1;
    }

    fn obter_valor(&self) -> i32 {
        self.valor
    }
}

fn main() {
    let mut contador = Contador::novo();

    contador.incrementar();
    println!("{:?}", contador.obter_valor());

    contador.incrementar();
    println!("{:?}", contador.obter_valor());
}
```
</details>

05 - Crie uma struct Retangulo com os campos:

- largura (f32);
- altura (f32).

Implemente um método chamado calcular_area(&self) que retorna a área do retângulo. Crie uma instância, chame o método e imprima o resultado.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
#[derive(Debug)]
struct Retangulo {
    altura: f32,
    largura: f32,
}

impl Retangulo {
    fn novo(altura: f32, largura: f32) -> Self {
        Retangulo { altura, largura }
    }

    fn calcular_area(&self) -> f32 {
        self.altura * self.largura
    }
}

fn main() {
    let valor1 = Retangulo::novo(3.3, 5.7);
    let resultado = valor1.calcular_area();
    println!("{:#?}", resultado);

    // Ou
    // let valor2 = Retangulo::calcular_area(&Retangulo::novo(3.3, 5.7));
    // println!("{:#?}", valor2);
}
```
</details>

06 - Crie uma Struct Tupla chamada CorRGB:

- Represente as cores Vermelho, Verde e Azul (tipos u8);
- Crie uma função associada preto() que retorne a cor preta (R=0, G=0, B=0);
- Crie uma instância desta cor usando a função associada e imprima seus valores.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
#[derive(Debug)]
struct RGB(u8, u8, u8);

impl RGB {
    fn cor(r: u8, g: u8, b: u8) -> Self {
        RGB(r, g, b)
    }
}

fn main() {
    let preto = RGB::cor(0, 0, 0);
    println!("Preto: {:?}", preto);

    let branco = RGB::cor(255, 255, 255);
    println!("Branco: {:?}", branco);
}
```
</details>

<details>
<summary>Resposta</summary>

```rust
#[derive(Debug)]
struct RGB(u8, u8, u8);

impl RGB {
    fn cor(r: u8, g: u8, b: u8) -> Self {
        RGB(r, g, b)
    }

    fn obter_vermelho(&self) -> u8 {
        self.0
    }

    fn definir_vermelho(&mut self, novo_vermelho: u8) {
        self.0 = novo_vermelho;
    }

    fn obter_verde(&self) -> u8 {
        self.1
    }

    fn definir_verde(&mut self, novo_verde: u8) {
        self.1 = novo_verde;
    }

    fn obter_azul(&self) -> u8 {
        self.2
    }

    fn definir_azul(&mut self, novo_azul: u8) {
        self.2 = novo_azul;
    }
}

fn main() {
    let mut minha_cor = RGB::cor(0, 0, 0);
    println!("{:?}", minha_cor);

    let vermelho = minha_cor.obter_vermelho();
    let verde = minha_cor.obter_verde();
    let azul = minha_cor.obter_azul();
    println!("RGB({:?}, {:?}, {:?})", vermelho, verde, azul);

    my_color.definir_vermelho(255);
    my_color.definir_verde(255);
    my_color.definir_azul(255);

    println!("{:?}", minha_cor);
}
```
</details>

07 - Crie uma struct Funcionario com os campos:

- nome (String);
- salario (f64).

Implemente um método mutável aumentar_salario(&mut self, porcentagem: f64) que aumenta o salário do funcionário pela porcentagem fornecida (ex: 0.10 para 10%).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
#[derive(Debug)]
struct Funcionario {
    salario: f64,
}

impl Funcionario {
    fn inicializar_salario(salario: f64) -> Self {
        Self { salario }
    }

    fn aumentar_salario(&self, porcentagem: f64) -> f64 {
        (self.salario * porcentagem) + self.salario
    }
}

fn main() {
    let mut salario = Funcionario::inicializar_salario(1500.);
    println!("{:?}", salario);

    let salario_final = Funcionario::aumentar_salario(&mut salario, 0.1);
    let resultado = format!("{:.2}", salario_final);
    println!("{}", resultado);
}
```
</details>

08 - Crie um enum MetodoDePagamento representando diferentes formas de pagamento:

- Dinheiro;
- CartaoDeCredito (com número de parcelas);
- CartaoDeDebito;
- Pix (com chave).

Implemente uma função que receba este enum e retorne uma mensagem descrevendo o pagamento escolhido.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
enum MetodoDePagamento {
    Dinheiro,
    CartaoDeCredito { numero_parcelas: u8 },
    CartaoDeDebito,
    Pix { chave_pix: String },
}

impl MetodoDePagamento {
    fn detalhar_pagamento(&self) {
        match self {
            MetodoDePagamento::Dinheiro => {
                println!("Método: Dinheiro");
            }

            MetodoDePagamento::CartaoDeCredito {
                numero_parcelas,
            } => {
                println!(
                    "Método: Cartão de Crédito - Parcelas = {:?}",
                    numero_parcelas
                );
            }

            MetodoDePagamento::CartaoDeDebito => {
                println!("Método: Cartão de Débito");
            }

            MetodoDePagamento::Pix { chave_pix } => {
                println!("Método: Pix - Chave = {:?}", chave_pix);
            }
        }
    }
}

fn main() {
    let pagamento_dinheiro = MetodoDePagamento::Dinheiro;
    let pagamento_cartao_credito = MetodoDePagamento::CartaoDeCredito {
        numero_parcelas: 3,
    };
    let pagamento_cartao_debito = MetodoDePagamento::CartaoDeDebito;
    let pagamento_pix = MetodoDePagamento::Pix {
        chave_pix: String::from("123.123.123.07"),
    };

    pagamento_dinheiro.detalhar_pagamento();
    pagamento_cartao_credito.detalhar_pagamento();
    pagamento_cartao_debito.detalhar_pagamento();
    pagamento_pix.detalhar_pagamento();
}
```
</details>

09 - Crie um enum Notificacao com os variantes:

- Email (destinatario e mensagem);
- SMS (numero e mensagem);
- Push (titulo e corpo).

Implemente um método enviar() para cada tipo que simule o envio imprimindo a informação relevante.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
enum Notificacao {
    Email { destinatario: String, mensagem: String },
    SMS { numero: String, mensagem: String },
    Push { titulo: String, corpo: String },
}

impl Notificacao {
    fn enviar(&self) {
        match self {
            Notificacao::Email { destinatario, mensagem } => {
                println!("Email para: {}", destinatario);
                println!("Assunto: {}\n", mensagem);
            }

            Notificacao::SMS { numero, mensagem } => {
                println!("SMS para: {}\n{}\n", numero, mensagem);
            }
            Notificacao::Push { titulo, corpo } => {
                println!("Título: {}\n{}\n", titulo, corpo);
            }
        }
    }
}

fn main() {
    let email = Notificacao::Email {
        destinatario: String::from("e_mail@email.com"),
        mensagem: String::from("Bem-vindo ao Rust!"),
    };

    let sms = Notificacao::SMS {
        numero: String::from("8077777777"),
        mensagem: String::from("Seu código é: 6784"),
    };

    let noti_push = Notificacao::Push {
        titulo: String::from("Novo Pagamento"),
        corpo: String::from("Você recebeu: R$ 10,00"),
    };

    email.enviar();
    sms.enviar();
    noti_push.enviar();
}
```
</details>

10 - Crie um enum EstadoDaRequisicao representando:

- Pendente;
- EmProgresso (com porcentagem de progresso);
- Concluido (com dados de resposta como String);
- Falhou (com código de erro).

Implemente os métodos obter_status() e esta_finalizado() para este enum.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
enum EstadoDaRequisicao {
    Pendente,
    EmProgresso { porcentagem_progresso: u8 },
    Concluido { dados: String },
    Falhou { codigo: u32 },
}

impl EstadoDaRequisicao {
    fn obter_status(&self) -> String {
        match self {
            EstadoDaRequisicao::Pendente => {
                format!("Pendente!")
            }

            EstadoDaRequisicao::EmProgresso { porcentagem_progresso } => {
                format!("Em Progresso: {}%", porcentagem_progresso)
            }

            EstadoDaRequisicao::Concluido { dados } => {
                format!("{}", dados)
            }

            EstadoDaRequisicao::Falhou { codigo } => {
                format!("Falhou: {}", codigo)
            }
        }
    }

    fn esta_finalizado(&self) -> bool {
        match self {
            EstadoDaRequisicao::Pendente { .. } | EstadoDaRequisicao::EmProgresso { .. } => false,
            EstadoDaRequisicao::Concluido { .. } | EstadoDaRequisicao::Falhou { .. } => true,
        }
    }
}

fn main() {
    let pendente = EstadoDaRequisicao::Pendente;
    let em_progresso = EstadoDaRequisicao::EmProgresso {
        porcentagem_progresso: 18,
    };
    let concluido = EstadoDaRequisicao::Concluido {
        dados: String::from("Concluído!"),
    };
    let falhou = EstadoDaRequisicao::Falhou { codigo: 404 };

    println!("Status: {}", pendente.obter_status());
    println!("Finalizado: {}\n", pendente.esta_finalizado());

    println!("Status: {}", em_progresso.obter_status());
    println!("Finalizado: {}\n", em_progresso.esta_finalizado());

    println!("Status: {}", concluido.obter_status());
    println!("Finalizado: {}\n", concluido.esta_finalizado());

    println!("Status: {}", falhou.obter_status());
    println!("Finalizado: {}", falhou.esta_finalizado());
}
```
</details>

11 - Crie um enum StatusDoPedido representando os diferentes estados de um pedido de restaurante:

- Recebido (com número do pedido);
- EmPreparacao (com tempo estimado em minutos);
- ProntoParaRetirada (com número da senha);
- Entregue;
- Cancelado (com motivo como String).

Implemente os métodos pode_cancelar() que retorna true apenas se o pedido ainda não tiver sido entregue, e tempo_restante() que retorna Option(u32) com o tempo estimado (apenas para pedidos em preparação).

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
enum StatusDoPedido {
    Recebido { pedido: u32 },
    EmPreparacao { minutos: u32 },
    ProntoParaRetirada { senha: u32 },
    Entregue,
    Cancelado { motivo: String },
}

impl StatusDoPedido {
    fn pode_cancelar(&self) -> bool {
        match self {
            StatusDoPedido::Entregue => false,
            _ => true,
        }
    }

    fn tempo_restante(&self) -> Option<u32> {
        match self {
            StatusDoPedido::EmPreparacao { minutos } => Some(*minutos),
            _ => None,
        }
    }

    fn descricao_status(&self) -> String {
        match self {
            StatusDoPedido::Recebido { pedido } => {
                format!("Pedido recebido - N°: {}", pedido)
            }

            StatusDoPedido::EmPreparacao { minutos } => {
                format!("Em preparação - Minutos: {}", minutos)
            }

            StatusDoPedido::ProntoParaRetirada { senha } => {
                format!("Pronto para retirada - Senha: {}", senha)
            }

            StatusDoPedido::Entregue => {
                format!("Entregue!")
            }

            StatusDoPedido::Cancelado { motivo } => {
                format!("Cancelado - Motivo: {}", motivo)
            }
        }
    }
}

fn main() {
    let pedido_recebido = StatusDoPedido::Recebido { pedido: 7895 };
    let pedido_prep = StatusDoPedido::EmPreparacao { minutos: 30 };
    let pedido_entregue = StatusDoPedido::Entregue;
    let pedido_retirada = StatusDoPedido::ProntoParaRetirada { senha: 462 };
    let pedido_cancelado = StatusDoPedido::Cancelado {
        motivo: String::from("A entrega demorou muito!"),
    };
    let pedido_cancela = StatusDoPedido::Entregue;
    let pedido_restante = StatusDoPedido::EmPreparacao { minutos: 110 };

    println!("{}", pedido_recebido.descricao_status());
    println!("{}", pedido_prep.descricao_status());
    println!("{}", pedido_entregue.descricao_status());
    println!("{}", pedido_retirada.descricao_status());
    println!("{}", pedido_cancelado.descricao_status());

    println!("{}", pedido_cancela.pode_cancelar());
    println!("{:?}", pedido_restante.tempo_restante());
    println!("{:?}", pedido_cancela.tempo_restante());
}
```
</details>

12 - Crie um trait chamado Forma que defina uma assinatura de método area(&self) -> f64. Em seguida, crie duas structs:

- Retangulo com os campos largura: f64 e altura: f64;
- Circulo com o campo raio: f64.

Implemente o trait Forma para ambos:

- Para o retângulo, retorne largura * altura;
- Para o círculo, retorne PI * raio * raio.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
// use std::f64::consts::PI;
const PI: f64 = 3.14;

trait Forma {
    fn area(&self) -> f64;
}

struct Retangulo {
    largura: f64,
    altura: f64,
}

impl Forma for Retangulo {
      fn area(&self) -> f64 {
          self.largura * self.altura
      }
}

struct Circulo {
    raio: f64,
}

impl Forma for Circulo {
    fn area(&self) -> f64 {
        self.raio * self.raio * PI
    }
}

fn main() {
    let retangulo = Retangulo {
        largura: 5.5,
        altura: 3.2,
    };

    let circulo = Circulo { raio: 4.4 };

    println!("Retângulo: {:.2}", retangulo.area());
    println!("Círculo: {:.2}", circulo.area());
}
```
</details>

13 - Crie um trait chamado Estudante com dois métodos obrigatórios (sem implementação padrão):

nome(&self) -> String e saudacao(&self) -> String.

- Crie uma struct EstudanteUniversitario que implemente o trait. O método saudacao deve retornar o valor fixo "Olá, eu sou um estudante."
- Crie uma struct Estrangeiro que implemente o trait. O método saudacao deve retornar o valor "Hello, I am a student from abroad.", sobrescrevendo o comportamento de EstudanteUniversitario.

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
trait Estudante {
    fn nome(&self) -> String;
    fn saudacao(&self) -> String;
}

struct EstudanteUniversitario {
    nome: String,
}

impl Estudante for EstudanteUniversitario {
    fn nome(&self) -> String {
        format!("Meu nome é: {}", self.nome)
    }

    fn saudacao(&self) -> String {
        format!("Olá, eu sou um estudante.")
    }
}

struct Estrangeiro {
    nome: String,
}

impl Estudante for Estrangeiro {
    fn nome(&self) -> String {
        format!("My name is {}", self.nome)
    }

    fn saudacao(&self) -> String {
        format!("Hello, I am a student from abroad.")
    }
}

fn main() {
    let universitario = EstudanteUniversitario {
        nome: String::from("Roberto!"),
    };

    let estrangeiro = Estrangeiro {
        nome: String::from("Alice"),
    };

    println!("Nome: {}", universitario.nome());
    println!("{}\n", universitario.saudacao());

    println!("Nome: {}", estrangeiro.nome());
    println!("{}", estrangeiro.saudacao());
}
```
</details>

14 - Defina um trait simples chamado Sumarizavel com um método resumo(&self) -> String.

- Implemente-o para uma struct Artigo. Em seguida, escreva uma função genérica chamada notificar que recebe um parâmetro item;
- Use Trait Bounds (Limites de Trait) para garantir que o item passado para a função implemente o trait Sumarizavel. A função deve imprimir "Nova notificação: [valor de retorno de resumo]".

[Playground!]()

<details>
<summary>Resposta</summary>

```rust
trait Sumarizavel {
    fn resumo(&self) -> String;
}

struct Artigo {
    manchete: String,
    autor: String,
    conteudo: String,
}

impl Sumarizavel for Artigo {
    fn resumo(&self) -> String {
        format!("{} \n{}(por {})", self.manchete, self.conteudo, self.autor)
    }
}

fn notificar<T: Sumarizavel>(item: &T) {
    println!("Nova notificação: {}", item.resumo());
}

fn main() {
    let artigo = Artigo {
        manchete: String::from("Trait Bound! (Limite de Trait!)"),
        autor: String::from("O Desenvolvedor"),
        conteudo: String::from("Um breve texto."),
    };

    notificar(&artigo);
}
```
</details>
