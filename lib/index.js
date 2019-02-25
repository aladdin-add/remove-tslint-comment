'use strict';

module.exports = function replace(code) {
  const blockRegex = /\/\*\s*tslint:(enable|disable).*\s*\*\//ug;
  const inlineRegex = /\/\/\s*tslint:disable-next-line.*/ug;
  return code.replace(blockRegex, '').replace(inlineRegex, '');
};
