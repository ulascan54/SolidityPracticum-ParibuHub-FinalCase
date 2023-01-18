import {BiTransfer} from 'react-icons/bi'
import Identicon from 'react-identicons'
import {MdOpenInNew} from 'react-icons/md'
import { truncate, useGlobalState } from '../store'
const Transactions = () => {
   const [transactions] = useGlobalState('transactions') 
  return (
    <div className='transactions-container'>
        <div>
            <h4 className='transactions-title'>Latest Transactions</h4>
            <div className="transactions-container-grid">
                {transactions
                .map((tx,i)=>(
                    <Transaction key={i} tx={tx} />
                ))}
            </div>
            <div className="loadmore-button">
            <button>
                Load More
                </button>
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