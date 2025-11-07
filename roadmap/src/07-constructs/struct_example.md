# Struct - Example

```rust
#[derive(Clone)]
struct Book {
    title: String,
    author: String,
    publisher: String,
    age: u16,
    pages: u16,
}

struct Store {
    name: String,
    books: Vec<Book>,
}

fn main() {
    let book_a = Book {
        title: String::from("The Bridge Builder"),
        author: String::from("Markus Zusak"),
        publisher: String::from("Intrínseca"),
        age: 2019,
        pages: 528,
    };

    let book_b = Book {
        title: String::from("Alice no País das Maravilhas"),
        author: String::from("Lewis Carroll"),
        publisher: String::from("Darkside Books"),
        age: 2019,
        pages: 208,
    };

    let store_a = Store {
        name: String::from("Amazon"),
        books: vec![book_a, book_b.clone()],
    };

    let store_b = Store {
        name: String::from("Darkside Books"),
        books: vec![book_b.clone()],
    };

    println!("-- Books --");
    println!(
        "Store: {} \n Book: {} \n Author: {} \n Pages: {} \n Publisher: {} \n Age: {}",
        store_b.name, book_b.title, book_b.author, book_b.pages, book_b.publisher, book_b.age,
    );

    for (_index, book) in store_a.books.iter().enumerate() {
        println!("\nStore: {}", store_a.name);
        println!(" Book: {}", book.title);
        println!(" Author: {}", book.author);
        println!(" Pages: {}", book.pages);
        println!(" Publisher: {}", book.publisher);
        println!(" Age: {}", book.age);
    }
}
```

> The same book is being used in two different stores. This would cause an ownership error in Rust, so we added #[derive(Clone)] to be able to clone the data. If you remove this line, the code won't compile. Later on, we'll see other ways to solve this.
