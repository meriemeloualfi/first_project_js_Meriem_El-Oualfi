let database = [];

class User {
  constructor(name, email, age, password) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
  }
}
let meriem = new User("Meriem El Oualfi", "meriem@gmail.com", 22, "mery17#");

database.push(meriem);
console.table(database)

function action() {
    while (true) {
        let answer = prompt("Bonjour, veuillez choisir l'une des actions suivantes :\n1. S'inscrire\n2. Se connecter\n3. Changer le mot de passe\nTapez 'exit' pour quitter.");
        
        if (answer === null || answer.trim().toLowerCase() === "exit") {
            break;
        }
        
        answer = answer.trim().toLowerCase();

        switch (answer) {
            case "1":
                signUp();
                break;
            case "2":
                login();
                break;
            case "3":
                changePassword();
                break;
            default:
                alert("Ce choix ne trouve pas dans notre system. Veuillez réessayer.");
        }
    }
}

function fullName(name) {
    if (!name) return null;
    name = name.trim().replace(/[^a-zA-Z\s]/g, '');
    if (name.length < 5) {
        return null;
    }
    name = name.toLowerCase().split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
    return name;
}

function validMail(email) {
    if (!email) return null;
    email = email.trim().toLowerCase();
    let emailParts = email.split('@');
    if (emailParts.length !== 2 || emailParts[0].length === 0 || emailParts[1].length === 0) {
        return null;
    }
    if (email.length < 10) {
        return null;
    }
    return email;
}

function validAge(age) {
    if (!age) return null;
    age = age.trim();
    if (isNaN(age) || age < 1 || age >= 100) {
        return null;
    }
    return parseInt(age, 10);
}

function fixPassword(password) {
    if (!password) return null;
    
    password = password.trim();
    if (password.length < 7) {
        return null;
    }

    let specialCharacters = ["@", "#", "-", "+", "*", "/"];
    if (!specialCharacters.some(char => password.includes(char))) {
        return null;
    }
    return password;
}

function isEmailTaken(email) {
    return database.some(user => user.email === email);
}