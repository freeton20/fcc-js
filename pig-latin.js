function translatePigLatin(str) {
    let strArr = str.split("");
    if(/[aeoui]/.test(strArr[0])){
        return strArr.join("") + "way";
    }else{
        return str.replace(/^([^aeoui]+)(.*)$/,"$2$1ay");        
    }    
}

translatePigLatin("schwartz");