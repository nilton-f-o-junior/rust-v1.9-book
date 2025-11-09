# Comments

Comments are used to document your code, making it more understandable for you and other developers. They
 are ignored by the compiler, meaning they don't affect how your program runs, only its readability.

`//`

```rust
// This is a single-line comment.
```

`/* */`

```rust
/*
  ...
  This is a multi-line comment.
  ...
*/
```

`///`

```rust
/// doc comments
///  automatically generate documentation: cargo doc
///  they are compatible with markdown
///  the document the following item: function, module, struct ...
```


`//!` 

```rust
//! inner doc comment
//!  document modules/crates: lib.rs
//!  top of files
```

`/* // /**/ */`

```rust
/* nested comments
   // rust allows comments within the comment block 
   /* ... */
*/
```
