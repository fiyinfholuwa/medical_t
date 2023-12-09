import React, { useState, useEffect } from "react";
import "./application.css";
import { Link } from "react-router-dom";


const Application = () => {
  const initialData = [
    {
      name: "Mr. Patrick Emmanuel Olasope1",
      application_id: "100",
      time: "21-12-2023",
      percent: "10%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope2",
      application_id: "80",
      time: "21-12-2023",
      percent: "40%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope3",
      application_id: "69",
      time: "21-12-2023",
      percent: "60%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope4",
      application_id: "68",
      time: "21-12-2023",
      percent: "50%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope5",
      application_id: "100",
      time: "21-12-2023",
      percent: "50%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope6",
      application_id: "10",
      time: "21-12-2023",
      percent: "70%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope7",
      application_id: "45",
      time: "21-12-2023",
      percent: "80%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope8",
      application_id: "100",
      time: "21-12-2023",
      percent: "78%",
    },
    {
      name: "Mr. Patrick Emmanuel Olasope9",
      application_id: "45",
      time: "21-12-2023",
      percent: "100%",
    },
  ];
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Change this value as needed
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Filter data based on search term
  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [data, searchTerm]);

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search input change
  const handleSearch = (event) => setSearchTerm(event.target.value);

  return (
    <div className="search_app">
      <div>
        <div class="search_box">
          <input
            type="text"
            placeholder="Search by name or ID"
            value={searchTerm}
            onChange={handleSearch}
          />
          <i class="icon fas fa-search"></i>
        </div>

        <div class="row custom-row">
          <div class="col-custom">
            <h1>All Applications</h1>
          </div>
          <div class="col-custom">
           <div class="btn-custom">
           <Link class="btn btn-primary" to='/new-application'>New Application</Link>
           </div>
          </div>
        </div>

        {currentItems.length > 0 ? (
          <ul>
            {currentItems.map((item, index) => (
              <li className="card_item" key={index}>
                <div className="row">
                  <div className="col-lg-7 col-md-6 first">
                    <h3> {item.name}</h3>
                    <p id="app_id">Application ID: {item.application_id}</p>
                    <p id="time">{item.time}</p>
                  </div>
                  <div className="col-lg-2 col-md-3 second">
                    <p id="percent">{item.percent}</p>
                  </div>
                  <div className="col-lg-2 col-md-3 third">
                    <span>
                      <i id="arrow" className="fa fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="not_found text-center"> 
          <div>
            <h3>No medical application yet</h3>
            <Link className="btn btn-primary" to='/new-application'>Create New Application</Link>
          </div>
          </div>
        )}
        
        <div className="pagination">
        {filteredData.length > itemsPerPage && (
          <div>
            <span
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {/* <i className="fa fa-arrow-left"></i> */} Prev
            </span>
            <span>{currentPage}</span>
            <span
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= filteredData.length}
            >
              {/* <i className="fa fa-arrow-right"></i> */}Next
            </span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
export default Application;
