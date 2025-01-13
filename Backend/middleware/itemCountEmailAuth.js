const jwt = require("jsonwebtoken"); function
    authenticateTokenCount(req, res, next) {
        const token = req.headers["authorization"]?.split(' ')[1];
         // Assuming "Bearer <token>" format
          if (!token) return res.status(401).json({
    message: "Access Denied"
}); 
jwt.verify(token, 'NOTESAPI', (err, user) => {
    if (err) return
    res.status(403).json({ message: "Invalid Token" });
    req.user = user; // Attach decoded user info(e.g., email) to the request
     next();
}); }
module.exports = authenticateTokenCount;