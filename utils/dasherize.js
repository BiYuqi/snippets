function dasherize (str) {
  // .replace(/[-_\s]+/g, '-') no used
  return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}

console.log( dasherize('MozTransform') );