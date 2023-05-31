
import React from "react";
import json from "./data.json";
import { AiFillSave, AiOutlineDownload } from "react-icons/ai";
import { CSVLink } from "react-csv";
import { useState } from "react";
import "./table.css";

const Table = () => {
  // let [select, setSelect] = useState("");
  let [state, setState] = useState([]);
  let [select, setSelect] = useState([]);
  let [reject, setReject] = useState([]);
  let [isReject, setIsReject] = useState(false);
  let [isSelect, setIsSelect] = useState(false);
  let [isAll, setIsAll] = useState(false);

  let handleChange = e => {
    // let { name, value } = e.target;
    // setSelect({ ...select, [name]: value });
    console.log(e);
    if (e.target.value === "all") {
      setIsReject(false);
      setIsSelect(false);
      setIsAll(true);
    } else if (e.target.value === "selected") {
      setIsReject(false);
      setIsSelect(true);
      setIsAll(false);
    } else if (e.target.value === "rejected") {
      setIsReject(true);
      setIsSelect(false);
      setIsAll(false);
    }
  };
  // console.log(select);
  let handleClick = e => {
    // console.log(e);
    e.target.parentElement.parentElement.parentElement.children[0].disabled = true;
    // if (e.target.parentElement.parentElement.parentElement.children[0].value === "selected") {
    let row =
      e.target.parentElement.parentElement.parentElement.parentElement.children;
    console.dir(row[4].innerText);
    let data = {
      name: row[0].innerText,
      mobileNumber: row[1].innerText,
      email: row[2].innerText,
      gender: row[3].innerText,
      shortlisted: row[4].children[0].value,
      testMarks: row[5].innerText,
      testPercentage: row[6].innerText,
      nooOfBacklogs: row[7].innerText,
      tenth: row[8].innerText,
      twelth: row[9].innerText,
      degreeCollege: row[10].innerText,
      degreeUniversity: row[11].innerText,
      degreeType: row[12].innerText,
      degreeStream: row[13].innerText,
      degreePercent: row[14].innerText,
      degreeYop: row[15].innerText,
      masterCollege: row[16].innerText,
      masterUniversity: row[17].innerText,
      masterType: row[18].innerText,
      masterStream: row[19].innerText,
      masterPercent: row[20].innerText,
      masterYop: row[21].innerText,
    };
    setState([...state, { ...data }]);
    // console.log(row);
    console.log(state);
    if (
      e.target.parentElement.parentElement.parentElement.children[0].value ===
      "selected"
    ) {
      setSelect([...select, { ...data }]);
      // console.log(row);
      console.log(select);
    } else if (
      e.target.parentElement.parentElement.parentElement.children[0].value ===
      "rejected"
    ) {
      setReject([...reject, { ...data }]);
      // console.log(row);
      console.log(reject);
    }

    // }
  };
  const headers = [
    { label: "name", key: "name" },
    { label: "email", key: "email" },
    { label: "mobile number", key: "mobileNumber" },
    { label: "gender", key: "gender" },
    { label: "shortlist", key: "shortlisted" },
    { label: "test marks", key: "testMarks" },
    { label: "test percentage", key: "testPercentage" },
    { label: "num of backlogs", key: "nooOfBacklogs" },
    { label: "10th %", key: "tenth %" },
    { label: "12th %", key: "twelth" },
    { label: "degree college", key: "degreeCollege" },
    { label: "degree university", key: "degreeUniversity" },
    { label: "degree type", key: "degreeType" },
    { label: "degree stream", key: "degreeStream" },
    { label: "degree %", key: "degreePercent" },
    { label: "degree yop", key: "degreeYop" },
    { label: "master college", key: "masterCollege" },
    { label: "master university", key: "masterUniversity" },
    { label: "master type", key: "masterType" },
    { label: "master stream", key: "masterStream" },
    { label: "master %", key: "masterPercent" },
    { label: "master yop", key: "masterYop" },
  ];

  const csvReport = {
    filename: "report.csv",
    headers: headers,
    data: isAll ? state : isSelect ? select : isReject ? reject : state
  };
  let tbodyData = isAll ? state : isSelect ? select : isReject ? reject : json;

  return (
    <section className="resultComp">
      <article>
        {/* <h4>View Results</h4> */}
        <div className="dropDownBar">
          {/* <div>
            <select name="" id="">
              <option value="">Degree College</option>
            </select>

            <select name="" id="">
              <option value="">Master College</option>
            </select>
            <select name="" id="">
              <option value="">Test Percentage</option>
            </select>
            <select name="" id="">
              <option value="">BackLogs</option>
            </select>
          </div> */}
         
          <div  id="selectionButton">
            <select name="category" onChange={handleChange}>
              <option>Choose Here</option>
              <option value="all">All Candidates</option>
              <option value="selected">Selected</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>mobile number</th>
              <th>gender</th>
              <th>shortlist</th>
              <th>test marks</th>
              <th>test percentage</th>
              <th>num of backlogs</th>
              <th>10th %</th>
              <th>12th %</th>
              <th>degree college</th>
              <th>degree university</th>
              <th>degree type</th>
              <th>degree stream</th>
              <th>degree %</th>
              <th>degree yop</th>
              <th>master college</th>
              <th>master university</th>
              <th>master type</th>
              <th>master stream</th>
              <th>master %</th>
              <th>master yop</th>
            </tr>
          </thead>
          <tbody>
            {tbodyData.map((val, ind) => {
              return (
                <tr key={ind + 1}>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.mobileNumber}</td>
                  <td>{val.gender}</td>
                  {!isAll & !isSelect & !isReject ? (
                    <td
                      className="saveBlock"
                      // onChange={handleChange}
                      // value={select}
                      name="select"
                    >
                      <select name="select">
                        {val.shortlisted.map((value, ind) => {
                          return (
                            <>
                              <option value={value}>{value}</option>
                            </>
                          );
                        })}
                      </select>
                      <span className="saveIcon" onClick={handleClick}>
                        <AiFillSave />
                      </span>
                    </td>
                  ) : (
                    <td>{val.shortlisted}</td>
                  )}
                  <td>{val.testMarks}</td>
                  <td>{val.testPercentage}</td>
                  <td>{val.nooOfBacklogs}</td>
                  <td>{val.tenth}</td>
                  <td>{val.twelth}</td>
                  <td>{val.degreeCollege}</td>
                  <td>{val.degreeUniversity}</td>
                  <td>{val.degreeType}</td>
                  <td>{val.degreeStream}</td>
                  <td>{val.degreePercent}</td>
                  <td>{val.degreeYop}</td>
                  <td>{val.masterCollege}</td>
                  <td>{val.masterUniversity}</td>
                  <td>{val.masterType}</td>
                  <td>{val.masterStream}</td>
                  <td>{val.masterPercent}</td>
                  <td>{val.masterYop}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button>
          <AiOutlineDownload />
          <CSVLink {...csvReport}>Download CSV</CSVLink>
        </button>
      </article>
    </section>
  );
};

export default Table;
