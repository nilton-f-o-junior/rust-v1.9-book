# Trait - Example

```rust
trait PaymentMethod {
    fn process_payment(&self, value: f64) -> Result<String, String>;

    fn validate(&self) -> bool;

    fn fee(&self) -> f64;

    fn final_amount(&self, value: f64) -> f64 {
        value + (value * self.fee())
    }
}

struct CreditCard {
    number: String,
    card_holder: String,
    expiration_date: String,
    cvv: String,
}

impl PaymentMethod for CreditCard {
    fn process_payment(&self, value: f64) -> Result<String, String> {
        if !self.validate() {
            return Err(String::from("Invalid Card"));
        }

        let amount_with_fee = self.final_amount(value);
        Ok(format!(
            "Payment of R${:.2} processed on card ****{}",
            amount_with_fee,
            &self.number[self.number.len() - 4..],
        ))
    }

    fn validate(&self) -> bool {
        self.number.len() == 16
            && !self.card_holder.is_empty()
            && !self.expiration_date.is_empty()
            && self.cvv.len() == 3
    }

    fn fee(&self) -> f64 {
        0.029
    }
}

struct Pix {
    pix_key: String,
    key_type: String,
}

impl PaymentMethod for Pix {
    fn process_payment(&self, value: f64) -> Result<String, String> {
        if !self.validate() {
            return Err(String::from("Invalid Pix Key"));
        }

        Ok(format!(
            "Pix of R${:.2} sent to {} ({})",
            value, self.pix_key, self.key_type
        ))
    }

    fn validate(&self) -> bool {
        !self.pix_key.is_empty()
    }

    fn fee(&self) -> f64 {
        0.0
    }
}

struct PaymentSlip {
    barcode: String,
    expiration_date: String,
}

impl PaymentMethod for PaymentSlip {
    fn process_payment(&self, value: f64) -> Result<String, String> {
        if !self.validate() {
            return Err(String::from("Invalid Payment Slip"));
        }

        let amount_with_fee = self.final_amount(value);
        Ok(format!(
            "Payment slip generated for the amount of R${:.2}. Due date: {}",
            amount_with_fee, self.expiration_date
        ))
    }

    fn validate(&self) -> bool {
        self.barcode.len() == 47
    }

    fn fee(&self) -> f64 {
        2.50 / 100.0
    }
}

struct Order {
    id: u32,
    items: Vec<String>,
    total_value: f64,
}

impl Order {
    fn new_order(id: u32, items: Vec<String>, total_value: f64) -> Self {
        Order {
            id,
            items,
            total_value,
        }
    }

    fn complete_purchase(&self, pay_method: &impl PaymentMethod) {
        println!("\n --- Process Order ---");
        println!("Id: {:?}", self.id);
        println!("Items: {:?}", self.items);
        println!("Total Value: R${:.2}", self.total_value);

        match pay_method.process_payment(self.total_value) {
            Ok(message) => println!("{}", message),
            Err(error) => println!("{}", error),
        }
    }
}

fn main() {
    let order = Order::new_order(
        1004,
        vec![
            String::from("Bread"),
            String::from("Banana"),
            String::from("Coffe"),
            String::from("Milk"),
        ],
        144.00,
    );

    //
    let card = CreditCard {
        number: String::from("1234567891234567"),
        card_holder: String::from("Rodolf Pig"),
        expiration_date: String::from("08/32"),
        cvv: String::from("123"),
    };

    order.complete_purchase(&card);

    //
    let pix = Pix {
        pix_key: String::from("rodolfo_pig@hotmail.com"),
        key_type: String::from("email"),
    };

    order.complete_purchase(&pix);

    //
    let payment_slip = PaymentSlip {
        barcode: String::from("12345678912345678912345678912345678912345678912"),
        expiration_date: String::from("07/11/2025"),
    };

    order.complete_purchase(&payment_slip);

    // invalid
    println!("\n --- Process Invalid ---");
    let invalid_card = CreditCard {
        number: String::from("123"),
        card_holder: String::from("Alice"),
        expiration_date: String::from("04/28"),
        cvv: String::from("49"),
    };

    order.complete_purchase(&invalid_card);
}
```
