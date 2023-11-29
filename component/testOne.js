import React from 'react';
import Amount from 'amount';

function CurrentBalance() {
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
          <Amount
        value={100}
        currency="INR"
        className="negative-balance"
      />
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
