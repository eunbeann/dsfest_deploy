const http = require('http');
const express = require('express');
const app = express();
const server = createServer(app);
const cors = require('cors');
const bodyParser = require('body-Parser');

const PORT = 3001;

let corsOptions = {
    origin:'http://54.180.13.88',
    credentials:true
}

app.use(express.json());
app.use(cors(corsOptions));

const db = require('./models');

//라우터
const boardRouter = require('./routes/Board');
const noticeRouter = require('./routes/Notice');

app.use(express.static("uploads"));

app.use("/board", boardRouter);
app.use("/notice", noticeRouter);


db.sequelize.sync().then(() => {
    server.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});

