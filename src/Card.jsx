import React from 'react'
import './Card.css'
import { useId } from 'react'

function Card({
    label,
    input_disabled,
    default_currency,
    oncurrency_change,
    currency_options,
    onamount_change,
    amount
}) {
  const id = useId()
  const menu_id = useId()
  return (
    <div className='card'>
        <div className='input'>
        <label htmlFor={id} className="input_label"><strong>{label}</strong></label>
            <input
            id={id}
            type='number' 
            disabled={input_disabled}
            placeholder='Amount'
            onChange={(e)=>{onamount_change(e.target.value)}}
            value={amount}/>
            
        </div>
        <div className='currency'>
        <label htmlFor={menu_id} className="currency_label"><strong>Currency</strong></label>
            <select
            id={menu_id}
            value={default_currency}
            onChange={(e)=>{oncurrency_change(e.target.value)}}
            >
                {currency_options?.map((currency)=>(
                    <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Card
