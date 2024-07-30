// let configure = null;
// class ConfigureVals{
//     //write your code here
//     constructor(xpoint, ypoint, shape) {
//         this.xpoint = xpoint ? xpoint : 0;
//         this.ypoint = ypoint ? ypoint : 0;
//         this.shape = shape ? shape : null;
//     }
//     static getConfiguration({ xpoint, ypoint, shape }) {
//         if (!configure) {
//             configure = new ConfigureVals(xpoint, ypoint, shape);
//         }
//         return configure;
//     }
// }

// const c1 = ConfigureVals.getConfiguration({ xpoint: 8, ypoint : 9, shape : 'rectangle' });
// console.log(c1);
// const c2 = ConfigureVals.getConfiguration({ xpoint : 2, ypoint : 4, shape : 'circle' });
// console.log(c2);
// console.log(c1 === c2); // true
// Output:-
// ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }
// ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }


// ES5 Version
ConfigureVals = (function (){
    var configure;
    function initializeVals(initvalues){
        this.xpoint = initvalues.xpoint || 0;
        this.ypoint = initvalues.ypoint || 0;
        this.shape = initvalues.shape || null;
    }
    return{
        getConfiguration:function(initvalues){
        if (configure == undefined) {
            configure = new initializeVals(initvalues)
            }
            return configure;
    }
    }
})()

const c1 = ConfigureVals.getConfiguration({ "xpoint": 8, "ypoint" : 9, "shape" : "rectangle" });
console.log(c1)
const c2 = ConfigureVals.getConfiguration({ "xpoint": 2, "ypoint": 4, "shape" : "circle" });
console.log(c2)
console.log(c2 == c1)

// Output:-
// initializeVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }
// initializeVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }
// true