import './widgetSm.css'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';

export function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle"> New Join Member </span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://unsplash.it/200/200" alt="" className='widgetSmImg'/>
          <div className="widgetUser">
          <span className="widgetSmUsername">Precious Syndanie</span>
          
          <span className="widgetSmUserTitle">Systems Analyst</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityTwoToneIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://unsplash.it/200/200" alt="" className='widgetSmImg'/>
          <div className="widgetUser">
          <span className="widgetSmUsername">Tebatso leka</span>
          
          <span className="widgetSmUserTitle">Database adminstrator</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityTwoToneIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://unsplash.it/200/200" alt="" className='widgetSmImg'/>
          <div className="widgetUser">
          <span className="widgetSmUsername">Sue-Anne Links</span>
          
          <span className="widgetSmUserTitle">Web developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityTwoToneIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://unsplash.it/200/200" alt="" className='widgetSmImg'/>
          <div className="widgetUser">
          <span className="widgetSmUsername">Neo Nkwela</span>
          
          <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityTwoToneIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://unsplash.it/200/200" alt="" className='widgetSmImg'/>
          <div className="widgetUser">
          <span className="widgetSmUsername">Nonhlanhla Bila</span>
          
          <span className="widgetSmUserTitle">Tech consultant</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityTwoToneIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>
      </ul>
      </div>
  )
}

 
