//this helps in better debugging mode.

class AppError extends Error{
    constructor(message,statusCode){   // message and status code will come here , from where this class being called.
        super(message);

        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor); //Error.captureStackTrace(targetObject, constructorOpt) captures the stack trace of the error at the point where it is called and stores it in the targetObject (usually this when used in a custom error class).
    }
}

export default AppError;