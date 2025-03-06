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
        if (!/^[1-9][0-9]{4}$/.test(zip)) {
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

        // If all validations pass, assign the properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Override toString method to return contact details
    toString() {
        return `${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }

    // Method to display contact details
    display() {
        return this.toString();
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a new contact to the address book (with duplicate check)
    addContact(contact) {
        // Check if the contact already exists using filter
        const duplicate = this.contacts.filter(
            existingContact =>
                existingContact.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
                existingContact.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

        if (duplicate.length > 0) {
            console.log("Duplicate contact found! Contact not added.");
        } else {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        }
    }

    // Sort contacts alphabetically by name (first name, then last name)
    sortContactsByName() {
        this.contacts.sort((a, b) => {
            let nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
            let nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
            return nameA.localeCompare(nameB);
        });
        console.log("\nContacts sorted by name:");
        this.contacts.forEach(contact => console.log(contact.display()));
    }

    // Search for contacts in a particular city
    viewContactsByCity(city) {
        const result = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
        return result.length > 0 ? result : "No contacts found in this city.";
    }

    // Search for contacts in a particular state
    viewContactsByState(state) {
        const result = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
        return result.length > 0 ? result : "No contacts found in this state.";
    }

    // Display all contacts in the address book
    displayAddressBook() {
        console.log("\n---- Address Book ----");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}: ${contact.display()}`);
        });
    }
}

// Create AddressBook instance
let myAddressBook = new AddressBook();

// Adding contacts to the address book
try {
    let contact1 = new Contact(
        "Adarsh", 
        "Patel",  
        "Ashoka Garden", 
        "Bhopal", 
        "Madhya Pradesh", 
        "46201", 
        "8889930158", 
        "adarshpatel88899@gmail.com" 
    );
    myAddressBook.addContact(contact1);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    let contact2 = new Contact(
        "Satyam", 
        "Patel",  
        "MG Road", 
        "Bhopal", 
        "Madhya Pradesh", 
        "46202", 
        "9999988888", 
        "satyampatel@gmail.com" 
    );
    myAddressBook.addContact(contact2);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    let contact3 = new Contact(
        "Yogesh", 
        "Kuswah",  
        "kalapipal", 
        "Indore", 
        "Madhya Pradesh", 
        "452010", 
        "9876543210", 
        "yogeshkushwah@example.com" 
    );
    myAddressBook.addContact(contact3);
} catch (error) {
    console.log("Error:", error.message);
}

// Display all contacts in address book
myAddressBook.displayAddressBook();

// Sort contacts by name and display them
myAddressBook.sortContactsByName();
