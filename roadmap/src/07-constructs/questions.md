# Question - Constructs

01 - Crie uma struct chamada Livro com os seguintes campos:

- titulo (String)
- autor (String)
- paginas (u32)

Depois, crie uma instância dessa struct e imprima seus valores.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
struct Book {
    title: String,
    author: String,
    pages: u16,
}

fn main() {
    let book = Book {
        title: String::from("Overlord - O Rei Morto-vivo"),
        author: String::from("Kugane Maruyama"),
        pages: 272,
    };

    println!("Title: {}", book.title);
    println!("Author: {}", book.author);
    println!("Pages: {}", book.pages);
}
```
</details>

> Ao adicionar `#[derive(Debug)]` acima do struct Book {}, voce pode imprimir a struct inteira.

02 - Crie uma struct Carro com os campos:

marca (String)
modelo (String)
ano (u16)

Use impl para criar uma função associada new() que facilite a criação de novos carros.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
struct Car {
    brand: String,
    model: String,
    age: u16,
}

impl Car {
    fn new_car(brand: String, model: String, age: u16) -> Self {
        Car { brand, model, age }
    }
}

fn main() {
    let car = Car::new_car(String::from("Volkswagen"), String::from("Fusca"), 1959);

    println!("Brand: {:?}", car.brand);
    println!("Model: {:?}", car.model);
    println!("Age: {:?}", car.age);
}
```
</details>

03 - Crie uma struct Conta com os campos:

titular (String)
saldo (f64)

Implemente um método verificar_saldo() que retorna o saldo atual.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
struct BankAccount {
    holder: String,
    balance: f64,
}

impl BankAccount {
    fn new_user(holder: String, balance: f64) -> Self {
        BankAccount { holder, balance }
    }

    fn check_balance(&self) -> String {
        format!("R$: {:.2}", self.balance)
    }
}

fn main() {
    let new_user = BankAccount::new_user(String::from("Rodolfo Silva"), 199.598);

    println!("user: {:?}", new_user.holder);
    println!("Balance: {:?}", new_user.check_balance());
}
```
</details>

04 - Crie duas structs:

Endereco com:

rua (String)
numero (u16)
cidade (String)

Cliente com:

nome (String)
email (String)
endereco (Endereco)

[Playground!]()

<details>
<summary>Answers</summary>

```rust
#[derive(Debug)]
struct Address {
    city: String,
    street: String,
    number: u16,
}

impl Address {
    fn new_address(city: String, street: String, number: u16) -> Self {
        Self {
            city,
            street,
            number,
        }
    }
}

#[derive(Debug)]
struct User {
    name: String,
    email: String,
    address: Address,
}

impl User {
    fn new_user(name: String, email: String, address: Address) -> Self {
        Self {
            name,
            email,
            address,
        }
    }
}

fn main() {
    let client = User {
        name: String::from("Rodolfo Silva"),
        email: String::from("rodolfo_silva@email.com"),
        address: Address {
            city: String::from("Rodolfo Silva"),
            street: String::from("Manaus"),
            number: 654,
        },
    };

    println!("{:#?}", client);
}
```
</details>

Crie uma instância de Cliente que contenha um Endereco completo e imprima todas as informações.

05 - Crie uma struct Contador com um único campo:

valor (i32)

Implemente três métodos:

new() - cria um contador começando em 0
incrementar(&mut self) - adiciona 1 ao valor
obter_valor(&self) - retorna o valor atual

[Playground!]()

<details>
<summary>Answers</summary>

```rust
struct Counter {
    value: i32,
}

impl Counter {
    fn counter() -> Counter {
        Counter { value: 0 }
    }

    fn increment_counter(&mut self) {
        self.value += 1;
    }

    fn print_value(&self) -> i32 {
        self.value
    }
}

fn main() {
    let mut value = Counter::counter();

    value.increment_counter();
    println!("{:?}", value.print_value());

    value.increment_counter();
    println!("{:?}", value.print_value());
}
```
</details>

06 - Crie uma struct Retangulo com os campos:

largura (f32)
altura (f32)

Implemente um método chamado calcular_area(&self) que retorna a área do retângulo. Crie uma instância, chame o método e imprima o resultado.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
#[derive(Debug)]
struct Rectangle {
    height: f32,
    width: f32,
}

impl Rectangle {
    fn rectangle(height: f32, width: f32) -> Self {
        Rectangle { height, width }
    }

    fn calculate_area(&self) -> f32 {
        self.height * self.width
    }
}

fn main() {
    let value1 = Rectangle::rectangle(3.3, 5.7);
    let result = value1.calculate_area();
    println!("{:#?}", result);

    // Or
    // let value2 = Rectangle::calculate_area(&Rectangle::rectangle(3.3, 5.7));
    // println!("{:#?}", value2);
}
```
</details>

07 - Crie uma struct Configuracao com os campos:

timeout (u32)
ativo (bool)

Use um bloco impl para criar uma função associada chamada default() que retorne uma nova Configuracao com valores padrão: timeout: 3000 e ativo: true.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
struct Settings {
    timeout: u32,
    active: bool,
}

impl Settings {
    fn init(timeout: u32, active: bool) -> Self {
        Settings { timeout, active }
    }

    fn default() -> Self {
        Settings {
            timeout: 3000,
            active: true,
        }
    }
}

fn main() {
    let result = Settings::init(100, false);
    println!(
        "Timeout: {:?}\nActive: {:?}\n",
        result.timeout, result.active
    );

    let value_end = Settings::default();
    println!(
        "Timeout: {:?}\nActive: {:?}",
        value_end.timeout, value_end.active
    );
}
```
</details>

08 - Crie uma Struct de Tupla chamada CorRGB:
Represente as cores Vermelho, Verde e Azul (tipos u8).

Crie uma função associada preto() que retorne a cor preta (R=0, G=0, B=0). Crie uma instância dessa cor usando a função associada e imprima seus valores.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
#[derive(Debug)]
struct RGB(u8, u8, u8);

impl RGB {
    fn color(r: u8, g: u8, b: u8) -> Self {
        RGB(r, g, b)
    }
}

fn main() {
    let black = RGB::color(0, 0, 0);
    println!("Black: {:?}", black);

    let white = RGB::color(255, 255, 255);
    println!("Black: {:?}", white);
}
```
</details>

<details>
<summary>Answers</summary>

```rust
#[derive(Debug)]
struct RGB(u8, u8, u8);

impl RGB {
    fn color(r: u8, g: u8, b: u8) -> Self {
        RGB(r, g, b)
    }

    fn get_red(&self) -> u8 {
        self.0
    }

    fn set_red(&mut self, new_red: u8) {
        self.0 = new_red;
    }

    fn get_green(&self) -> u8 {
        self.1
    }

    fn set_green(&mut self, new_green: u8) {
        self.1 = new_green;
    }

    fn get_blue(&self) -> u8 {
        self.2
    }

    fn set_blue(&mut self, new_blue: u8) {
        self.2 = new_blue;
    }
}

fn main() {
    let mut my_color = RGB::color(0, 0, 0);
    println!("{:?}", my_color);

    let red = my_color.get_red();
    let green = my_color.get_green();
    let blue = my_color.get_blue();
    println!("RGB({:?}, {:?}, {:?})", red, green, blue);

    my_color.set_red(255);
    my_color.set_green(255);
    my_color.set_blue(255);

    println!("{:?}", my_color);
}
```
</details>

09 - Crie uma struct Funcionario com os campos:
nome (String)

salario (f64)

Implemente um método mutável aumentar_salario(&mut self, percentual: f64) que aumente o salario do funcionário pelo percentual fornecido (ex: 0.10 para 10%).

[Playground!]()

<details>
<summary>Answers</summary>

```rust
#[derive(Debug)]
struct Employee {
    salary: f64,
}

impl Employee {
    fn salary_init(salary: f64) -> Self {
        Self { salary }
    }

    fn salary_increase(&self, percent: f64) -> f64 {
        (self.salary * percent) + self.salary
    }
}

fn main() {
    let mut salary = Employee::salary_init(1500.);
    println!("{:?}", salary);

    let salary_end = Employee::salary_increase(&mut salary, 0.1);
    let result = format!("{:.2}", salary_end);
    println!("{}", result);
}
```
</details>

Crie um enum FormaPagamento que represente diferentes formas de pagamento: Dinheiro, CartaoCredito (com número de parcelas), CartaoDebito, e Pix (com chave). Implemente uma função que receba esse enum e retorne uma mensagem descrevendo o pagamento escolhido.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
enum PaymentMethod {
    Cash,
    CreditCard { number_installments: u8 },
    DebitCard,
    Pix { pix_key: String },
}

impl PaymentMethod {
    fn payment_impl(&self) {
        match self {
            PaymentMethod::Cash => {
                println!("Method: Cash");
            }

            PaymentMethod::CreditCard {
                number_installments,
            } => {
                println!(
                    "Method: Credit Card - Installments = {:?}",
                    number_installments
                );
            }

            PaymentMethod::DebitCard => {
                println!("Method: Debit Card");
            }

            PaymentMethod::Pix { pix_key } => {
                println!("Method: Pix - Key = {:?}", pix_key);
            }
        }
    }
}

fn main() {
    let cash_payment = PaymentMethod::Cash;
    let creditcard_payment = PaymentMethod::CreditCard {
        number_installments: 3,
    };
    let debitcard_payment = PaymentMethod::DebitCard;
    let pix_payment = PaymentMethod::Pix {
        pix_key: String::from("123.123.123.07"),
    };

    cash_payment.payment_impl();
    creditcard_payment.payment_impl();
    debitcard_payment.payment_impl();
    pix_payment.payment_impl();
}
```
</details>

Crie um enum ResultadoOperacao que pode ser: Sucesso (contendo um f64), ErroComDescricao (contendo uma String), ou ErroDesconhecido. Implemente uma função que tente dividir dois números e retorne esse enum. Use pattern matching para exibir o resultado apropriadamente.


Crie um enum Notificacao com as variantes: Email (destinatário e assunto), SMS (número e mensagem), e Push (título e corpo). Implemente um método enviar() para cada tipo que simule o envio imprimindo as informações relevantes.


Crie um enum EstadoRequisicao representando: Pendente, EmAndamento (com porcentagem de progresso), Concluida (com dados de resposta como String), e Falhou (com código de erro). Implemente métodos esta_finalizada() e obter_status() para esse enum.


Crie um enum StatusPedido representando os diferentes estados de um pedido em um restaurante: Recebido (com número do pedido), EmPreparo (com tempo estimado em minutos), ProntoParaRetirada (com número da senha), Entregue, e Cancelado (com motivo da String). Implemente os métodos pode_cancelar() que retorna true apenas se o pedido ainda não foi entregue, e tempo_restante() que retorna Option<u32> com o tempo estimado (apenas para pedidos em preparo).
