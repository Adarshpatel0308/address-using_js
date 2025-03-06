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

    // Method to display contact details
    display() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a new contact to the address book
    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    // Find a contact by first name and last name
    findContact(firstName, lastName) {
        return this.contacts.find(
            contact =>
                contact.firstName.toLowerCase() === firstName.toLowerCase() &&
                contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    // Edit details
    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (contact) {
            contact.firstName = newDetails.firstName || contact.firstName;
            contact.lastName = newDetails.lastName || contact.lastName;
            contact.address = newDetails.address || contact.address;
            contact.city = newDetails.city || contact.city;
            contact.state = newDetails.state || contact.state;
            contact.zip = newDetails.zip || contact.zip;
            contact.phoneNumber = newDetails.phoneNumber || contact.phoneNumber;
            contact.email = newDetails.email || contact.email;
            console.log("Contact updated successfully!");
        } else {
            console.log("Contact not found.");
        }
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
    myAddressBook.addContact(invalidContact);
} catch (error) {
    console.log("Error:", error.message); 
}

// Display all contacts in address book
myAddressBook.displayAddressBook();

// Edit an existing contact
myAddressBook.editContact("Adarsh", "Patel", {
    address: "New Ashoka Garden",
    city: "Narmadapuram",
    email: "newadarshpatel@gmail.com",
    phoneNumber: "9999999999"
});

// Display the updated address book
myAddressBook.displayAddressBook();
