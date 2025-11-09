# Revision

[x] Getting-started.md
  [x] editors-and-ides.md
  [x] installing-rust-and-cargo.md
  [x] rust-playground.md
  [x] uninstall-rust.md
[] Common Programming Concepts
  [x] comments.md
  [x] constant.md
  [x] format.md
  [x] debug formatted
  [x] mutability.md


line-break.md

Adicionar outros caracteres de escape: \t (tab), \r (carriage return), \\ (backslash)
Mostrar raw strings (r#"..."#) para evitar escape sequences
Incluir exemplo prático onde line breaks melhoram legibilidade

print.md

Adicionar eprint! e eprintln! para stderr
Mostrar dbg! macro para debugging
Incluir exemplo de formatação inline: println!("Value: {}", value)
Mencionar diferença de performance entre print! e println!

questions.md

scope.md

Explicar lifetime de variáveis no contexto de scope
Adicionar exemplo de scope em funções
Mostrar como scope afeta borrowing
Incluir diagrama visual ou exemplo mais complexo com múltiplos níveis

shadowing.md

Enfatizar que shadowing permite mudança de tipo (diferente de mut)
Adicionar exemplo prático: parsing string → number
Contrastar explicitamente shadowing vs mutabilidade
Mostrar uso de shadowing com transformações sucessivas

variables.md

Expandir com type annotations explícitas: let x: i32 = 5;
Adicionar explicação sobre type inference
Mostrar declaração sem inicialização: let x: i32;
Incluir exemplo de destructuring: let (x, y) = (1, 2);
Mencionar convenções de nomenclatura (snake_case)

Melhorias Gerais para Todos os Arquivos:

Adicionar seção "Erros Comuns" em cada arquivo
Incluir links cruzados entre conceitos relacionados
Adicionar badges de dificuldade (Básico/Intermediário)
Uniformizar formatação e estrutura
Incluir seção "Na Prática" com uso real do conceito
Adicionar comparações com outras linguagens (quando relevante)

Quer que eu desenvolva algum arquivo específico com essas melhorias implementadas?







swap() (Trocar elementos de posição)

Slice para Outro Slice com copy_from_slice()

Trocar Elementos com swap_with_slice()

**

let ponto3d = (10, 20, 30);

println!("Ponto 3D original: {:?}", ponto3d);

// Desestruturando a tuple
let (x, y, z) = ponto3d;

// Criando uma nova tuple com 'y' modificado
let novo_ponto3d = (x, y * 2, z);
**

chunks(), windows() e split_at() (Leitura de Partes)

Iteradores (iter(), iter_mut(), into_iter()) ++  (como map, filter, fold, sum, max, min, etc.)

Create a tuple with the following values: Name, 20;

Write a tuple that can receive a name and an age given by the user. Arr = (name, age);









