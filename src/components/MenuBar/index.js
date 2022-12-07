import './index.css'
import icon_1 from '../../images/Icon-1.svg'
import icon_2 from '../../images/Icon-2.svg'
import icon_3 from '../../images/Icon-3.svg'
import icon_4 from '../../images/Icon-4.svg'
import icon_5 from '../../images/Icon-5.svg'
import icon_6 from '../../images/Icon-6.svg'
import icon_7 from '../../images/Icon-7.svg'
import icon_8 from '../../images/Icon-8.svg'
import icon_9 from '../../images/Icon-9.svg'
import logo from '../../images/Logo.png'
import number from '../../images/Number.svg'
import path from '../../images/Path.svg'

export default function MenuBar() {
    return (
        <>
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
        </>

    )
}