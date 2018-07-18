if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://abazudosen:jesuschrist8499@ds141221.mlab.com:41221/vidjot'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot'
    }
}