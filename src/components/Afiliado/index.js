import React from "react"
import './index.css'
import logo from '../../images/Logo.png'
import cartao_1 from '../../images/cartao-1.png'
import cartao_2 from '../../images/cartao-2.png'
import cartao_3 from '../../images/cartao-3.png'
import cartao_4 from '../../images/cartao-4.png'
import cartao_5 from '../../images/cartao-5.png'
import cartao_6 from '../../images/cartao-6.png'
import icon_1 from '../../images/Icon-1.svg'
import icon_2 from '../../images/Icon-2.svg'
import icon_3 from '../../images/Icon-3.svg'
import icon_4 from '../../images/Icon-4.svg'
import icon_5 from '../../images/Icon-5.svg'
import icon_6 from '../../images/Icon-6.svg'
import icon_7 from '../../images/Icon-7.svg'
import icon_8 from '../../images/Icon-8.svg'
import icon_9 from '../../images/Icon-9.svg'
import number from '../../images/Number.svg'
import path from '../../images/Path.svg'



function Afiliado() {
    return (
        <div className="__container">
            <div className="__divisionOptions">
                <div className="__options">
                    <div className="__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="__nameUser">Olá JÕAO
                       <br/>Seu ID:  87</div>
                </div>
               <div className="__options">
                  <div className="__option">
                     <div><img src={icon_1} alt="" /></div>
                     <div className="__optionTitle">Dashboard</div>
                   </div>
                   <div className="__option">
                     <div><img src={icon_7} alt="" /></div>
                     <div className="__optionTitle">Financeiro</div>
                   </div>
                   <div className="__option">
                     <div><img src={icon_2} alt="" /></div>
                     <div className="__optionTitle">Pedidos</div>
                     <div className="__notify"><img src={number} alt="" /></div>
                   </div>
                   <div className="__option">
                     <div><img src={icon_8} alt="" /></div>
                     <div className="__optionTitle">Produtos</div>
                   </div>
                   <div className="__option">
                     <div><img src={icon_3} alt="" /></div>
                     <div className="__optionTitle">Comunidade</div>
                     <div className="__arrowOption"><img src={path} alt="" /></div>
                     <div></div>
                   </div>
                   <div className="__option">
                     <div><img src={icon_4} alt="" /></div>
                     <div className="__optionTitle">Mensagens</div>
                   </div>
                   <div className="__option">
                     <div><img src={icon_5} alt="" /></div>
                     <div className="__optionTitle">Pagamentos</div>
                   </div>
                   <div className="__option">
                    <div><img src={icon_6} alt="" /></div>
                     <div className="__optionTitle">Configuraçãos</div>
                   </div>
                   <div className="__option">
                   <div><img src={icon_9} alt="" /></div>
                     <div className="__optionTitle">Sair</div>
                   </div>
                
               </div>
            </div>
            <div className="__division-card">
                <div className="__title">
                    <h1>ESCOLHA A SUA COMUNIDADE</h1>
                    <h3>Escolha em qual comunidade você deseja fazer parte.</h3>
                </div>
                <div className="__cards">
                    <div className="__cardsDivision">
                       <div className="__card"><img src={cartao_1} alt=""  width="300" height="200"  /></div>
                       <div className="__card"><img src={cartao_2} alt=""  width="300" height="200" /></div>
                       <div className="__card"><img src={cartao_3} alt=""  width="300" height="200"/></div>
                    </div>
                    <div className="__cardsDivision">
                       <div className="__card"><img src={cartao_4} alt=""  width="300" height="200" /></div>
                       <div className="__card"><img src={cartao_5} alt=""  width="300" height="200"/></div>
                       <div className="__card"><img src={cartao_6} alt=""  width="300" height="200"/></div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Afiliado