/* function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
} */

/* const students = [
	{
		id: "e415141f-360f-434d-b314-9953944757fd",
		name: "Noyon Rahman",
		email: "noyon@gmail.com",
	},
	{
		id: "e25c2814-ed24-4b0c-a67f-cfff85ea2585",
		name: "Nadim Hasan",
		email: "nadim@gamil.com",
	},
	{
		id: "64072592-5e0f-4d4c-8341-f6bc97654ab5",
		name: "Shakil Ahmed",
		email: "shakil@gmail.com",
	},
]; */

/* const isToUpdate = "e25c2814-ed24-4b0c-a67f-cfff85ea2585";

const updatedData = {
    name: "Nadim",
    email: "nadim4812@gmail.com"
} */

// update

/* let updatedObj = students.find((std) => std.id === isToUpdate)


updatedObj = {
    id: isToUpdate,
    ...updatedData
} */

/* const updatedIndex = students.findIndex((std) => std.id === isToUpdate)
students[updatedIndex] = {
	...students[updatedIndex],
	...updatedData
}


console.log("Update", students); */

// delete

// method 1
/* students.splice(updatedIndex, 1)
console.log("Delete", students); */

// method 2
/* const filteredStudents = students.filter((std) => std.id !== isToUpdate)
console.log("Delete", filteredStudents); */

// teverse
/* for (let i = 0; i < students.length; i++) {
	const element = students[i];
	console.log(element);
	
} */

/* for(const i in students){
	console.log(students[i]);
} */

/* for(const student of students){
	console.log(student);
} */

// Object over array
const students = {
	"e415141f-360f-434d-b314-9953944757fd": {
		id: "e415141f-360f-434d-b314-9953944757fd",
		name: "Noyon Rahman",
		email: "noyon@gmail.com",
	},
	"e25c2814-ed24-4b0c-a67f-cfff85ea2585": {
		id: "e25c2814-ed24-4b0c-a67f-cfff85ea2585",
		name: "Nadim Hasan",
		email: "nadim@gamil.com",
	},
	"64072592-5e0f-4d4c-8341-f6bc97654ab5": {
		id: "64072592-5e0f-4d4c-8341-f6bc97654ab5",
		name: "Shakil Ahmed",
		email: "shakil@gmail.com",
	},
};

/* for(const i in students){
	console.log(students[i]);
} */
// add new 
const std = {
	id: "ddb4f9e4-4239-4492-976d-4edc543c7ed5",
	name: "Sajjad",
	email: "sajjad@gmail.com",
};

students[std.id] = std;

console.log("Insert new data", students);


// update
const needToUpdated = "e25c2814-ed24-4b0c-a67f-cfff85ea2585";
const updatedData = {
	name: "Md Nadim",
	email: "nadim4812@gmail.com",
};

students[needToUpdated] = {
	...students[needToUpdated],
	...updatedData,
};

console.log("Update", students);




// javascript array and object execute time difference
/* const arr = []
const arrToObj = {};

for (let i =0 ; i <500000; i++){
    const obj = {
        id: i + 1,
        value: i + 1
    }

    arr.push(obj)
    arrToObj[i +1] = obj;
}

console.time("array")
const findObj = arr.find((ob) => ob.id === 400000 );
console.log(findObj);
console.timeEnd("array")


console.time("obj")
const findtheObj = arrToObj[400000]
console.log(findtheObj);
console.timeEnd("obj") */