const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/products_manager_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(()=> console.log("Established a connection to the database"))
    .catch(()=> console.log("Something went wrong when connecting to the database",
err));