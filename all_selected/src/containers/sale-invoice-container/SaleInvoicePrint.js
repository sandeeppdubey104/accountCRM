import React, { useRef } from "react";
import { Table } from 'reactstrap';
import { render } from "react-dom";
class SaleInvoiceToPrint extends React.Component {
    render() {
        const border = {
            border: "solid 1px",
            width: " 50%",
            textAlign: "left"
        };

        return (
            <div style={{ margin: "5%", border: "solid 1px" }}>
                <div>
                    <div
                        className="left-div"
                        style={{
                            width: "50%",
                            height: "150px",
                            float: "left",
                            marginTop: "20px"
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
                            marginTop: "20px",
                            textAlign: "right",
                            padding: "10px"

                        }}
                    >
                        <h3>TAX INVOICE</h3>
                        <h5>INFOCITY HOSTING</h5>
                        <p>
                            1800, Gyani Bazar, Kotla Mubarakpur South Ext – 1, New Delhi –
                            110049 Ph.: 011-41065996, #8447224781 State Bank of India, C. A/c
                            No. 31777487986 IFS Code: SBIN0007836 PAN No.: AWRPK4187D GSTNo.:
                            07AWRPK4187D1Z7
            </p>
                    </div>

                    <div>
                        <Table className="border-1">
                            <tbody>
                                <tr>
                                    <th style={border}>
                                        <div style={{ width: "400px" }}>
                                            Invoice No:BTL/PU/102<br />
                                        Date:04-06-2021<br />
                                        Place of Supply:Maharashtra (27)<br />
                                        Reverse Charge:N<br />
                                        GR/RR No.:
                                         </div>
                                    </th>

                                    <th style={border}>
                                        <div style={{ width: "400px" }}>
                                            Transport:GATI CARGO<br />
                                        Vehicle No:<br />
                                        Station:<br />
                                        E-Way Bill No:<br />
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th style={border} width="200">
                                        <div style={{ width: "400px" }}>
                                            Billed to:<br />
                                        B K TRADING COMPANY B K TRADING COMPANY<br />
                                        0,3, PAWAN SOCIETY, SWAGAT NAGAR 0,3, PAWAN SOCIETY, SWAGAT NAGAR<br />
                                        HUDKESHWAR, NAGPUR, HUDKESHWAR, NAGPUR,<br />
                                        NAGPUR ,MAHARASTRA,44003<br />
                                        GSTIN / UIN : 27BOJPS2434E1ZW <br />
                                        </div>
                                    </th>
                                    <th style={border} width="200">
                                        <div style={{ width: "400px" }}>
                                            Shipped to:<br />
                                        B K TRADING COMPANY B K TRADING COMPANY<br />
                                        0,3, PAWAN SOCIETY, SWAGAT NAGAR 0,3,<br />
                                         PAWAN SOCIETY, SWAGAT NAGAR<br />
                                        HUDKESHWAR, NAGPUR, HUDKESHWAR, NAGPUR,<br />
                                        NAGPUR ,MAHARASTRA,44003<br />
                                        GSTIN / UIN : 27BOJPS2434E1ZW <br />
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>S.N.#</th>
                                <th>Description of Goods</th>
                                <th>HSN/SAC Code</th>
                                <th>Qty</th>
                                <th>Unit</th>
                                <th>List Price</th>
                                <th>Disc./Unit</th>
                                <th>Price</th>
                                <th>Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">147</th>
                                <td> LED 32" SMART CHAMPION </td>
                                <td>8528</td>
                                <td>12.00</td>
                                <td>Pcs. </td>
                                <td>12,500.00</td>
                                <td>847.00</td>
                                <td>11,653.00</td>
                                <td>1,39,836.00</td>
                            </tr>

                            <tr>
                                <th scope="row" colSpan="8" style={{ textAlign: "right" }}>Total</th>
                                <td>1,39,836.00</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="8" style={{ textAlign: "right" }}>Add : CGST 9.00 %</th>
                                <td>12,585.24</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="8" style={{ textAlign: "right" }}>Add : SGST 9.00 %</th>
                                <td>12,585.24</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="3" style={{ textAlign: "right" }}>Grand Total</th>
                                <td colSpan="3" style={{ textAlign: "left" }}>12.00 Pcs</td>
                                <td colSpan="3" style={{ textAlign: "right" }}>1,65,006.48</td>
                            </tr>

                            <tr>
                                <th scope="row" colSpan="2" style={{ textAlign: "right" }}>
                                    Tax Rate<br /> 18%
                                </th>
                                <th colSpan="2" style={{ textAlign: "left" }}>
                                    Taxable Amt <br />1,39,836.00
                                </th>
                                <th colSpan="2" style={{ textAlign: "left" }}>
                                    CGST Amt. <br />12,585.24
                                </th>
                                <th colSpan="2" style={{ textAlign: "left" }}>
                                    SGST Amt. <br /> 12,585.24
                                </th>
                                <th colSpan="2" style={{ textAlign: "left" }}>
                                    Total Tax. <br />25,170.48
                                </th>
                            </tr>

                            <tr>
                                <td scope="row" colSpan="9" style={{ textAlign: "left" }}>
                                    <h6>Rupees One Lakh Sixty Five Thousand Six and Paisa Forty Eight Only.</h6>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </div>

                <div className="left-div"
                    style={{
                        width: "50%",
                        height: "200px",
                        float: "left",
                        border: "solid 1px",
                        textAlign: "left"
                    }}>
                    <div style={{
                        marginLeft: "10px"
                    }}>
                        <h6>Terms & Conditions</h6>
                        <p >E.& O.E.<br />
                        1. Goods once sold will not be taken back.<br />
                        2. Interest @ 18% p.a. will be charged if the payment For BAJAJ APPLIANCES LIMITED ( PUNE)<br />
                        is not made with in the stipulated time.<br />
                        3. Subject to 'Maharashtra' Jurisdiction only.
                        </p>
                    </div>

                </div>

                <div className="right-div"
                    style={{
                        width: "50%",
                        height: "200px",
                        float: "right",
                        border: "solid 1px",
                        textAlign: "left"
                    }}
                >
                    <div style={{ height: "50%", borderBottom: "solid 1px" }}>
                        <p>Receiver's Signature:</p>
                    </div>
                    <div style={{ height: "50%" }}>
                        <h5 style={{ float: "right" }}>For BAJAJ APPLIANCES LIMITED ( PUNE)</h5>
                        <h6 style={{ float: "right", marginTop: "45px", marginRight: "10px" }}>Authorised Signatory</h6>
                    </div>

                </div>

            </div >
        );
    }



}
export default SaleInvoiceToPrint;