person.age+=1
person.country='FR' 
const clone1 = Object.assign({},person)
Object.freeze(clone1);
const clone2 = Object.assign({},person)
Object.freeze(clone1);
const samePerson = person
  