import React from 'react'

export default function Cart() {
  return (
    <div id="books__body">
        <main className='books__main'>
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className='cart__title'>Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <div className="cart__book">Book</div>
                            <div className="cart__book">Quantity</div>
                            <div className="cart__book">Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
