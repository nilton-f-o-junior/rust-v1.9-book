# Lógicos

Relacionados a operações que combinam ou modificam valores Booleanos (verdadeiro/falso) para produzir um único resultado Booleano.

`AND (E) - Somente verdadeiro quando ambos são verdadeiros`

```rust
// AND = &&
println!("Verdadeiro && Verdadeiro = {}", true && true);
println!("Verdadeiro && Falso = {}", true && false);
println!("Falso && Verdadeiro = {}", false && true);
println!("Falso && Falso = {}", false && false);
```

`OR (OU) - Verdadeiro quando pelo menos um é verdadeiro`

```rust
// OR = ||
println!("Verdadeiro || Verdadeiro = {}", true || true);
println!("Verdadeiro || Falso = {}", true || false);
println!("Falso || Verdadeiro = {}", false || true);
println!("Falso || Falso = {}", false || false);
```

`NOT (NÃO) - Sempre inverte o valor`

```rust
// NOT = !
println!("!Verdadeiro = {}", !true);
println!("!Falso = {}", !false);
```
