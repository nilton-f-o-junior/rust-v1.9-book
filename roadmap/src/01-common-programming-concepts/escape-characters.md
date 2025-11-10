# Escape Characters

Are those that start with \ and are used to represent special characters that we cannot (or should not) type literally in the code, such as line breaks, tabs, quotes inside strings, etc."

`\n`

```rust
// line break
println!("What is your name?\nMy name is Rodolfo!");
```

`\'`

```rust
// Single quotes
println!("What is your name?\'My name is Rodolfo!\'");
```

`\"`

```rust
// double quotes
println!("What is your name?\"My name is Rodolfo!\"");
```

`\\` 

```rust
// backslash
println!("What is your name?\\My name is Rodolfo!\\");
```

`\t`

```rust
// horizontal tabulation
println!("What is your name?\tMy name is \tRodolfo!");
println!("What is your name?\rMy name is \rRodolfo!");
```

`r`

```rust
// raw strings
println!(r"C:\Users\Rodolfo\Documents");
```

`r#...#`
```rust
// add "" // '' \
println!(r#"
  What is your name?
  My name is "Rodolfo!"
"#);
```

`\x`

```rust
// 7-bit character ASCII - 0x00 e 0x7F
println!("\x52\x6F\x64\x6F\x6C\x66\x6F");
```

`\u{...}`

```rust
// unicode
println!("(\u{25D5}\u{2323}\u{25D5})");
```

`\r`

```rust
// moves the cursor back to the beginning of the line without advancing to the next one
print!("Loading ...\r");
print!("Completed!   \r");
```
> Commonly used for terminal animations: **(\r)**
