import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    //register a list container (ul) in the constructor
    constructor(
        private container: HTMLUListElement
    ) { }
    //create a render method to render a new 'li' to the container
    render(//-- accepts arguments: a class(invoice or payment), a heading, a position
        item: HasFormatter,
        heading: string,
        position: 'start' | 'end'
    ) {//-- create the html template (li,h4,p)
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        //-- add the 'li' template to the start/end of the list
        if (position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}

