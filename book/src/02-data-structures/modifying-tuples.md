# Modificando Tuplas

Ao alterar valores de tupla, você precisa especificar o índice do elemento que deseja modificar. Os índices da tupla começam em 0 e correspondem à posição de cada elemento.

```rust
//                   0      1    2
let mut perfil = ("Alice", 25, 1.70);

println!("Nome: {:?}", perfil.0);
println!("Idade: {:?}", perfil.1);
println!("Altura: {:?}\n", perfil.2);

perfil.1 = 40;
perfil.2 = 1.55;

println!("Nome: {:?}", perfil.0);
println!("Idade: {:?}", perfil.1);
println!("Altura: {:?}", perfil.2);
```

```rust
let mut perfil = ("Julio", 90, 1.98);
println!("{:#?}", perfil);

perfil.0 = "Moana";
perfil.1 = 58;
perfil.2 = 1.62;

println!("{:#?}", perfil);
```
