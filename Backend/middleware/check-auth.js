const jwt = require('jsonwebtoken')
module.exports = (req, res,next) => {
     const authHeader = req.headers['authorization'];
      if(!authHeader)
         return res.json({message: 'Authorization header is missing'});
         const token = authHeader && authHeader.split(' ')[1]
          //return res.json(token)
           //if (!token) return res.json({message: 'token comming but not able to split it' }); 
//console.log(token) // return res.json(token);
 if(!token) return res.json({message:'token missing'})
     const decode = jwt.verify(token, "NOTESAPI",{expiresIn:'1h'}, (err, user) => {
     const{username,password,email} = user;
      req.user = {username,password,email};
//console.log(user) 
if (err) return res.status(403).json({ message: 'token invalid' })
     req.user = user; // console.log(user)
     return res.json(user)
      next();
     })
 //steps authorization,split,verify, return res 
 } 