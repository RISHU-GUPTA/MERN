// var add=(a,b)=>a+b;
// var sub=(a,b)=>a-b;
// var mul=(a,b)=>a*b;
// module.exports.addo=add;
// module.exports.subto=sub;
// module.exports.multo=mul;

const obj={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
module.exports=obj;
console.log(__dirname);
console.log(process.argv[3]);
