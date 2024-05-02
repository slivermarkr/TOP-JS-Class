import {myValue} from './myModules.js';
import * as myModule from './myModules.js';


console.log(myValue);
console.log(myModule.myValue);

setTimeout(() => {
 console.log(myValue);
 console.log(myModule.myValue);
 myValue = 3;
}, 1000);
