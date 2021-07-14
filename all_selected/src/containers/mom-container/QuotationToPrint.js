import React, { useRef } from "react";
import { Table } from 'reactstrap';
import { render } from "react-dom";
class QuotationToPrint extends React.Component {
    render() {
        return (
            <div style={{ margin: "5%" }}>
                <div>
                    <div
                        className="left-div"
                        style={{
                            width: "50%",
                            height: "150px",
                            float: "left",
                            marginTop: "80px"
                        }}
                    >
                        <img
                            alt="hello"
                            width="100%"
                            src="https://www.infocityhosting.com/image/logo.png"
                        />
                    </div>
                    <div
                        className="right-div"
                        style={{
                            width: "50%",
                            float: "right",
                            marginTop: "80px",
                            textAlign: "right"
                        }}
                    >
                        <h3>QUOTATION</h3>
                        <h5>INFOCITY HOSTING</h5>
                        <p>
                            1800, Gyani Bazar, Kotla Mubarakpur South Ext – 1, New Delhi –
                            110049 Ph.: 011-41065996, #8447224781 State Bank of India, C. A/c
                            No. 31777487986 IFS Code: SBIN0007836 PAN No.: AWRPK4187D GSTNo.:
                            07AWRPK4187D1Z7
            </p>
                    </div>
                </div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Quote#</th>
                                <th>Subject</th>
                                <th>Date Created</th>
                                <th>Valid Until</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">147</th>
                                <td>Proposal for BizGeek Solution Subscription</td>
                                <td>04/02/2021 </td>
                                <td>04/03/2021 </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="client_name" style={{ width: "200px", textAlign: "left" }}>
                    <h5>Recipient</h5>
          Mid Town ATTN: Mid Town Moti Nagar New Delhi, Delhi, 110015 India
        </div>
                <div style={{ textAlign: "left" }}>
                    <p>
                        As per our conversation regarding your Software Application
                        requirement for Billing, I am here to share you detail proposal for
                        same.
          </p>
                    <p>
                        {" "}
            1) Product/item detailed, price and availability list management{" "}
                        <br />
            2) Multi-user login and authentication management <br />
            3) Multi-store, availability and store wise product listing
            <br />
            4) Vendor, Item, Purchase and inventory/stock management
            <br />
            5) Order cum sell, order processing and order monitoring
            <br />
            6) Various reports e.g.- Sell report with many filter criteria,
            customer list, purchase report and stock report.
            <br />
            7) Payment gateway and SMS Api integrated
            <br />
            Process to proceed – WORK FLOW:
            <br />
            You need to share following detailsScan <br /> copy of GST
            certificate of Company Commercials mentioned here in this quotation
            document.
            <br />
            Let me know if you need any clarification on this plz.
          </p>
                </div>

                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                                <th>Discount</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>BizGeek Solution - Setup and configuration of Admin Panel
                                and Outlet billing (One time setup fees)</td>
                                <td>25000.00</td>
                                <td>0.00</td>
                                <td>INR. 25000.00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>BizGeek Annual Services - Admin Panel + Order Solution
                                (@Rs.40000.00, Annual)</td>
                                <td>25000.00</td>
                                <td>0.00</td>
                                <td>INR. 25000.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div style={{ width: "300px", textAlign: "left" }}>
                    <h5>Notes: ADVANTAGES OF SERVICE:</h5>
                    <p>
                        Digital solution for retail billing Stock status and item
                        availability Order notification and monitoring One click reporting
                    </p>

                    <p>Thank you Great regards Amod Kumar +91 9811237791 # 8447224781</p>
                </div>
            </div>
        );
    }



}
export default QuotationToPrint;