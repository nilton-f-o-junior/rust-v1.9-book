# Enum - Exemplo

```rust
enum StatusDoPagamento {
    Pendente,
    Processando {
        metodo_processamento: String,
        valor: f64,
    },
    Aprovado {
        id_transacao: String,
        data: String,
    },
    Recusado {
        codigo_erro: String,
        motivo: String,
    },
    Estornado {
        valor: f64,
        data_estorno: String,
    },
}

fn verificar_pagamento(pagamento: &StatusDoPagamento) {
    match pagamento {
        StatusDoPagamento::Pendente => {
            println!("Aguardando confirmação do pagamento.");
        }

        StatusDoPagamento::Processando {
            metodo_processamento,
            valor,
        } => {
            println!("Processando pagamento por: {}", metodo_processamento);
            println!("Valor: R$ {:.2}", valor);
        }

        StatusDoPagamento::Aprovado {
            id_transacao,
            data,
        } => {
            println!("Pagamento aprovado!");
            println!("ID da Transação: {}", id_transacao);
            println!("Data: {}", data);
        }

        StatusDoPagamento::Recusado { codigo_erro, motivo } => {
            println!("Pagamento recusado!");
            println!("Código: {}", codigo_erro);
            println!("Motivo: {}", motivo);
        }

        StatusDoPagamento::Estornado { valor, data_estorno } => {
            println!("Pagamento Estornado!");
            println!("Valor estornado: R$ {:.2}", valor);
            println!("Data do estorno: {}", data_estorno);
        }
    }
}

fn main() {
    // Exemplo 1
    let pagamento1 = StatusDoPagamento::Pendente;
    verificar_pagamento(&pagamento1);
    println!();

    // Exemplo 2
    let pagamento2 = StatusDoPagamento::Processando {
        metodo_processamento: String::from("Cartão de Crédito"),
        valor: 150.50,
    };
    verificar_pagamento(&pagamento2);
    println!();

    // Exemplo 3
    let pagamento3 = StatusDoPagamento::Aprovado {
        id_transacao: String::from("TXN-224-987652"),
        data: String::from("06/11/2025 17:00"),
    };
    verificar_pagamento(&pagamento3);
    println!();

    // Exemplo 4
    let pagamento4 = StatusDoPagamento::Recusado {
        codigo_erro: String::from("ERRO-401"),
        motivo: String::from("Saldo insuficiente"),
    };
    verificar_pagamento(&pagamento4);
    println!();

    // Exemplo 5
    let pagamento5 = StatusDoPagamento::Estornado {
        valor: 150.50,
        data_estorno: String::from("07/11/2025 08:10"),
    };
    verificar_pagamento(&pagamento5);
    println!();
}
```
