/* eslint-disable react/react-in-jsx-scope */
import Amount from 'amount';

function CurrentBalance() {
  const balance = 40;
  const currency = 'MYR';
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
          <Amount
        value={Math.abs(balance)}
        currency="INR"
        className={balance < 0 ? 'negative-balance' : ''}
      />
          <div className="balance-amount-container">
          {currency === 'INR' && <p>Current Balance</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
