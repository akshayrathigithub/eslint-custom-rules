import Amount from 'amount';
/* eslint-disable react/react-in-jsx-scope */
function CurrentBalance() {
  const balance = 40;
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
          <div className="balance-amount-container">
            {balance < 0 && <p className="negative-marker">-</p>}
            <Amount
        value={100}
        currency="INR"
        className="negative-balance"
      />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
