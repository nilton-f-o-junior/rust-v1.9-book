# Logical

Relating to operations that combine or modify Boolean (true/false) values to produce a single Boolean result.

`AND - Only true when both are true`

```rust
// AND = &&
println!("true && true = {}", true && true);
println!("true && false = {}", true && false);
println!("false && true = {}", false && true);
println!("false && false = {}", false && false);
```

`OR - True when at least one is true`

```rust
// OR = ||
println!("true || true = {}", true || true);
println!("true || false = {}", true || false);
println!("false || true = {}", false || true);
println!("false || false = {}", false || false);
```

`NOT - Always invert the value`

```rust
// NOT = !
println!("!true = {}", !true);
println!("!false = {}", !false);
```
