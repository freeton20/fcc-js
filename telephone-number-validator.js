function telephoneCheck(str) {
    let patterns = [
        '^[\\d]{3}-[\\d]{3}-[\\d]{4}$',
        '^1\\s\\([\\d]{3}\\)\\s[\\d]{3}-[\\d]{4}$',
        '^1\\s[\\d]{3}-[\\d]{3}-[\\d]{4}$',
        '^[\\d]{10}$',
        '^\\([\\d]{3}\\)[\\\d]{3}-[\\d]{4}$',
        '^1\\s[\\d]{3}\\s[\\d]{3}\\s[\\d]$',
        '^1\\([\\d]{3}\\)[\\d]{3}-[\\d]{4}',
        '^1\\s[\\d]{3}\\s[\\d]{3}\\s[\\d]{4}$',
    ]
    return patterns.some(function(pattern){
        let re = new RegExp(pattern);
        return re.test(str);        
    });   
}