export class QNA {
    id:number;
    q: string;
    a: string;

    constructor(obj?){
            for (var prop in obj) this[prop] = obj[prop];
    }
}