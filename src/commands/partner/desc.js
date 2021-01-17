/**
 * Set the description of the advertisement you want to bump.
 * @module commands/desc
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const desc = args.join(' ')
  if (desc === undefined || desc === '') {
    return client.embed.send(message, { desc: 'Bir lonca tanımı belirleyin. Lonca davetinizin otomatik olarak ekleneceğini unutmayın..' })
  }

  if (desc.length > client.config.ad.desc.max_length) {
    return client.embed.send(message, { desc: `Açıklama ${client.config.ad.desc.max_length} karakterden uzun olamaz.` })
  }
  if (desc.length < client.config.ad.desc.min_length) {
    return client.embed.send(message, { desc: `Açıklamada en az ${client.config.ad.desc.min_length} karakter bulunmalıdır.` })
  }
  if (desc.includes('http') || desc.includes('@everyone') || desc.includes('@here')){
    return client.embed.send(message, { desc: 'Açıklamaya Everyone,here ve Link Yazamazsın.' })
  }
  client.database.run('UPDATE settings SET desc = ? WHERE guildid = ?', [desc, message.guild.id])
  client.embed.send(message, { desc: 'Açıklama başarıyla güncellendi.' })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'Server Owner'
}

/** Command Help */
exports.help = {
  name: 'desc',
  usage: '<description>',
  description: 'Set a description for your advertisement.'
}
