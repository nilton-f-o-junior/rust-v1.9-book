# Editors and IDEs

**Zed**

A modern and extremely fast code editor, developed by the creators of Atom, focused on performance and real-time collaboration.

```md
https://zed.dev/
```

**RustRover: Rust IDE by JetBrains**

Is JetBrains' dedicated IDE for Rust, offering advanced development features such as intelligent debugging, refactoring, and code analysis.

```md
https://www.jetbrains.com/rust/
```

**VS Code: with the rust-analyzer extension**

Is a popular and lightweight combination for Rust development, offering intelligent autocomplete, real-time error checking, and integration with Rust ecosystem tools.

```md
https://code.visualstudio.com/
```

```md
https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer  
```

**Helix**

Modern modal text editor inspired by Vim/Kakoune, with native LSP support and syntax highlighting, offering a fast and efficient editing experience without the need for initial configuration.

```md
https://helix-editor.com/  
```

<details>
  <summary>Config: languages.toml</summary>
 
  ```md
  [[language]]
  name = "rust"
  auto-format = true
 
  roots = [
    "Cargo.toml",
    "Cargo.lock"
  ]
 
  [language.auto-pairs]
  '(' = ')'
  '{' = '}'
  '[' = ']'
  '"' = '"'
  '`' = '`'
 
  [language-server.rust-analyzer]
  command = "rust-analyzer"
 
  [language-server.rust-analyzer.config]
  inlayHints.bindingModeHints.enable = false
  inlayHints.closingBraceHints.minLines = 10
  inlayHints.closureReturnTypeHints.enable = "with_block"
  inlayHints.discriminantHints.enable = "fieldless"
  inlayHints.lifetimeElisionHints.enable = "skip_trivial"
  inlayHints.typeHints.hideClosureInitialization = false    
   ```
</details>

**Neovim: with Rust-specific plugins**

Modern evolution of Vim with native LSP support, asynchronous interface and extensibility via Lua, being highly customizable and ideal for developers seeking a powerful and efficient modal editor.

```md
https://neovim.io/
```
```md
https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/
```
