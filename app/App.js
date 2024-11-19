import {$} from '/app/helpers/utilities.js';
import {Header} from '/app/components/Header.js';
import {NavBar} from '/app/components/NavBar.js';
import {Footer} from '/app/components/Footer.js';
import { Router } from './components/Router.js';

export function App (){
    $('.root').innerHTML = '';
    $('.root').appendChild(Header());
    $('.root').appendChild(NavBar());
    Router();
    $('.root').appendChild(Footer());
}   