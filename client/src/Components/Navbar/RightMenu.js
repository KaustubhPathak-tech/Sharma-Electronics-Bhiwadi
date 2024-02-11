import React, { useState } from "react";
import axios from "axios";
import "./Navbar.css";

import { Button, Modal, Spin } from "antd";
import { DownloadOutlined, FormOutlined } from "@ant-design/icons";

function CustomButton(props) {
  function handleSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;
    try {
      if (
        name.length == 0 ||
        email.length == 0 ||
        phone.length == 0 ||
        msg.length == 0
      ) {
        alert("Please fill all the fields");
        window.location.href = "/";
      } else {
        axios
          .post("https://portfolioserver-beryl.vercel.app/sendMessage@SharmaEle", {
            name,
            email,
            phone,
            msg,
          })
          .then((res) => {
            if (res.status == 200) {
              window.location.href = "/";
              alert(res.data);
            } else if (res.status == 400) {
              console.log(res.data);
            }
          });
      }
    } catch (error) {
      alert("Error Occured");
    }
  }

  return (
    <input
      id={props.ID}
      type="submit"
      value="Submit"
      onClick={handleSubmit}
      style={{ cursor: "pointer" }}
    />
  );
}
function Input(props) {
  function Checker(event) {
    let value = event.target.value;
    let i = props.ID.toString();
    if (i == "name") {
      var re = /^[A-Za-z]+$/;
      let ans = re.test(value);
      if (ans == false)
        document.getElementById(i).style = "border-bottom : 1px solid red";
      else
        document.getElementById(i).style =
          "border-bottom : 0.1rem solid #00e600";
    } else if (i == "phone") {
      var re = /^[0-9]+$/;
      let ans = re.test(value);
      if (value.length < 10 || value.length > 10 || ans == false)
        document.getElementById(i).style = "border-bottom : 1px solid red";
      else
        document.getElementById(i).style =
          "border-bottom: 0.1rem solid #00e600";
    } else if (i == "email") {
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let ans = re.test(value);
      if (ans == false)
        document.getElementById(i).style = "border-bottom : 1px solid red";
      else
        document.getElementById(i).style =
          "border-bottom: 0.1rem solid #00e600";
    }
  }
  return (
    <input
      autoComplete="off"
      type={props.type}
      placeholder={props.hint}
      id={props.ID}
      required
      onChange={Checker}
    />
  );
}

function Form(props) {
  const [spinning, setSpinning] = React.useState(false);
  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 8000);
  };

  return (
    <div className="main">
      <Spin spinning={spinning} fullscreen />
      <form className="main-form">
        {/*  */}
        <h1>Contact Us</h1> <br />
        <div>
          <label>Name</label> <br />
          <Input hint="Enter your name" type="text" ID="name" />
        </div>
        <div className="form-element">
          <label>Email</label> <br />
          <Input hint="Enter your Email ID" type="email" ID="email" />
        </div>
        <div className="form-element">
          <label>Phone</label> <br />
          <Input hint="Phone Number" type="text" ID="phone" />
        </div>
        <div className="form-element">
          <label>Message</label> <br />
          <textarea
            id="msg"
            rows="5"
            placeholder="Questions/comments..."
          ></textarea>
        </div>
        <div>
          <Button
            type="submit"
            className="Submit"
            onClick={showLoader}
            style={{ border: "none", cursor: "progress" }}
            id="formSubmit"
          >
            <CustomButton ID="Submit" onClick={showLoader} />
          </Button>
        </div>
      </form>
    </div>
  );
}

const RightMenu = ({ mode }) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const uploadedUrl =
    "https://drive.google.com/file/d/1PO8Qmq7d5pWdNIdkbEyJ3FCpper7ZmZU/view?usp=sharing";
  return (
    <div id="rightMenu">
      <Button
        type="outlined"
        onClick={() => setModal2Open(true)}
        style={{ padding: "5px", border: "1px solid grey", width: "30px" }}
        data-toggle="tooltip"
        title="Get Quotation"
      >
        <FormOutlined />
      </Button>
      <Modal
        // centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        id="contactmodal"
      >
        <Form />
      </Modal>
      <Button
        type="outlined"
        style={{
          padding: "5px",
          border: "1px solid grey",
          marginLeft: "10px",
        }}
        icon={<DownloadOutlined />}
        data-toggle="tooltip"
        title="Download Catalogue"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1PO8Qmq7d5pWdNIdkbEyJ3FCpper7ZmZU/view?usp=sharing",
            "_blank"
          );
        }}
      />
    </div>
  );
};

export default RightMenu;
