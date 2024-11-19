import {$, dcE} from '/app/helpers/utilities.js';

export function Title (){

    let $h1 = dcE('h1');

    //Pantalla Default Inicio
    $h1.innerHTML = 'ESCAPADAS';
    $h1.classList.add('title');
    //Pantalla Default Fin

    $('.nav').addEventListener('click', (e) => {
        $h1.innerHTML = e.target.innerText;
        $h1.classList.add('title');
    });

    return $h1;
}