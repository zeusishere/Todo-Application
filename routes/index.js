//requiring the same instance of express as codeial/index.js
const express = require("express");
const  router = express.Router() ;
const homeController = require("../controllers/home_controller");

/* // to check this file is correctly required in index.js codeal
console.log("codeal/index.js has successfully required ./routes/index.js ") 
*/



/*Actions for corresponding controller */
router.get('/',homeController.home) ;
router.post('/sort',homeController.homePost);
router.post('/add-task',homeController.addTask);
router.get('/delete-task/',homeController.taskDelete);
router.post('/delete-tasks',homeController.deleteTasks);
router.get('/update-complete-status', homeController.markCompleted) ;
/*       re-routing for other router */


module.exports = router ;