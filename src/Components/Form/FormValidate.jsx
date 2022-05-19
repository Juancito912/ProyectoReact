
const specialCharacter = ['&','@','#','%','$','/','(',')','=','-','_','>','<','|','°','?','¿','!','¡']
const numbers = ['0','1','2','3','4','5','6','7','8','9'];

const isThereNumber = (character) => {
    if(numbers.findIndex(element => element === character) !== -1) {
      return true;
    }
    return false;
  }
  const isThereSpecialCharacter = (character) => {
    if(specialCharacter.findIndex(element => element === character) !== -1) {
      return true;
    }
    return false;
  }
  const searchNum = (string)=> {
    for (let i = 0; i < string.length; i++) {
      let character = string.charAt(i);
      if(isThereNumber(character)) {
        return true;
      }
    }
    return false;
  }
  const searchMayus = (string) => {
    for (let i = 0; i< string.length; i++) {
      let character = string.charAt(i);
      if(character === character.toUpperCase()) {
          return true;
      }
      return false;
    }
  }

  const searchSpecialCharacter = (string)=> {
    for (let i = 0; i < string.length; i++) {
      let character = string.charAt(i);
      if(isThereSpecialCharacter(character)) {
        return true;
      }
    }
    return false;
  }

  export const validateMail = (string) => {
    if(string.search("@") === -1){
      return false;
    }
    if(string.search(".com") === -1){
      return false;
    }
    return true;
  }
  
  export const validateName =(string)=> {
    for (let i = 0; i< string.length; i++) {
      let character = string.charAt(i);
      if(isThereNumber(character)) {
        return false;
      }
      if(isThereSpecialCharacter(character)){
        return false;
      }
    }
    return true;
  }

  export const validatePassword = (string) => {
    if(searchMayus(string)&&searchSpecialCharacter(string)&&searchNum(string)){
      return true;
    }
    return false;
  }