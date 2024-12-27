const accessControl = (req,res,next) => {
    const access = true;
    if(!access){
        res.status(401).json({
            success : false,
            message : "Yetkisiz erişim..."
        });
    }
    next();
}


module.exports = accessControl;