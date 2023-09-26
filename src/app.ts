import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payments from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// const invOne = new Invoice('Mario', 'work', 1000);
// const invTwo = new Invoice('Luigi', 'work', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.format());
// })


// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne = new Invoice('Mario', 'work', 1000);
// docTwo = new Payments('Luigi', 'work', 300);
// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo)
// console.log(docs);


//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//input
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc:HasFormatter;
    
    let inputs:[string,string,number];
    inputs = [toFrom.value, details.value, amount.valueAsNumber];

    if(type.value==='invoice'){
        doc = new Invoice(...inputs)
    }else{
        doc = new Payments(...inputs)
    }

    console.log(doc);
    list.render(doc,type.value,'end');
})