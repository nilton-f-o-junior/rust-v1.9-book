# Trait - Exemplo

```rust
trait MetodoDePagamento {
    fn processar_pagamento(&self, valor: f64) -> Result<String, String>;

    fn validar(&self) -> bool;

    fn taxa(&self) -> f64;

    fn valor_final(&self, valor: f64) -> f64 {
        valor + (valor * self.taxa())
    }
}

struct CartaoDeCredito {
    numero: String,
    portador_cartao: String,
    data_validade: String,
    cvv: String,
}

impl MetodoDePagamento for CartaoDeCredito {
    fn processar_pagamento(&self, valor: f64) -> Result<String, String> {
        if !self.validar() {
            return Err(String::from("Cartão Inválido"));
        }

        let valor_com_taxa = self.valor_final(valor);
        Ok(format!(
            "Pagamento de R${:.2} processado no cartão ****{}",
            valor_com_taxa,
            &self.numero[self.numero.len() - 4..],
        ))
    }

    fn validar(&self) -> bool {
        self.numero.len() == 16
            && !self.portador_cartao.is_empty()
            && !self.data_validade.is_empty()
            && self.cvv.len() == 3
    }

    fn taxa(&self) -> f64 {
        0.029
    }
}

struct Pix {
    chave_pix: String,
    tipo_chave: String,
}

impl MetodoDePagamento for Pix {
    fn processar_pagamento(&self, valor: f64) -> Result<String, String> {
        if !self.validar() {
            return Err(String::from("Chave Pix Inválida"));
        }

        Ok(format!(
            "Pix de R${:.2} enviado para {} ({})",
            valor, self.chave_pix, self.tipo_chave
        ))
    }

    fn validar(&self) -> bool {
        !self.chave_pix.is_empty()
    }

    fn taxa(&self) -> f64 {
        0.0
    }
}

struct Boleto {
    codigo_barras: String,
    data_vencimento: String,
}

impl MetodoDePagamento for Boleto {
    fn processar_pagamento(&self, valor: f64) -> Result<String, String> {
        if !self.validar() {
            return Err(String::from("Boleto Inválido"));
        }

        let valor_com_taxa = self.valor_final(valor);
        Ok(format!(
            "Boleto gerado para o valor de R${:.2}. Vencimento: {}",
            valor_com_taxa, self.data_vencimento
        ))
    }

    fn validar(&self) -> bool {
        self.codigo_barras.len() == 47
    }

    fn taxa(&self) -> f64 {
        2.50 / 100.0
    }
}

struct Pedido {
    id: u32,
    itens: Vec<String>,
    valor_total: f64,
}

impl Pedido {
    fn novo_pedido(id: u32, itens: Vec<String>, valor_total: f64) -> Self {
        Pedido {
            id,
            itens,
            valor_total,
        }
    }

    fn finalizar_compra(&self, metodo_pagamento: &impl MetodoDePagamento) {
        println!("\n --- Processar Pedido ---");
        println!("Id: {:?}", self.id);
        println!("Itens: {:?}", self.itens);
        println!("Valor Total: R${:.2}", self.valor_total);

        match metodo_pagamento.processar_pagamento(self.valor_total) {
            Ok(mensagem) => println!("{}", mensagem),
            Err(erro) => println!("{}", erro),
        }
    }
}

fn main() {
    let pedido = Pedido::novo_pedido(
        1004,
        vec![
            String::from("Pão"),
            String::from("Banana"),
            String::from("Café"),
            String::from("Leite"),
        ],
        144.00,
    );

    let cartao = CartaoDeCredito {
        numero: String::from("1234567891234567"),
        portador_cartao: String::from("Rodolfo Porco"),
        data_validade: String::from("08/32"),
        cvv: String::from("123"),
    };

    pedido.finalizar_compra(&cartao);

    let pix = Pix {
        chave_pix: String::from("rodolfo_pig@hotmail.com"),
        tipo_chave: String::from("email"),
    };

    pedido.finalizar_compra(&pix);

    let boleto = Boleto {
        codigo_barras: String::from("12345678912345678912345678912345678912345678912"),
        data_vencimento: String::from("07/11/2025"),
    };

    pedido.finalizar_compra(&boleto);

    // inválido
    println!("\n --- Processar Inválido ---");
    let cartao_invalido = CartaoDeCredito {
        numero: String::from("123"),
        portador_cartao: String::from("Alice"),
        data_validade: String::from("04/28"),
        cvv: String::from("49"),
    };

    pedido.finalizar_compra(&cartao_invalido);
}
```
