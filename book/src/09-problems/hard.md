# Avançado

01 - Crie um validador de senha que use um enum para detalhar falhas.

- Defina um enum ErroValidacao com variantes como MuitoCurta, SemNumero, SemMaiuscula.
- Crie uma função validar_senha(senha: &str) -> Result<(), ErroValidacao>. O () indica sucesso sem valor de retorno.
- Implemente os seguintes critérios de validação usando if e métodos de string (.contains(), .chars().any()):
  - Deve ter pelo menos 8 caracteres.
  - Deve conter pelo menos um dígito.
  - Deve conter pelo menos uma letra maiúscula.
- Se a senha for válida, retorne Ok(()). Caso contrário, retorne o primeiro Err encontrado.
- No main, teste a função com 3 senhas diferentes e use um match para imprimir o status de validação.

02 - Modele diferentes figuras geométricas com um comportamento comum.

Defina uma trait Area com um método calcular_area(&self) -> f64.
Defina uma struct Retangulo (com largura: f64, altura: f64).
Defina um enum Forma com as variantes Circulo(f64) (usando tuple struct para o raio) e Triangulo { base: f64, altura: f64 }.
Implemente o trait Area para o Retangulo.
Implemente o trait Area para o Forma, usando um match para calcular a área correta para Círculo e Triângulo.
Crie uma função que receba um &dyn Area (traço dinâmico) e imprima a área calculada, demonstrando o polimorfismo.

03 - Crie um mini-sistema de gerenciamento de conta bancária.

- Crie um módulo chamado conta (mod conta).
- Dentro de conta, defina uma struct Conta com o campo saldo: i32 (Mutabilidade).
- No bloco impl Conta, crie os seguintes métodos:
  - depositar(&mut self, valor: u32): Aumenta o saldo.
  - sacar(&mut self, valor: u32) -> bool: Diminui o saldo. Deve retornar true se o saque for possível (saldo suficiente) e false caso contrário.
- No main, inicialize uma Conta e use uma sequência de if/else para simular as operações, imprimindo o saldo após cada transação bem-sucedida.

04 - Defina uma struct Pessoa com os campos nome: String e idade: u8.

- Crie uma função filtrar_e_imprimir que recebe um &Vec<Pessoa> e um limite_idade: u8.
- Dentro da função, use um loop for para iterar sobre o vetor.
- Use uma estrutura de if aninhada:
  - O primeiro if checa se a idade da pessoa é maior ou igual ao limite_idade.
  - O segundo if (dentro do primeiro) checa se o nome da pessoa começa com a letra 'A' (case-insensitive).
- Se ambos os critérios forem atendidos, imprima o nome e a idade da pessoa, usando formatação.
- No main, crie e popule um Vec<Pessoa> com pelo menos 5 elementos.


05 - Crie um programa que compara o "tamanho" de duas tuplas.

- Crie duas tuplas com diferentes tipos e tamanhos, ex: tupla_a: (i32, f64, char) e tupla_b: (String, bool, u8, u8).
- Crie uma função que receba o valor de uma tupla e retorne a soma do número de bytes ocupados pelos tipos daquela tupla. (Para simplificar, pode-se usar o conceito de contagem de elementos em vez de bytes reais, pois o tamanho em bytes é complexo em Rust).
  - Simplificado: Crie uma função para cada tupla que retorna o número de elementos (ex: 3 e 4, respectivamente).
- Crie uma função comparar_tamanho que receba os dois tamanhos e imprima qual tupla é maior, ou se são iguais (usando if/else if/else).
- Imprima a representação das tuplas (com {:?}) antes da comparação.

06 - Crie uma função que gere um identificador único simples.

- Defina uma const CHR_SET: &str com todos os caracteres e dígitos permitidos.
- A função deve gerar uma string com o formato XXXX-YYYY-ZZZZ, onde cada seção tem 4 caracteres aleatórios (ex: A5B2-1F9C-D3E4).
- Use um loop for para construir as três partes. (Como a aleatoriedade é complexa sem bibliotecas, pode-se simular pegando caracteres a partir do índice de um contador ou de uma constante predefinida de 12 caracteres, se preferir manter o código simples e focado no Rust puro).
- Retorne o código gerado como uma String.
- No main, chame a função 5 vezes usando um loop e imprima os resultados.

07 - Crie um sistema para rastrear um inventário de itens.

- Defina um enum Categoria com variantes Eletronico, Alimento, Vestuario.
- Defina uma struct Item com nome: String, quantidade: u32, categoria: Categoria.
- Crie uma função adicionar_item(inventario: &mut Vec<Item>, nome: String, quant: u32, cat: Categoria) para adicionar itens.
- Crie uma função listar_por_categoria que recebe o vetor e a categoria. Use um match no enum para filtrar e listar apenas os itens correspondentes.
- Crie uma função remover_item que remove o item pelo nome (assuma que o nome é único).

08 - Crie uma simulação de leitura e escrita de um arquivo.

- Crie um módulo chamado arquivo (mod arquivo).
- Dentro de arquivo, defina uma enum ErroArquivo com variantes NaoEncontrado e PermissaoNegada.
- Defina uma função ler_arquivo(caminho: &str) -> Result<String, ErroArquivo>.
- Simule a lógica: Se o caminho for "dados.txt", retorne Ok("Conteúdo do arquivo"). Se for "secreto.txt", retorne Err(ErroArquivo::PermissaoNegada). Caso contrário, retorne Err(ErroArquivo::NaoEncontrado).
- No main, chame ler_arquivo para os três casos e use uma expressão match para lidar com os resultados, imprimindo mensagens amigáveis ao usuário.

09 - Simule a lógica de aplicar uma função a um dado.

- Defina um trait Processador com um método processar(&self, valor: i32) -> i32.
- Crie uma struct Duplicador e uma struct Incrementador e implemente o Processador para elas, onde a primeira duplica e a segunda incrementa.
- Crie uma função genérica aplicar_operacao(operacao: &dyn Processador, numero: i32) -> i32 que recebe o traço e o número, e retorna o resultado da operação.
- No main, crie instâncias de Duplicador e Incrementador e passe-as para aplicar_operacao, demonstrando como a mesma função pode ter comportamentos diferentes.

10 - Crie uma função para verificar a validade de uma tupla que representa uma mensagem.

- Defina uma função validar_mensagem(msg: (i32, u8, &str, bool)) -> bool. A tupla representa: ID (i32), Nível de Prioridade (u8), Conteúdo (&str), Status de Envio (bool).
- Dentro da função, use uma expressão match no Nível de Prioridade (u8).
- A tupla é válida SE:
  - O Nível de Prioridade for 1 (Alto) E o Status de Envio for false.
  - O Nível de Prioridade for 2 (Médio) OU o Nível de Prioridade for 3 (Baixo).
  - Qualquer outro caso deve resultar em false.
- No main, crie várias tuplas com diferentes combinações e imprima o resultado da validação.
