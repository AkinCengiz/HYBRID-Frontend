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

const denemeMiddleware = (req,res,next) => {
    const yetki = true;
    if(!yetki){
        res.status(401).json({
            success : false,
            message : "İşlem için yeterli izine sahip değilsiniz..."
        });
    }
    next();
}


module.exports = {accessControl, denemeMiddleware}