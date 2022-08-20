const authenticateDev = (req,res,next) => {
    if(req.query.password=="shivshankar") {
        next();
    }
    else {
        return res.status(400).send("Not authorized")
    }    
}

export default authenticateDev;