const mongoose = require('mongoose') ;
const urls = 'mongodb://localhost:27017/lingam_kiros';
const url = 'mongodb+srv://slingggam:lingam4you@lingamkiros.a4jjh.mongodb.net/?retryWrites=true&w=majority&appName=LingamKiros';
mongoose.connect(url, { useNewUrlParser: true,
     useUnifiedTopology: true }).then(() => {
         console.log("Database connected successsfully"); })
         .catch((error) => 
             {
                 console.log("An error occur while db connection", error) });