if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://abaz:jesuschrist84990@ds141661.mlab.com:41661/vidjot_production'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot'
    }
}