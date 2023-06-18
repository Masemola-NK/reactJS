import React from 'react'
import "./sidebar.css"
import LineWeightIcon from '@mui/icons-material/LineWeight';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ForumIcon from '@mui/icons-material/Forum';
import MessageIcon from '@mui/icons-material/Message';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ErrorIcon from '@mui/icons-material/Error';

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem Active">
                        <LineWeightIcon className='sidebarIcon'/> Home
                    </li>
                    <li className="sidebarListItem " >
                        <TimelineIcon className='sidebarIcon'/> Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon'/> Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <PersonIcon className='sidebarIcon'/> User
                    </li>
                    <li className="sidebarListItem " >
                        <Inventory2Icon className='sidebarIcon'/> Products
                    </li>
                    <li className="sidebarListItem">
                        <ReceiptLongIcon className='sidebarIcon'/> Transactions 
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentIcon className='sidebarIcon'/> Models 
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailIcon className='sidebarIcon'/> Mail
                    </li>
                    <li className="sidebarListItem " >
                        <ForumIcon className='sidebarIcon'/> Feedback 
                    </li>
                    <li className="sidebarListItem">
                        <MessageIcon className='sidebarIcon'/> Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <BusinessCenterIcon className='sidebarIcon'/> Manage
                    </li>
                    <li className="sidebarListItem " >
                        <TimelineIcon className='sidebarIcon'/> Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ErrorIcon className='sidebarIcon'/> Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
