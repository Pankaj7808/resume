import express from 'express';
const app = express();
const port = process.env.PORT || '3000';
import web from './routes/web.js'
//Set tempelate Enginer
app.set('view engine','ejs')

app.use(express.static('public'))

//Load routes
app.use('/',web)

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})
