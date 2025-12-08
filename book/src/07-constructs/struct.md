# Struct

Uma estrutura de dados que agrupa valores relacionados.

`named fields (campos nomeados)`

```rust
struct Pessoa {
    nome: String,
    idade: u8,
}

fn main() {
    let cliente = Pessoa {
        nome: String::from("Charlie Brown"),
        idade: 8,
    };

    println!("Nome: {}\nIdade: {}", cliente.nome, cliente.idade);
}
```

`nested structure (estrutura aninhada)`

```rust
struct Endereco {
    cidade: String,
    cep: String,
    numero: u16,
}

struct Pessoa {
    nome: String,
    idade: u8,
    endereco: Endereco,
}

fn main() {
    let cliente = Pessoa {
        nome: String::from("Roger"),
        idade: 40,
        endereco: Endereco {
            cidade: String::from("Bahia"),
            cep: String::from("000-000-00"),
            numero: 244,
        },
    };

    println!(
        "Dados do Cliente: \nNome: {}\nIdade: {}\nCidade: {}\nCEP: {}\nNúmero: {}",
        cliente.nome,
        cliente.idade,
        cliente.endereco.cidade,
        cliente.endereco.cep,
        cliente.endereco.numero
    );
}
```

`struct tupla`

```rust
struct Cor(u8, u8, u8);

fn main() {
    let cor_rgb_vermelho = Cor(250, 128, 114);
    let cor_rgb_azul = Cor(135, 206, 235);

    println!(
        "Cor Vermelha: ({},{},{}) \nCor Azul: ({},{},{})",
        cor_rgb_vermelho.0,
        cor_rgb_vermelho.1,
        cor_rgb_vermelho.2,
        cor_rgb_azul.0,
        cor_rgb_azul.1,
        cor_rgb_azul.2,
    )
}
```
