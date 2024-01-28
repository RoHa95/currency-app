import React from 'react';
import chartUp from "../../src/assets/chart-up.svg";
import chartDown from "../../src/assets/chart-down.svg";
import {Circles} from "react-loader-spinner";

import styles from "./TableCoins.module.css";

function TableCoin({coins, isLoading}) {
    return (
        <div className={styles.container}>
            {   isLoading? 
                <Circles
                height="80"
                width="80"
                color="#e9f817"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                /> : 
               ( <table className={styles.table}>
                <thead><tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th>coin</th>
                </tr></thead>
                <tbody>
                    
                    {console.log(coins)}
                    {coins.map((coin)=>(
                       <TableRow coin={coin} key={coin.id}/>
                    ))}
                </tbody>
               </table>)
            }
           
        </div>
    );
}

export default TableCoin;

const TableRow = ({coin:{name,image,symbol,current_price,price_change_percentage_24h:price_change,total_volume},})=>{
return(
    <tr>
    <td>
    <div className={styles.symbol}>
        <img src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
    </div>
    </td>
    <td>{name}</td>
    <td>${current_price}</td>
    <td className={price_change>0? styles.secces : styles.error}>{price_change.toFixed(2)}%</td>
    <td>{total_volume.toFixed(2)}</td>
    <td><img src={price_change>0 ? chartUp : chartDown} alt="" /></td>
</tr>
)
}