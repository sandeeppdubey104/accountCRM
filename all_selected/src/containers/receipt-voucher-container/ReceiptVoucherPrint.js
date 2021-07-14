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
                        <h3>R E C E I P T</h3>
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
                                            Receipt No.:BTL/PU/102<br />
                                        </div>
                                    </th>

                                    <th style={border}>
                                        <div style={{ width: "400px" }}>
                                            Date:05-06-2020
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th width="200">
                                        <div style={{ width: "400px" }}>
                                            Party:<br />
                                        JYOTI TELEVISION CENTRE
                                        </div>
                                    </th>
                                    <th width="200">
                                        <div style={{ width: "400px" }}>
                                            Party GSTIN / UIN:<br />
                                        Place of Supply: <br />
                                        Amount (Rs.) :<br />
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div style={{
                    border: "solid 1px",
                }}>
                    <p>RTGS Cr-SBIN0050059-JYOTI TELEVISION CENTREAJAJPLIANCES LIMITED-SBINR12020060500008186</p>
                </div>
                <div className="left-div"
                    style={{
                        width: "50%",
                        height: "100px",
                        float: "left",
                        borderLeft: "solid 1px",
                        borderBottom: "solid 1px",
                        textAlign: "left"
                    }}>
                    <div style={{
                        marginLeft: "10px"
                    }}>
                        <h5>2,00,000.00 </h5>
                        <h5>Rupees Two Lakh Only</h5>
                        <p>( Cheque Subject to Realisation )</p>
                    </div>

                </div>


                <div className="right-div"
                    style={{
                        width: "50%",
                        height: "100px",
                        float: "right",
                        textAlign: "left",
                        borderRight: "solid 1px",
                        borderBottom: "solid 1px",
                    }}
                >
                    <div style={{ height: "50%" }}>
                        <h6 style={{ float: "right" }}>For BAJAJ APPLIANCES LIMITED ( PUNE)</h6>
                        <h6 style={{ float: "right", marginTop: "45px", marginRight: "10px" }}>Authorised Signatory</h6>
                    </div>

                </div>

            </div >
        );
    }



}
export default SaleInvoiceToPrint;