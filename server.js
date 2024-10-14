const express=require("express")
const dotenv = require("dotenv").config()
const app =express();

const port =process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"))
app.use('/api/user',require("./routes/userroutes"))

app.use(require("./middleware/errorHandler"))

app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})

