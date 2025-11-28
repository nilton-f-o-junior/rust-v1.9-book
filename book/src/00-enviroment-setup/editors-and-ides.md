# Editores e IDEs

**Zed**

Um editor de código moderno e extremamente rápido, desenvolvido pelos criadores do Atom, focado em desempenho e colaboração em tempo real.

```md
https://zed.dev/
```

**RustRover: IDE Rust da JetBrains**

É a IDE dedicada da JetBrains para Rust, oferecendo recursos avançados de desenvolvimento, como depuração inteligente, *refactoring* (refatoração) e análise de código.

```md
https://www.jetbrains.com/rust/
```

**VS Code: com a extensão rust-analyzer**

É uma combinação popular e leve para o desenvolvimento em Rust, oferecendo *autocomplete* (autocompletar), verificação de erros em tempo real e integração com as ferramentas do ecossistema Rust.

```md
https://code.visualstudio.com/
```

```md
https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer  
```

**Helix**

Editor de texto modal moderno inspirado em Vim/Kakoune, com suporte nativo a LSP (*Language Server Protocol*) e destaque de sintaxe, oferecendo uma experiência de edição rápida e eficiente sem a necessidade de configuração inicial.

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

**Neovim: com plugins específicos para Rust**

Evolução moderna do Vim com suporte nativo a LSP, interface assíncrona e extensibilidade via Lua, sendo altamente customizável e ideal para desenvolvedores que buscam um editor modal poderoso e eficiente.

```md
https://neovim.io/
```
```md
https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/
```
