# Trait

É como uma lista de habilidades (métodos) que você ensina a diferentes tipos. Todos eles precisam ter as mesmas habilidades, mas cada tipo as implementa à sua própria maneira. Isso permite escrever código genérico que funciona com qualquer tipo que possua essas habilidades.

```rust
trait FazBarulho {
    fn barulho(&self) -> String;
}

struct Cachorro;
struct Gato;

impl FazBarulho for Cachorro {
    fn barulho(&self) -> String {
        String::from("Au au!")
    }
}

impl FazBarulho for Gato {
    fn barulho(&self) -> String {
        String::from("Miauuu!")
    }
}

fn main() {
    let cachorro = Cachorro;
    let gato = Gato;

    println!("{}", cachorro.barulho());
    println!("{}", gato.barulho());
}
```
