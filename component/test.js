/* eslint-disable react/react-in-jsx-scope */
function CurrentBalance() {
  return (
    <div className="balances-container">
      <div className="bal-cont-header">
        <div className="balances-lhs-container">
          <div className="balance-type-container">
            <p>Current Balance</p>
          </div>
          <div className="balance-amount-container">
            <a
              target="_blank"
              href="https://razorpay.com/support/#request"
              rel="noreferrer noopener"
            >
              contact our support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
