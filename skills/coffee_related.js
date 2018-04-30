var debug = require('debug')('botkit:channel_join');

module.exports = function(controller) {

    controller.hears(['coffee', 'cafe', 'café', 'Coffee', 'Coffee?', 'coffee?', '*coffee*', 'sup', 'give me coffee',
    'Give me coffee'], ['direct_mention', 'mention', 'direct_message'], function(bot, message, next) {
        bot.reply(message, 'beep bop...');
        let chosen = 'no one';
        bot.api.users.list({}, function(err, list){
            console.log(list)
            let users = list.members;
            console.log(users);
            const random = Math.random();
            // console.log(random);
            let index = Math.floor(random*users.length);
            // console.log(index);
            chosen = users[index];
            console.log(chosen);
            bot.reply(message, `<@${chosen}> your turn to make coffee!`);
    
            next();
        });
    })

}
