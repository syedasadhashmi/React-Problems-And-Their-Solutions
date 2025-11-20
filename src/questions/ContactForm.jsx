import React, { useState } from "react";
// import "./styles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userName, setUserName] = useState("");
  const [error, setError] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const onChangeHandler = (value) => {
    setFormData((prev) => ({
      ...prev, //save prev values
      ...value, //add new value
    }));
    //     setFormData({ It will undefined others because we are not persisting prev states
    //   name: value.name,     // "John"
    //   email: value.email,   // undefined
    //   message: value.message // undefined
    // });
    // console.log(value);
    // console.log("formData", formData);
  };

  const evaluateData = (formData) => {
    let newError = {};

    if (!formData.name.trim()) {
      newError.name = "Name is Required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is Required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newError.email = "Invalid email format";
    }
    if (!formData.email.trim()) newError.message = "Message is Required";
    return newError;
  };

  const submitHandler = (e) => {
    console.log("submit handler");
    e.preventDefault();
    const show = evaluateData(formData);
    setError(show);
    if (!show.email && !show.name && !show.message) {
      setUserName(formData.name);
      setShowMessage(true);
      setFormData({ name: "", email: "", message: "" });
      // console.log(show.email.length);
    } else {
      setError(show);
      console.log(show);
      // return;
    }

    // if(show){
    // setShowMessage(true);
    // console.log(formData);}else{
    //   console.log()
    // }
  };
  // console.log(error);
  return (
    <>
      {showMessage ? (
        <div
          style={{
            width: 400,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "40px 30px",
            // margin: 10,
            margin: "auto",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: 26, textAlign: "center" }}>
            Thank you, {userName}!
          </p>
        </div>
      ) : (
        <div
          style={{
            width: 400,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "40px 30px",
            // margin: 10,
            margin: "auto",
          }}
        >
          <form onSubmit={(e) => submitHandler(e)}>
            <div>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px 0px",
                }}
              >
                Name
                <input
                  type="text"
                  style={{ padding: 6, marginTop: 5 }}
                  value={formData.name}
                  onChange={(e) => onChangeHandler({ name: e.target.value })}
                />
              </label>
              {error.name && <p>{error.name}</p>}
            </div>
            <div>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px 0px",
                }}
              >
                Email
                <input
                  type="email"
                  style={{ padding: 6, marginTop: 5 }}
                  value={formData.email}
                  onChange={(e) => onChangeHandler({ email: e.target.value })}
                />
              </label>
              {error.email && <p>{error.email}</p>}
            </div>
            <div>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px 0px",
                }}
              >
                Message
                <textarea
                  type="text"
                  style={{ padding: 6, marginTop: 5 }}
                  value={formData.message}
                  onChange={(e) => onChangeHandler({ message: e.target.value })}
                />
              </label>
              {error.message && <p>{error.message}</p>}
            </div>
            <button
              type="submit"
              style={{
                padding: 10,
                backgroundColor: "#4895ef",
                width: "100%",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ContactForm;
