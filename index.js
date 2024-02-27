mongoose = require("mongoose");
express = require("express");

app = express();

port = 3000;
app.listen(port, () => {console.log(`running successfully on port: ${port}`)})

mongoose.connect('mongodb://localhost:27017/trapti').then(() =>{
    console.log('connected')

}).catch((error)=>console.log(error));

empSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobile : {
        type: Number,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    salary : {
        type: Number,
        required: true
    },
    married : {
        type:Boolean,
        required: true
    },
    date : {
        type:Date,
        default: Date.now
    }
})

employee = new mongoose.model('employee', empSchema)
// // createEmp = new employee(
// //     {
// //         name: 'Trapti',
// //         mobile: 9528195555,
// //         age: 23,
// //         salary: 50000,
// //         married: true,
// //     })
// createEmp.save()


       //--------multipale entray

// createEmp1 = new employee(
//    {
//         name: 'Trapti',
//         mobile: 9528195555,
//         age: 23,
//         salary: 30000,
//         married: true,
//     })
// createEmp2 = new employee(
//     {
//         name: 'manu',
//         mobile: 9528195555,
//         age: 25,
//         salary: 40000,
//         married: false,
//     })
// createEmp3 = new employee(
//         {
//             name: 'peehu',
//             mobile: 9528195555,
//             age: 24,
//             salary: 50000,
//             married: true,
//         })

// empD =  employee.insertMany([createEmp1,createEmp2,createEmp3])
// console.log(empD)



// createEmp = async()=>{
//     try
//     {createE =new employee(
//     {
//         name: 'manu',
//         mobile: 9888456541,
//         age: 23,
//         salary: 30000,
//         married: true,
//     });

//     empD = await createE.save();}
//     catch(error){
//         console.log(error.message)
//     }
// console.log(`data inserted successfully`);
// }

// createEmp();



readData = async() => {
    try{
        data = await employee.find({married:true}).select({name:1}).limit(3).sort({salary:-1});
        console.log(data);
    }
    catch(error)
    {
    console.log(error);
    }
}
readData();


