/*
.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
```js
#
##
###
####
#####
######
#######
*/

var x='';
for(let i=0; i <7; i++){
x= '#'+ x;
console.log( x );
}