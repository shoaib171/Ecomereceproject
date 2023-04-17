/** @format */

import React from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzeogye");
  if (state.succeeded) {
  }
  return (
    <div className="container mt-4 mb-3">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img
            src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100"
            alt="Shopping_img"
            height="550px"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <form
            action="https://formspree.io/f/xpzeogye"
            method="POST"
            onSubmit={handleSubmit}
            className="row g-3"
          >
            <div class="col-md-12">
              <label for="validationServer01" class="form-label">
                Enter name
              </label>
              <input
                name="name"
                type="text"
                className="form-control is-valid"
                id="validationServer01"
                // value={Form.name}
                // onChange={handleChange}
                required
              />
              <div className="valid-feedback">Enter valid name</div>
            </div>
            <div className="col-md-12">
              <label for="validationServer02" class="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control is-valid"
                id="validationServer02"
                // value={Form.email}
                // onChange={handleChange}
                required
              />
              <div className="valid-feedback">Enter valid email Address</div>
            </div>
            <div className="col-md-12">
              <label for="validationServer03" class="form-label">
                Phone
              </label>
              <input
                name="phone"
                type="number"
                className="form-control is-valid"
                id="validationServer03"
                // value={Form.phone}
                // onChange={handleChange}
                required
              />
              <div className="valid-feedback">Enter valid Phone</div>
            </div>

            <div class="col-md-12">
              <label for="validationTextarea" class="form-label">
                Textarea
              </label>
              <textarea
                name="message"
                className="form-control is-valid"
                id="validationTextarea"
                placeholder="Enter Message Here...."
                // value={Form.message}
                // onChange={handleChange}
                required
              ></textarea>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  name="Type"
                  className="form-check-input is-valid"
                  type="checkbox"
                  // value={Form.Type}
                  // onChange={() => {
                  //   SetForm((prevState) => ({
                  //     ...prevState,
                  //     Type: !Form.Type,
                  //   }));
                  // }}
                  id="invalidCheck3"
                  aria-describedby="invalidCheck3Feedback"
                  required
                />
                <label className="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div id="invalidCheck3Feedback" class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button
                className="btn btn-outline-primary px-3"
                type="submit"
                disabled={state.submitting}
              >
                Send_Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
