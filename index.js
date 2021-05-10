const Discord = require('discord.js')
const client = new Discord.Client()
//const config = require('./config.json')

client.on('message', message => {
    if (message.content === '!whale') {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/whale" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!dolphin') {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/dolphin" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!sealion') {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/sealion" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!ip') {
        message.channel.send('The Server IP Is: "play.seacraft.us" [Open to Donators, Opening in June!]')
    } 
})

client.on('message', message => {
    if (message.content === '!store') {
        message.channel.send('The Store Can be found at: https://seacraftmc.craftingstore.net/ ')
    } 
})

client.on('message', message => {
    if (message.content === '!apply') {
        message.channel.send('You can apply using our form found here!: https:forms/ezWcXygAn9CY27e96 ')
    } 
})

client.on('ready', () => {
    console.log('Bot ready!')
})

client.login(process.env.DJS_TOKEN)