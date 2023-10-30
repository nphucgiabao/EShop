const express = require('express');
const route = require('./route');
const hbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const cartMiddleware = require('./middleware/cartMiddleware');
const {Server} = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const passport = require('./middleware/passportMiddleware');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

//cấu hình session
app.use(session({
    secret: 'S3cret', //tạo khóa cho mỗi session
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 20*60*100 //thời gian tồn tại của session 20 phút
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.isLoggedIn = req.isAuthenticated();
    next();
})

//sử dụng cartMiddleware
app.use(cartMiddleware);

app.use(cookieParser());
//app.use(csrf({ cookie: true }));

//cấu hình route
route(app);

//cấu hình view engine
app.engine('hbs', hbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: [`${__dirname}/views/partials`],
    helpers: {
        //tạo thẻ times ở view
        times: function(num, block){
            let accum = '';
            for(let i = 0; i < num; ++i)
                accum += block.fn(i);
            return accum;
        },
        section: function(name, options) { 
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this); 
            return null;
        } 
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}).engine);

//cấu hình các thư mục tĩnh
app.use(express.static(`${__dirname}/public`));
app.use('/css', express.static(`${__dirname}/public/css`));
app.use('/img', express.static(`${__dirname}/public/img`));
app.use('/js', express.static(`${__dirname}/public/js`));
app.use('/lib', express.static(`${__dirname}/public/lib`));
app.set('view engine', 'hbs');

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('review', (review) => {
        io.emit('review', review);
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080!!!');
});