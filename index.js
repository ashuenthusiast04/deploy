const express= require("express");
const app= express();

app.use(express.json());
app.get("/interest/",(req,res)=>{
    const p= parseFloat(req.query.p);
    const r =parseFloat(req.query.r);
    const t=parseFloat(req.query.t);
    const interest=(p*r*t)/100 ;
    const to=p+interest;
    res.send({
        total:to,
        interest:interest,
    }) 
});

app.listen(3006);