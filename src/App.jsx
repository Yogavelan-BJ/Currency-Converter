import Card from './Card'
import './App.css'
import useFetch from './useFetch.js'
import { useState } from 'react'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)
  
  const fetchdata = useFetch(from)
  const options = Object.keys(fetchdata)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(converted)
    setConverted(amount)
  }
  const convert=()=>{

    const temp = amount * fetchdata[to]
    setConverted(temp)
  }
  return (
    <div className='app'>
      <div className='frame'>
        <form id="conversion_form" onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
          <Card label="From"
                input_disabled = {false}
                default_currency={from}
                oncurrency_change={(c)=>{setFrom(c)}}
                currency_options={options}
                onamount_change={(a)=>{
                  setAmount(a)}}
                amount={amount}
          />
          <button className="swap" type="button" onClick={swap}>Swap</button>
          <Card label="To"
                input_disabled = {true}
                default_currency={to}
                oncurrency_change={(c)=>{setTo(c)}}
                currency_options={options}
                amount={converted}
          />
          <button className="sub" type='submit'>{`Convert from ${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
        </form>
      </div>
    </div>
  )
}

export default App
