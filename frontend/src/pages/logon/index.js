import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';

export default function Logon() {
    return (
       <div className="logon-container">
           <section className="form">
                <img src={logoimg} alt="Be The Hero" />
                <form>
                    <h1> Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                       <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro.
                    </a>
                </form>
           </section>

           <img src={heroesimg} alt="Heroes" />
       </div>
    );
}