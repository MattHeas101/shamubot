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
        number = 6;
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
        message.channel.send('The Server IP Is: "play.seacraftmc.us"!')
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
        message.channel.send('You can find our store here!: https://seacraftmc.us/ ')
    } 
})

client.on('message', message => {
    if (message.content === '!nextevent') {
        message.channel.send('Keep an eye out in the Discord for the next event! ')
    } 
})

client.on('message', message => {
    if (message.content === '!feedback') {
        message.channel.send('Here is a link to the Feedback form for the bot! All suggestions are taken into consideration by SeaCraft Owners! https://docs.google.com/forms/d/e/1FAIpQLScVfL50ihW53NbF6DwbzB4tv6hAuyQh_Tfi99HTw2C-ITAX-A/viewform ')
    } 
})

client.on('message', message => {
    if (message.content === '!beluga') {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/beluga" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!jellyfish') {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/jellyfish" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!turtle') {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/turtle" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!show') {
        number = 32;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/show" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!dawn') {
        number = 10;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/dawn" + imageNumber + ".png"]})
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
                    name: "!ip",
                    value: "Provides you with the Server IP!",
                    inline: true
                },
                {
                    name: "!store",
                    value: "Provides you with a link to our Online Store!",
                    inline: true
                },
                {
                    name: "!apply",
                    value: "Gives you a link to our Staff Application Form!",
                    inline: true
                },
                {
                    name: "!website",
                    value: "Gives you a Link to our Website!",
                    inline: true
                },
                {
                    name: "!show",
                    value: "Gives you a photo of a SeaWorld Show!",
                    inline: true
                },
                {
                    name: "!whale",
                    value: "Gives you a photo of a Whale!",
                    inline: true
                },
                {
                    name: "!sealion",
                    value: "Gives you a photo of a Sealion!",
                    inline: true
                },
                {
                    name: "!dolphin",
                    value: "Gives you a photo of a Dolphin!",
                    inline: true
                },
                {
                    name: "!beluga",
                    value: "Gives you a photo of a Beluga Whale!",
                    inline: true
                },
                {
                    name: "!turtle",
                    value: "Gives you a photo of a Turtle!",
                    inline: true
                },
                {
                    name: "!feedback",
                    value: "Provides you with a link to our feedback form!!",
                    inline: true
                },
            )

        message.channel.send(embed)
    }
})


client.on('ready', () => {
    console.log('Bot ready!');

    client.user.setPresence({
        activity: {
            name: 'play.seacraftmc.us',
            type: 'PLAYING'
        }
    });
        },
)

client.login(process.env.DJS_TOKEN)