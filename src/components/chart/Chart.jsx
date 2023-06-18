import '././chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {model_Data} from '../Pages/home/Data'

export default function Chart({title,data,dataKey, grid}) {
  return (
    <div className='Chart' >  
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width='100%' aspect ={4 / 1} >
            <LineChart data={model_Data}>
            <XAxis dataKey='name' stroke='#5550bd'/>
            <Tooltip/>
            <Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={5/5}/>}
            </LineChart>


        </ResponsiveContainer>
    </div>
  )
}
