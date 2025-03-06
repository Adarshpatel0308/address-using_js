// Class to define a Contact in the Address Book
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
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