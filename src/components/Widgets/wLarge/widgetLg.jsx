import  './widgetLg.css'

export function WidgetLg() {
  const Button =({type}) =>{
    return <button className={"widgetLgButton "+type}>{type}</button>;
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Events</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="" 
            className='widgetLgImg'/>
            <span className="widgetLgName">Jennifer Waats</span>
          </td>
          <td className="widgetLgDate">25 Jun 2202</td>
          <td className="widgetLgAmount">R19.60</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt=""
            className='widgetLgImg' />
            <span className="widgetLgName">Jennifer Waats</span>
          </td>
          <td className="widgetLgDate">19 Jul 2202</td>
          <td className="widgetLgAmount">R50.0</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="" 
            className='widgetLgImg'/>
            <span className="widgetLgName">Jennifer Waats</span>
          </td>
          <td className="widgetLgDate">08 Aug 2202</td>
          <td className="widgetLgAmount">R19.60</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="" 
            className='widgetLgImg'/>
            <span className="widgetLgName">Jennifer Waats</span> 
          </td>
          <td className="widgetLgDate">01 Sep 2202</td>
          <td className="widgetLgAmount">R100.90</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media.istockphoto.com/photos/portrait-of-a-teenager-girl-at-home-picture-id1294126561?b=1&k=20&m=1294126561&s=170667a&w=0&h=lQAWtum816AyU7W0LWd1bCCWEPiMkwNjoEwGJzYY7l4=" alt="" 
            className='widgetLgImg'/>
            <span className="widgetLgName">Zanele Dlamini</span> 
          </td>
          <td className="widgetLgDate">01 Jan 2203</td>
          <td className="widgetLgAmount">R230.50</td>
          <td className="widgetLgStatus"><Button type="Pending "/></td>
        </tr> 
      </table>
      </div>
  )
}

 