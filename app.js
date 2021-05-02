const express=require('express')
const app=express();
const pug=require('pug');
app.set('views', './views');
app.set('view engine', 'pug');
require('./middle_ware/routes.mdw')(app);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
