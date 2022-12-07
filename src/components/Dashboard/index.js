import React from "react"
import './index.css'
import myhartCard from "../../images/card-myhart.png"
import lineDivision from "../../images/line-division.svg"

import leftArrow from "../../images/leftArrow.svg"
import rightArrow from "../../images/rightArrow.svg"
import limitBar from "../../images/limitBar.svg"

import iconHistory1 from "../../images/iconHistory-1.svg"
import iconHistory2 from "../../images/iconHistory-2.svg"
import iconHistory3 from "../../images/iconHistory-3.svg"
import iconHistory4 from "../../images/iconHistory-4.svg"



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

import graphic1 from '../../images/graphic-1.svg'
import graphic2 from '../../images/graphic-2.svg'
import viewMore from '../../images/viewMore.svg'

import person1 from '../../images/person-1.svg'
import person2 from '../../images/person-2.svg'
import person3 from '../../images/person-3.svg'
import person4 from '../../images/person-4.svg'
import person5 from '../../images/person-5.svg'


export default function Dashboard() {
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
            
            <div className="__card">
                <div className="__cardCommunity">
                  <div className="__divisionCardCommunity">
                   <div className="__cardMyhart">
                      <h1>Comunidade START</h1>
                      <div className="_cardmyhart">
                         <img src={leftArrow} alt="" className="leftArrow" /> 
                         <img src={myhartCard} alt="" />
                         <img src={rightArrow} alt="" className="rightArrow" /> 
                        
                         <div className="__divisionBar">
                           <img src={lineDivision} alt="" />
                         </div>
                      </div>
                   </div> 
                    <div className="__cardLimit">
                      <div className="__limitBar">
                        <img src={limitBar} alt="" /> 
                      </div>
                      <div className="__limitValue">
                          <h1>valor minimo para saque:</h1>
                          <h2>R$2.850/ R$5.000</h2>
                      </div>
                      
                    </div>
                   </div>
                   
                    <div className="__divisionLimit">
                      <div className="__valueLimit">
                         <div className="__currentBalance">
                            <h2>R$</h2>
                            <h1>2.850,75</h1>
                            <h3>Saldo Atual</h3>
                        </div>
                        <div className="__income">
                            <h1>R$ 1.500,50</h1>
                            <h2>Rendimentos</h2>
                        </div>
                        <div className="__cashBack">
                            <h1>R$ 350,60</h1>
                            <h2>Cashback</h2>
                        </div>   
                      <div className="__buttonRequest">
                         <button>
                            <h1>SOLICITAR SAQUE</h1>
                         </button>
                      </div>
                        
                     
                      </div>
                 
                    </div>
                   
                </div>
                
                <div className="__cardHistoric">
                    <div className="__historicRewards">
                        <h1>Historico de Recompensas</h1>
                    </div>
                   <table className="__tableRewardsTitle">
                       
                            <td className="__titleRewards">Origem</td>
                            <td className="__titleRewards">Tipo</td>
                            <td className="__titleRewards">Data</td>
                            <td className="__titleRewards">Valor</td>
                       
                   </table>
                    <table className="__tableRewards">
                        <tr>
                            <td className="__tableRewards">
                            
                             <img src={iconHistory1} alt="" />
                              Tesco Market
                             
                             
                            </td>
                            <td className="__originRewards">
                             
                             <img src={iconHistory2} alt="" />
                             ElectroMen Market
                            
                             </td>
                             <td className="__originRewards">
                           
                            <img src={iconHistory3} alt="" />
                            Fiorgio Restaurant
                            
                             </td>
                             <td className="__originRewards">
                            
                             <img src={iconHistory3} alt="" />
                             Fiorgio Restaurantx
                             
                            </td>
                             <td className="__originRewards">
                           
                             <img src={iconHistory4} alt="" />
                             Ann Marlin
                            
                             </td>
                           
                        </tr>
                        <tr>
                          
                            <td className="__typeRewards">Marketplace</td>
                            <td className="__typeRewards">Food</td>
                            <td className="__typeRewards">Sport</td>
                            <td className="__typeRewards">Shopping</td>
                            <td className="__typeRewards">Shopping</td>
                         
                        </tr> 
                        <tr>
                            
                            
                            <td className="__dateRewards">15 Dec 2022</td>
                            <td className="__dateRewards">20 Jan 2023</td>
                            <td className="__dateRewards">30 Mar 2020</td>
                            <td className="__dateRewards">10 Apri 2023</td>
                            <td className="__dateRewards">02 Dec 2022</td>
                       
                        </tr> 
                        <tr>
                           
                            <td className="__valueRewards">R$140.99</td>
                            <td className="__valueRewards">R$99.99</td>
                            <td className="__valueRewards">R$23.99</td>
                            <td className="__valueRewards">R$44.99</td>
                            <td className="__valueRewards">R$120.99</td>
                           
                        </tr> 
                       
                    </table>
                   
                    
                </div>

                
            </div>
            <div className="__card">
              <div className="__summaryTitle">Resumo</div>
                <div className="__cardSummary">
                  <div className="__cardIndications">
                    <div className="_totalIndications">
                      <div className="__valueIndications">
                      <h1>11</h1>
                      <h2>Total de Indicações</h2>
                     </div>
                     </div>
                  
                  </div>
                  <div className="__cardIndications">
                    <div className="__valueIndications">
                      <h3>Aprovados</h3>
                      <h1>R$4.720</h1>
                      <h2>Valor em Indicações</h2>
                    </div>
                  </div>
                  <div className="__cardIndications">
                   <div className="__valueIndications">
                     <h4>Pendentes</h4>
                     <h1>R$1.200</h1>
                     <h2>Valor em Indicações</h2>
                   </div>
                    
                  </div>
                </div>
                
                <div className="__myCommunity">
                 <div className="__summaryTitle">Minha Comunidade</div>
                  <h1>Seu Link de Indicação:</h1>
                  <div className="__linkIndication">
                   <input type="text" name="teste" value="https://unis.tech/?ref=]]" disabled="" 
                    className="__inputIndications"/>
                
                    <button className="__buttonIndications">COPIAR</button>
                  </div>
                  <div className="__favorites">
                    <div className="__people">
                      <img src={person1} alt="" />
                      <div className="__peopleName">
                        Ana
                      </div>
                    </div>
                    <div className="__people">
                    <img src={person2} alt="" />
                      <div className="__peopleName">
                        Monica
                      </div>
                    </div>
                    <div className="__people">
                    <img src={person3} alt="" />
                      <div className="__peopleName">
                        James
                      </div>
                    </div>
                    <div className="__people">
                    <img src={person4} alt="" />
                      <div className="__peopleName">
                        Mike
                      </div>
                    </div>
                    <div className="__people">
                    <img src={person5} alt="" />
                      <div className="__peopleName">
                        Mia
                      </div>
                    </div>
                    <a>Ver Todos</a>
                  </div>
                </div>
                <div className="__cardRewards">
                 <div className="__rewards">
                  <div className="__rewardTitle">
                    Recompensas
                    <img src={viewMore} alt="" />
                  </div>
                  <h2>R$1,750.23</h2>
                  <h3>Ultimos 30 dias</h3>
                  <img src={graphic1} alt="" />
                 </div>
                 <div className="__incomeAmounts">
                  Income Amounts
                 <img src={graphic2} alt="" />
                 </div>
                </div>
            </div>
        </div>
    )
}