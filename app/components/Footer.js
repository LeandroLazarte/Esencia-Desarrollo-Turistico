import { social_networks } from '../helpers/social_networks.js';
import { dcE } from '../helpers/utilities.js';
import { WhatsappLink } from './WhatsappLink.js';

export function Footer (){

    let $footer= dcE('footer');

    let $div1 = dcE('div');
    let $div2 = dcE('div');
    let $div3 = dcE('div');
    let $div4 = dcE('div');

    let $h4_1 = dcE('h4');
    let $h4_2 = dcE('h4');
    let $h4_3 = dcE('h4');
    let $h4_4 = dcE('h4');

    let $a;
    let $img;
    let $span;


    $footer.classList.add('footer');
    $div1.classList.add('social_networks');
    $h4_1.textContent = 'Redes Sociales';
    $div1.appendChild($h4_1);

    social_networks.forEach(social_network => {
        $a = dcE('a');
        $img = dcE('img');
        $span = dcE('span');

        $a.href = '#';
        $img.src = social_network.img;
        $img.alt = social_network.name;
        $span.textContent = social_network.name;

        $a.appendChild($img);
        $a.appendChild($span);
        $div1.appendChild($a);
    });
   
    /*
    $h4_2.textContent = 'Información de Contacto';
    $h4_3.textContent = 'Sobre Nosotros';
    $h4_4.textContent = 'Política de Privacidad';

    Redefinir el footer
    <div>
                <h4>Información de Contacto</h4>
                <a href="#"><span>Telefono</span></a>
                <a href="#"><span>Dirección</span></a>
                <a href="#"><span>Preguntas Frecuentes</span></a>
            </div>
            <div>
                <h4>Sobre Nosotros</h4>
                <a href="#"><span>Quienes Somos</span></a>
                <a href="#"><span>Nuestros Socios</span></a>
                <a href="#"><span>Trabaja Con Nosotros</span></a>
                <a href="#"><span>Dirección</span></a>
            </div>
            <div>
                <h4>Política de Privacidad</h4>
            </div>
    */
    $footer.appendChild($div1);
    $footer.appendChild(WhatsappLink());
    return $footer;
}
