const express = require('express');
const route = require('./route');
const hbs = require('express-handlebars');
const app = express();

route(app);

app.engine('hbs', hbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: [`${__dirname}/views/partials`],
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

app.use(express.static(`${__dirname}/public`));
app.use('/css', express.static(`${__dirname}/public/css`));
app.use('/img', express.static(`${__dirname}/public/img`));
app.use('/js', express.static(`${__dirname}/public/js`));
app.use('/lib', express.static(`${__dirname}/public/lib`));
app.set('view engine', 'hbs');

app.listen(8080, () => {
    console.log('Server listening on port 8080!!!');
});