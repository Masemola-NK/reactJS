import './userList.css'
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '', headerName: 'UserName', width: 200,
     valueGetter:(params)=>{
       return(
         <img src={params.avatar} alt=''/>
        
       )
     }},
    { field: 'email', headerName: 'E-mail', width: 200 },
    { field: 'bank', headerName: 'Bank', width: 130 },
    {
      field: 'transaction',
      headerName: 'Transaction',
      type: 'number',
      width: 90,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 100,
      valueGetter: (params) => {
        return(
          <button>Edit</button>
        )

      }
    },
  ];
  
  const rows = [
    { id: 1, UserName: 'Jon Snow',avatar:'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: 'Jsnow@yahoo.com',
     bank:'ABSA' , transaction: 350.00,status:'Pending'},
    { id: 2, UserName: 'Bulk Harvey',avatar:'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: '012_Harvey@hotmail.com',
     bank:'FNB' , transaction: 222.33,status:'Declined'},
    { id: 3, UserName: 'Tebatso Maleka',avatar:'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', email: '69batso69@hotmail.com',
     bank:'Nedbank' , transaction: 260.90,status:'Approved'},
    { id: 4, UserName: 'Aldrin Waar',avatar:'https://images.unsplash.com/photo-1587064712555-6e206484699b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: 'Aldrin@yahoo.com', 
    bank:'ABSA' , transaction: 760.00, status:'Approved'},
    { id: 5, UserName: 'Charity Aweisa',avatar:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: 'Charcharity@hotmail.com',
     bank:'FNB' , transaction: 22.89,status:'Pending'},
    { id: 6, UserName: 'Karabo Winks',avatar:'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', email: 'Karabo005@gmail.com',
     bank:'Standard_Bank' , transaction: 310.89,status:'Pending'},
    { id: 7, UserName: 'Themba Twallla',avatar:'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', email: 'themba10@hotmail.com', 
    bank:'Nedbank' , transaction: 45.68,status:'Declined'},
    { id: 8, UserName: 'China Fing',avatar:'https://images.unsplash.com/photo-1548142542-c53707f8b05b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: '012_Harvey@yahoo.com',
     bank:'FNB' , transaction: 51.50,status:'Declined'},
    { id: 10, UserName: 'Ted bear',avatar:'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: 'Furry1@hotmail.com',
     bank:'Capitec' , transaction: 180.00,status:'Approved'},
    { id: 11, UserName: 'Miguel Tortosa-selsona',avatar:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: 'tortosa_selsona@siempre.com',
     bank:'FNB' , transaction: 30.90,status:'Pending'},
    { id: 12, UserName: 'Windy chen',avatar:'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', email: 'Windy@yahoo.com', bank:'ABSA' , transaction: 40.00 ,status:'Pending'},
  ];
  return (
    <div className='userList'>
        <h1>  Fuck you thunder you can 
          suck my dick</h1>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
  )
}
