function IsAPangrams(str) {
    var input = "";
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    input = input.toLowerCase();
    for (let i = 0; i < alpha.length; i++){
        if (input.indexOf(alpha.charAt(i)) === -1){
            return console.log('NotPangrams')
    
            }
        }

        return console.log('isAPangrams');
    }
