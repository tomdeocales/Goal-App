import React from 'react';

function SubscribeButton() {
  return (
    <div className="a-subscribe">
      <button className="a-subscribe-btn">
        Subscribe <br></br>
        <div style={{ fontSize: 12, color: 'white', marginTop: 0 }}> (Billing powered by Stripe) </div>
      </button>
      <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>
        Payment integration coming soon!
      </div>
    </div>
  );
}

export default SubscribeButton; 