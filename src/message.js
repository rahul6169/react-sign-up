import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { EditFilled } from "@ant-design/icons/lib/icons";

import { render } from "react-dom";
import { DatePicker, message } from "antd";
const Signup = () => {
  const [merchantList, setMerchantList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState("submit");
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  const [formValues, setFormValues] = useState({
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

  // useEffect(() => {
  //   let localStorageData = JSON?.parse(localStorage?.getItem("details"));

  //   return () => {
  //     setMerchantList(localStorageData || []);
  //   };
  // }, []);

  const getAllMerchants = async () => {
    setLoading(true);
    const getAllDataResponse = await axios?.get(
      "http://localhost:5000/getAllMerchants"
    );
    // body: J;
    // console.log(getAllDataResponse?.data);
    setMerchantList(getAllDataResponse?.data);
    setLoading(false);
    return;
  };

  useEffect(() => {
    getAllMerchants();
  }, []);
  // useEffect(() => {
  //   console.log(merchantList);
  // }, [merchantList]);

  const getMerchantById = async (id) => {
    setLoading(true);
    const getEditDataResponse = await axios.put(
      `http://localhost:5000/getMerchant/${id}`,
      { id: id }
    );
    console.log(getEditDataResponse?.data);
    setFormValues(getEditDataResponse?.data);
    setButton("update");
    localStorage.setItem("details", JSON.stringify(id));
    setLoading(false);
    return;
  };

  const updateMerchant = async (id) => {
    setLoading(true);
    console.log("id", id);
    const updateDataResponse = await axios.put(
      "http://localhost:5000/updateMerchant",
      { id, formValues }
    );

    console.log("updatedata", updateDataResponse);

    setMerchantList((previousMerchantsData) => {
      const updatedResponse = previousMerchantsData.filter(
        (merchant) => merchant?._id !== id
      );
      console.log(id, "id");
      console.log(updatedResponse, "1");
      setLoading(false);
      return [...updatedResponse, updateDataResponse?.data];
    });

    // const oldMerchantDataRemovedList = merchantList.filter(
    //   (merchant) => merchant?.id != id
    // );
    // oldMerchantDataRemovedList.push(formValues);
    // setMerchantList(...oldMerchantDataRemovedList);
    return;
  };

  const deleteMerchant = async (id) => {
    setLoading(true);
    const deleteDataResponse = await axios.delete(
      `http://localhost:5000/deleteMerchant/${id}`
    );
    // console.log(id);
    console.log("data", deleteDataResponse?.data);
    getAllMerchants();
    setLoading(false);
    // setMerchantList(deleteDataResponse?.data);
    // return;
  };
  // useEffect(() => {
  //   deleteMerchant();
  // }, []);
  const createMerchant = async () => {
    try {
      setLoading(true);
      const createMerchantResponse = await axios.post(
        "http://localhost:3333/createMerchant",
        { formValues }
      );
      console.log(createMerchantResponse?.data);
      // const newMerchantData = await createMerchantResponse?.json();

      setMerchantList((previousMerchantsData) => {
        return [...previousMerchantsData, createMerchantResponse?.data];
      });
      setLoading(false);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    // const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const numberValidate = /^\d{10}$/;

    // if (!formValues.email.match(emailValidate)) {
    //   alert("enter valid email ");
    // } else if (!formValues.contactEmail.match(emailValidate)) {
    //   alert("enter valid contact Email");
    // } else if (!formValues.number.match(numberValidate)) {
    //   alert("enter valid Phone number");
    // } else if (!formValues.contactPhoneNumber.match(numberValidate)) {
    //   alert("enter valid contact Phone number");
    // }

    // let localStorageData = JSON.parse(localStorage.getItem("details"));
    // if (localStorageData === null) localStorageData = [];
    if (button === "submit") {
      setLoading(true);
      setButton(
        <ReactLoading
          id="submitButton"
          type={"spokes"}
          color={"skyblue"}
          // height={"3%"}
          // width={"3%"}
        />
      );
      createMerchant();
      setLoading(false);
      setButton("submit");
    } else if (button === "update") {
      let idData = JSON.parse(localStorage.getItem("details"));
      updateMerchant(idData);
      setButton("submit");
    }

    // for (let i = 0; i < localStorageData.length; i++) {
    //   if (formValues.email === localStorageData[i].email) {
    //     return alert("email already exists");
    //   } else if (formValues.number === localStorageData[i].number) {̥
    //     return alert("number already exists");
    //   }
    // }
    // localStorageData.push(formValues);
    // localStorage.setItem("details", JSON.stringify(localStorageData));

    // console.log(formValues);
    // let loadTableData = [...localStorageData];
    // setMerchantList(loadTableData || []);

    let resetForm = {
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
    };
    setFormValues(resetForm);
  };

  // const editTableRows = (index) => {
  //   let localStorageData = JSON.parse(localStorage.getItem("details"));
  //   let rows = [...localStorageData];
  //   var editTable = rows[index];
  //   setFormValues(editTable);
  // };

  // const deleteTableRows = (index) => {
  //   let localStorageData = JSON.parse(localStorage.getItem("details"));
  //   let rows = [...localStorageData];
  // rows.splice(index, 1);
  //   console.log(rows);
  //   setMerchantList(rows || []);

  //   localStorage.setItem("details", JSON.stringify(rows));
  // };

  return (
    <>
      {/* {loading ? (
        // <p className="loading">Loading...</p>
        <ReactLoading
          className="loading"
          type={"spokes"}
          color={"skyblue"}
          height={"3%"}
          width={"3%"}
        />
      ) : ( */}
      <form onSubmit={handleClick} id="newBusiness">
        <h2>
          <em>New Business </em>
        </h2>

        <div>
          <label>User Name </label>
          <input
            type="text"
            value={formValues.userName}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  userName: e.target.value,
                };
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
            value={formValues.email}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
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
            value={formValues.number}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  number: e.target.value,
                };
              });
              // console.log(formValues.number);
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
            value={formValues.contactName}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  contactName: e.target.value,
                };
              });
            }}
            id="contactName"
            placeholder="Enter Your Name"
          ></input>
        </div>

        <div>
          <label> Contact Email </label>
          <input
            type="email"
            value={formValues.contactEmail}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  contactEmail: e.target.value,
                };
              });
            }}
            id="contactEmail"
            placeholder="Enter Contact Email"
            required
          ></input>
        </div>

        <div>
          <label>Contact Number</label>
          <input
            type="tel"
            value={formValues.contactPhoneNumber}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  contactPhoneNumber: e.target.value,
                };
              });
            }}
            id="contactPhoneNumber"
            minLength={5}
            maxLength={10}
            placeholder="Enter Contact Number"
          ></input>
        </div>

        <div>
          <label id="typeOfBusiness" className="radioValue">
            Type <br></br>
            <input
              type="radio"
              value={formValues.type}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  type: e.target.id,
                });
              }}
              id="smallBusiness"
              name="Business"

              // value="SmallBusiness"
            />
            <label htmlFor="smallBusiness">Small Business </label>
            <br></br>
            <input
              type="radio"
              value={formValues.type}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  type: e.target.id,
                });
              }}
              id="enterprise"
              name="Business"
              // checked={id}
              // value="Enterprise"
            />
            <label htmlFor="enterprise">Enterprise</label>
            <br></br>
            <input
              type="radio"
              value={formValues.type}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  type: e.target.id,
                });
              }}
              id="entrepreneur"
              name="Business"
              // checked={id}
              // value="Entrepreneur"
            />
            <label htmlFor="entrepreneur">Entrepreneur</label>
          </label>
        </div>

        <div>
          <label htmlFor="catogory" className="catogoryy">
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
              value={formValues.percent}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
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
            {/* <input
                value={formValues.dateInput}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    dateInput: e.target.value,
                  });
                }}
                type="date"
                id="activefrom"
              ></input> */}
            <DatePicker
              className="dateClass"
              id="activefrom"
              // value={formValues.dateInput}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  dateInput: e.target.id,
                });
              }}
            />
          </label>
        </div>

        <div>
          <label
            value={formValues.payments}
            onChange={(e) => {
              setFormValues((prev) => {
                return {
                  ...prev,
                  payments: e.target.value,
                };
              });
            }}
            className="payments"
          >
            ,,, Payment Option<br></br>
            {/* <input
                type="checkbox"
                className="payments"
                name="payment"
                value="Cash on delivery"
                id="cashOnDelivery"
                placeholder="cash on delivery"
              /> */}
            <Checkbox
              type="checkbox"
              className="payments"
              name="payment"
              value="Cash on delivery"
              id="cashOnDelivery"
              placeholder="cash on delivery"
            >
              Cash On Delivery
            </Checkbox>
            {/* <label htmlFor="cashOnDelivery">Cash on delivery</label> */}
            <br></br>
            <input
              type="checkbox"
              name="payment"
              value="UPI"
              id="UPI"
              placeholder="payment"
            />
            <label htmlFor="UPI">UPI</label>
            <br></br>
            <input
              type="checkbox"
              name="payment"
              value="card payment"
              id="cardPayment"
              placeholder="cardPayment"
            />
            <label htmlFor="cardPayment">Card Payment</label>
          </label>
        </div>

        <div>
          <label>
            Notes<br></br>
            <textarea
              id="textArea"
              value={formValues.notesInput}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
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
            {button}
          </button>
        </div>
      </form>
      {/* )} */}
      {/* {loading ? (
        <p className="loading"></p>
      ) : ( */}
      <div className="table-data">
        <table id="list">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Contact Name</th>
              <th>Contact Email</th>
              <th>Contact Phone Number</th>
              <th>Type</th>
              <th>Percent</th>
              <th>Activefrom</th>
              <th>Payments</th>
              <th>Notes</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="tableData">
            {merchantList?.map((merchant, index) => (
              <tr key={merchant?._id + index}>
                <td>{merchant?.userName}</td>
                <td>{merchant?.email}</td>
                <td>{merchant?.number}</td>
                <td>{merchant?.contactName}</td>
                <td>{merchant?.contactEmail}</td>
                <td>{merchant?.contactPhoneNumber}</td>
                <td>{merchant?.type}</td>
                <td>{merchant?.percent}</td>
                <td>{merchant?.dateInput}</td>
                <td>{merchant?.payments}</td>
                <td>{merchant?.notesInput}</td>
                <td>
                  {/* <button
                      type="submit"
                      id="editButton"
                      // onClick={getMerchantById}
                      
                    >
                      Edit
                    </button> */}
                  <Button
                    type="dark"
                    shape="round"
                    icon={<EditFilled />}
                    onClick={() => getMerchantById(merchant?._id)}
                  ></Button>
                </td>
                <td>
                  {/* <button
                      type="submit"
                      id="deleteButton"
                     
                    >
                      Delete
                    </button> */}

                  <Button
                    type="dark"
                    shape="round"
                    icon={<DeleteFilled />}
                    onClick={() => deleteMerchant(merchant?._id)}
                  ></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* )} */}
    </>
  );
};
export default Signup;
