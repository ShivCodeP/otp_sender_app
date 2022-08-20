const authenticateDev = (req,res,next) => {
    console.log(req);
    next();
}

export default authenticateDev;