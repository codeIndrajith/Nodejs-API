


// midlware function
const logger = (req , res , next) => {
    req.hello = 'Hello world'
    // console.log('Midlware ran')
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;