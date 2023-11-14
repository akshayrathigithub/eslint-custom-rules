import React from 'react';

function CurrentBalance() {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
