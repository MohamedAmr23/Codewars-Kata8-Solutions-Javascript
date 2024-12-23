function array(string) {
    let splittedStr = string.split(",");
  if (!splittedStr || splittedStr.length < 3) return null;
  return string.split(",").slice(1, -1).join(" ");
  }
  
  console.log(array("ahmed,mona,ehab,mohamed"))