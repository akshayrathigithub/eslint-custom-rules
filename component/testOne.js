import React from 'react';
import Amount from 'amount';

function CurrentBalance() {
  const balance = 100;
  const currency = 'MYR';
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
      {currency === 'INR' && <p>Current Balance</p>}
        <div className="balances-lhs-container">
          <div className="balance-type-container">
          <Amount
        value={Math.abs(balance)}
        currency="INR"
        className={balance < 0 ? 'negative-balance' : ''}
      />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
