//module.exports.<actionName or handler Function name> = function(req, res){} ;
const mongoose=require("../config/mongoose.js")
const Tasks = require("../models/task");

// this function will be exported to routes/index.js
module.exports.home = function (req , res)
{
    Tasks.find( {}   ,
        function(err ,allTasks)
            {
                if(err)
                {
                    console.log("error in fetching tasks from the database") ;
                    return ;
                }
                return res.render("../views/homepage.ejs",{ tasks_content :allTasks}) ;
            
        } )
} ;
module.exports.homePost = function (req , res)
{
    Tasks.find( {}   ,
        function(err ,allTasks)
            {
                if(err)
                {
                    console.log("error in fetching tasks from the database") ;
                    return ;
                }
                // sort by due date
                const sortByDueDate=(a,b) =>
                {
                    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
                };
                // sort by status
                const sortbystatus = (a,b) =>
                {
                    
                    if(a.status == b.status && a.status=="Pending")
                        return 0;
                        if(a.status=="Pending")
                        return -1 ;
                        else return 1;
                };
                

                // sorting the tasks according to input from the user
               if(req.body.sortkey =="Pending")
               {
                
                allTasks.sort(sortbystatus);
               }
               if(req.body.sortkey =="Completed")
               {
                
                allTasks.sort(sortbystatus).reverse();
               }
               if(req.body.sortkey =="By Due Date")
               {
                allTasks.sort(sortByDueDate);
               }
               
                return res.render("../views/homepage.ejs",{ tasks_content :allTasks}) ;
            
        } )
} ;

// creates a new task
module.exports.addTask = function(req ,res)
{
    

    Tasks.create({
                    task:req.body.task ,
                    description: req.body.description,
                    priority:req.body.priority,
                    dueDate:req.body.duedate,
                    status:"Pending" ,
                    category:req.body.category ,
    }, function(err, newTask)
    {
        if (err)
        {
            console.log("error in creating task",err);
            return ;
            
        }
        
        res.redirect('/');
        
    }
    )
} ;
// deletes a single task
module.exports.taskDelete= function(req,res)
{
    
    Tasks.findByIdAndDelete(req.query.id ,function(err)
    {
        if (err)
        {
            console.log("error in deleting from db ",err)
            
        }
        return res.redirect('/');
    }
    );
    
} ;
// deletes multiple task
module.exports.deleteTasks = function(req,res)
{
    var keys =JSON.parse(req.body.key);
    
  for ( let k in keys)
  {
    Tasks.findByIdAndDelete(keys[k] ,function(err)
    {
        if (err)
        {
            console.log("error in deleting from db ",err)
            
        }
       
    }
    );
  }
    
    res.redirect("/");
} ;

// marks the task completed
module.exports.markCompleted = function(req,res)
{
    
   
    Tasks.findByIdAndUpdate(req.query.id ,{"status":"completed"}, function(err,result)
                                {
                                    if (err)
                                    {
                                        console.log("error in updating status ", err) ;
                                        return ;
                                    }
                                    res.redirect('/');
                                }
    );
}