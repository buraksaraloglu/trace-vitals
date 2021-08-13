/**
 * @param {String} endpoint
 */

export const isValidEndpoint = (endpoint) => {
  if (typeof endpoint !== 'string') return false;

  const urlRegex = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
  if (!endpoint.match(urlRegex)) return false;

  return true;
};
