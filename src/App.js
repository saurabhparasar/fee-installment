import "./App.css";
import Add from "./add.png";
import Alert from "./alert.png";

function App() {
  return (
    <div>
      {/* Modal for delete installment */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div className="delete-content">
                <p style={{ fontWeight: "bold" }}>
                  Are you sure you want to delete 5th installment?
                </p>
                <div style={{ width: "50%" }}>
                  <p>
                    Due Date
                    <span style={{ paddingLeft: "40%" }}>: 09-04-2022</span>
                  </p>
                  <p>
                    Installment Amount
                    <span style={{ paddingLeft: "13%" }}>: ₹ 50,000</span>
                  </p>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  class="btn modal-button"
                  data-dismiss="modal"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #012C63",
                    marginLeft: "0",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  style={{
                    backgroundColor: "#012C63",
                    marginTop: "2%",
                    marginLeft: "1%",
                    marginBottom: "3%",
                    fontWeight: "600",
                    fontStyle: "normal",
                    height: "2.5em",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for confirm installment */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="content">
                <p style={{ fontWeight: "bold" }}>
                  Are you sure you want to confirm the installment plan?
                </p>
                <p style={{ color: "#012C63", fontWeight: "bold" }}>
                  Installment Summary
                </p>
                <div className="modal-installment-title">
                  <div>Installment No.</div>
                  <div style={{ paddingLeft: "7%" }}>Due Date</div>
                  <div>Installment Amount</div>
                </div>
                <div className="modal-installments">
                  <div>1st Installment</div>
                  <div>08-03-2022</div>
                  <div> ₹ 60,000 </div>
                </div>
                <div className="modal-installments">
                  <div>2nd Installment</div>
                  <div>08-03-2022</div>
                  <div> ₹ 60,000 </div>
                </div>
                <div className="modal-installments">
                  <div>3rd Installment</div>
                  <div>08-03-2022</div>
                  <div> ₹ 60,000 </div>
                </div>
                <div className="modal-installments">
                  <div>4th Installment</div>
                  <div>08-03-2022</div>
                  <div> ₹ 60,000 </div>
                </div>
                <div className="modal-installments-sum">
                  <div>Sum Of Installments :</div>
                  <div>₹ 2,40,000</div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn modal-button"
                  data-dismiss="modal"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #012C63",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary modal-button"
                  data-dismiss="modal"
                  style={{
                    backgroundColor: "#012C63",
                    marginTop: "2%",
                    marginLeft: "1%",
                    marginBottom: "5%",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  Confirm Installment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="head">
          <p className="top-head">Installment Details</p>
        </div>
        <div className="details">
          <div className="detail-row1">
            <p className="det">
              Student Name : <span id="particular">Ravi Kumar</span>
            </p>
            <p className="det">
              Mobile Number : <span id="particular">8696968303</span>
            </p>
            <p className="det">
              myClassroom Centre : <span id="particular">Faridabad</span>
            </p>
          </div>
          <div className="detail-row2">
            <p className="det">
              Section : <span id="particular">ABCD</span>
            </p>
            <p className="det">
              No. Of Installments : <span id="particular">4</span>
            </p>
          </div>
        </div>
        <div className="installment-details">
          <div className="amount">
            <div className="start">Total Payable amount : ₹ 2,40,000</div>
            <div className="end">Sum Of Installments : ₹ 2,40,000</div>
          </div>
          <div className="amount-alert">
            <img src={Alert} />
            <p style={{ paddingLeft: "1%", paddingTop: "1%" }}>
              Sum of installments is less than total payable amount{" "}
            </p>
          </div>

          <div className="installment-title">
            <div>Installment No.</div>
            <div>Due Date</div>
            <div>Installment Amount</div>
          </div>
          <div className="installment">
            <div className="installments">
              <div className="ins-title">1st Installment</div>
              <input type="date"></input>
              <div className="amt"> ₹ 60,000 </div>
            </div>
            <button
              className="delete-button btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              &times;
            </button>
          </div>
          <div className="installment">
            <div className="installments">
              <div className="ins-title">2nd Installment</div>
              <input type="date"></input>
              <div className="amt"> ₹ 60,000 </div>
            </div>
            <button
              className="delete-button btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              &times;
            </button>
          </div>
          <div className="installment">
            <div className="installments">
              <div className="ins-title">3rd Installment</div>
              <input type="date"></input>
              <div className="amt"> ₹ 60,000 </div>
            </div>
            <button
              className="delete-button btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              &times;
            </button>
          </div>
          <div className="installment">
            <div className="installments">
              <div className="ins-title">4th Installment</div>
              <input type="date"></input>
              <div className="amt"> ₹ 60,000 </div>
            </div>
            <button
              className="delete-button btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              &times;
            </button>
          </div>
          <div className="add-install">
            <div className="add-logo">
              <img src={Add} />
              <p className="add-ins-text">Add Installment</p>
            </div>
          </div>
        </div>
        <button
          class="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#exampleModal1"
          style={{
            backgroundColor: "#012C63",
            marginTop: "2%",
            marginLeft: "12.5%",
            marginBottom: "10%",
            fontWeight: "600",
            fontStyle: "normal",
          }}
        >
          Confirm Installment
        </button>
      </div>
    </div>
  );
}

export default App;
