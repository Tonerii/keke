const Discord = require(`discord.js`);
const client = new Discord.Client();
const settings = require(`./settings.json`);

function countdown(targetHour, targetMinute, targetSecond) {
  let targetDate = new Date(`${`${new Date()}`.slice(4, 7)} ${new Date().getDate()}, ${new Date().getFullYear()} ${targetHour}:${targetMinute}:${targetSecond}`).getTime();
  let now = new Date().getTime();
  let distance = targetDate - now;
  let remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (remainingHours+remainingMinutes+remainingSeconds != 0) {
    if (remainingHours < 0) {
      remainingHours=Math.sqrt(Math.pow(remainingHours, 2));
      remainingMinutes=Math.sqrt(Math.pow(remainingMinutes, 2));
      remainingSeconds=Math.sqrt(Math.pow(remainingSeconds, 2));
      remainingHours = remainingHours + -1;
      return `La venue de Kéké a eu lieu il y a ${remainingHours} heure${(remainingHours < 1) ? `` : `s`}, ${remainingMinutes} minute${(remainingMinutes < 1) ? `` : `s`} et ${remainingSeconds} seconde${(remainingSeconds < 1) ? `` : `s`}.`;
    } else {
      return `Il reste ${remainingHours} heure${(remainingHours < 1) ? `` : `s`}, ${remainingMinutes} minute${(remainingMinutes < 1) ? `` : `s`} et ${remainingSeconds} seconde${(remainingSeconds < 1) ? `` : `s`} avant la venue de Kéké.`;
    }
  } else {
   return true;
  }
}

client.on(`ready`, function() {
  console.log(``);
  if (client.guilds.get(settings.guildID) != undefined) {
    var interval = setInterval(function() {
      if (countdown(settings.countdown.hour, settings.countdown.minute, settings.countdown.second) === true) {
        clearInterval(interval);
        console.log(`\n C'est l'heure !\n`);
        if ((client.guilds.get(settings.guildID).channels.get(settings.guildVoiceChannelID).joinable) && (client.guilds.get(settings.guildID).channels.get(settings.guildVoiceChannelID).full != true) && (client.guilds.get(settings.guildID).channels.get(settings.guildVoiceChannelID).speakable)) {
          if (client.guilds.get(settings.guildID).voiceConnection) client.guilds.get(settings.guildID).voiceConnection.disconnect();
          client.guilds.get(settings.guildID).channels.get(settings.guildVoiceChannelID).join().then(function(connection) {
            let now = new Date(), targetedDay = new Date();
            targetedDay.setDate(now.getDate() + 1);
            targetedDay = targetedDay.getDate();
            var musicManager = setInterval(function(){
              if (client.guilds.get(settings.guildID).voiceConnection.speaking) {
                console.log(`le bot chante`);
              } else {
                console.log(`le bot ne chante pas`);
              }
              if ((client.guilds.get(settings.guildID).voiceConnection.speaking === false) && (new Date().getDate() != targetedDay)) {
                let randomNumber = Math.floor(Math.random() * (settings.songsNumber + 1));
                if (randomNumber === 0) randomNumber++;
                switch(randomNumber){
                  case 1:
                  var dispatcher = connection.playFile(`./features/deux_jours_plus_tot.mp3`);
                  var temporalEmbed = new Discord.RichEmbed()
                    .setColor(`0x00dd85`)
                    .setAuthor(`2 jours plus tôt`)
                    .setDescription(`[01]/[91]`)
                    .setThumbnail(`https://vignette.wikia.nocookie.net/animalcrossing/images/5/59/AMF-AlbumArt-Two_Days_Ago.png/revision/latest?cb=20171113021516`);
                    console.log(temporalEmbed);
                  client.guilds.get(settings.guildID).channels.get(settings.guildTextualChannelID).send(temporalEmbed);
                  console.log(`\n #${randomNumber}${randomNumber} : 2 jours plus tôt\n`);
                  break;
                  case 2:
                  console.log(`\n #${randomNumber} : Agent kéké\n`);
                  var dispatcher = connection.playFile(`./features/agent_keke.mp3`);
                  break;
                  case 3:
                  console.log(`\n #${randomNumber} : Ali Farka Kéké \n`);
                  var dispatcher = connection.playFile(`./features/ali_farka_keke.mp3`);
                  break;
                  case 4:
                  console.log(`\n #${randomNumber} : Anniversaire Kéké\n`);
                  var dispatcher = connection.playFile(`./features/anniversaire_keke.mp3`);
                  break;
                  case 5:
                  console.log(`\n #${randomNumber} : Aria de kéké\n`);
                  var dispatcher = connection.playFile(`./features/aria_de_keke.mp3`);
                  break;
                  case 6:
                  console.log(`\n #${randomNumber} : Ballade de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/ballade_de_keke.mp3`);
                  break;
                  case 7:
                  console.log(`\n #${randomNumber} : Berceuse de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/berceuse_de_keke.mp3`);
                  break;
                  case 8:
                  console.log(`\n #${randomNumber} : Blues Kéké\n`);
                  var dispatcher = connection.playFile(`./features/blues_keke.mp3`);
                  break;
                  case 9:
                  console.log(`\n #${randomNumber} : Bossa de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/bossa_de_keke.mp3`);
                  break;
                  case 10:
                  console.log(`\n #${randomNumber} : Bouge avec Kéké\n`);
                  var dispatcher = connection.playFile(`./features/bouge_avec_keke.mp3`);
                  break;
                  case 11:
                  console.log(`\n #${randomNumber} : Bubblegum Kéké\n`);
                  var dispatcher = connection.playFile(`./features/bubblegum_keke.mp3`);
                  break;
                  case 12:
                  console.log(`\n #${randomNumber} : Calypso de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/calypso_de_keke.mp3`);
                  break;
                  case 13:
                  console.log(`\n #${randomNumber} : Chant Marin\n`);
                  var dispatcher = connection.playFile(`./features/chant_marin.mp3`);
                  break;
                  case 14:
                  console.log(`\n #${randomNumber} : Chant Montagnard\n`);
                  var dispatcher = connection.playFile(`./features/chant_montagnard.mp3`);
                  break;
                  case 15:
                  console.log(`\n #${randomNumber} : Cheb Kéké\n`);
                  var dispatcher = connection.playFile(`./features/cheb_keke.mp3`);
                  break;
                  case 16:
                  console.log(`\n #${randomNumber} : Chez moi\n`);
                  var dispatcher = connection.playFile(`./features/chez_moi.mp3`);
                  break;
                  case 17:
                  console.log(`\n #${randomNumber} : Chorale de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/chorale_de_keke.mp3`);
                  break;
                  case 18:
                  console.log(`\n #${randomNumber} : Complainte Kéké\n`);
                  var dispatcher = connection.playFile(`./features/complainte_keke.mp3`);
                  break;
                  case 19:
                  console.log(`\n #${randomNumber} : Disco Kéké\n`);
                  var dispatcher = connection.playFile(`./features/disco_keke.mp3`);
                  break;
                  case 20:
                  console.log(`\n #${randomNumber} : DJ Kéké\n`);
                  var dispatcher = connection.playFile(`./features/dj_keke.mp3`);
                  break;
                  case 21:
                  console.log(`\n #${randomNumber} : Drum & bass Kéké\n`);
                  var dispatcher = connection.playFile(`./features/drum_&_bass_keke.mp3`);
                  break;
                  case 22:
                  console.log(`\n #${randomNumber} : El condor Kéké\n`);
                  var dispatcher = connection.playFile(`./features/el_condor_keke.mp3`);
                  break;
                  case 23:
                  console.log(`\n #${randomNumber} : Errance\n`);
                  var dispatcher = connection.playFile(`./features/errance.mp3`);
                  break;
                  case 24:
                  console.log(`\n #${randomNumber} : Étude de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/etude_de_keke.mp3`);
                  break;
                  case 25:
                  console.log(`\n #${randomNumber} : Far West Kéké\n`);
                  var dispatcher = connection.playFile(`./features/far_west_keke.mp3`);
                  break;
                  case 26:
                  console.log(`\n #${randomNumber} : Flamenco Kéké\n`);
                  var dispatcher = connection.playFile(`./features/flamenco_keke.mp3`);
                  break;
                  case 27:
                  console.log(`\n #${randomNumber} : Flânerie Kéké\n`);
                  var dispatcher = connection.playFile(`./features/flanerie_keke.mp3`);
                  break;
                  case 28:
                  console.log(`\n #${randomNumber} : Floraison\n`);
                  var dispatcher = connection.playFile(`./features/floraison.mp3`);
                  break;
                  case 29:
                  console.log(`\n #${randomNumber} : Folk Kéké\n`);
                  var dispatcher = connection.playFile(`./features/folk_keke.mp3`);
                  break;
                  case 30:
                  console.log(`\n #${randomNumber} : Fusion Kéké\n`);
                  var dispatcher = connection.playFile(`./features/fusion_keke.mp3`);
                  break;
                  case 31:
                  console.log(`\n #${randomNumber} : Groove Kéké\n`);
                  var dispatcher = connection.playFile(`./features/groove_keke.mp3`);
                  break;
                  case 32:
                  console.log(`\n #${randomNumber} : Gumbo Kéké\n`);
                  var dispatcher = connection.playFile(`./features/gumbo_keke.mp3`);
                  break;
                  case 33:
                  console.log(`\n #${randomNumber} : Jazz de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/jazz_de_keke.mp3`);
                  break;
                  case 34:
                  console.log(`\n #${randomNumber} : Je vous aime\n`);
                  var dispatcher = connection.playFile(`./features/je_vous_aime.mp3`);
                  break;
                  case 35:
                  console.log(`\n #${randomNumber} : Kéké à la plage\n`);
                  var dispatcher = connection.playFile(`./features/keke_a_la_plage.mp3`);
                  break;
                  case 36:
                  console.log(`\n #${randomNumber} : Kéké académie\n`);
                  var dispatcher = connection.playFile(`./features/keke_academie.mp3`);
                  break;
                  case 37:
                  console.log(`\n #${randomNumber} : Kéké balalaïka\n`);
                  var dispatcher = connection.playFile(`./features/keke_balalaika.mp3`);
                  break;
                  case 38:
                  console.log(`\n #${randomNumber} : Kéké bohême\n`);
                  var dispatcher = connection.playFile(`./features/keke_boheme.mp3`);
                  break;
                  case 39:
                  console.log(`\n #${randomNumber} : Kéké café\n`);
                  var dispatcher = connection.playFile(`./features/keke_cafe.mp3`);
                  break;
                  case 40:
                  console.log(`\n #${randomNumber} : Kéké des Îles\n`);
                  var dispatcher = connection.playFile(`./features/keke_des_iles.mp3`);
                  break;
                  case 41:
                  console.log(`\n #${randomNumber} : Kéké Dixie\n`);
                  var dispatcher = connection.playFile(`./features/keke_dixie.mp3`);
                  break;
                  case 42:
                  console.log(`\n #${randomNumber} : Kéké l'empereur\n`);
                  var dispatcher = connection.playFile(`./features/keke_l'empereur.mp3`);
                  break;
                  case 43:
                  console.log(`\n #${randomNumber} : Kéké House\n`);
                  var dispatcher = connection.playFile(`./features/keke_house.mp3`);
                  break;
                  case 44:
                  console.log(`\n #${randomNumber} : Kéké le verni\n`);
                  var dispatcher = connection.playFile(`./features/keke_le_verni.mp3`);
                  break;
                  case 45:
                  console.log(`\n #${randomNumber} : Kéké métal\n`);
                  var dispatcher = connection.playFile(`./features/keke_metal.mp3`);
                  break;
                  case 46:
                  console.log(`\n #${randomNumber} : Kéké route 66\n`);
                  var dispatcher = connection.playFile(`./features/keke_route_soixante_six.mp3`);
                  break;
                  case 47:
                  console.log(`\n #${randomNumber} : Kéké soul\n`);
                  var dispatcher = connection.playFile(`./features/keke_soul.mp3`);
                  break;
                  case 48:
                  console.log(`\n #${randomNumber} : Kéké star\n`);
                  var dispatcher = connection.playFile(`./features/keke_star.mp3`);
                  break;
                  case 49:
                  console.log(`\n #${randomNumber} : Maharadjah Kéké\n`);
                  var dispatcher = connection.playFile(`./features/maharadjah_keke.mp3`);
                  break;
                  case 50:
                  console.log(`\n #${randomNumber} : Marche de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/marche_de_keke.mp3`);
                  break;
                  case 51:
                  console.log(`\n #${randomNumber} : Milonga Kéké\n`);
                  var dispatcher = connection.playFile(`./features/milonga_keke.mp3`);
                  break;
                  case 52:
                  console.log(`\n #${randomNumber} : M. Kéké\n`);
                  var dispatcher = connection.playFile(`./features/m_keke.mp3`);
                  break;
                  case 53:
                  console.log(`\n #${randomNumber} : Napolitaine\n`);
                  var dispatcher = connection.playFile(`./features/napolitaine.mp3`);
                  break;
                  case 54:
                  console.log(`\n #${randomNumber} : Parade Kéké\n`);
                  var dispatcher = connection.playFile(`./features/parade_keke.mp3`);
                  break;
                  case 55:
                  console.log(`\n #${randomNumber} : Psykéké\n`);
                  var dispatcher = connection.playFile(`./features/psykeke.mp3`);
                  break;
                  case 56:
                  console.log(`\n #${randomNumber} : Ragtime Kéké\n`);
                  var dispatcher = connection.playFile(`./features/ragtime_keke.mp3`);
                  break;
                  case 57:
                  console.log(`\n #${randomNumber} : Réfléchir\n`);
                  var dispatcher = connection.playFile(`./features/reflechir.mp3`);
                  break;
                  case 58:
                  console.log(`\n #${randomNumber} : Rengaine de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/rengaine_de_keke.mp3`);
                  break;
                  case 59:
                  console.log(`\n #${randomNumber} : Rockabilly Kéké\n`);
                  var dispatcher = connection.playFile(`./features/rockabilly_keke.mp3`);
                  break;
                  case 60:
                  console.log(`\n #${randomNumber} : Rock Kéké\n`);
                  var dispatcher = connection.playFile(`./features/rock_keke.mp3`);
                  break;
                  case 61:
                  console.log(`\n #${randomNumber} : Salsa de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/salsa_de_keke.mp3`);
                  break;
                  case 62:
                  console.log(`\n #${randomNumber} : Señor Kéké\n`);
                  var dispatcher = connection.playFile(`./features/senor_keke.mp3`);
                  break;
                  case 63:
                  console.log(`\n #${randomNumber} : Shamisen Kéké\n`);
                  var dispatcher = connection.playFile(`./features/shamisen_keke.mp3`);
                  break;
                  case 64:
                  console.log(`\n #${randomNumber} : Ska Kéké\n`);
                  var dispatcher = connection.playFile(`./features/ska_keke.mp3`);
                  break;
                  case 65:
                  console.log(`\n #${randomNumber} : Slow Kéké\n`);
                  var dispatcher = connection.playFile(`./features/slow_keke.mp3`);
                  break;
                  case 66:
                  console.log(`\n #${randomNumber} : Sonate Kéké\n`);
                  var dispatcher = connection.playFile(`./features/sonate_keke.mp3`);
                  break;
                  case 67:
                  console.log(`\n #${randomNumber} : Soul de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/soul_de_keke.mp3`);
                  break;
                  case 68:
                  console.log(`\n #${randomNumber} : Space Kéké\n`);
                  var dispatcher = connection.playFile(`./features/space_keke.mp3`);
                  break;
                  case 69:
                  console.log(`\n #${randomNumber} : Synthé Kéké\n`);
                  var dispatcher = connection.playFile(`./features/synthe_keke.mp3`);
                  break;
                  case 70:
                  console.log(`\n #${randomNumber} : Tango de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/tango_de_keke.mp3`);
                  break;
                  case 71:
                  console.log(`\n #${randomNumber} : Tovaritch Kéké\n`);
                  var dispatcher = connection.playFile(`./features/tovaritch_keke.mp3`);
                  break;
                  case 72:
                  console.log(`\n #${randomNumber} : Valse de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/valse_de_keke.mp3`);
                  break;
                  case 73:
                  console.log(`\n #${randomNumber} : Vie de forêt\n`);
                  var dispatcher = connection.playFile(`./features/vie_de_foret.mp3`);
                  break;
                  case 74:
                  console.log(`\n #${randomNumber} : Vieux biscuits\n`);
                  var dispatcher = connection.playFile(`./features/vieux_biscuits.mp3`);
                  break;
                  case 75:
                  console.log(`\n #${randomNumber} : Requiem de Kéké\n`);
                  var dispatcher = connection.playFile(`./features/requiem_de_keke.mp3`);
                  break;
                }
              } else if (new Date().getDate() === targetedDay) {
                console.log(`Fin de la représentation ! Merci à tous !`);
                clearInterval(musicManager);
                client.restart();
              }
            }, 1000);
          });
        }
      } else {
        console.log(countdown(settings.countdown.hour, settings.countdown.minute, settings.countdown.second));
      }
    }, 1000);
  } else {
    console.log(`Le serveur n'est pas disponible.`);
  }
});

client.login(settings.token);
