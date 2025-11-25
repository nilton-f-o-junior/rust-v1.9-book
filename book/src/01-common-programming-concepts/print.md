# Print

The print! macro and its variations are used for debugging, informing the user, and generating formatted output.

`print!`

```rust
// prints text without a line break
print!("Hello,");
print!("world!");
print!("...");
```

`println!`

```rust
// prints text with a line break
println!("Hello,");
println!("world!");
println!("...");
```

`eprint!`

```rust
// prints the error text without a line break
eprint!("ERROR:");
eprint!("Failed to load file");
```

`eprintln!`

```rust
// prints the error text with a line break
eprintln!("ERROR:");
eprintln!("Failed to load file");
```

> Used for standard program output (stdout): print! and println!<br>
> Used for output involving an error or diagnostics (stderr): eprint! and eprintln!

> Note: The user can redirect the normal output of their program to a file using (>) and the error messages to the terminal.
