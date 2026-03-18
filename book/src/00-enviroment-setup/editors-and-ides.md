# Editores e IDEs

A seguir, alguns editores e IDEs recomendados para desenvolvimento em Rust.

**Zed**

Um editor de código moderno e extremamente rápido, desenvolvido pelos criadores do Atom, focado em desempenho e colaboração em tempo real.

```
https://zed.dev/
```

**RustRover: IDE Rust da JetBrains**

É a IDE dedicada da JetBrains para Rust, oferecendo recursos avançados de desenvolvimento, como depuração inteligente, *refactoring* (refatoração) e análise de código.

```
https://www.jetbrains.com/rust/
```

**VS Code: com a extensão rust-analyzer**

É uma combinação popular e leve para o desenvolvimento em Rust, oferecendo *autocomplete* (autocompletar), verificação de erros em tempo real e integração com as ferramentas do ecossistema Rust.

```
https://code.visualstudio.com/
```

```
https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer
```

**Helix**

Editor de texto modal moderno inspirado em Vim/Kakoune, com suporte nativo a LSP (*Language Server Protocol*) e destaque de sintaxe, oferecendo uma experiência de edição rápida e eficiente sem a necessidade de configuração inicial.

```
https://helix-editor.com/
```

<details>
  <summary>Config: languages.toml</summary>

  O arquivo de configuração deve ser colocado em `~/.config/helix/languages.toml`.

  ```toml
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

```
https://neovim.io/
```

<details>
  <summary>Config:</summary>

  Entre os plugins mais recomendados para Rust no Neovim estão o `rustaceanvim` (integração completa com rust-analyzer) e o `crates.nvim` (gerenciamento de dependências do Cargo diretamente no editor).


  > **Nota:** O guia externo abaixo pode ficar desatualizado com o tempo. Prefira consultar a documentação oficial dos plugins para configurações mais recentes.

  ```
    https://rsdlt.github.io/posts/rust-nvim-ide-guide-walkthrough-development-debug/
  ```
</details>
