var person = {
    name: "Ankit Rawat",
    age: 20
    }
    var src = {
    name: "Ankit Rawat",
    age: 20
    }
    const matches = (person, src) =>
    Object.keys(src).every(key => person.hasOwnProperty(key) && person[key] === src[key]);
    console.log(matches(person,src));// true