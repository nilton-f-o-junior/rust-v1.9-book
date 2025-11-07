# Trait

Is like a list of abilities (methods) that you teach to different types. All of them need to have the same abilities, but each type implements them in its own way. This allows writing generic code that works with any type that has those abilities.

```rust
trait MakesNoise {
    fn noise(&self) -> String;
}

struct Dog;
struct Cat;

impl MakesNoise for Dog {
    fn noise(&self) -> String {
        String::from("Au au!")
    }
}

impl MakesNoise for Cat {
    fn noise(&self) -> String {
        String::from("Miauuu!")
    }
}

fn main() {
    let dog = Dog;
    let cat = Cat;

    println!("{}", dog.noise());
    println!("{}", cat.noise());
}
```
