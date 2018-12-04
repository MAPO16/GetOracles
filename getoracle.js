const express = require('express');
const app = express();
var dao = require('./connorcl');

var router = express.Router();

router.get('/rest/empleado', function (request, response) {


    

    sql = "SELECT * FROM SAT_AGS_CAYAS_MV ";

    dao.open(sql,[],false,response);
    

   response.end;


});

   app.use(router);



app.listen(2000, function () {
 console.log('Node app is running on port 2000');

});