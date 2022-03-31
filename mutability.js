const person = {
   name: 'Rick',
   age: 77,
   country: 'US',
 }
person.age+=1
person.country='FR' 
const clone1 = Object.assign({},person)
const clone2 = Object.assign({},person)
const samePerson = person
  