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



04 - Crie uma struct Contador com um único campo:

valor (i32)

Implemente três métodos:

new() - cria um contador começando em 0
incrementar(&mut self) - adiciona 1 ao valor
obter_valor(&self) - retorna o valor atual

05 - Crie duas structs:

Endereco com:

rua (String)
numero (u32)
cidade (String)


Cliente com:

nome (String)
email (String)
endereco (Endereco)

Crie uma instância de Cliente que contenha um Endereco completo e imprima todas as informações.
