const mongoose = require('mongoose')
const Student = require('./Student.js')
const db = mongoose.connection;
const mongoURI = 'mongodb://localhost:27017/students';


mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log('the connection with mongod is established')
})

const studentsNames = [
    'Abdullah Altwaim',
    'Abdulrahman Alrifae',
    'Aesha	Alshuraim',
    'Ahlam	Almusallam',
    'Ahmed	Al-Bahrani',
    'Ahmed	AlMeshaal',
    'Ashwag	Alrougui',
    'Azzam	Alkhaldi',
    'Bedour	Alrashed',
    'Eman	Yahya',
    'Faisal	Alsharari',
    'Hanan	Alharbi',
    'Hazim	Alblowi',
    'Khalid	alarifi',
    'Mo	Asslahi',
    'Mansour Almohsen',
    'Munira	AlShuhail',
    'Munirah almadhi',
    'Nada	Alotaibi',
    'nawaf	almansour',
    'Norah	Alessa',
    'Reem	AlHarbi',
    'sara	daghustani',
    'Sulaiman Alhabib',
    'Turki	Almalki',
    'Waleed	Mastour']


const studentsObjects = studentsNames.map(student => { return { name: student } })

// Student.insertMany(studentsObjects, (error, student) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(student);
//     } db.close()
// });

// Student.find((err, student) => {
//     console.log(student);
//     db.close()
// })

// Student.findOneAndUpdate({ name: 'Waleed	Mastour ' }, { Attendance: false }, (err, student) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(student);
//     }
//     db.close()
// })

// Student.findOneAndUpdate({ name: 'Turki	Almalki' }, { Attendance: false }, (err, student) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(student);
//     }
//     db.close()
// })

// Student.findOneAndRemove({ name: 'Mo	Asslahi' }, (err, student) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('This is the deleted student:', student);
//     }
//     db.close()
// })
