import {products} from '/app/helpers/products.js';
import { dcE } from '../helpers/utilities.js';

export function Card (category){
    let $button;
    let $img;
    let $div1;
    let $div2;
    let $main = dcE('main');
    let $section = dcE('section');

    $main.classList.add('main');
    $section.classList.add('destacados');
    $section.innerHTML = '';
    
        products.forEach(product => {  

            if(product.category === category){
                //Creacion de elementos
                $button = dcE('button');
                $img = dcE('img');
                $div1 = dcE('div');
                $div2 = dcE('div');

                //Carga de datos
                $img.src = product.img;
                $img.alt = product.name;
                $div1.innerText = product.name;
                $div2.innerText = product.price;
                
                //Agregacion de elementos a sus respectivos contenedores
                $button.appendChild($img);    
                $button.appendChild($div1);
                $button.appendChild($div2);

                $section.appendChild($button);
                }
            });

    $main.appendChild($section);

    return $main;
}