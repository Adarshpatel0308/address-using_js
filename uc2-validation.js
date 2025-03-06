class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        // Validate First Name and Last Name
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("First Name should start with a capital letter and have at least 3 characters.");
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Last Name should start with a capital letter and have at least 3 characters.");
        }
        
        // Validate Address, City, and State (minimum 4 characters)
        if (address.length < 4) {
            throw new Error("Address should have at least 4 characters.");
        }
        if (city.length < 4) {
            throw new Error("City should have at least 4 characters.");
        }
        if (state.length < 4) {
            throw new Error("State should have at least 4 characters.");
        }

        // Validate Zip Code (5 digits)
        if (!/^\d{5}$/.test(zip)) {
            throw new Error("Zip code should be a 5-digit number.");
        }

        // Validate Phone Number (10 digits)
        if (!/^\d{10}$/.test(phoneNumber)) {
            throw new Error("Phone number should be a 10-digit number.");
        }

        // Validate Email
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Email is not valid.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Method to display contact details
    display() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

try {
    let contact1 = new Contact(
        "Adarsh",
        "Patel",  
        "Ashoka Garden", 
        "Bhopal", 
        "Madhya Pradesh",
        "462010", 
        "8889930158", 
        "adarshpatel88899@gmail.com" 
    );
    console.log(contact1.display());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    let invalidContact = new Contact(
        "ada", 
        "Patel",
        "Ashoka", 
        "Bhopal",
        "Madhya Pradesh",
        "462010",
        "8889930158",
        "invalidemail@com"
    );
    console.log(invalidContact.display());
} catch (error) {
    console.log("Error:", error.message);
}
