export const PI=Math.PI;

let usuarui="Jon";

let password="qwerty";
//export default password;

export/* default*/ function saludar()
{
    console.log("gola");
};

//solo se puede tner una exportacion default
/*export default function saludar2()
{
    console.log("gola")
}*/

export default class Saludar
{
    constructor()
    {
        console.log("gola +es6");
    }
};