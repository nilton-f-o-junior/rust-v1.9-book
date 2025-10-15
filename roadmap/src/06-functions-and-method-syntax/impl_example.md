# Impl - Example

`impl`

```rust
struct User {
    name: String,
    password: String,
    logged_in: bool,
}

impl User {
    //
    fn new_user(name: String, password: String) -> User {
        User {
            name,
            password,
            logged_in: false,
        }
    }

    //
    fn login(&mut self, input_password: String) -> bool {
        if self.password == input_password {
            self.logged_in = true;
            println!("Login Successful!");
            true
        } else {
            println!("Check the information entered!");
            false
        }
    }

    //
    fn logout(&self) -> bool {
        self.logged_in
    }

    //
    fn forgot_my_password(&mut self, old_password: String, new_password: String) {
        if self.password == old_password {
            self.password = new_password;
            println!("Password changed successfully!");
        } else {
            println!("Incorrect old password!");
        }
    }
}

fn main() {
    //
    let mut user = User::new_user(String::from("Rodolfo"), String::from("admin"));

    user.login(String::from("admin"));

    if user.logout() {
        println!("Login successful!");
    }

    user.forgot_my_password(String::from("admn"), String::from("1234"));
    user.logout();
}
```

`not impl`

```rust
struct User {
    name: String,
    password: String,
    logged_in: bool,
}

//
fn new_user(name: String, password: String) -> User {
    User {
        name,
        password,
        logged_in: false,
    }
}

//
fn login(name: &mut User, input_password: String) -> bool {
    if name.password == input_password {
        name.logged_in = true;
        println!("Login Successful!");
        true
    } else {
        println!("Check the information entered!");
        false
    }
}

//
fn loggout(user: &mut User) -> bool {
    user.logged_in
}

//
fn forgot_my_password(user: &mut User, old_password: String, new_password: String) {
    if user.password == old_password {
        user.password = new_password;
        println!("Password changed successfully!");
    } else {
        println!("Incorrect old password!");
    }
}

//
fn main() {
    //
    let mut user = new_user(String::from("Rodolfo"), String::from("admin"));

    login(&mut user, String::from("admin"));

    if loggout(&mut user) {
        println!("Login successful!");
    }

    forgot_my_password(&mut user, String::from("admn"), String::from("1234"));
    loggout(&mut user);
}
```
