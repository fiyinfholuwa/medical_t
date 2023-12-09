import React, { useState, useEffect } from "react";
import "./new_application.css";
// import { Link } from "react-router-dom";

import PhoneInput from "react-phone-input-2";

// import Slider from "../slider/ImageSlider";
import "react-phone-input-2/lib/style.css";

const NewApplication = () => {
  const [drag, setDrag] = useState(false);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    setDrag(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Handle the selected files here
    console.log(files);
  };

  const fileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  return (
    <div className="new_application">
      <div class="row custom-row">
        <div class="col-custom">
          <h1>New Application</h1>
        </div>
        <div className="row">
          <div className="col-lg-8">
            
            <div className="form_data">
            <p>Patient’s Details</p>
              <form>
                <div className="patient_details">
                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="form-group mt-1">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-1">
                        <PhoneInput
                          country={"in"}
                          className="mt-3 react-tel-input border-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-1">
                    <div className="col-lg-5">
                      <div className="form-group mt-1">
                        <label>Medical Department</label>
                        <select className="form-control">
                          <option>Select Option</option>
                          <option>Neurology</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="form-group mt-1">
                        <label>Document Type</label>
                        <select className="form-control">
                          <option>Select Option</option>
                          <option>Neurology</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="form-group">
                        <div
                          className={drag ? "drag-area" : "drop-area"}
                          onDragOver={dragStartHandler}
                          onDragLeave={dragLeaveHandler}
                          onDrop={dropHandler}
                        >
                          <input
                            type="file"
                            id="file"
                            className="file-input"
                            onChange={fileInputChange}
                            multiple
                          />
                          <label htmlFor="file">
                            Drag or select a Jpeg, Png or Pdf file to upload
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="row mt-1">
                    <div className="col-lg-6">
                      <div className="form-group mt-1">
                        <label>Additional Document</label>
                        <select className="form-control">
                          <option>Select Option</option>
                          <option>Additional Document (Optional)</option>
                        </select>
                      </div>
                    </div>
                
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="form-group">
                        <div
                          className={drag ? "drag-area" : "drop-area"}
                          onDragOver={dragStartHandler}
                          onDragLeave={dragLeaveHandler}
                          onDrop={dropHandler}
                        >
                          <input
                            type="file"
                            id="file"
                            className="file-input"
                            onChange={fileInputChange}
                            multiple
                          />
                          <label htmlFor="file">
                            Drag or select a Jpeg, Png or Pdf file to upload
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <button className="btn btn-dark">Add Document</button>
                    
                        <button style={{marginLeft:'10px'}} className="btn btn-primary text-center">
                            Submit Document
                        </button>
                    </div>
                </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewApplication;
