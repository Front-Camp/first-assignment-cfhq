/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  let newLength;
  replacer = replacer || "";
  if (str.indexOf(' ')+replacer.length > length)
  {
    return str;
  }
  str.length+replacer.length > length ? newLength = length-replacer.length : newLength = str.length;

  let tempString = str.substring(0, newLength);
  tempString = tempString.replace(/\s+\S*$/, "");

  if (replacer.length > 0)
  {
    tempString = tempString + replacer;
  }
  return tempString;
};

export default truncate;
