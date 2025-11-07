# Impl

Your create the data structure with struct, and then use impl to say what that structure can do.

`impl`

```rust
struct Coordinate {
      x: f32,
      y: f32,

}

impl Coordinate {
    
    fn coordinate_x(&self) {
        println!("Point X: {}", self.x);
    }

    fn coordinate_y(&self) {
        println!("Point Y: {}", self.y);
    }

    fn new_coordinate(x: f32, y: f32) -> Coordinate {
        Coordinate { x, y }
    }
}

fn main() {  
    let init_coordinate = Coordinate::new_coordinate(10., 10.);

    init_coordinate.coordinate_x();
    init_coordinate.coordinate_y();
}
```

`not impl`

```rust
struct Coordinate {
    x: f32,
    y: f32,
}

fn coordinate_x(point: &Coordinate) {
    println!("Point X: {:?}", point.x);
}

fn coordinate_y(point: &Coordinate) {
    println!("Point Y: {:?}", point.y);
}

fn new_coordinate(x: f32, y: f32) -> Coordinate {
    Coordinate { x, y }
}

fn main() {
    let init_coordinate = new_coordinate(10., 10.);
    coordinate_x(&init_coordinate);
    coordinate_y(&init_coordinate);
}
```
