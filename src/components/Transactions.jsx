import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'
const Transactions = () => {
  return (
    <div className='transactions-container'>
        <div>
            <h4 className='transactions-title'>Latest Transactions</h4>
            <div className="transactions-container-grid">
                {Array(3)
                .fill()
                .map((nft,i)=>(
                    <Transaction key={i} tx={i+1} />
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
            <h4>#{tx} Fund Transfered</h4>
            <small>
                <span>Received by</span>
                <a href="#" target="_blank">0x312312312</a>
                <MdOpenInNew />
            </small>
        </div>
        <p>0.32 ETH</p>
    </div>
)

export default Transactions