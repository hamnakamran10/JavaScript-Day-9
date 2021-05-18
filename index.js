let names=["hamna","ramla","rameesa"]
console.log(names)
// names= new Array("anas","taha")
// console.log(names)
names[1]="omama"; //appending

for(let i=0; i<names.length; i++){
    console.log(names[i])
}
console.log(names)
console.log(names.toString())
console.log(names.join('-'))
console.log(names,names.pop(),names)
console.log(names.push("volleyball"), names)
console.log( names.shift(),names)
console.log( names.unshift("rugby"),names)

let movies=["terminator","martian","oblivion"];

let mix= names.concat(movies)

console.log(mix)
console.log(mix.slice(5,6))
console.log(mix.reverse())