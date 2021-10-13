const mongoose = require('mongoose'); mongoose

.connect('mongodb+srv://EMTM1012:<password>@cluster0.k0iyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));