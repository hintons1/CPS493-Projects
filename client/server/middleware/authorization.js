const users = require('../models/users');

module.exports = {
    async parseAuthorization(req, res, next){
    const token = req.headers.authorization?.split(' ')[1];
    if(token){
        const payload = await users.verifyJWT(token);
        req.user = payload;
        next();
    }else{
        return next();
    }
}
},

requireLogin(needAdmin) {
    needAdmin = needAdmin || false;
    return (req, res, next) => {
        if(!req.user){
            return next({
                status: 401,
                message: 'Login Required'
            });
        }
        if(needAdmin && !req.user.admin){
            return next({
                status: 403,
                message: 'Admin Required'
            });
        }
        next();
    };
}