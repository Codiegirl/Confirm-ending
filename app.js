//with the endsWith function
function confirmEnding(str, target){
    if(str.endsWith(target)){
      return true
    }
    return false;
  }
  confirmEnding("Bastion", "n")
  
  //one way
  function confirmEnding(str, target){
    console.log(str.substr(-target.length))
    if (str.substr(-target.length) == target){
      console.log(str.substr(-target.length))
      return true
    }
    return false
  }
  confirmEnding("Bastion", "na")
  
  
  
  