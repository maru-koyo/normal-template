export function removeSubstring(str, startStr, endStr) {
  let startIndex = str.indexOf(startStr);
  let endIndex = str.indexOf(endStr);
  if (startIndex !== -1 && endIndex !== -1) {
    let substringToRemove = str.substring(startIndex, endIndex + endStr.length);
    let result = str.replace(substringToRemove, "");
    return result;
  } else {
    return str;
  }
}
