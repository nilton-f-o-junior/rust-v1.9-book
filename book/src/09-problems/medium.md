# Intermediário

01 - Crie um programa que gerencie uma lista de tarefas.

- Defina um enum Status com os valores Pendente, EmProgresso e Concluida.
- Defina uma struct Tarefa com os campos descricao: String, prioridade: u8 e status: Status.
- Crie uma função para adicionar uma nova tarefa à um Vec<Tarefa>.
- Crie uma função para marcar uma tarefa como Concluida dado seu índice no vetor.
- Crie uma função que liste todas as tarefas, usando um match para imprimir o status de cada uma de forma amigável (ex: "P" para Pendente, "C" para Concluída).
- Crie uma função que ordene as tarefas no vetor pela prioridade (o mais baixo primeiro) e as imprima.

02 - Escreva um programa que solicite ao usuário uma frase. O programa deve então analisar essa string:

- Crie uma função que receba a String e conte quantas palavras ela possui.
- Crie uma função que receba a String e retorne um bool indicando se a frase é um palíndromo (ignorando espaços e case).
- Crie uma função para "censurar" a frase, substituindo todas as ocorrências de uma palavra específica (ex: "badword") por asteriscos (****).
- O programa principal deve executar as três funções e imprimir os resultados com a formatação para debugging ({:?}) e formatação normal ({}).

03 - Modele dados para representar duas unidades de medida de temperatura: Celsius e Fahrenheit.

- Defina duas struct vazias: Celsius(f64) e Fahrenheit(f64) (usando o conceito de tuple struct).
- Defina um trait Conversivel que possua dois métodos: para_celsius(&self) -> f64 e para_fahrenheit(&self) -> f64.
- Implemente o trait Conversivel para ambas as structs, usando as fórmulas de conversão.
  - C = (F - 32) * 5/9
  - F = (C * 9/5) + 32
- Crie uma função genérica que receba qualquer tipo que implemente Conversivel e imprima ambas as conversões de forma formatada.

04 - Crie um sistema que represente e valide endereços IP.

- Defina um enum TipoIP com as variantes V4((u8, u8, u8, u8)) (usando tupla) e V6(String).
- Crie uma função criar_ip(tipo: &str, endereco: String) -> TipoIP que, dependendo do argumento tipo ("v4" ou "v6"), retorne a variante enum correta.
- Crie uma função analisar_ip(ip: &TipoIP) que utilize uma expressão match para:
  - Se for V4, desempacotar a tupla e imprimir os 4 octetos em linhas separadas.
  - Se for V6, apenas imprimir a string.
- No main, use shadowing para reatribuir a variável meu_ip primeiro como um IP V4 e depois como um IP V6, chamando analisar_ip após cada atribuição.

05 - Crie uma versão do jogo "Adivinhe o Número" que utilize os laços de repetição de forma mais complexa.

- Gere um número secreto aleatório entre 1 e 100. (Você pode usar um valor constante simples para simplificar, se não quiser abordar bibliotecas externas: const NUM_SECRETO: u32 = 42;).
- Use um loop infinito para gerenciar o jogo.
- Dentro do loop, solicite ao usuário que insira um palpite e use a Entrada de Dados.
- Use um bloco match ou if/else if/else para comparar o palpite do usuário com o número secreto:
  - "Muito baixo", "Muito alto" ou "Acertou!".
- Use a palavra-chave break para sair do loop quando o usuário acertar.
- Adicione um contador de tentativas (Variáveis e Mutabilidade, 3.4 e 3.5). Imprima o número de tentativas antes de encerrar.

06 - Crie um array ([i32; 10]) e inicialize-o com 10 valores aleatórios (ou fixos).

- Crie uma função processar_array que receba o array mutável.
- Dentro da função, use um loop for (Capítulo 7.6) para iterar sobre os índices.
- Para cada elemento:
  - Se o índice for par, dobre o valor do elemento usando um operador de atribuição (Capítulo 5.2).
  - Se o índice for ímpar, subtraia 5 do valor do elemento.
  - Atenção aos tipos: Se o resultado de uma operação puder causar overflow/underflow, o leitor deve usar o tipo correto (como i32 em vez de u8) ou forçar a checagem de limites com uma expressão if.
- Após o loop, a função deve retornar o valor máximo do array.
- No main, imprima o array original e o array modificado com a Formatação para Debugging ({:?}).

07 - Crie uma função binario_para_decimal(binario: &str) -> Result<u32, &str> que converte uma string de número binário (ex: "10110") para o seu valor decimal.

- A função deve receber um &str.
- Itere sobre os caracteres da string, começando pelo último (mais à direita).
- Use um loop for com enumerate() ou um loop for reverso.
- Para cada caractere '1', some 2posicao ao resultado.
- Use um if para verificar se a string contém caracteres diferentes de '0' ou '1'. Se contiver, retorne um Err("Caractere inválido").
- No main, demonstre o uso com um match para lidar com o Result retornado.

08 - Escreva um programa que receba uma frase de entrada e realize uma análise básica de frequência.

- Crie uma função que receba um &str e o converta para um Vec<String> (lista de palavras), removendo pontuações e convertendo para minúsculas. (Pode assumir que as palavras são separadas por espaços simples).
- Crie uma segunda função que receba o vetor de palavras e encontre a palavra mais frequente.
- A função deve retornar uma tuple com a palavra e sua contagem (ex: ("a", 10)).
- No main, use shadowing para armazenar a frase original e depois a frase em minúsculas antes de passar para as funções.

09 - Crie uma struct Ponto3D para representar uma coordenada no espaço 3D.

- A struct deve conter os campos x: f64, y: f64, z: f64.
- Implemente um bloco impl Ponto3D com um método associado novo(x, y, z) para criar uma nova instância.
- Crie um método distancia_origem(&self) -> f64 que calcula a distância do ponto até a origem (0, 0, 0) usando a fórmula RaizQuadrada(x² + y² + z²).
- Crie um método deslocar(&mut self, dx: f64, dy: f64, dz: f64) que modifique o ponto atual (Mutabilidade, 3.5)
- No main, crie um ponto, desloque-o e imprima a nova distância. 

10 - Escreva uma função que calcula a média ponderada de notas e pesos.

- A função media_ponderada(notas: &[f32], pesos: &[f32]) -> f32 deve receber duas slices (que podem ser obtidas de Arrays).
- Use um loop for para iterar simultaneamente sobre os dois arrays, calculando o somatório de (nota * peso) e o somatório dos pesos.
- Se os arrays de notas e pesos não tiverem o mesmo comprimento, retorne 0.0 (ou uma mensagem de erro se você introduzir o Result). Para simplificar, pode assumir o mesmo comprimento.
- Use os tipos f32 (Ponto Flutuante, 4.3) para garantir a precisão do cálculo.
- No main, crie dois arrays [f32; 3] e chame a função.
