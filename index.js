const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

// Starting server at port 4040

app.listen(4040, function(){
    console.log("Server is running on port 4040");
});

