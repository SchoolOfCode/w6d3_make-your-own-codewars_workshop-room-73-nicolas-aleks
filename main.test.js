//👉 Write your tests below here:
import { objectAscSorter } from  "./main.js";


test(`Sort array of objects by name in asc order`, () => {
  //ARRANGE
  const data = [{id: 1, name: "Node.js"}, {id: 2, name: "javaScript"}, {id: 3, name: "bash"}, {id: 4, name: "SQL"}, {id: 5, name: "TDD"},];
  //ACT
  const actual = objectAscSorter(data)
  //ASSERT
  const expected = [{id: 3, name: "bash"}, {id: 2, name: "javaScript"}, {id: 1, name: "Node.js"}, {id: 4, name: "SQL"}, {id: 5, name: "TDD"}];

    expect(actual).toEqual(expected)
  });

  test(`Sort array of objects by name`,() =>{
    const data = [
      {id:5, name:"Aaron"}, 
      {id:2, name:"Zoey"}, 
      {id: 500, name:"Mark"}, 
      {id:1, name:"rachel"}, 
      {id:67, name:"HeLeN"}
    ];
    const actual = objectAscSorter(data)
    const expected = [  
      { id: 5, name: 'Aaron' },
      { id: 67, name: 'HeLeN' },
      { id: 500, name: 'Mark' },
      { id: 1, name: 'rachel' },
      { id: 2, name: 'Zoey' }
    ];
    expect(actual).toEqual(expected)
  })

  test(`If not an array should be null`, () =>{
    const data = "not an array"
    const actual = objectAscSorter(data)
    const expected = null
    expect(actual).toBe(expected)
  })

  test(`If not an array should be null`, () =>{
    const data = {"this is":"not an array"}
    const actual = objectAscSorter(data)
    const expected = null
    expect(actual).toBe(expected)
  })