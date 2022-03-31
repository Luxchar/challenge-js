person.age+=1,person.country='FR'
const clone1 = Object.assign({},person)
const clone2 = Object.assign({},person)
Object.freeze(clone1.name,clone1.age,clone1.country);
Object.freeze(clone2.name,clone2.age,clone2.country);
const samePerson = person