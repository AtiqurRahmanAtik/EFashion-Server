const express = require('express')
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./DataBase/DB_Connect.js');
const ProductRouter = require('./Routers/ProductRouter.js');
const UserRouter = require('./Routers/UserRouter.js');

var cors = require('cors');
const port = process.env.PORT || 5000;



// middleWare
app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "UPDATE","PUT", "PATCH", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200 
  })
);








//mongoose Database Connect her
 connectDB();


//  Get Product Api here
app.use('/api', ProductRouter);
app.use('/api', UserRouter);
app.use('/api',UserRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`EFashion Server listening on port ${port}`)
})
