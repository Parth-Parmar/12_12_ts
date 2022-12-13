import mongoose,{connect} from "mongoose";


const mongopass = process.env.PASS
const DB:any = 'mongodb+srv://parth:parthnetpair@cluster0.iewvncq.mongodb.net/?retryWrites=true&w=majority'


function connects() {
    mongoose.set('strictQuery', false);
    return connect(DB)
    .then(()=>{
        console.log("db connected successfully")
    }).catch((error)=>{
        console.log(error)
    })
}

export default connects
