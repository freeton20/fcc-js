function orbitalPeriod(arr) {
    return arr.map(function(obj){
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        let orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM)));
        return {name:obj.name, orbitalPeriod: orbitalPeriod};
        }
    )    
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);