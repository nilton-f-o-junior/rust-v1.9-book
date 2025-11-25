# Enum - Example

```rust
enum PaymentStatus {
    Pending,
    Procesing {
        processing_method: String,
        value: f64,
    },
    Approved {
        transaction_id: String,
        date: String,
    },
    Declined {
        error_code: String,
        reason: String,
    },
    Refunded {
        value: f64,
        refund_date: String,
    },
}

fn verify_payment(payment: &PaymentStatus) {
    match payment {
        PaymentStatus::Pending => {
            println!("Awaiting payment confirmation.");
        }

        PaymentStatus::Procesing {
            processing_method,
            value,
        } => {
            println!("Processing payment by: {}", processing_method);
            println!("Value: R$ {:.2}", value);
        }

        PaymentStatus::Approved {
            transaction_id,
            date,
        } => {
            println!("Payment approved!");
            println!("Transaction ID: {}", transaction_id);
            println!("Date: {}", date);
        }

        PaymentStatus::Declined { error_code, reason } => {
            println!("Payment refused!");
            println!("Code: {}", error_code);
            println!("Reason: {}", reason);
        }

        PaymentStatus::Refunded { value, refund_date } => {
            println!("Payment Refunded!");
            println!("Amount reversed: R$ {:.2}", value);
            println!("Date of reversal: {}", refund_date);
        }
    }
}

fn main() {
    // Example 1
    let payment1 = PaymentStatus::Pending;
    verify_payment(&payment1);
    println!();

    // Example2
    let payment2 = PaymentStatus::Procesing {
        processing_method: String::from("Credit Card"),
        value: 150.50,
    };
    verify_payment(&payment2);
    println!();

    // Example3
    let payment3 = PaymentStatus::Approved {
        transaction_id: String::from("TXN-224-987652"),
        date: String::from("06/11/2025 17:00"),
    };
    verify_payment(&payment3);
    println!();

    // Example4
    let payment4 = PaymentStatus::Declined {
        error_code: String::from("ERR-401"),
        reason: String::from("Insufficient balance"),
    };
    verify_payment(&payment4);
    println!();

    // Example5
    let payment5 = PaymentStatus::Refunded {
        value: 150.50,
        refund_date: String::from("07/11/2025 08:10"),
    };
    verify_payment(&payment5);
    println!();
}
```
