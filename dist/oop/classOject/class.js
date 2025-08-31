"use strict";
class Lion {
    // Miêu tả hành vi vi
    sleep() {
        console.log("Lion is sleeping...", this.name);
    }
}
// Miêu tả cụ thể => Object, 
// new, tương đương với việc tạo 1 bản sao của Lion này, 
const kingLion = new Lion();
kingLion.name = "King of Forest";
kingLion.color = "Black";
console.log(kingLion);
kingLion.sleep();
