module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '[', '1', '3', '5'];
  const sameBrackets = ['|', '7', '8']; 
  const bracketPair = {
      [')'] : '(',
      ['}'] : '{',
      [']'] : '[',
      ['2'] : '1',
      ['4'] : '3',
      ['6'] : '5',
      ['|'] : '|',
      ['7'] : '7',
      ['8'] : '8',
    };
  
  const bracketSamePair = {
      ['|'] : '|',
      ['7'] : '7',
      ['8'] : '8',
    };
  
  if (str.length % 2 !== 0) {
      return false;
    }  

    let stack =[];
  for (i = 0; i < str.length; i++) {
    let elemBracket = str[i];
    
    if (openBrackets.includes(elemBracket) || 
        (sameBrackets.includes(elemBracket) &&
        bracketSamePair[elemBracket] !== stack[stack.length - 1])) {
        stack.push(elemBracket)

    } else {
      if (stack.length === 0) {
        return false;
      }
    
    let topElement = stack[stack.length - 1];
        
    if (bracketPair[elemBracket] === topElement) {
      stack.pop()
      } else {
      return false;
      }
    }
  }
  return stack.length === 0;
}
