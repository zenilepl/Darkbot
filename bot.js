const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DarkBot | $help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


	var prefix = "$";

client.on('message', function(msg) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };
 
  if(msg.content.startsWith ('$server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**__ Server Name | اسم السيرفر__**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__ OwnerShip | الاونر الاساسي__**',`**${msg.guild.owner}**`,true)
    .addField('**__ Server ID | ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('**__ Members Count | عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__ Online | الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__ Verification Level | مستوي الحمايه__**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__ Region | البلد__**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__ Text Channels | رومات كتابيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__ Voice Channels | رومات صوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__ Created At | صنع في __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '♛『five』♛');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====اهلا السيرفر نور بيك و الله====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
 
    });
	
	client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`:rose:  ولكم نورت السيرفر :rose:
        :crown: اسم العضو  ${member}:crown:  
        انت العضو رقم ${member.guild.memberCount} `)
    }).catch(console.error)
})

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **تم قفل الشات*');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**تم قفل الشات :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**تم فتح الشات**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**تم فتح الشات :white_check_mark:**")
              });
    }
       
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
 
    if (message.content === "$bot") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()
 
.addField('**Bot Servers**',`[ ${client.guilds.size} ]`)
.addField('**Users**',`[ ${client.users.size} ]`)
.addField('**Channels**',`[ ${client.channels.size} ]`)
.addField('**ID**',`[ ${client.user.id} ]`)
.addField('**Name**',`[ ${client.user.tag} ]`)
.addField('Requested by:', "<@" + message.author.id + ">")
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
}
 
});

client.on("message", message => {
var prefix = "$";
        if(message.content.startsWith(prefix + "say")) {
    if(message.author.id !== "321792845914570764") return message.reply("هذا الامر لصحاب البوت فقط");
        let args = message.content.split(" ").slice(1);
message.channel.send(args)
        }
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links 😠 !**`)
    }
}
});

client.on('message', msg => {
  if (msg.content === '$help') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
Bot Prefix = "$"
                        
$server 『معلومات عن السيرفر』                      

$cl『 قفل الشات 』

$op『فتح الشات 』

$clear 『 لمسح الشات 』

&say 『تكراك الكلام اللي تقوله 』

$bot 『معرفه اكتر بالبوت 』

$inv 『لاضافه البوت』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
Bot Prefix = "$"
                        
$server 『 to know more about server 』                      

$cl『 close chat 』

$op『open chat 』

$clear 『 to clear chat 』

&say 『 to repeat the world you said 』

$bot 『 to know more about bot 』

$inv 『 invite bot 』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  
    
    `);
  }
});

var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);

} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 3;
 if(channelr[channelremover.id].deleted >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

client.on('message', message => {
  if(message.content === '$inv') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click Here To Add Me')
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=520225126936215573&permissions=8&scope=bot')
  .setFooter('DarkBot')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '321792845914570764') return;

if (message.content.startsWith(prefix + 'g')) {
  client.user.setGame(argresult);
          message.channel.send(`**✅ : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.send(`**✅ : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
          message.channel.send(`**✅ : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
          message.channel.send(`**✅ : ${argresult}**`)
}
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**✅ : ${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**✅ : ${argresult}** `);
  }
});

var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});

client.on("message", message => {
            if(message.content.startsWith("*تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith("*روم1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("*قبول")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-ال��فض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("*رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("*روم2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**")
            }
})

client.login(process.env.BOT_TOKEN);
