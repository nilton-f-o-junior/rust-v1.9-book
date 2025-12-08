# Struct - Exemplo

```rust
#[derive(Clone)]
struct Livro {
    titulo: String,
    autor: String,
    editora: String,
    ano: u16,
    paginas: u16,
}

struct Loja {
    nome: String,
    livros: Vec<Livro>,
}

fn main() {
    let livro_a = Livro {
        titulo: String::from("O Construtor de Pontes"),
        autor: String::from("Markus Zusak"),
        editora: String::from("Intrínseca"),
        ano: 2019,
        paginas: 528,
    };

    let livro_b = Livro {
        titulo: String::from("Alice no País das Maravilhas"),
        autor: String::from("Lewis Carroll"),
        editora: String::from("Darkside Books"),
        ano: 2019,
        paginas: 208,
    };

    let loja_a = Loja {
        nome: String::from("Amazon"),
        livros: vec![livro_a, livro_b.clone()],
    };

    let loja_b = Loja {
        nome: String::from("Darkside Books"),
        livros: vec![livro_b.clone()],
    };

    println!("-- Livros --");
    println!(
        "Loja: {} \nLivro: {} \nAutor: {} \nPáginas: {} \nEditora: {} \nAno: {}",
        loja_b.nome, livro_b.titulo, livro_b.autor, livro_b.paginas, livro_b.editora, livro_b.ano,
    );

    for (_indice, livro) in loja_a.livros.iter().enumerate() {
        println!("\nLoja: {}", loja_a.nome);
        println!("Livro: {}", livro.titulo);
        println!("Autor: {}", livro.autor);
        println!("Páginas: {}", livro.paginas);
        println!("Editora: {}", livro.editora);
        println!("Ano: {}", livro.ano);
    }
}
```

> O mesmo livro está sendo usado em duas lojas diferentes. Isso causaria um erro de posse (ownership) no Rust, então adicionamos `#[derive(Clone)]` para poder clonar os dados. Se você remover esta linha, o código não irá compilar. Mais tarde, veremos outras maneiras de resolver isso.
