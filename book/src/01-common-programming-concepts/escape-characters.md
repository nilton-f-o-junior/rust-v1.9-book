# Caracteres de Escape

São aqueles que começam com `\` e são usados para representar caracteres especiais que não podemos (ou não devemos) digitar literalmente no código, como quebras de linha, tabulações, aspas dentro de strings, etc.

`\n`

```rust
// quebra de linha
println!("Qual é o seu nome?\nMeu nome é Fulano!");
```

`\'`

```rust
// aspas simples
println!("Qual é o seu nome?\'Meu nome é Fulano!\'");
```

`\"`

```rust
// aspas duplas
println!("Qual é o seu nome?\"Meu nome é Fulano!\"");
```

`\\` 

```rust
// barra invertida
println!("Qual é o seu nome?\\Meu nome é Fulano!\\");
```

`\t`

```rust
// tabulação horizontal (tab)
println!("Qual é o seu nome?\tMeu nome é\tFulano!");
```

`r`

```rust
// permite todas as barra invertidas
println!(r"C:\Users\Rodolfo\Documents");
```

`r#...#`
```rust
// raw strings (string literal/sem processamento de escape)
println!(r#"
  Qual é o seu nome?
  Meu nome é "Fulano!"
"#);
```

`\x`

```rust
// caractere ASCII de 7 bits - 0x00 e 0x7F
println!("\x52\x6F\x64\x6F\x6C\x66\x6F");
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
print!("Concluído!   \r");
```

> Comumente usado para animações de terminal: **\r**
