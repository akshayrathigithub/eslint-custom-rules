import React from 'react';

function CurrentBalance() {
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
        </div>
      </div>
      {currency === 'INR' && <p>Current Balance</p>}
    </div>
  );
}

export default CurrentBalance;
