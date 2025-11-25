use std::io;

fn input_number() -> u8 {
    loop {
        println!("Enter number (0-255):");
        let mut input = String::new();

        if let Err(_) = io::stdin().read_line(&mut input) {
            println!("Data entry error!");
            continue;
        }

        match input.trim().parse::<u8>() {
            Ok(numero) => return numero,
            Err(_) => {
                println!(
                    "'{}'is not a valid number! Enter only numbers from 0 to 255.",
                    input.trim()
                );
            }
        }
    }
}

fn main() {
    let numero = input_number();
    println!("Number chosen: {}", numero);
}
