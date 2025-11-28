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
/// Comentários de documentação (doc comments)
///  geram documentação automaticamente: cargo doc
///  são compatíveis com markdown
///  documentam o item seguinte: função, módulo, struct ...
```

`//!` 

```rust
//! Comentário de documentação interno (inner doc comment)
//!  documenta módulos/crates: lib.rs
//!  topo dos arquivos
```

`/* // /**/ */`

```rust
/* Comentários aninhados (nested comments)
    // Rust permite comentários dentro do bloco de comentário
    /* ... */
*/
```
