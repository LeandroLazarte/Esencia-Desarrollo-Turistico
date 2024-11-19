import {menu} from '/app/helpers/menu.js';
import { dcE } from '../helpers/utilities.js';

export function NavBar (){
    let $nav = dcE('nav');
    let $ul = dcE('ul');

    $nav.classList.add('nav');
    $ul.classList.add('nav_links');

    menu.forEach(element => {
        let $li = dcE('li');
        let $a = dcE('a');

        $a.innerText = element.name;
        $a.href = element.page;
        $li.appendChild($a);
        $ul.appendChild($li);
    });

    $nav.appendChild($ul);
    return $nav;
}