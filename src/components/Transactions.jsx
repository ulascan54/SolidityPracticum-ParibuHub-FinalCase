import {BiTransfer} from 'react-icons/bi'
import Identicon from 'react-identicons'
import {MdOpenInNew} from 'react-icons/md'
import { truncate, useGlobalState } from '../store'
import { useEffect, useState } from 'react'

const Transactions = () => {
const [transactions] = useGlobalState('transactions') 
const [end,setEnd] = useState(3)
const [count] = useState(3)
const [collection,setCollection] = useState([])

const getCollection = () => {
    return transactions.slice(0,end)
}

useEffect(() => {
    setCollection(getCollection())
},[transactions, end])
  return (
    <div className='transactions-container'>
        <div>Transactions
            <h4 className='transactions-title'>
            {collection.length > 0 ? 'Latest Transactions' : 'There is No transactions Yet'}
            </h4>
            <div className="transactions-container-grid">
                {collection
                .map((tx,i)=>(
                    <Transaction key={i} tx={tx} />
                ))}
            </div>
            <div className="loadmore-button">
            {collection.length>0 && transactions.length>collection.length ? (
                    <button onClick={() => setEnd(end+count)}>Load More</button>
                ) : null }
            </div>
        </div>
    </div>
  )
}

const Transaction = ({tx})=> (
    <div className="transaction-container">
        <div className='transaction-icon'>
            <BiTransfer />
        </div>

        <div className='transaction'>
            <div>
                <Identicon className="header-identicon"  string={truncate(tx?.owner,4,4,11)} size={34}/>
            </div>
            <small>
                <span>Received by</span>
                <a href={tx?.metadataURI} target="_blank">{truncate(tx?.owner, 4, 4, 11)}</a>
                <MdOpenInNew />
            </small>
        </div>
        <div className='transaction'>
            <h4>{tx?.title} | NFT Transfered </h4>
            <p> Transfered: {tx?.cost} ETH</p>
        </div>
    </div>
)

export default Transactions