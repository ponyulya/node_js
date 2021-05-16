/*const express = require('express')
const mongoose =require('mongoose')
const exphbs=require('express-handlebars')
const todoRoutes=require('./routes/todos')
const PORT = process.env.PORT || 3000
const app = express()


const hbs=exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(todoRoutes)


async function start(){
try{
    await mongoose.connect('mongodb+srv://ponyulya:Ohlamon1997.@cluster0.ooaoa.mongodb.net/todos', 
    {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    app.listen(PORT, () => {
    console.log('Server has been started...')
    })
} catch(e){
    console.log(e)
    }
}

start()


*/









const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://ponyulya:Ohlamon1997.@cluster0.ooaoa.mongodb.net/todos',
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start() 


















/*const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs').promises;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

console.log('Server running on port 8080.');
const client =new MongoClient('mongodb+srv://ponyulya:Ohlamon1997.@cluster0.ooaoa.mongodb.net/library?retryWrites=true&w=majority');

const start = async () => {
    try{
        await client.connect();
         console.log("connest install");

        //await client.db().createCollection('Author');
        const Author=client.db().collection('Author');
        //await Author.insertMany([{Family: "Достоевский", First_Name: "Федор", Patronymic: "Михайлович"}, {Family: "Гончаров", First_Name: "Иван", Patronymic: "Александрович"}]);
        const user=await Author.findOne({First_Name: "Лев"});
        console.log(user);
    }catch(e){
        console.log(e);
    }
}

start()
*/