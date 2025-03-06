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

    // Find a contact by first name and last name
    findContact(firstName, lastName) {
        return this.contacts.find(
            contact =>
                contact.firstName.toLowerCase() === firstName.toLowerCase() &&
                contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    // Edit an existing contact's details
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

    // Delete a contact by first name and last name
    deleteContact(firstName, lastName) {
        const contactIndex = this.contacts.findIndex(
            contact =>
                contact.firstName.toLowerCase() === firstName.toLowerCase() &&
                contact.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (contactIndex !== -1) {
            this.contacts.splice(contactIndex, 1);
            console.log("Contact deleted successfully!");
        } else {
            console.log("Contact not found.");
        }
    }

    // Get the number of contacts using reduce
    getNumberOfContacts() {
        return this.contacts.reduce((count) => count + 1, 0);
    }

    // Search for contacts in a particular city
    searchByCity(city) {
        const result = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
        return result.length > 0 ? result : "No contacts found in this city.";
    }

    // Search for contacts in a particular state
    searchByState(state) {
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
        "Adarsh", 
        "Patel",  
        "New Street", 
        "Bhopal", 
        "Madhya Pradesh", 
        "46203", 
        "8889988999", 
        "adarshpatel99999@gmail.com" 
    );
    myAddressBook.addContact(contact3);  // This should be rejected as duplicate
} catch (error) {
    console.log("Error:", error.message);
}

// Display all contacts in address book
myAddressBook.displayAddressBook();
