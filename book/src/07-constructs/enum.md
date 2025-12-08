# Enum

Escolhe uma opção dentre várias opções possíveis (OU exclusivo).

Exemplo: O pedido está ou em Espera, ou Em Trânsito, ou Entregue, ou Cancelado, mas nunca em mais de um estado ao mesmo tempo.

```rust
enum StatusDoPedido {
    Esperando,
    EmTransito { codigo_rastreio: String },
    Entregue { data: String },
    Cancelado { motivo: String },
}

fn verificar_status(pedido: &StatusDoPedido) {
    
    match pedido {
        StatusDoPedido::Esperando => {
            println!("Aguardando Processamento!");
        }

        StatusDoPedido::EmTransito { codigo_rastreio } => {
            println!("Em Trânsito: {}", codigo_rastreio);
        }

        StatusDoPedido::Entregue { data } => {
            println!("Entregue em: {}", data);
        }

        StatusDoPedido::Cancelado { motivo } => {
            println!("Cancelado: {}", motivo);
        }
    }
}

fn main() {
  
    let pedido = StatusDoPedido::EmTransito {
        codigo_rastreio: String::from("BR2345678"),
    };

    verificar_status(&pedido);
}
```
