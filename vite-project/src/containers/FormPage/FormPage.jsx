
import { Link } from "react-router-dom";
import "./FormPage.css";

function Formpage() {
  return (
    <div className="wrapper">
      <div className="container1">
        <div className="title">Checkout Form</div>

        <div className="input-form">
          <div className="section-1">
            <div className="items">
              <label className="label">card number</label>
              <input type="text" className="input" maxLength="16" data-mask="0000 0000 0000 0000" placeholder="XXXX  XXXX  XXXX   XXXX" />
            </div>
          </div>
          <div className="section-2">
            <div className="items">
              <label className="label">card holder</label>
              <input type="text" className="input" placeholder="Coding Market" />
            </div>
          </div>
          <div className="section-3">
            <div className="items">
              <label className="label">Expire date</label>
              <input type="text" className="input" data-mask="00 / 00" placeholder="MM / YY" />
            </div>
            <div className="items">
              <div className="cvc">
                <label className="label">cvc code</label>
                <div className="tooltip">?
                  <div className="cvc-img"><img src="https://i.imgur.com/r8oXtry.png" alt="" /></div>
                </div>
              </div>
              <input type="text" className="input" data-mask="0000" placeholder="0000" />
            </div>
          </div>
        </div>

        <div className="btn1"><Link to='/form-page-complete'><i className="fa-solid fa-circle-check">CHECKOUT</i></Link> </div>

      </div>
    </div>







  )
}

export default Formpage;