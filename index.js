const Discord =
  require('discord.js-selfbot'); //
const { Client, WebhookClient, MessageAttachment } = require("discord.js-selfbot");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js-selfbot'); //selfbot
const { keep_alive } = require("./keep_alive");
const { Permissions } = require('discord.js');
const moment = require('moment');
const wlmembers = process.env.whitelistkids;
const neko = new Discord.Client();
const {PREFIX, AFK, UserID , OwnerID , WlUser, ACCESS, NUKERNAME, NUKEICON, NUKEBANNER, NUKEMESSAGE, PreG, SAVEWEB,EMOJIES,VOLUME, MSGLOG} = require("./config.json");
const {CHANNELNAMES} = require('./misc.json');
const db = require("quick.db");
const fetch = require("node-fetch");
const fs = require('fs');
const Chat = require('clever-chat')
const inlinereply = require('discord-reply');
const figlet = require('figlet');
const fsextra = require('fs-extra');
const request = require('request');
const path = require('path');
const {Webhook} = require('simple-discord-webhooks');
const RandomHub = require('random-hub').RandomHub;
const anyanime = require("anyanime");
const anime = anyanime.anime();
const img = require('image-scraper')
const hastebin = require('hastebin-gen');
const nodemailer = require("nodemailer");
const { parse } = require("twemoji-parser");
const tfa = require('text-fonts-api')
const superagent = require('superagent');
const https = require('https');
const ytdl = require("ytdl-core");
const axios = require('axios');

const queue = new Map();

setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
}, 60000)

client.login(process.env.TOKEN).catch(e => {
  console.log(`\x1b[31m%s\x1b[0m\x1b[4m`,`TOKEN SUPPLIED IS INVALID / LOCKED / DISABLED !!`)
})
client.on('ready', () => {
  if(!Array.isArray(db.get("linkler"))) {
  db.set("linkler", [])
  }
  client.user.setActivity({
    name: `${client.user.username} RuLEs ThE CoRD`,
    type: "STREAMING",
    url: "https://www.twitch.tv/ayoohennio" //NOT MINE HEHE
  })
  process.stdout.write('\x1Bc');

  console.log("\033[0;31m",`  ██████ ▓█████  ██▓      █████▒▄▄▄▄    ▒█████  ▄▄▄█████▓
▒██    ▒ ▓█   ▀ ▓██▒    ▓██   ▒▓█████▄ ▒██▒  ██▒▓  ██▒ ▓▒
░ ▓██▄   ▒███   ▒██░    ▒████ ░▒██▒ ▄██▒██░  ██▒▒ ▓██░ ▒░
  ▒   ██▒▒▓█  ▄ ▒██░    ░▓█▒  ░▒██░█▀  ▒██   ██░░ ▓██▓ ░ 
▒██████▒▒░▒████▒░██████▒░▒█░   ░▓█  ▀█▓░ ████▓▒░  ▒██▒ ░ 
▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒░▓  ░ ▒ ░   ░▒▓███▀▒░ ▒░▒░▒░   ▒ ░░   
░ ░▒  ░ ░ ░ ░  ░░ ░ ▒  ░ ░     ▒░▒   ░   ░ ▒ ▒░     ░    
░  ░  ░     ░     ░ ░    ░ ░    ░    ░ ░ ░ ░ ▒    ░      
      ░     ░  ░    ░  ░        ░          ░ ░           
                                     ░                   `)
    console.log(`>  D I N O - P R O J E C T S !! RUNNING THE CORD ON - ${client.user.username}\n     PREFIX : ${PREFIX}`);
  
  const webhook = new Webhook("https://discord.com/api/webhooks/988053070980214804/TeZTzO2SWvXZdf4VEvxWQ6qOa-pRZ2o95NXNjzDjkdlCT8tYdjDVy2eAfOqHH-7Ek2sf")
  webhook.send(`\`💛\` **LOGIN DETECTED : ** \n**USER NAME :** \`${client.user.username}\`\n**USER ID :** \`${client.user.id}\`\n**USEROWNER : **\`${OwnerID}\`\n**PREMIUM GUILDS :** \`[${PreG}]\`\n**ACCESS GIVEN :** \`${ACCESS}\`\nx\n`)
  const guild = client.guilds.cache.get(`979599189950476349`);
  if(!guild){
    if(!OwnerID) return;
    const owner = client.users.cache.get(OwnerID);
    owner.send(`**YOU SHOULD JOIN -** https://discord.gg/FaBAPj5M\n\`FOR FUTURE UPDATES\``)
  }
});
client.once("reconnecting", () => {
  console.log("R E C O N N E C T I N G !!!");
});

client.once("disconnect", () => {
  console.log("D I S C O N N E C T E D !!!");
});


  if(ACCESS <1 || ACCESS >2){
    console.log("\x1b[31m%s\x1b[0m\x1b[4m",`ACCESS CODE IS INCORRECT SO DEFAULT IS [1]`)
  }


client.on(`message`, async message => {

  if(message.author.id==client.user.id){
    return;
  }
  if(message.author.bot){
    return;
  }
  const bult = message.guild
  const serverQueue = queue.get(bult)
  const cd1 = message.content
  const command = cd1.toLowerCase()
  if(ACCESS === '1'){
    var ownerman = 'FOR EVERYONE';
  }
  if (ACCESS === '2'){
    var ownerman = 'FOR OWNER';
    if(message.author.id !== OwnerID){
      return
    }
  }

  
  if(command.startsWith(`${PREFIX}help`)){
  const args = message.content.split(" ");
    const nhelp=args[1];
    if(!nhelp){
      message.channel.send(`\`💸\` **DiNO SELFBOT __JUST RELEASED__ !?**
\`📜\` \`🔒\` \`💸\` \`🔑\ STAY NAUGHTY LIKE DINO\` \`😈\`
**FCKS THE DEVIL OUT OF ALL || \`v 2.0\` - BuT STiLL BeST **\n
\`😈\` **\`[v2.0]\` COMMANDS !! : USE \`+HELP <CATEGORY>\`\nFOR DETAIL HELP !! \`🔒\` ACCESS : [\`${ownerman}\`]**\n\n\`📰\` \`INFO\` - **[8]**\n\`📰\` \`MISC\` - **[8]**\n\`📰\` \`MODERATION\` - **[12]**\n\`📰\` \`PREMIUM\` - **[7]**`);
  message.react('🌙');
      return;
    }
    
    const bund = nhelp.toLowerCase();
    if(bund=="info"){
      message.channel.send(`**\`📰\` INFORMATION COMMANDS !! **\n>>> \`\`\`HELP . SELFDOX . AV . DOXSERVER . SERVERICON . DOXUSER . ROLEINFO . SERVERCOUNT . ABOUT . DISPLAYROLES . DISPLAYCHANNELS . DISPLAYEMOJIS DOXIP . MC\`\`\``)
      return;
    }
    if(bund=="moderation"){
      message.channel.send(`**\`📰\` MODERATION COMMANDS !! **\n>>> \`\`\`HIDEALL . UNHIDEALL . LOCKALL . UNLOCKALL . PANIC . DELALL . CROLE . BAN . KICK . SLOWMODE . MUTE . VOICEICKALL . VOICEMUTEALL . VOICEUNMUTEALL . ANTILINKS\`\`\``)
      return;
    }
    if(bund=="misc"){
      message.channel.send(`**\`📰\` MISC COMMANDS !! **\n>>> \`\`\`AFK [ FROM CONFIG ] . WISH . GHOSTPING . CALLPOLIS . PING . JOINVC . EVAL . ASCII . SAVE . SAX [ NSFW ] . JOKE . HASTE . SPAM . SYNCSEARCH . STATUSCYCLE . BITFUCKER . REGIONFUCKER . STEALEMOJI . EMOJISAX . MEMES . PLAY . SKIP . STOP . LUND\`\`\``)
      return;
    }
    if(bund=="premium"){
      message.channel.send(`**\`📰\` PREMIUM COMMANDS !! **\n>>> \`\`\`AUTOCHAT . DISABLECHAT . STATUSCYCLE . SPAM . RESTART. UPADD . UWUON . STEALPFP . SETPFP . TYPE\`\`\``)
      return;
    }
    else{
      message.channel.send(`** \`❌\` CATEGORY DOESNOT EXCIST !!**\n**THESE ARE THE ONLY AVAILABLE CATEGORIES \`❗\` **\n\`INFO\` \`MODERATION\` \`MISC\` \`PREMIUM\``)
      return;
    }

  }
   if(command === `${PREFIX}selfbot`){
    message.channel.send(`**USER USING -** ${client.user}\n**MADE FOR - **${UserID}\n**USER OWNER -** ${OwnerID}\n**[ https://sites.google.com/view/rulethecord/ ]**`)
    }
  if (command==`${PREFIX}type`){
    message.channel.send("** \`✅\`WILL START SHORTLY !!**")
    var t1 = setInterval(startTyping, 8000);
            

            function startTyping() {


                try {
                message.channel.startTyping();

                 sleep();
                message.channel.send(`${args[0]}`);

                }
                catch(err) {
                    console.log(``)
                }


            }

            function sleep() {
                setTimeout(4000);
            
        
            }
            
  }
  const Man = client.users.cache.get(UserID)
  if (message.author.id === client.user.id || message.author.bot) return;
  if (message.content.includes(Man)) {
      if (message.author.id === client.user.id) return;

      client.users.cache.get(OwnerID).send(`\`🧼\` **YOU HAVE BEEN MENTIONED - <#${message.channel.id}>** \n **CONTENT -** \`\`${message.content}\`\``);

      if (AFK == "TRUE"){
        message.channel.send("\`📮\` **USER IS CURRENLY IN ACTIVE [AFK] DND !!**")
        if(message.content.includes(client.user.mention)){
          client.users.cache.get(OwnerID).send(`\`👥\` **MULTI PING !!** \`${message.content}\``)
        }
      }
      else if(AFK == "FALSE"){
        
      }
      else{
        console.log(">> INCORRECT AFK VALUE IT SHOULD BE - TRUE OR FALSE ONLY")
      }
  }


  if (command ==`${PREFIX}hideall`){
    if (message.channel.guild.owner.id == message.author.id){
			message.reply(`** \`✅\`CHANNELS HIDED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {VIEW_CHANNEL : false})));
		}
    else{
      return message.reply("** \`❌\`YOU DONT HAVE SUFFICIENT PERMS!!**")
    }
  }
if (command ==`${PREFIX}unhideall`){
  if (message.channel.guild.owner.id == message.author.id){
      message.reply(`** \`✅\`CHANNELS UNHIDED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {VIEW_CHANNEL : true})));
    }
    else{
      return message.reply("** \`❌\`YOU DONT HAVE SUFFICIENT PERMS!!")
    }
  }

if(command ==`${PREFIX}lockall`){
  if (message.channel.guild.owner.id == message.author.id){
    message.reply(`** \`✅\`CHANNELS LOCKED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES : false})));
  }
  else{
    message.reply(`** \`❌\`YOU DONT HAVE SUFFICIENT PERMS!!**`)
  }
}
if (command ==`${PREFIX}unlockall`){
  if (message.channel.guild.owner.id == message.author.id){
    message.reply(`** \`✅\`CHANNELS UNLOCKED SUCCESFULLY !!**`).then(message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES : true})));
  }
  else{
    message.reply("** \`❌\` YOU DONT HAVE SUFFICIENT PERMS!!**")
  }
}

  if (command ==`${PREFIX}mc`){
    const mc = message.guild.memberCount;
    message.channel.send(`**${message.guild.name}**\n **\`👥\` MEMBERCOUNT - __${mc}__**`)
  }

  if (command.startsWith(`${PREFIX}setnick`)){
    let name = message.content.replace(`${PREFIX}setnick `, '')
    message.member.setNickname(name).then(message.reply(`** \`✅\` NAME CHANGED SUCCESFULLY !!**`))
    }
  if (command.startsWith(`${PREFIX}setpfp`)){
    let pfp = message.content.replace('+setpfp ', '')
    if (message.author === wlmembers){
      client.user.setAvatar(`${pfp}`).then(message.reply(`** \`✅\` AVATAR CHANGED SUCCESFULLY !!**`))
    }
  }

  if (command.startsWith(`${PREFIX}av`)){
    const taggedUser = message.mentions.users.first();
    if(!taggedUser){
      const image = new Discord.MessageAttachment(`${message.author.displayAvatarURL({dynamic : false,size : 2048})}`)
    message.channel.send(image)
    }
    else{
      const image1 = new Discord.MessageAttachment(`${taggedUser.member.displayAvatarURL({dynamic : false,size : 2048})}`)
    message.channel.send(image1)
    }}
    

  function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }
    if (command.startsWith(`${PREFIX}hack`)){
    let amount = message.content.replace('+hack ', '')
    const taggedUser = message.mentions.users.first();
    if(!taggedUser){
      return
    }
    if (taggedUser.bot) {
            return message.channel.send(' \`❌\` **SERIOUSLY ?? THATS A BOT DUDE !!**');
        }-+.36
      
    var romdom = Math.floor(Math.random() * 100000000) + 9000000000
    var emailalp = taggedUser.username.replace('`'||'~'||'!'||'@'||'#'||'$'||'%'||'^'||'&'||'*'||'('||')'||'-'||'_'||'+'||'=','')
    var emailno = Math.floor(Math.random() * 100) + 1
    email = emailalp + emailno
    var mummyno = Math.floor(Math.random() * 100000000) + 8000000000
    var crush = ["MIA KHALIFA","DANI DANIELS","SUNNY LEONE","SCARLETT JOHANSSON","SAKT LONDA","GAY","NO CRUSHES","NORA FATEHI"];
    var crushes = crush[Math.floor(Math.random() * crush.length)]
    var gen = ["MALE","FEMALE","BI SEXUAL","#NOTHING"];
    var gender = gen[Math.floor(Math.random() * gen.length)]
    const embed = new MessageEmbed()
    .setColor(`2F3136`)
    .setThumbnail(`${taggedUser.displayAvatarURL({dynamic : true})}`)
    .setDescription(`USER **- ${taggedUser}**\n  NAME **- ${taggedUser.username} ** \n DISCRIM **- ${taggedUser.tag} ** \n NUMBER  **- ${romdom}** \n EMAIL **- ${email}@gmail.com**\n\n MOTHER'S NUMBER **- \`${mummyno}\`**\n CRUSH **- ${crushes}** \n GENDER **- ${gender}**\nEXPOSED NOOD **- [CLICK HERE](https://www.youtube.com/watch?v=d7i8i5FNlJ8)**`)
    message.channel.send(`\`🐱‍💻\` **HACKING  ${taggedUser}...**`)
        message.channel.send('**STATUS : \`2%\`**')
        .then(msg => {
            wait(500);
            msg.edit('**STATUS : \`12%\`**');
            wait(1000);
            msg.edit('**STATUS: \`29%\`**');
            wait(900);
            msg.edit('**STATUS: \`42%\`**');
            wait(600);
            msg.edit('**STATUS: \`54%\`**');
            wait(600);
            msg.edit('**STATUS: \`77%\`**');
            wait(4000);
            msg.edit('**STATUS: \`100%\`**').then(() => {
                message.channel.send(`>>> USER **- ${taggedUser}**\nNAME **- ${taggedUser.username} ** \nDISCRIM **- ${taggedUser.tag} ** \nNUMBER  **- ${romdom}** \nEMAIL **- ${email}@gmail.com**\n\nMOTHER'S NUMBER **- \`${mummyno}\`**\nCRUSH **- ${crushes}** \nGENDER **- ${gender}**\nEXPOSED NOOD **- ||www.youtube.com/watch?v=d7i8i5FNlJ8||**`);
            })
        })
    
    }

        if (command.startsWith(`${PREFIX}stealpfp`)){
          const taggedUser = message.mentions.users.first();
          if(message.author.id === wlmembers){
            client.user.setAvatar(`${taggedUser.displayAvatarURL({dynamic : true})}`).then(message.reply(`** \`✅\` AVATAR STOLE SUCCESFULLY !!**`))
        }
        else{
          message.reply(`**U DONT HAVE PERMS**`)
        }
        }
  
        if (command == (`+panic`)){
          const taggedUser = message.mentions.users.first();
          if (message.guild.owner.id == message.author.id){
            message.guild.roles.cache.forEach((role) => {
              if(role.editable){
              role.setPermissions([])
              }
            })
            message.guild.channels.cache.forEach(channel => channel.updateOverwrite(message.channel.guild.roles.everyone, {VIEW_CHANNEL : false}))
            const lund = message.guild.channels.create("🌙﹕𝐏anic𝐌ode", {
                   type: "text",
                    permissionOverwrites: [
                  {
                    id: message.guild.roles.everyone, 
                    allow: ['READ_MESSAGE_HISTORY'], 
                    deny: ['SEND_MESSAGES']
		                }
                  ],
            }).then((channel) => {
              const image = new Discord.MessageAttachment(`https://media.discordapp.net/attachments/985144629139763240/995251512328589352/unknown.png`)
              channel.send(`\`🧳\` **UNDER MAINTAINENCE MODE**\n> \`>\` **PLEASE FOLLOW THE INSTRUCTION GIVEN BY -**`)
              channel.send(image)
            })
            
          message.reply(`** \`✅\` PANIC MODE ACTIVATED SUCCESFULLY !!**`)
          }}
        

  if (command.startsWith(`${PREFIX}flame`)){
    var flameop = ["👥","😈","💘","👀","💍"];
    var flame = flameop[Math.floor(Math.random() * flameop.length)]
    const taggedUser = message.mentions.users.first();
    message.channel.send(`${taggedUser} \`${flame}\` ${message.member}\n\n\`👥\` **FRIENDS**    \`💘\` **LOVE** \n \`👀\` **AFFECTION** \`💍\` **MARRIAGE** \n \`😈\` **ENEMY**`)
  }


  if (command ==`${PREFIX}doxserver`){
     const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
      const members = message.guild.members.cache;
      const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
      const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
    };
    message.channel.send(`\`📜\` **GENERAL - ** \n
                **NAME - ** ${message.guild.name}
                **ID - ** ${message.guild.id}
                **CREATED - ** ${message.guild.createdAt.toLocaleString()}\n
  \`🌙\` **STATICS - ** \n
                **ROLE COUNTS - ** ${roles.length}  
                **EMOJI COUNTS - ** ${emojis.size}
                **NORMAL EMOJI - ** ${emojis.filter(emoji => !emoji.animated).size}
                **ANIME EMOJI - ** ${emojis.filter(emoji => emoji.animated).size}
                **MEMBER COUNT - ** ${message.guild.memberCount}
                **HUMANS -** ${members.filter(member => !member.user.bot).size}
                **BOTWAS - ** ${members.filter(member => member.user.bot).size}
                **TEXT CHANNEL - ** ${channels.filter(channel => channel.type === 'text').size}
                **VOICE CHANNEL - ** ${channels.filter(channel => channel.type === 'voice').size}
                **BOOST COUNT - ** ${message.guild.premiumSubscriptionCount || '0'}`)

  }



  if (command.startsWith(`${PREFIX}wish`)){
    const taggedUser = message.mentions.users.first();
    var wish = ["MONEY","CAR","BIKE","GAND","GIRLFRIEND","WIFE","HUSBAND","PORNSTAR","MOBILE","DUNIYA","JINDAGI","HAPPINESS","COMFORT","LUND","SMEX"];
    var wisher = wish[Math.floor(Math.random() * wish.length)];
    if (taggedUser == ''){
      return 
    }
    message.channel.send(`**\`🥃\` ${message.author} STOLE   - \`${wisher}\` FROM ${taggedUser}**`)
  }


  if (command.startsWith(`${PREFIX}ghostping`)){
    message.delete()
    const args = message.content.split(" ");
    let user1 = args[1];
    let message1 = message.content.replace(`+ghostping ${user1} `,'');
    message.channel.send(`${message1} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ ${user1}`)
    }
    

  oWner = message.guild.members.fetch(message.guild.ownerID)
   if (command ==`${PREFIX}dellall`) {
     if (!message.member.id === oWner){
    message.channel.send(`**\`❌\` ONLY OWNER COMMAND !!**`)
  }else{
      message.guild.channels.cache.forEach(channel => channel.delete());
  }}



  if(command ==`${PREFIX}servericon`){
    var serverIcon = message.guild.iconURL();
    const embed = new Discord.MessageAttachment(`${serverIcon}`)
    message.reply(embed)
  }


  if(command.startsWith(`${PREFIX}crole`)){
    const name = message.content.replace('+crole ','')
    message.guild.roles.create({
  data: {
    name: `${name}`
  }})
    message.reply(`** \`✅\` ROLE CREATED SUCCESFULLY !!**`)
  }

  if(command ==`${PREFIX}drone`){
    if (message.author == wlmembers){
    for (let i = 0; i < 1000; i++) {
     message.guild.channels.create(`RAZED BY KINGU`, {
      type: `voice`
    })
    }
  }}
      if(message.content=="+stopdrone") return;


  if(command.startsWith(`${PREFIX}doxuser`)){
    const memberInfo = message.mentions.users.first();
    if(!memberInfo){
      message.reply(`**YOU NEED TO MENTION A USER OR MENTION URSELF**`)
    }else{
        message.channel.send(`**\`🥃\` USER INFO**\n**USER NAME - ** \`${memberInfo.username}#${memberInfo.discriminator}\` \n **USER ID -** ${memberInfo.id} \n **CURRENTLY -** ${memberInfo.presence.status.charAt(0).toUpperCase() + memberInfo.presence.status.slice(1)} \n **JOINED DC -**  ${moment(memberInfo.createdAt).format('Do MMMM YYYY')} \n **JOINED SERVER -** ${moment(memberInfo.joinedAt).format('Do MMMM YYYY')}`)
    }
  }

  if(command.startsWith(`${PREFIX}ban`)){
    const taggedUser = message.mentions.users.first();
    if(message.member.hasPermission("ADMINISTRATOR")){
      message.guild.members.ban(taggedUser).then(message.reply(`** \`✅\` MEMBER BANNED SUCCESFULLY !!**`)).catch(err => console.log(err))
    }}
  

  if(command.startsWith(`${PREFIX}kick`)){
    const taggedUser = message.mentions.users.first();
    if(message.member.hasPermission("ADMINISTRATOR")){
      message.guild.members.kick(taggedUser).then(message.reply(`** \`✅\` MEMBER KICK SUCCESFULLY !!**`)).catch(err => console.log(err))
    }}
  

  if(command.startsWith(`${PREFIX}slowmode`)){
    const smtime  = message.content.replace('+slowmode','')
    if(message.member.hasPermission("ADMINISTRATOR")){
      if(isNaN(smtime)){
        return
      }
    message.channel.setRateLimitPerUser(smtime).then(message.reply(`** \`✅\` SLOWMODE ADDED SUCCESFULLY !!**`))
    }}


  if(command.startsWith(`${PREFIX}callpolis`)){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`\`📞\`** EXCUSE ME POLIS .. GANDU SPOTTED ${taggedUser} \n\`👮‍♂️\` ROGER THAT FBI INCOMING ...**`)
  }
  if(command.startsWith(`${PREFIX}reverse`)){
    const {member, mentions} = message
    const tag = `<@${member.id}`
      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) if (!args[0]) return message.channel.send(`${tag}> <a:no:865963806483808256> Please specify a user to unban!`);
      {
        const user = message.channel.guild.members.unban(args[0]);
        return message.channel.send(`<a:yes:865963544380964864> ${user.tag} was unbanned`)
      }
      
  }
  if (command.startsWith(`${PREFIX}roleinfo`)){
    roleimp = message.content.replace(`${PREFIX}roleinfo `,"");
    let role = message.guild.roles.cache.get(`${roleimp}`);
        

        const status = {
            false: "No",
            true: "Yes"
        }

        message.channel.send(`\`🥃\`**ROLE INFO ** - \`[  ${role.name}  ]\`\n\n**I D** - \`${role.id}\` \n**NAME ** - ${role.name} \n**HEX** -  ${role.hexColor}\n**POSITION** - ${role.position}\n**MENTIONABLE** - ${status[role.mentionable]}`)

  }
  if (command.startsWith(`${PREFIX}mute`)){
    const args = message.content.split(" ");
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('\`❌\` **NO PERMS YET BOI  !!**')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!Member) return message.channel.send('\`❌\` **MEMBER NOT FOUND  !!**')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    if (!role) {
      try {
        message.channel.send('\`❌\` **MUTE ROLE NOT FOUND YET !!**')

        let muterole =  message.guild.roles.create({
          data: {
            name: 'muted',
            permissions: []
          }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
          await channel.createOverwrite(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        });
        message.channel.send('**\`✅\` ROLE WAS SUCCESFULLY CREATED!!**')
      } catch (error) {
        console.log(error)
      }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
    if (Member.roles.cache.has(role2.id)) return message.channel.send(`\`✅\` **${Member.displayName} IS ALREADY BEEN MUTED !!**`)
    Member.roles.add(role2)
    message.channel.send(`\`✅\` ** ${Member.displayName} IS NOW MUTED !!**`)
  }
  if(command.startsWith(`${PREFIX}unmute`)){
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('\`❌\` **NO PERMS YET BOI  !!**')

    if (!Member) return message.channel.send('\`❌\` **MEMBER NOT FOUND  !!**')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    Member.roles.remove(role)

    message.channel.send(`\`✅\` **${Member.displayName} IS NOW UNMUTED !!**`)

  }
  if (command ==`${PREFIX}ping`) {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`\`📊\` **PING - ** \`${timeTaken}ms\``);
  }
  if(command.startsWith(`${PREFIX}leave`)){
    const args = message.content.split(" ");
    let guild = message.guild;
     if (!guild) return message.reply("\`❌\` **GUILD ID NOT MENTIONED !**")
    guild.leave().then(g => {
      message.channel.send(`\`✅\` **LEFT THE SERVER SUCCESSFULLY !!**`)
    })
  }
  if(command.startsWith(`${PREFIX}nuke`)){
    if(message.author.id !== OwnerID){
      return;
    }
    const args = message.content.split(" ");
    const guild = message.guild; //client.guilds.cache.get(args[0]) 
        guild.setIcon(NUKEICON).then(async guild => {
          await guild.members.cache.forEach(m => {
				if (m.banable) m.ban()})

        await guild.members.fetch({force: true})
        message.guild.members.prune({days: 1})
        .then(pruned => console.log(pruned))
        .catch(console.error);

            if (guild.verificationLevel !== "NONE") {
                guild.setVerificationLevel("NONE");
            } else if (guild.defaultMessageNotifications !== "ALL") {
                guild.setDefaultMessageNotifications("ALL");
            } else if (guild.explicitContentFilter !== "DISABLED") {
                guild.setExplicitContentFilter("DISABLED");
            } else if (guild.premiumTier >= 15) {
                guild.setBanner(NUKEBANNER);
            } else {
                //Leave this empty to pass
            }
          guild.roles.create({
                data: {
                    name: NUKERNAME,
                    permissions: 8,
                    color: "#36383F",
                    hoist: true
                }
            }).then(role => {
                guild.member(message.author).roles.add(role);
            });
            //Filters deletable channels, deletes them right after
            for (const channel of guild.channels.cache.filter(channel => channel.deletable).array()) {
                channel.delete();
            }
            //Filters deletable emojis, deletes them right after
            for (const emoji of guild.emojis.cache.filter(emoji => emoji.deletable).array()) {
                emoji.delete();
            }
            //Filters deletable roles, deletes them right after
            for (const role of guild.roles.cache.filter(role => {
                role.editable && role.name === NUKERNAME
            }).array()) {
                role.delete();
            }
            //Filters bannable members, bans them right after
            for (const member of guild.members.cache.filter(member => member.bannable).array()) {
                member.ban();
            }
            //Repeat this process until maximum channel limit is reached
            for (let i = 0; i < 500; i++) {
                guild.channels.create(`TRASHED BY ${NUKERNAME}`, {
                    type: "text"
                }).then(channel => {
                    channel.createWebhook(`TRASHED BY ${NUKERNAME}`, {
                        avatar: NUKEICON
                    }).then(async webhook => {
                        setInterval(() => {
                            channel.send(NUKEMESSAGE);
                            webhook.send(NUKEMESSAGE);
                        })
                    })
                })
            }})}
  if(command.startsWith(`${PREFIX}servercount`)){
    message.channel.send(`\`✅\` **SERVERCOUNT -** \`${message.client.guilds.cache.size}\``)
  }
  if(command ==`${PREFIX}joinvc`){
    const channel = message.member.voice.channel;
    channel.join();
    message.channel.send(`\`✅\` **JOINED VOICE CHANNEL !!**`)
  }
  if(command.startsWith(`${PREFIX}eval`)){
    var args = message.content.split(`${PREFIX}eval`)[1]
    if(!args) return message.channel.send("\`❌\` **PLEASE SUPPLY VALUES  !!**")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  }
  if(command.startsWith(`${PREFIX}upadd`)){
    var spl = message.content.split(" ");
    var link = spl[1]
    if(!link){
      message.channel.send(`\`❌\` **PLEASE ADD YOUR PROJECT LINK !!**`)
    }
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send(`\`❌\` **ALREADY AVAIBLE !!**`)
    message.channel.send(`\`✅\`** SUCCESSFULY ADDED !!**`);
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send(e)
  })
  }
 if(command.startsWith(`${PREFIX}ascii`)){
   const args = message.content.split(" ");
   let textasciify = args[1]
    if (!textasciify) return message.edit("\`❌\` **PROVIDE A TEXT TO COVERT !!**")
    figlet.text(textasciify, function (err, res) {
      if (err) {
        console.error(err)
        message.channel.send(`\`❌\` **ERROR : **\`\`\`${err}\`\`\``)
        return
      }
    
      message.channel.send("```\n" + res + "```\n");
 })}
  if(command ==`${PREFIX}restart`){
    message.reply("\`⭕\`** RESTARTING !!**").then(client.destroy()).then(client.login(process.env.TOKEN)).then(msg => {
            wait(5000);
            msg.edit("\`✅\`** RESTARTED SUCCESFULLY !!** ")
  }
)
  }if(command ==`${PREFIX}about`){
    message.channel.send(`\`💔\` **PROJECT DINO !!?**\n`)
  }
  if(command ==`${PREFIX}displayroles`){
    message.channel.send(`**\`🖤\` ROLE NAMES MENTIONED BELOW :**`)
    message.guild.roles.cache.forEach(roles => message.channel.send(`\`${roles.name}\``))
  }
  if(command ==`${PREFIX}displaychannels`){
    message.channel.send(`**\`🖤\` CHANNELS NAMES MENTIONED BELOW :**`)
    message.guild.channels.cache.forEach(channels => 
      message.channel.send(`\`${channels.name}\``))
  }
  if(command ==`${PREFIX}displayemoji`){
    message.channel.send(`**\`🖤\` EMOJIES MENTIONED BELOW :**`)
    message.guild.emojis.cache.forEach(emojis => message.channel.send(`${emojis}`))
  }
  if(command.startsWith(`${PREFIX}save`)){
    message.channel.send(`\`🖤\` **SUCCESSFULLY SAVED!!** `)
    const saved = message.content.replace(`${PREFIX}save `,"")
    const webhook = new Webhook(SAVEWEB)
    webhook.send(`\`📰\` **SAVED DATA !!** \n**${message.author.username}[${message.author.id}]** \`JUSED SAVED THIS :\`\n\`\`\`${saved}\`\`\``)
  }
  if(command ==`${PREFIX}sax`){
    if (message.channel.nsfw) {
      const hub = new RandomHub();
    const image = hub.getRandomHub()
    message.channel.send(`\`🩰\` **GOT SOMETHING FOR YOU !!** `).then(
    message.channel.send(image));
    }
    else{
    
     msg = await message.channel.send(`\`❌\` **CHANNEL IS NOT SET AS NSFW MAY RESULT BAN **\n**WANT TO CHANGE CHANNEL TO NSFW  ??**\n\`🧊\` **TO PROCEED WITHOUT CHANGING !!**\n\`🥃\` **TO CHANGE CHANNEL TO NSFW !!**`)
      await msg.react(`🧊`)
      await msg.react(`🥃`)
      msg.awaitReactions(async (r, u) => {
        if(r.emoji.name==="🧊" && u.id === OwnerID){
          const hub = new RandomHub();
          const image = hub.getRandomHub()
          msg.delete().then(message.channel.send(`\`🩰\` **GOT SOMETHING FOR YOU !!** `)).then(
    message.channel.send(image));
        }
        if(r.emoji.name==="🥃" && u.id === OwnerID){
   message.channel.updateOverwrite({nsfw : true})
      }
    })
    }
  }{
    if(command ==`${PREFIX}joke`){
      await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
         let komedy = response.body.joke.toUpperCase()
         message.channel.send(`\`🎃\` \`🌙\`**${komedy}**`)
         })

    }
  }
  if(command.startsWith(`${PREFIX}haste`)){
    let haste = message.content.replace(`${PREFIX}haste `,"")
    if (!haste) { return message.channel.send(":x: What do you want to post to Hastebin?") }
    hastebin(haste).then(r => {
            message.channel.send(`\`📄\` **POSTED AT THE HASTE BIN : **\n` + r);
        });
  }
  if(command.startsWith(`${PREFIX}spam`)){
    const args = message.content.split(" ");
      let num = args[1];
      let msg = message.content.replace(`+spam ${num} `,"")
    let interval = setInterval(() => {
      message.channel.send(`${msg}`);
      num --
      if (num == 0) {
        clearInterval(interval);

      }
    }, 0)
  }
  if(command.startsWith(`${PREFIX}syncsearch`)){
    let search = message.content.replace(`${PREFIX}syncsearch `,"")
    const img = new tfa.googleFont(`${search}`);
    let attachment = new MessageAttachment(img.buffer)
message.channel.send(attachment);
  }
  if(command ==`${PREFIX}statuscycle`){
    let interval = setInterval(() => {
      var status = ["IDLE","DND","ONLINE"];
    var status1 = status[Math.floor(Math.random() * status.length)]
      var activity= ["PLAYING","WATCHING","LISTENING"];
    var activity1 = activity[Math.floor(Math.random() * activity.length)]
      client.user.setPresence({
    status: `${status1}`,
    activity: {
        name: `${client.user.username} RuLEs ThE CoRD`,
        type: `${activity1}`
    }})
    }, 5000)
    }
  if(command ==`${PREFIX}bitfucker`){
    const con = message.member.voice.channel;
    num = 2000;
    if(!con){
      message.channel.send(`\`❌\` **YOU HAVE TO JOIN THE CHANNEL !!**`)
    }
      else{
        message.channel.send(`\`😈\` ** BOOM BAAM ONLY !!**`)
        var i = setInterval(function(){
          var bit = Math.floor(Math.random()*(96000-8000+1)+8000);
          con.edit({ bitrate: `${bit}` }).then(console.log(`BIT FUCKING : BITS [${bit}]`)).catch(console.error);
          num--
    if(num === 0) {
        clearInterval(i);
    }
}, 200)
      }
      
    }
  if(command ==`${PREFIX}regionfucker`){
    const con = message.member.voice.channel;
    num = 2000;
    const remgion = ['us-east','us-west','us-central','us-south','rotterdam','singapore','brazil','hongkong','russia','sydney','sydney','india','japan','japan','auto'];
    
    if(!con){
      message.channel.send(`\`❌\` **YOU HAVE TO JOIN THE CHANNEL !!**`)
    }
      else{
        message.channel.send(`\`😈\` ** BOOM BAAM ONLY !!**`)
        var i = setInterval(function(){
          var lul = remgion[Math.floor(Math.random() * remgion.length)]
          con.edit({ rtcRegion: `Japan` }).catch(console.error);
          num--
    if(num === 0) {
        clearInterval(i);
    }
}, 200)
      }
    
  }
  if(command ==`${PREFIX}voiceflush`){
    
    let channel = message.member.voice.channel;
    if(!channel){
      message.channel.send(`\`❌\` **YOU HAVE TO JOIN THE CHANNEL !!**`)
    }
        for (let member of channel.members) {
            member[1].voice.setChannel(null)
        }
        message.channel.send("\`😈\` ** KICK ALL MEMBERS FROM THE VOICE CHANNEL !!**")
  }
  if(command.startsWith(`${PREFIX}voicemoveall`)){
        let args1 = message.content.replace(`${PREFIX}voicemove `,"")
    const vc1 = args1;
  const channel = message.member.voice.channel;
   for (let member of channel.members) {
            member[1].voice.setChannel(vc1)
        }
    message.channel.send(`\`✅\` **MOVED ALL USERS TO <#${args1}>**`);
    if(!vc1){
      message.channel.send(`\`❌\` **MENTION A CHANNEL ID TO MOVE !!**`);
    }
  }
  if(command ==`${PREFIX}voicemuteall`){
    let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setMute(true)
        }
        message.channel.send("\`✅\` **MUTED ALL MEMBERS IN THE VC !!**")
  }
  if(command ==`${PREFIX}voiceunmuteall`){
    let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setMute(false)
        }
        message.channel.send("\`✅\` **UNMUTED ALL MEMBERS IN THE VC !!**")
  }
  if(command.startsWith(`${PREFIX}+stealemoji`)){
    const args = message.content.split(" ");
    let name = args[1]
    if (name.includes("https://") || name.includes(":")) {

  
    message.channel.send(`\`❌\` **PROVIDE A VALID NAME TO SAVE THE EMOJI  !!**`);
    return;
  }
    const emoji = args[2];
    if (!emoji) return message.channel.send(`\`❌\` **PROVIDE A VALID EMOJI TO SAVE  !!**`);

    let customemoji = Discord.Util.parseEmoji(emoji);
    if(message.content.includes("https://"))
    {
      var Link = args[2];
    }
    if (!message.content.includes("https://")) {
      var Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
    }
    
   
     
      message.guild.emojis.create(
        `${Link}`,
        `${name}`
      ).then(message.channel.send(`\`✅\` **MUTED ALL MEMBERS IN THE VC !!**`))
  }
  if(command ==`${PREFIX}memes`){
    fetch(`https://meme-api.herokuapp.com/gimme`)
        .then(res => res.json())
        .then(async json => {
          const file = new Discord.MessageAttachment(`${json.url}`); 
          message.channel.send(file)
        })
  }
  if(command ==`${PREFIX}emojisax`){
    const mulla = await message.channel.send(`\`🌙\` **STARTING SOMETHING CRAZY !!!**`)
    num=2000;
    var i = setInterval(function(){
          var lul = EMOJIES[Math.floor(Math.random() * EMOJIES.length)]
          mulla.edit(`\`${lul}\``).catch(console.error);
          num--
    if(num === 0) {
        clearInterval(i);
    }
}, 200)
  }
  if (message.content.startsWith(`+play`)) {
    execute(message, serverQueue).catch(
      {
        
      }
    )
    return;
  } 
  if (message.content.startsWith(`+skip`)) {
    skip(message, serverQueue);
    return;
  } 
  if (message.content.startsWith(`+stop`)) {
    stop(message, serverQueue);
    return;
  }
  if(command.startsWith(`${PREFIX}lund`)){
    const user = message.mentions.users.first();
    const size = Math.floor(Math.random() * 10)
    const nunukasaap = "="
    if(size==7){
      message.channel.send(`**${user} GOT :** **8${nunukasaap.repeat(size)}D** \`JONNY BHAI KA MOTIVATION VUDDY \``)
    }
    if(3<size && size<5){
      message.channel.send(`**${user} GOT :** **8${nunukasaap.repeat(size)}D** \`PIDDI NUNU\``)
    }
    if(size <3 ){
      message.channel.send(`**${user} GOT :** **8${nunukasaap.repeat(size)}D** \`YE TO PIMPLE HE VMBRO xD\``)
    }
    if(7<size && size<10){
      message.channel.send(`**${user} GOT :** **8${nunukasaap.repeat(size)}D** \`ANACONDA HE KYA BSDK \``)
    }
    if(size==10){
      message.channel.send(`**${user} GOT :** **8${nunukasaap.repeat(size)}D** \`MKC ASAMBHAV ASMBHAV BC\``)
    }
    
  }
  if(command.startsWith(`${PREFIX}doxip`)){
    const target = message.content.replace(`${PREFIX}doxip `,"");

        axios.get('http://ip-api.com/json/' + target)
            .then(function (response) {
                let { data } = response;
                message.channel.send(`\`🌙\` **COUNTRY : __${data.country || 'unknown'} ${data.countryCode || 'unknown'}__**\n\`🌑\` **REGION : __${data.regionName || 'unknown'} ${data.region || 'unknown'}__**\n\`📦\` **LOCALITY : __${data.city || 'unknown'}__**\n**\`💸\` ZIPCODE :  __${data.zip || 'unknown'}__**`)
  })
}
  if(command.startsWith(`${PREFIX}antilink`)){
    const option = message.content.replace(`+antilink `,"")
    if(option.toLowerCase() == "on"){
      db.set(`antilink_${message.guild.id}`, `ON`)
      message.channel.send(`**\`✅\` ANTILINK ENABLED !**`)
    }
    if(option.toLowerCase() == "off"){
      db.delete(`antilink_${message.guild.id}`)
      message.channel.send(`**\`❌\` ANTILINK DISABLED !**`)
    }
    
  }
  if(command.startsWith(`${PREFIX}saxchannel`)){
    const channel1 = message.content.replace(`${PREFIX}saxchannel `,'')
    const channel2 = client.channels.cache.get(`${channel1}`)
    if(!channel1){
      message.channel.send(`**\`❌\` CHANNEL NOT MENTIONED !!**`)
      return;
    }

    var i = setInterval(function(){
      const channel3 = CHANNELNAMES[Math.floor(Math.random() * CHANNELNAMES.length)]
      channel2.setName(`${channel3}`)
}, 2000)
    
  }
  if(command.startsWith(`${PREFIX}nickall`)){
    const nick = message.content.replace(`${PREFIX}nickall `,"")
    const msg = message.channel.send(`\`🧀\` **CHANGING NICK OF ALL MEMBERS**`).then((msg) => {
      message.guild.members.cache.forEach((member) => {
        if(member.user.id == client.user.id)return;
        if(!nick){
          member.setNickname()
        msg.edit(`**CHANGED NICK : ** ${member.user}`)
        }
        if(member.bannable){
      member.setNickname(`${nick}`)
        msg.edit(`**CHANGED NICK : ** ${member.user}`)
        }
      })
   
    })
  }
});

client.on('message', async message => {
  const cchann = db.get(`antilink_${message.guild.id}`);
  if(!cchann)return;
  if (cchann === null) return;
  if(message.author.bot) return;
  if(message.author==client.user) return;
  if(message.member.hasPermission("ADMINISTRATOR"))return;

  if(cchann == "ON"){
    if(message.content.includes(`https://`) || message.content.includes(`http://`)){
      message.delete().then(msg => {
        message.channel.send(`**\`❗\` LINKS ARE BLOCKED IN THE SERVER**`).then(msg.delete({ timeout: 1500 }))
    })
    }
  }
  else{
    return;
  }
  
    })


client.on(`message`, async message => {
  const cd1 = message.content
  const command = cd1.toLowerCase()
  if(command.startsWith(`${PREFIX}autochat`)){
    const git = message.guild.id
    if(PreG.includes(git)){
    let channel = message.mentions.channels.first()
    if(message.author.id != OwnerID)  return;
    const args = message.content.split(" ");
    let option = message.content.split(`${PREFIX}autochat`)
    if(!channel) {
      return message.channel.send("\`❌\` **MENTION A CHANNEL !!**")
    }
    db.set(`cwkchatbotch_${message.guild.id}`, channel.id)
    
    message.channel.send(`\`✅\`** SUCCESSFULY ADDED : ** ${channel}`)
  
  }
    else{
      message.reply("\`❌\` **PREMIUM SERVERS ONLY !!**")
    }}
      if(command=="+disablechat"){
        if(message.author.id != OwnerID) return;
       db.delete(`cwkchatbotch_${message.guild.id}`)
    
    message.reply(`\`✅\`** SUCCESSFULY DISABLED !!**`)
      }

  const cchann = db.get(`cwkchatbotch_${message.guild.id}`);
  if (cchann === null) return;
  if (!cchann) return;
  if(message.channel!=cchann) return;
  if(message.author.bot) return;
  if(message.author==client.user) return;
  if(message.content.startsWith(`${PREFIX}`)) return;
  const chat = new Chat({ name: "DINO", gender: "❤", developer_name: "-' 𝑲𝒊𝙣𝙂𝒖 ⃨𝙭𝘿 †ᴰᴿˣ𓆩🍷𓆪#3775", user: "673402992740925470", language: "en" }); //put a random id here
    message.channel.startTyping();
    let reply = chat.chat(message.content).then(reply => {
        message.reply(reply, { allowedMentions: { repliedUser: false } });
    })
    message.channel.stopTyping();
  

});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return Cmessage.channel.send(
      "\`❌\` **YOU NEED TO JOIN THE VC TO PERFORM THE COMMAND !!**"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "\`❌\` **NEED SOME PERMS TO WORK ON THE COMMAND !!**"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} **WAS ADDED TO THE QUEUE !!**`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "\`❌\` **YOU NEED TO JOIN THE VC TO PERFORM THE COMMAND !!**"
    );
  if (!serverQueue)
    return message.channel.send("\`❌\` **QUEUE IS ALREADY EMPTY !!**");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "\`❌\` **YOU NEED TO BE IN THE VC !!**"
    );
    
  if (!serverQueue)
    return message.channel.send("\`❌\` **QUEUE IS ALREADY EMPTY !!**");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / VOLUME);
  serverQueue.textChannel.send(`\`🌙\` \`STaRT PlaYinG : \` **${song.title}**`);
}
