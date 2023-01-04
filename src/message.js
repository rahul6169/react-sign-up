import React from "react";
import { useState } from "react";

const Signup = () => {
  const [table, setTable] = useState([]);
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

    let localStorageData = JSON.parse(localStorage.getItem("details"));
    if (localStorageData === null) localStorageData = [];
    localStorageData.push(form);
    localStorage.setItem("details", JSON.stringify(localStorageData));

    console.log(form);

    // code to display the table data without local storage
    //   const newData = {
    //   userName: form.userName,
    //   email: form.email,
    //   number: form.number,
    //   contactName: form.contactName,
    //   contactEmail: form.contactEmail,
    //   contactPhoneNumber: form.contactPhoneNumber,
    //   type: form.type,
    //   percent: form.percent,
    //   dateInput: form.dateInput,
    //   payments: form.payments,
    //   notesInput: form.notesInput,
    // };
    // const newDatas = [...table, newData];

    let loadTableData = [...localStorageData];
    setTable(loadTableData);
  };

  return (
    <>
      <form onSubmit={handleClick} id="newBusiness">
        <h2>
          <em>New Business </em>
        </h2>

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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          ></input>
        </div>

        <div>
          <label id="typeOfBusiness">
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
              value="SmallBusiness"
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
              value="Enterprise"
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
              min="0"
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
              required
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
            Critical Account
            <input type="checkbox" id="criticalCheckBox"></input>
          </label>
        </div>

        <div>
          <button type="submit" id="submitButton" value="Submit">
            Submit
          </button>
        </div>
      </form>
      <div class="table-data">
        <table id="list">
          <tr>
            <th>userName</th>
            <th>email</th>
            <th>phoneNumber</th>
            <th>contactName</th>
            <th>contactEmail</th>
            <th>contactPhoneNumber</th>
            <th>type</th>
            <th>percent</th>
            <th>activefrom</th>
            <th>payments</th>
            <th>Notes</th>
          </tr>

          <tbody class="tableData">
            {table.map((contact) => (
              <tr>
                <td>{contact.userName}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>{contact.contactName}</td>
                <td>{contact.contactEmail}</td>
                <td>{contact.contactPhoneNumber}</td>
                <td>{contact.type}</td>
                <td>{contact.percent}</td>
                <td>{contact.dateInput}</td>
                <td>{contact.payments}</td>
                <td>{contact.notesInput}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Signup;
