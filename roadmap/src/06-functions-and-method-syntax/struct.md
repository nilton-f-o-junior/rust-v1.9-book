# Struct

A data structure that groups related values.

`named fields`

```rust
struct Person {
    name: String,
    age: u8,
}

fn main() {
    let client = Person {
        name: String::from("Roberto"),
        age: 40,
    };

    println!("Name: {:?} \nAge: {:?}", client.name, client.age);
}
```

`nested structure`

```rust
struct Address {
    city: String,
    postcode: String,
    number: u16,
}

struct Person {
    name: String,
    age: u8,
    address: Address,
}

fn main() {
    let client = Person {
        name: String::from("Roberto"),
        age: 40,
        address: Address {
            city: String::from("Bahia"),
            postcode: String::from("000-000-00"),
            number: 244,
        },
    };

    println!(
        "Client Data: \nName:{} \nAge:{} \nCity:{} \nPost Code{} \nNumber:{}",
        client.name,
        client.age,
        client.address.city,
        client.address.postcode,
        client.address.number
    );
}
```

`struct tuple`

```rust
struct Color(u8, u8, u8);

fn main() {
    let color_rgb_red = Color(250, 128, 114);
    let color_rgb_blue = Color(135, 206, 235);

    println!(
        "Color Red: ({},{},{}) \nColor Blue: ({},{},{})",
        color_rgb_red.0,
        color_rgb_red.1,
        color_rgb_red.2,
        color_rgb_blue.0,
        color_rgb_blue.1,
        color_rgb_blue.2,
    )
}
```
