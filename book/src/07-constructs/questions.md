# Question - Constructs

01 - Create a struct named Book with the following fields:

- title (String)
- author (String)
- pages (u32)

Then, create an instance of this struct and print its values.

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

> By adding #[derive(Debug)] above the Book {} struct, you can print the entire struct.

02 - Create a Car struct with the fields:

- brand (String)
- model (String)
- year (u16)

Use impl to create an associated function new() to facilitate the creation of new cars.

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

03 - Create two structs:

Address with:

- street (String)
- number (u16)
- city (String)

Client with:

- name (String)
- email (String)
- address (Address)

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

04 - Create a Counter struct with a single field:

- value (i32)

Implement three methods:

- new() - creates a counter starting at 0
- increment(&mut self) - adds 1 to the value
- get_value(&self) - returns the current value

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

05 - Create a Rectangle struct with the fields:

- width (f32)
- height (f32)

Implement a method named calculate_area(&self) that returns the rectangle's area. Create an instance, call the method, and print the result.

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

06 - Create a Tuple Struct named ColorRGB:

- Represent the colors Red, Green, and Blue (u8 types).
- Create an associated function black() that returns the color black (R=0, G=0, B=0).
- Create an instance of this color using the associated function and print its values.

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

07 - Create an Employee struct with the fields:

- name (String)
- salary (f64)

Implement a mutable method increase_salary(&mut self, percentage: f64) that increases the employee's salary by the provided percentage (e.g., 0.10 for 10%).

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

08 - Create a PaymentMethod enum representing different payment forms:

- Cash
- CreditCard (with number of installments)
- DebitCard
- Pix (with key)

Implement a function that receives this enum and returns a message describing the chosen payment.

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

09 - Create a Notification enum with the variants:

- Email (recipient and subject).
- SMS (number and message).
- Push (title and body).

Implement a send() method for each type that simulates sending by printing the relevant information.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
enum Notification {
    Email { recipient: String, message: String },
    SMS { number: String, message: String },
    Push { title: String, body: String },
}

impl Notification {
    fn send(&self) {
        match self {
            Notification::Email { recipient, message } => {
                println!("Email to: {}", recipient);
                println!("Subject: {}\n", message);
            }

            Notification::SMS { number, message } => {
                println!("SMS to: {}\n{}\n", number, message);
            }
            Notification::Push { title, body } => {
                println!("Title: {}\n{}\n", title, body);
            }
        }
    }
}

fn main() {
    let email = Notification::Email {
        recipient: String::from("e_mail@email.com"),
        message: String::from("Welcome to Rust!"),
    };

    let sms = Notification::SMS {
        number: String::from("8077777777"),
        message: String::from("Your code is: 6784"),
    };

    let noti_push = Notification::Push {
        title: String::from("New Payment"),
        body: String::from("You receive: R$ 10,00"),
    };

    email.send();
    sms.send();
    noti_push.send();
}
```
</details>

10 - Create a RequestState enum representing:

- Pending.
- InProgress (with progress percentage).
- Completed (with response data as String).
- Failed (with error code).

Implement the methods get_status() and is_finished() for this enum.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
enum RequestState {
    Pending,
    InProgress { progress_percent: u8 },
    Completed { data: String },
    Failed { code: u32 },
}

impl RequestState {
    fn get_status(&self) -> String {
        match self {
            RequestState::Pending => {
                format!("Pending!")
            }

            RequestState::InProgress { progress_percent } => {
                format!("In Progress: {}%", progress_percent)
            }

            RequestState::Completed { data } => {
                format!("{}", data)
            }

            RequestState::Failed { code } => {
                format!("Failed: {}", code)
            }
        }
    }

    fn is_finished(&self) -> bool {
        match self {
            RequestState::Pending { .. } | RequestState::InProgress { .. } => false,
            RequestState::Completed { .. } | RequestState::Failed { .. } => true,
        }
    }
}

fn main() {
    let pending = RequestState::Pending;
    let in_progress = RequestState::InProgress {
        progress_percent: 18,
    };
    let completed = RequestState::Completed {
        data: String::from("Completed!"),
    };
    let failed = RequestState::Failed { code: 404 };

    println!("Status: {}", pending.get_status());
    println!("Finished: {}\n", pending.is_finished());

    println!("Status: {}", in_progress.get_status());
    println!("Finished: {}\n", in_progress.is_finished());

    println!("Status: {}", completed.get_status());
    println!("Finished: {}\n", completed.is_finished());

    println!("Status: {}", failed.get_status());
    println!("Finished: {}", failed.is_finished());
}
```
</details>

11 - Create an OrderStatus enum representing the different states of a restaurant order:

- Received (with order number).
- InPreparation (with estimated time in minutes).
- ReadyForPickup (with ticket number).
- Delivered.
- Canceled (with reason as String).

Implement the methods can_cancel() which returns true only if the order has not yet been delivered, and time_remaining() which returns Option<u32> with the estimated time (only for orders in preparation).

[Playground!]()

<details>
<summary>Answers</summary>

```rust
enum OrderStatus {
    Received { order: u32 },
    InPreparation { minutes: u32 },
    ReadyForPickup { ticket: u32 },
    Delivered,
    Canceled { reason: String },
}

impl OrderStatus {
    fn can_cancel(&self) -> bool {
        match self {
            OrderStatus::Delivered => false,
            _ => true,
        }
    }

    fn time_remaining(&self) -> Option<u32> {
        match self {
            OrderStatus::InPreparation { minutes } => Some(*minutes),
            _ => None,
        }
    }

    fn status_description(&self) -> String {
        match self {
            OrderStatus::Received { order } => {
                format!("Order received - N: {}", order)
            }

            OrderStatus::InPreparation { minutes } => {
                format!("In preparation - Minutes: {}", minutes)
            }

            OrderStatus::ReadyForPickup { ticket } => {
                format!("Ready for pickup - Ticket: {}", ticket)
            }

            OrderStatus::Delivered => {
                format!("Delivered!")
            }

            OrderStatus::Canceled { reason } => {
                format!("Canceled - Reason: {}", reason)
            }
        }
    }
}

fn main() {
    let order_recived = OrderStatus::Received { order: 7895 };
    let order_prep = OrderStatus::InPreparation { minutes: 30 };
    let order_delivered = OrderStatus::Delivered;
    let order_pickup = OrderStatus::ReadyForPickup { ticket: 462 };
    let order_canceled = OrderStatus::Canceled {
        reason: String::from("The delivery took a long time!"),
    };
    let order_cancel = OrderStatus::Delivered;
    let order_remaining = OrderStatus::InPreparation { minutes: 110 };

    println!("{}", order_recived.status_description());
    println!("{}", order_prep.status_description());
    println!("{}", order_delivered.status_description());
    println!("{}", order_pickup.status_description());
    println!("{}", order_canceled.status_description());

    println!("{}", order_cancel.can_cancel());
    println!("{:?}", order_remaining.time_remaining());
    println!("{:?}", order_cancel.time_remaining());
}
```
</details>

12 - Create a trait named Shape that defines a method signature area(&self) -> f64. Then, create two structs:

- Rectangle with the fields width: f64 and height: f64.
- Circle with the field radius: f64.

Implement the Shape trait for both:

- For the rectangle, return width * height.
- For the circle, return PI * radius * radius.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
// use std::f64::consts::PI;
const PI: f64 = 3.14;

trait Shape {
    fn area(&self) -> f64;
}

struct Rectangle {
    width: f64,
    height: f64,
}

impl Shape for Rectangle {
      fn area(&self) -> f64 {
          self.width * self.height
      }
}

struct Circle {
    radius: f64,
}

impl Shape for Circle {
    fn area(&self) -> f64 {
        self.radius * self.radius * PI
    }
}

fn main() {
    let rectangle = Rectangle {
        width: 5.5,
        height: 3.2,
    };

    let circle = Circle { radius: 4.4 };

    println!("Rectangle: {:.2}", rectangle.area());
    println!("Circle: {:.2}", circle.area());
}
```
</details>

13 - Create a trait named Student with two required methods (no default implementation):

name(&self) -> String and greeting(&self) -> String.

- Create a UniversityStudent struct that implements the trait. The greeting method must return the fixed value "Olá, eu sou um estudante."
- Create a Foreigner struct that implements the trait. The greeting method must return the value "Hello, I am a student from abroad.", overriding the behavior of UniversityStudent.

[Playground!]()

<details>
<summary>Answers</summary>

```rust
trait Student {
    fn name(&self) -> String;
    fn greeting(&self) -> String;
}

struct UniversityStudent {
    name: String,
}

impl Student for UniversityStudent {
    fn name(&self) -> String {
        format!("Meu nome é: {}", self.name)
    }

    fn greeting(&self) -> String {
        format!("Olá, eu sou um estudante.")
    }
}

struct Foreigner {
    name: String,
}

impl Student for Foreigner {
    fn name(&self) -> String {
        format!("My name is {}", self.name)
    }

    fn greeting(&self) -> String {
        format!("Hello, I am a student from abroad.")
    }
}

fn main() {
    let university = UniversityStudent {
        name: String::from("Roberto!"),
    };

    let foreigner = Foreigner {
        name: String::from("Alice"),
    };

    println!("Name: {}", university.name());
    println!("{}\n", university.greeting());

    println!("Name: {}", foreigner.name());
    println!("{}", foreigner.greeting());
}
```
</details>

14 - Define a simple trait named Summarizable with a method summary(&self) -> String.

- Implement it for a struct Article. Then, write a generic function named notify that receives a parameter item.
- Use Trait Bounds to ensure that the item passed to the function implements the Summarizable trait. The function must print "New notification: [return value of summary]".

[Playground!]()

<details>
<summary>Answers</summary>

```rust
trait Summarizable {
    fn summary(&self) -> String;
}

struct Article {
    headline: String,
    author: String,
    content: String,
}

impl Summarizable for Article {
    fn summary(&self) -> String {
        format!("{} \n{}(by {})", self.headline, self.content, self.author)
    }
}

fn notify<T: Summarizable>(item: &T) {
    println!("New notification: {}", item.summary());
}

fn main() {
    let article = Article {
        headline: String::from("Trait Bound!"),
        author: String::from("The Developer"),
        content: String::from("A brief text."),
    };

    notify(&article);
}
```
</details>
