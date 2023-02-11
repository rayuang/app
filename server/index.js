import express from 'express';
import bodyParser from 'body-parser'

import adminUserRouter from './router/admin/adminUserRouter.js';

const app = express();
// app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/admin", adminUserRouter);




app.use((req, res) => {
    res.status(404).send("404");
});
app.listen(8000, () => {
    console.log("http://localhost:8000");
});