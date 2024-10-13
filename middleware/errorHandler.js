 const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode : 500;
    res.json({message: err.message, stackTrace: err.stack});

    switch(statusCode){
        case 400:
            res.json({
                titile:"Validation Failed",
                message:err.message,
                stackTrace:err.stack
            })
            case 404:
                res.json({
                    titile:"Not Found",
                    message:err.message,
                    stackTrace:err.stack
                })
            default:
                break;
    }

 }

 module.exports=errorHandler