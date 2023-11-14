import React from 'react';
import Amount from 'amount';

function CurrentBalance() {
  const balance = 1000;
  const currency = 'MYR';
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
          <Amount
        value={Math.abs(balance)}
        currency="INR"
        className={balance < 0 ? 'negative-balance' : ''}
      />
      {currency === 'INR' && <p>Current Balance</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
