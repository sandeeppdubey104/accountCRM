import React from "react";
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge
} from "reactstrap";
import { Sparklines, SparklinesBars } from "react-sparklines";

import Widget from "../../components/Widget";
import s from "../../../src/pages/tables/Tables.modules.scss" //"./Tables.modules.scss";

let pagination = null;
let rows = [];
    // TABLE HEADERS
const header = [];

class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1, 
          branch_name:"AIFINTECH DELHI",
          auth_person:"Shivam Dubey",
          state: "UTTAR PRADESH", 
          city: "Gorakhpur",
          pincode: "273408",
          gst: "27AKJD833393",
          area: "204 janak cinema",
          created_by: "Sandeep Dubey",
          status: "Active", 
        }
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false]
    };

    this.checkAll = this.checkAll.bind(this);
  }
  parseDate(date) {
    this.dateSet = date.toDateString().split(" ");

    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = new Array(this.state[checkbox].length).fill(
      ev.target.checked
    );
    this.setState({
      [checkbox]: checkboxArr
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox]
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col>
            <Widget
              title={<p style={{ fontWeight: 700 }}></p>}
              customDropDown
            >
              <Table responsive>
                <thead>
                  <tr className="fs-sm">
                    <th className="hidden-sm-down">#</th>
                    <th className="hidden-sm-down">BRANCH NAME</th>
                    <th className="hidden-sm-down">AUTHORIZED PERSON</th>
                    <th className="hidden-sm-down">STATE</th>
                    <th className="hidden-sm-down">CITY</th>
                    <th className="hidden-sm-down">PIN CODE</th>
                    <th className="hidden-sm-down">GST No</th>
                    <th className="hidden-sm-down">AREA</th> 
                    <th className="hidden-sm-down">Created By</th>
                    <th className="hidden-sm-down">Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableStyles.map(row => (
                    <tr key={row.id}>
                      <td>{row.id}</td> 
                      <td>{row.branch_name}</td> 
                      <td>{row.auth_person}</td> 
                      <td>{row.state}</td>
                      <td>{row.city}</td>
                      <td>{row.pincode}</td>
                      <td>{row.gst}</td>
                      <td>{row.area}</td>
                      <td>{row.created_by}</td>
                      <td>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="clearfix">
                <p>Pagination Part should be there</p>
              </div>
            </Widget>
          </Col>
        </Row>
              </div>
    );
  }
}

export default Tables;
