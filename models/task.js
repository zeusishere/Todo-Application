const mongoose = require ("mongoose") ;

//schema defining our tasks
//category describes the nature of task
// status defines the progress of task
const taskSchema = new mongoose.Schema(
    {
        task:{
                type :String ,
                required :true,
        } ,
        description:{
            type :String ,
            
            default:"",
        },
        dueDate :{
            type:Date,
            default:Date.now,
        },
        priority:{
            type :String ,
            default:"Normal",
    } ,
    category:{
        type :String ,
        default:"Miscellanious",
} ,
  

    status:
    {
        type :String ,
        default:"pending",
    }
    }
);

//collection using taskSchema
const Tasks = mongoose.model ("Tasks",taskSchema) ;

module.exports = Tasks ;