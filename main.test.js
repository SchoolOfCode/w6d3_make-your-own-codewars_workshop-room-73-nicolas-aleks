//👉 Write your tests below here:
import { objectAscSorter } from  "./main.js";

const actual = [
    {id: 1, name: "Node.js"},
    {id: 2, name: "javaScript"},
    {id: 3, name: "bash"},
    {id: 4, name: "SQL"},
    {id: 5, name: "TDD"},
  ];
const expected = [{id: 3, name: "bash"},
    {id: 2, name: "javaScript"},
    {id: 1, name: "Node.js"},  
    {id: 4, name: "SQL"},
    {id: 5, name: "TDD"}];
test(`Sort array of objects by name in asc order`, () => {
    
    expect(actual).toEqual(expected)
  });
