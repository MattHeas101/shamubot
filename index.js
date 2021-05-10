const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('message', message => {
    if (message.content === '!whale') {
        number = 11;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/whale" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!dolphin') {
        number = 11;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/dolphin" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!sealion') {
        number = 11;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/sealion" + imageNumber + ".png"]})
    } 
})


client.on('ready', () => {
    console.log('Bot ready!')
})

client.login(process.env.DJS_TOKEN)