import Chart from '../../chart/Chart';
import FeaturedInfo from '../../FeaturedInfo/featured_Info';
import  './home.css';
import {model_Data} from '../home/Data';

import { WidgetSm } from '../../Widgets/wSmall/widgetSm';
import { WidgetLg } from '../../Widgets/wLarge/widgetLg';

export default function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>  
    <Chart data={model_Data} title='Sales Analytics' grid dataKey='Active User'/>
    <div className="homeWidgets">
    <WidgetSm/>
    <WidgetLg/>
    </div>

    </div>
  )
}
