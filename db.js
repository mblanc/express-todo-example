var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );

var mongo_host = process.env.MONGODB || 'localhost';

mongoose.connect( 'mongodb://' + mongo_host + '/express-todo' );