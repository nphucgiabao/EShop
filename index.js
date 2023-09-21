const express = require('express');
const route = require('./route');
const hbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const cartMiddleware = require('./middleware/cartMiddleware');

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

//sử dụng cartMiddleware
app.use(cartMiddleware);

//cấu hình route
route(app);

//cấu hình view engine
app.engine('hbs', hbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: [`${__dirname}/views/partials`],
    //tạo thẻ times ở view
    helpers: {
        times: function(num, block){
            let accum = '';
            for(let i = 0; i < num; ++i)
                accum += block.fn(i);
            return accum;
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

app.listen(8080, () => {
    console.log('Server listening on port 8080!!!');
});