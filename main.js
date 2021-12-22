/* 
👉 Kata is to sort courses array of objects in ascending order by using name key. 
*/

//👉 Write the function your CodeWarriors will start with below here:


const courses = [
    {id: 1, name: "Node.js"},
    {id: 2, name: "javaScript"},
    {id: 3, name: "bash"},
    {id: 4, name: "SQL"},
    {id: 5, name: "TDD"},
  ];// an array of objects


  export function objectAscSorter(object) {
  let sortedObjects = object.sort(function(a, b) {//creating a function within sort method with a and b parameters
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  //making sure that function converts capital letters to lowercase that might be in key name so it wont affect the ASCII order
    
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
  //here we create comparison logic so if if value of nameA is less than value of nameB then it goes before, if value if nameA is greater than nameB then it goes after nameB, otherwise they are equivalent to each other
  });
  return sortedObjects;
}
  console.log(objectAscSorter(courses));