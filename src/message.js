import React from "react";
import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    number: "",
    contactName: "",
    contactEmail: "",
    contactPhoneNumber: "",
    type: "",
    percent: "",
    dateInput: "",
    payments: "",
    notesInput: "",
  });
  const handleClick = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <form onSubmit={handleClick} id="newBusiness">
      <h2>New Business </h2>

      <div>
        <label>User Name </label>
        <input
          type="text"
          value={form.userName}
          onChange={(e) => {
            setForm({
              ...form,
              userName: e.target.value,
            });
          }}
          id="userName"
          name="userName"
          placeholder="Enter Your Name"
        ></input>
      </div>

      <div>
        <label>Email </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
          id="email"
          placeholder="Enter Your Email"
        ></input>
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          value={form.number}
          onChange={(e) => {
            setForm({
              ...form,
              number: e.target.value,
            });
          }}
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
          value={form.contactName}
          onChange={(e) => {
            setForm({
              ...form,
              contactName: e.target.value,
            });
          }}
          id="contactName"
          placeholder="Enter Your Name"
        ></input>
      </div>

      <div>
        <label>Email </label>
        <input
          type="email"
          value={form.contactEmail}
          onChange={(e) => {
            setForm({
              ...form,
              contactEmail: e.target.value,
            });
          }}
          id="contactEmail"
          placeholder="Enter Contact Email"
        ></input>
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          value={form.contactPhoneNumber}
          onChange={(e) => {
            setForm({
              ...form,
              contactPhoneNumber: e.target.value,
            });
          }}
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
            value={form.type}
            onChange={(e) => {
              setForm({
                ...form,
                type: e.target.value,
              });
            }}
            id="smallBusiness"
            name="Business"
            // value="smallBusiness"
          />
          <label for="smallBusiness">Small Business </label>
          <br></br>
          <input
            type="radio"
            value={form.type}
            onChange={(e) => {
              setForm({
                ...form,
                type: e.target.value,
              });
            }}
            id="enterprise"
            name="Business"
            // value="enterprise"
          />
          <label for="enterprise">Enterprise</label>
          <br></br>
          <input
            type="radio"
            value={form.type}
            onChange={(e) => {
              setForm({
                ...form,
                type: e.target.value,
              });
            }}
            id="entrepreneur"
            name="Business"
            // value="entrepreneur"
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
          <input
            value={form.percent}
            onChange={(e) => {
              setForm({
                ...form,
                percent: e.target.value,
              });
            }}
            type="number"
            id="percent"
            max="100"
            size="3"
          ></input>
        </label>
      </div>

      <div>
        <label>
          Active from
          <input
            value={form.dateInput}
            onChange={(e) => {
              setForm({
                ...form,
                dateInput: e.target.value,
              });
            }}
            type="date"
            id="activefrom"
          ></input>
        </label>
      </div>

      <div>
        <label
          value={form.payments}
          onChange={(e) => {
            setForm({
              ...form,
              payments: e.target.value,
            });
          }}
          class="payments"
        >
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
          <textarea
            id="textArea"
            value={form.notesInput}
            onChange={(e) => {
              setForm({
                ...form,
                notesInput: e.target.value,
              });
            }}
            cols={30}
            rows="5"
          ></textarea>
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
