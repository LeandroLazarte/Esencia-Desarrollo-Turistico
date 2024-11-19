import { dcE } from '../helpers/utilities.js';

export function Header (){
    let $header = dcE('header');
    $header.classList.add('header');

    let $img = dcE('img');
    $img.src = 'app/assets/Logo.svg';
    $img.alt = 'Logo de la Empresa';
    $header.appendChild($img);

    return $header;
}