const errorMiddleware = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Something Went Wrong";

     return  res.status(err.statusCode).json({
                    success:false,
                    message: err.message,
                    stack:err.stack    //This is particularly useful for debugging because it shows the sequence of function calls that led to the error.
                })
}



export default errorMiddleware;