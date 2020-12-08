// NO use

// DATA.js is used with TEST.js

let students = [
    {
        name: 'Lovro',
        age: 10
    },
    {
        name: 'Jan',
        age: 30
    },
    {
        name: 'Nejc',
        age: 22
    }
]

let teachers = [
    {
        name: 'Veronika',
        age: 15
    },
    {
        name: 'Kim',
        age: 35
    },
    {
        name: 'Tjasa',
        age: 25
    }
]

const printName = () => {
    console.log('PrintName function from data.js works', students, teachers)
}


//module.exports = students
//module.exports = { students, teachers}
module.exports = { students, teachers, printName }

