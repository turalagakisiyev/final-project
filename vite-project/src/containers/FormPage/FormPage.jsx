
import { Link } from "react-router-dom";
import "./FormPage.css";

function Formpage() {
  return (
    <section className="component">

      <div className="credit-card">
        <h2>CREDIT CARD</h2>
        <form>
          <input required type="text" placeholder="NAME" />
          <div className="line"><input required type="number" placeholder="- - - -" /> <input required type="number" placeholder="- - - -" /> <input required type="number" placeholder="- - - -" /> <input required type="number" placeholder="- - - -" /></div>
          <div className="line">
            <input required style={{ letterSpacing: "1px" }} className="litle" type="text" placeholder="EXPIRY" />
            <input required className="tall" type="number" placeholder="CCV" />
          </div>
          <Link to="/form-page-complete "><button type="submit" className="valid-button"><i className="fa-solid fa-bag-shopping">    CH ECK  OUT</i></button></Link>
        </form>
      </div>
    </section>

  )
}

export default Formpage;