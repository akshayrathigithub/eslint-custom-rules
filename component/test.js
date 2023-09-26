import React from 'react'
import Amount from 'common/ui/Amount';

function CurrentBalance () {
  const balance = 40
  return (
    <div className="balances-container">
                  <Amount
        value={Math.abs(balance)}
        currency="INR"
        className={balance < 0 ? 'negative-balance' : ''}
      />
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
          <div className="balance-amount-container">
            {balance < 0 && <p className="negative-marker">-</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentBalance
