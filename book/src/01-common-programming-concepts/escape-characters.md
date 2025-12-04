# Caracteres de Escape

São aqueles que começam com `\` e são usados para representar caracteres especiais que não podemos (ou não devemos) digitar literalmente no código, como quebras de linha, tabulações, aspas dentro de strings, etc.

`\n`

```rust
// quebra de linha
println!("Qual é o seu nome?\nMeu nome é Alice!");
```

`\'`

```rust
// aspas simples
println!("Qual é o seu nome?\'Meu nome é Alice!\'");
```

`\"`

```rust
// aspas duplas
println!("Qual é o seu nome?\"Meu nome é Alice!\"");
```

`\\` 

```rust
// barra invertida
println!("Qual é o seu nome?\\Meu nome é Alice!\\");
```

`\t`

```rust
// tabulação horizontal (tab)
println!("Qual é o seu nome?\tMeu nome é\tAlice!");
```

`r`

```rust
// permite todas as barra invertidas
println!(r"C:\Users\Alice\Documents");
```

`r#...#`
```rust
// raw strings (string literal/sem processamento de escape)
println!(r#"
  Qual é o seu nome?
  Meu nome é "Alice!"
"#);
```

`\x`

```rust
// caractere ASCII de 7 bits - 0x00 e 0x7F
println!("\x53\x6E\x6F\x6F\x70\x79\x21");
```

`\u{...}`

```rust
// unicode (permite usar emojis ou caracteres especiais)
println!("(\u{25D5}\u{2323}\u{25D5})");
```

`\r`

```rust
// move o cursor de volta para o início da linha sem avançar para a próxima
print!("Carregando ...\r");
```

> Comumente usado para animações de terminal: **\r**
