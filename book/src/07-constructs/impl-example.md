# Impl - Exemplo

`impl`

```rust
struct Usuario {
    nome: String,
    senha: String,
    logado: bool,
}

impl Usuario {
   
    fn novo_usuario(nome: String, senha: String) -> Usuario {
        Usuario {
            nome,
            senha,
            logado: false,
        }
    }

   fn fazer_login(&mut self, senha_inserida: String) -> bool {
        if self.senha == senha_inserida {
            self.logado = true;
            println!("Login realizado com sucesso!");
            true
        } else {
            println!("Verifique as informações inseridas!");
            false
        }
    }
  
    fn esta_logado(&self) -> bool {
        self.logado
    }

    fn esqueci_minha_senha(&mut self, senha_antiga: String, nova_senha: String) {
        if self.senha == senha_antiga {
            self.senha = nova_senha;
            println!("Senha alterada com sucesso!");
        } else {
            println!("Senha antiga incorreta!");
        }
    }
}

fn main() {

    let mut usuario = Usuario::novo_usuario(String::from("Rodolfo"), String::from("admin"));
    usuario.fazer_login(String::from("admin"));

    if usuario.esta_logado() {
        println!("Login realizado com sucesso!");
    }

    usuario.esqueci_minha_senha(String::from("admn"), String::from("1234"));
    usuario.esta_logado();
}
```

`sem impl`

```rust
struct Usuario {
    nome: String,
    senha: String,
    logado: bool,
}

fn novo_usuario(nome: String, senha: String) -> Usuario {
    Usuario {
        nome,
        senha,
        logado: false,
    }
}

fn fazer_login(usuario: &mut Usuario, senha_inserida: String) -> bool {
    if usuario.senha == senha_inserida {
        usuario.logado = true;
        println!("Login realizado com sucesso!");
        true
    } else {
        println!("Verifique as informações inseridas!");
        false
    }
}

fn esta_logado(usuario: &Usuario) -> bool {
    usuario.logado
}

fn esqueci_minha_senha(usuario: &mut Usuario, senha_antiga: String, nova_senha: String) {
    if usuario.senha == senha_antiga {
        usuario.senha = nova_senha;
        println!("Senha alterada com sucesso!");
    } else {
        println!("Senha antiga incorreta!");
    }
}

fn main() {
  
    let mut usuario = novo_usuario(String::from("Rodolfo"), String::from("admin"));
    fazer_login(&mut usuario, String::from("admin"));

    if esta_logado(&usuario) {
        println!("Login realizado com sucesso!");
    }

    esqueci_minha_senha(&mut usuario, String::from("admn"), String::from("1234"));
    esta_logado(&usuario);
}
```
