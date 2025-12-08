# Impl

Você cria a estrutura de dados com struct e, em seguida, usa impl para definir o que essa estrutura pode fazer.

`impl`

```rust
struct Coordenada {
      x: f32,
      y: f32,

}

impl Coordenada {
    
    fn coordenada_x(&self) {
        println!("Ponto X: {}", self.x);
    }

    fn coordenada_y(&self) {
        println!("Ponto Y: {}", self.y);
    }

    fn nova_coordenada(x: f32, y: f32) -> Coordenada {
        Coordenada { x, y }
    }
}

fn main() {  
    let coordenada_inicial = Coordenada::nova_coordenada(10., 10.);

    coordenada_inicial.coordenada_x();
    coordenada_inicial.coordenada_y();
}
```

`sem impl`

```rust
struct Coordenada {
    x: f32,
    y: f32,
}

fn coordenada_x(ponto: &Coordenada) {
    println!("Ponto X: {}", ponto.x);
}

fn coordenada_y(ponto: &Coordenada) {
    println!("Ponto Y: {}", ponto.y);
}

fn nova_coordenada(x: f32, y: f32) -> Coordenada {
    Coordenada { x, y }
}

fn main() {
    let coordenada_inicial = nova_coordenada(10., 10.);
    coordenada_x(&coordenada_inicial);
    coordenada_y(&coordenada_inicial);
}
```
