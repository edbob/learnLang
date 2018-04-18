const redis = require('redis'),
    client = redis.createClient()

client.on('error', function (err) {
    console.log('Error ' + err);
});

client.hmset("user", ["name", "Mary Jones", "password", "1412313243", "email", "mjones@example.com"]);

client.hkeys('user', function (err, replies) {
    console.log(replies.length);
    replies.forEach(function (reply, i){
        console.log(i + ': ' + reply);
    });
    client.quit();
});    

client.hgetall('user', function(err, obj) {
    console.log(err, obj);
});

client.multi([
    ["mget", "multifoo", "multibar", redis.print],
    ["incr", "multifoo"],
    ["incr", "multibar"]
]).exec(function (err, replies) {
    console.log(replies);
});