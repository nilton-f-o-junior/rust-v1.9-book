# Comentários

Comentários são usados para documentar seu código, tornando-o mais compreensível para você e outros desenvolvedores. Eles são ignorados pelo compilador, o que significa que não afetam como seu programa é executado, apenas a sua legibilidade.

`//`

```rust
// Este é um comentário de linha única.
```

`/* */`

```rust
/*
  ...
  Este é um comentário de múltiplas linhas.
  ...
*/
```

`///`

```rust
/// Comentários de documentação (doc comments):
///  - Geram documentação automaticamente: cargo doc;
///  - São compatíveis com markdown;
///  - Documentam o item seguinte: função, módulo, struct, etc.
```

`//!` 

```rust
//! Comentário de documentação interno (inner doc comment):
//!  - Documenta módulos/crates: lib.rs;
//!  - Colocado no início dos arquivos.
```

`/* // /**/ */`

```rust
/* Comentários aninhados (nested comments):
    // Rust permite comentários dentro do bloco de comentário.
    /* ... */
*/
```
