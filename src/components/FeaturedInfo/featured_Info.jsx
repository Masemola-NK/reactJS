import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function featuredInfo() {
  return (
    <div className="featured ">
        <div className="featuredItem">
        <span className="featureTitle">Revenu</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">R189.50</span>
            <span className="featuredMoneyRate">-19.5<ArrowDownwardIcon className='featuredIcon'/></span>
            </div>   
            <span className="featureSub">
                Compared to last week
            </span>
         </div>
         <div className="featuredItem">
        <span className="featureTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">R310.50</span>
            <span className="featuredMoneyRate">-10.5<ArrowDownwardIcon className='featuredIcon'/></span>
            </div>   
            <span className="featureSub">
                Compared to last week
            </span>
         </div>
         <div className="featuredItem">
        <span className="featureTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">R90.50</span>
            <span className="featuredMoneyRate">+5.5<ArrowUpwardIcon className='featuredIcon postive'/></span>
            </div>   
            <span className="featureSub">
                Compared to last week
            </span>
         </div>
    </div>
  )
}
