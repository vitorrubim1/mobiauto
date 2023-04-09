function maskify(text) {
  if (text.length <= 4) return text;

  const lastFourChars = text.slice(-4);
  const maskedChars = text.slice(0, -4).replace(/./g, '#');
  const finalText = maskedChars + lastFourChars;

  return finalText;
}

module.exports = maskify;
