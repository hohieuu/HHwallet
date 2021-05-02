module.exports=function(app){
    app.use('/',require('../routes/index.route'));
    app.use('/create-wallet',require('../routes/create-wallet.route'));
    app.use('/access-my-wallet',require('../routes/access-my-wallet.route'));

    app.use(function(req,res,next){
        res.send('NOT FOUND RESOURCE');
    })

    app.use(function(err,req,res,next){
        console.log(err.message);
        res.send('ERROR, TRY AGAIN!!!!');

    })
}


