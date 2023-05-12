const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Masters'
    }
  };
  
//   const degree = getNestedValue(user, 'education.degree');
//   console.log(degree); // Output: Masters

const {education:{degree}} =user
console.log(degree)
  