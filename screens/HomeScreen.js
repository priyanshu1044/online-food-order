import React,{useState} from 'react'
import Pizza from '../components/Pizza'

import './HomeScreen.css'
function HomeScreen(){
    return(
        <div>
            <div className='row'>
                {pizzas.map(pizza=>{
                    return <div className='col-md-4'>
                        <div><Pizza pizza={pizza}/></div>
                    </div>
                })}
            </div>
            homescreen
        </div>
    )
}
 
export default HomeScreen