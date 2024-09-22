var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
  ];
  itemsArray.forEach((item) => {
    item.totalPrice = parseInt(item.price) * parseInt(item.quantity);
    console.log(`Total price of ${item.name}: ${item.totalPrice}`);
  });
  let totalPriceOfAllItems = 0;
  itemsArray.forEach((item) => {
    totalPriceOfAllItems += item.totalPrice;
  });
  console.log(`Total price of all items: ${totalPriceOfAllItems}`);

// quest 02

let person = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
  };
  
  console.log("Checking for existence of properties:");
  console.log(`Age property exists: ${"age" in person}`);
  console.log(`Country property exists: ${"country" in person}`);
  console.log(`FirstName property exists: ${"firstName" in person}`);
  console.log(`LastName property exists: ${"lastName" in person}`);

//   quest 03
function Person(name, email, password, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
  }
  
  let person1 = new Person("John Doe", "johndoe@example.com", "password123", 30, "male", "New York", "USA");
  let person2 = new Person("Jane Doe", "janedoe@example.com", "password123", 25, "female", "Los Angeles", "USA");
  let person3 = new Person("Bob Smith", "bobsmith@example.com", "password123", 40, "male", "Chicago", "USA");
  
  console.log("Created records:");
  console.log(person1);
  console.log(person2);
  console.log(person3);

//   quest 04

function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  let record1 = new PopulationRecord("John Doe", "male", "123  St", "Bachelor's", "Software Engineer");
  let record2 = new PopulationRecord("Jane Doe", "female", "456  St", "Master's", "Doctor");
  let record3 = new PopulationRecord("Bob Smith", "male", "789 St", "School", "Teacher");
  
  console.log("Created records:");
  console.log(record1);
  console.log(record2);
  console.log(record3);
  localStorage.setItem("populationRecords", JSON.stringify([record1, record2, record3]));

// quest 05
