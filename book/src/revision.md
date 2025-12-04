# Revisão

[Ok] - [A Linguagem de Programação Rust](README.md)
[Ok] - [Prefácio](foreword.md)
[Ok] - [Introdução](introduction.md)
 
[Ok] - [Começando](00-enviroment-setup/README.md)
[Ok] - [Rust Playground](00-enviroment-setup/rust-playground.md)
[Ok] - [Instalar Rust](00-enviroment-setup/installing-rust-and-cargo.md)
[Ok] - [Versão - Rust e Cargo](00-enviroment-setup/version-rust-and-cargo.md)
[Ok] - [Desinstalar](00-enviroment-setup/uninstall-rust.md)
[Ok] - [Editores e IDEs](00-enviroment-setup/editors-and-ides.md)

[Ok] - [Conceitos Comuns de Programação](01-common-programming-concepts/README.md)
[Ok] - [Comentários](01-common-programming-concepts/comments.md)
[Ok] - [Print](01-common-programming-concepts/print.md)
[Ok] - [Caracteres de Escape](01-common-programming-concepts/escape-characters.md)
[Ok] - [Variáveis](01-common-programming-concepts/variables.md)
[Ok] - [Mutabilidade](01-common-programming-concepts/mutability.md)
[Ok] - [Constantes](01-common-programming-concepts/constant.md)
[Ok] - [Formatação](01-common-programming-concepts/format.md)
[Ok] - [Formatação para Debugging](01-common-programming-concepts/debug-formatting.md)
[Ok] - [Shadowing](01-common-programming-concepts/shadowing.md)
[Ok] - [Escopo](01-common-programming-concepts/scope.md)
[Ok] - [Perguntas](01-common-programming-concepts/questions.md)

[Estruturas de Dados](02-data-structures/README.md)
[u - inteiros](02-data-structures/u-integers.md)
[i - inteiros](02-data-structures/i-integers.md)
[Ponto Flutuante](02-data-structures/floating.md)
[Booleanos](02-data-structures/booleans.md)
[Char](02-data-structures/char.md)
[String e &str](02-data-structures/string-and-str.md)
[Tuplas](02-data-structures/tuples.md)
[Modificando Tuplas](02-data-structures/modifying-tuples.md)
[Arrays](02-data-structures/arrays.md)
[Modificando Arrays](02-data-structures/modifying-arrays.md)
[Perguntas](02-data-structures/questions.md)
[Operadores](03-operators/README.md)
[Operadores Aritméticos](03-operators/arithmetic-operators.md)
[Operadores de Atribuição](03-operators/assignment-operators.md)
[Precedência](03-operators/precedence.md)
[Comparação](03-operators/comparison.md)
[Lógicos](03-operators/logical.md)
[String e &str](03-operators/string-and-str.md)
[Tuplas](03-operators/tuples.md)
[Arrays](03-operators/array.md)
[Perguntas](03-operators/questions.md)
[String e &str](04-strings-and-str/README.md)
[String](04-strings-and-str/string.md)
[&str](04-strings-and-str/str.md)
[Métodos - Parte 1](04-strings-and-str/methods-part1.md)
[Métodos - Parte 2](04-strings-and-str/methods-part2.md)
[Entrada de Dados](04-strings-and-str/data_entry.md)
[Perguntas](04-strings-and-str/questions.md)
[Fluxo de Controle](05-control-flow/README.md)
[If](05-control-flow/if.md)
[Else](05-control-flow/else.md)
[Else if](05-control-flow/else-if.md)
[Loop](05-control-flow/loop.md)
[While](05-control-flow/while.md)
[For](05-control-flow/for.md)
[Match](05-control-flow/match.md)
[Perguntas - If e Else](05-control-flow/questions-if-and-else.md)
[Perguntas - Loop](05-control-flow/questions-loop.md)
[Perguntas - While](05-control-flow/questions-while.md)
[Perguntas - For](05-control-flow/questions-for.md)
[Perguntas - Match](05-control-flow/questions-match.md)
[Vetor](06-vector/README.md)
[Introdução](06-vector/vector.md)
[Index (Índice)](06-vector/index-vector.md)
[Métodos - Parte 1](06-vector/methods-part1.md)
[Métodos - Parte 2](06-vector/methods-part2.md)
[Métodos - Parte 3](06-vector/methods-part3.md)
[Métodos - Parte 4](06-vector/methods-part4.md)
[Perguntas](06-vector/questions.md)
[Constructs](07-constructs/README.md)
[Struct](07-constructs/struct.md)
[Struct - Exemplo](07-constructs/struct_example.md)
[Impl](07-constructs/impl.md)
[Impl - Exemplo](07-constructs/impl_example.md)
[Enum](07-constructs/enum.md)
[Enum - Exemplo](07-constructs/enum_example.md)
[Traits](07-constructs/trait.md)
[Traits - Exemplo](07-constructs/trait_example.md)
[Perguntas](07-constructs/questions.md)
[Funções e Módulos](08-functions/README.md)
[Funções](08-functions/functions.md)
[Funções - Entrada](08-functions/function-input.md)
[Expressão](08-functions/expression.md)
[Módulos - Inline](08-functions/modules-inline.md)
[Módulos - Extern](08-functions/modules-extern.md)
[Módulos - mod.rs](08-functions/modules-mod.md)
[Perguntas](08-functions/questions.md) 

#####################

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









