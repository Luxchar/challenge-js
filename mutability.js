person.age+=1
person.country='FR'
const clone1 = person
Object.freeze(clone1);
const clone2 = person
Object.freeze(clone2);
const samePerson = person
  