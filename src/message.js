const Signup = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form id="newBusiness">
      <h2>New Business</h2>

      <div>
        <label>User Name </label>
        <input
          type="text"
          id="userName"
          onChange={onChange}
          placeholder="Enter Your Name"
        ></input>
      </div>

      <div>
        <label>Email </label>
        <input type="email" id="email" placeholder="Enter Your Email"></input>
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          minLength={5}
          maxLength={10}
          placeholder="Enter Your Number"
        ></input>
      </div>

      <div>
        <label>Contact Name </label>
        <input
          type="text"
          id="contactName"
          onChange={onChange}
          placeholder="Enter Your Name"
        ></input>
      </div>

      <div>
        <label>Email </label>
        <input
          type="email"
          id="contactEmail"
          placeholder="Enter Contact Email"
        ></input>
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          id="contactPhoneNumber"
          minLength={5}
          maxLength={10}
          placeholder="Enter Contact Number"
        ></input>
      </div>

      <div>
        <label>
          Type <br></br>
          <input
            type="radio"
            id="smallBusiness"
            name="Business"
            value="smallBusiness"
          />
          <label for="smallBusiness">Small Business </label>
          <br></br>
          <input
            type="radio"
            id="enterprise"
            name="Business"
            value="Enterprise"
          />
          <label for="enterprise">Enterprise</label>
          <br></br>
          <input
            type="radio"
            id="entrepreneur"
            name="Business"
            value="Entrepreneur"
          />
          <label for="entrepreneur">Entrepreneur</label>
        </label>
      </div>

      <div>
        <label for="catogory" class="catogoryy">
          Catogory<br></br>
          <select id="catogory" multiple size="5">
            <option name="catogory" value="toys">
              Toys
            </option>
            <option name="catogory" value="clothes">
              Clothes
            </option>
            <option name="catogory" value="groceries">
              groceries
            </option>
            <option name="catogory" value="Electronics">
              Electronics
            </option>
            <option name="catogory" value="Digital">
              Digital
            </option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Percent
          <input type="number" id="percent" max="100" size="3"></input>
        </label>
      </div>

      <div>
        <label>
          Active from
          <input type="date" id="activefrom"></input>
        </label>
      </div>

      <div>
        <label class="payments">
          Payment Option<br></br>
          <input
            type="checkbox"
            name="payment"
            value="Cash on delivery"
            id="cashOnDelivery"
            placeholder="cash on delivery"
          />
          <label for="cashOnDelivery">Cash on delivery</label>
          <br></br>
          <input
            type="checkbox"
            name="payment"
            value="UPI"
            id="UPI"
            placeholder="payment"
          />
          <label for="UPI">UPI</label>
          <br></br>
          <input
            type="checkbox"
            name="payment"
            value="card payment"
            id="cardPayment"
            placeholder="cardPayment"
          />
          <label for="cardPayment">Card Payment</label>
        </label>
      </div>

      <div>
        <label>
          Notes<br></br>
          <textarea id="textArea" cols={30} rows="5"></textarea>
        </label>
      </div>

      <div>
        <label>
          Critical Account<br></br>
          <input type="checkbox" id="criticalCheckBox"></input>
        </label>
      </div>

      <div>
        <button type="submit" id="submitButton" value="Submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Signup;
