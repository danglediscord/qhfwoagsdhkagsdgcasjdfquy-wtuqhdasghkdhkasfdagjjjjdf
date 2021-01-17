/**
 * Initialize the bot in the guild the command was executed in.
 * @module commands/init
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  if (args[0] === undefined) {
    return client.embed.send(message, { desc: '**t!invite** : Botu Sunucuna Davet Edersin.\n**t!init**: Reklam kanalını senkronize et.\n**t!desc**: Reklamınızın açıklamasını ayarlayın.\n**t!preview**: Reklamınızı önizleyin.\n**t!bump**: Reklamınızı diğer tüm loncalara gösterin.\n' })
  }
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'yardım',
  usage: '<channel>',
  description: 'Setup the bot.'
}
