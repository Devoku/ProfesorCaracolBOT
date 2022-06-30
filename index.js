const Discord = require("discord.js")
require("dotenv").config()
const mongoose = require("mongoose")
const generateImage = require("./generateImage")


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})




const welcomeChannelId = "991262296179490896"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `**¡Bienvenid@! <@${member.id}> a Stardew Valley LATAM** \n**Recuerda leer las normas para evitar inconvenientes** `,
        files: [img]
    })
})

client.on('guildMemberAdd',guildMember=>{
    let welcomeRole= guildMember.guild.roles.cache.find(role => role.name === '🍂╏Comunidad Stardew Valley LAT')

    guildMember.roles.add(welcomeRole)
})

client.login(process.env.TOKEN)