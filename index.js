const   express = require('express');

const app = express();

app.get('/',(req,res) =>
{
    res.send('Hillo dere');
}
);

app.listen(8080,()=>{
    console.log("listening at 8080");
})


