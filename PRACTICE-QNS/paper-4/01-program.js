// Write a program to check if a given string of brackets is balanced. A string is considered balanced if: Every opening bracket has a corresponding closing bracket. Brackets are closed in the correct order. Valid brackets are: (). 0. 11.
// Example:
// Input- {{[]}} o/p balanced
// i/p - {[(]  o/p not balanced

function balanced(str) {
    let stack = [];
    for(let i=0; i<str.length; i++) {
        let ch = str[i];
        if(ch === '{' || ch === '[' || ch === '(') {
            stack[stack.length] = ch;
        }
        else if(ch === '}' || ch === ']' || ch === ')') {
            let top = stack[stack.length]
            if(stack.length === 0) {
                return "not balanced";
            } 
            else if(ch === '}' && top === '{' || ch === ']' && top === '[' || ch === '(' && top === ')' ) {
                stack.length--;
            }
        }
    }
    if(stack.length === 0) {
        return "Balanced";
    } 
    return "Not balanced";
}

let str = "[(]}";
console.log(balanced(str));
