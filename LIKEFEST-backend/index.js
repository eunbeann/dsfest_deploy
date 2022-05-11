const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-Parser');

const PORT = 3001;

// let corsOptions = {
//     origin:[
//         'http://54.180.13.88',
//         'http://localhost:3000'
//     ],
//     credentials:true
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

const db = require('./models');

//라우터
const boardRouter = require('./routes/Board');
const noticeRouter = require('./routes/Notice');

app.use('/uploads',express.static("uploads"));

app.use("/api/board", boardRouter);
app.use("/api/notice", noticeRouter);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});

