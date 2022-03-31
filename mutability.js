const clone1 = {name: person.name,
    age: person.age+1,
    country: 'FR'
 };
 Object.freeze(clone1);

 const clone2 = {
    name: person.name,
    age: person.age+1,
    country: 'FR'
 };
 Object.freeze(clone2);
 
 const samePerson = {
    name: person.name,
    age: person.age+1,
    country: 'FR'
 }; 
  