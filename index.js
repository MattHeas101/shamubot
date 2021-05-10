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
    if (message.content === '!birb') {
        number = 1;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/birb" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!poncho') {
        number = 9;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/poncho" + imageNumber + ".png"]})
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
        message.channel.send('You can apply using our form found here!: https://forms.gle/ezWcXygAn9CY27e96 ')
    } 
})

client.on('message', message => {
    if (message.content === '!website') {
        message.channel.send('You can find out store here!: https://seacraftmc.us/ ')
    } 
})

client.on('message', message => {
    if (message.content === '!nextevent') {
        message.channel.send('Our Next Public event will be Opening Day in June! Keep an eye out for more details! ')
    } 
})

const logo = 'https://cdn.discordapp.com/attachments/654020703846137886/841260861447208980/SCMC_Logo.png'

client.on('message', message => {
    if (message.content === '!help') {
        const embed = new Discord.MessageEmbed()
            .setTitle("Here is a list of my Commands!")
            .setThumbnail(logo)
            .setColor('#0000FF')
            .addFields(
                {
                    name: "!whale",
                    value: "Gives you a photo of a Whale!",
                    inline: false
                },
                {
                    name: "!sealion",
                    value: "Gives you a photo of a Sealion!",
                    inline: false
                },
                {
                    name: "!dolphin",
                    value: "Gives you a photo of a Dolphin!",
                    inline: false
                },
                {
                    name: "!ip",
                    value: "Provides you with the Server IP!",
                    inline: false
                },
                {
                    name: "!store",
                    value: "Provides you with a link to our Online Store!",
                    inline: false
                },
                {
                    name: "!apply",
                    value: "Gives you a link to our Staff Application Form!",
                    inline: false
                },
                {
                    name: "!website",
                    value: "Gives you a Link to our Website!",
                    inline: false
                },
            )

        message.channel.send(embed)
    }
})


client.on('ready', () => {
    console.log('Bot ready!')
})

client.login(process.env.DJS_TOKEN)