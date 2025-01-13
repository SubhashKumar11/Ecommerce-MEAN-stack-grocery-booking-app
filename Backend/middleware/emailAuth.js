const jwt = require('jsonwebtoken'); // Middleware to authenticate token and extract email
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message:
                'Access Token Required for this '
        });
    } jwt.verify(token, 'NOTESAPI', (err, user) => {
        if (err)
            return res.status(403).json({ message: 'Invalid Token' });
        req.email = user.email; // Extract email from the token payload 
        next();
    });
};
module.exports = authenticateToken; 