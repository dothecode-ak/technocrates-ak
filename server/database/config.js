
const Mongo_URL = 'mongodb+srv://' + encodeURIComponent(process.env.DB_USER) + ':' + encodeURIComponent(process.env.DB_PASS) + '@cluster0.eltp9.mongodb.net/tech_ak?retryWrites=true&w=majority';
module.exports = {
    Mongo_URI: Mongo_URL
}