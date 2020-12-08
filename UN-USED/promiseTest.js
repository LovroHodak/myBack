// NO use

getStudents = () => {
    console.log('Lovro promise test STUDENTS')
}

getTeachers = () => {
    console.log('Lovro promise test TEACHERS')
}

// if 1 fails all fails
Promise.all( [ getStudents(), getTeachers() ] )
    .then(([ response1, response2 ]) => {
        console.log(response1)
        console.log(response2)
    })

// shows only successful
Promise.allSettled( [ getStudents(), getTeachers() ] )
    .then(( [ students, teachers] ) => {
        console.log(students)
        console.log(teachers)
    })

