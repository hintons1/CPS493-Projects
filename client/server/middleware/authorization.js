const users = require('../models/users');

module.exports = {
    async parseAuthorization(req, res, next){
    const token = req.headers.authorization?.split(' ')[1];
    if(token){
        users.verifyJWT(token);
    }else{
        next();
    }
    }

},

requireLogin(needAdmin = false){
    return (req, res, next) => {
        if(!req.user){
            return next({
                status: 401,
                message: 'Login Required'
            })
        }
        if(needAdmin && !req.user.admin){
            return next({
                status: 403,
                message: 'Admin Required'
            })
        }
    }
}