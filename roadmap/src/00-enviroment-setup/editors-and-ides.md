# Editors and IDEs

Here are some recommended Rust code editors:

Zed

```md
https://zed.dev/
```

RustRover: Rust IDE by JetBrains

```md
https://www.jetbrains.com/rust/
```

VS Code: with the rust-analyzer extension

```md
https://code.visualstudio.com/
```
```md
https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer
```

Helix:

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


Neovim: with Rust-specific plugins

```md
https://neovim.io/
```

```md
https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/
```
