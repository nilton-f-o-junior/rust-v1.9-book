# Enum

Choose one option from several possible options (exclusive OR).

Example: the order is either Waiting OR In Transit OR Delivered OR Canceled - never both at the same time.

```rust
enum OrderStatus {
    Waiting,
    InTrasit { trackin_code: String },
    Delivered { date: String },
    Cancelled { reason: String },
}

fn checking_the_status(order: &OrderStatus) {
    
    match order {
        OrderStatus::Waiting => {
            println!("Awaiting Processing!");
        }

        OrderStatus::InTrasit { trackin_code } => {
            println!("In Trasit: {}", trackin_code);
        }

        OrderStatus::Delivered { date } => {
            println!("Delivered in: {}", date);
        }

        OrderStatus::Cancelled { reason } => {
            println!("Cancelled: {}", reason);
        }
    }
}

fn main() {
  
    let order = OrderStatus::InTrasit {
        trackin_code: String::from("BR2345678"),
    };

    checking_the_status(&order);
}
```
