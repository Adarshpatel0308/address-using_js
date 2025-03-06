class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a new contact to the address book (with duplicate check)
    addContact(contact) {
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

    // Sort contacts by City
    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
        console.log("\nContacts sorted by city:");
        this.contacts.forEach(contact => console.log(contact.display()));
    }

    // Sort contacts by State
    sortContactsByState() {
        this.contacts.sort((a, b) => a.state.toLowerCase().localeCompare(b.state.toLowerCase()));
        console.log("\nContacts sorted by state:");
        this.contacts.forEach(contact => console.log(contact.display()));
    }

    // Sort contacts by Zip
    sortContactsByZip() {
        this.contacts.sort((a, b) => parseInt(a.zip) - parseInt(b.zip));
        console.log("\nContacts sorted by zip:");
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
