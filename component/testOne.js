import React from 'react';

function CurrentBalance() {
  const currency = 'MYR';
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
          {currency === 'INR' && <p>Current Balance</p>}
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
