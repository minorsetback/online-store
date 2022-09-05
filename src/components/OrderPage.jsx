import { useState } from "react";
import '../styles/form.css'

const OrderPage = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="wrapper">
            <div className="mx-auto d-block w-75">
                <form id="msform" onSubmit={(data) => console.log(data)}>
                    <ul id="progressbar">
                        <li className="active">Personal Details</li>
                        <li className={active >= 1 ? 'active' : ""}>Social Profiles</li>
                        <li className={active >= 2 ? 'active' : ""}>Account Setup</li>
                    </ul>
                    <fieldset style={{ display: active === 0 ? 'block' : "none" }}>
                        <h2 className="fs-title">Personal Details</h2>
                        <h3 className="fs-subtitle">Tell us something more about you</h3>
                        <input type="text" name="fname" placeholder="First Name" />
                        <input type="text" name="lname" placeholder="Last Name" />
                        <input type="text" name="phone" placeholder="Phone" />
                        <input type="button" name="next" className="next action-button" value="Next" onClick={() => setActive((prev) => prev + 1)} />
                    </fieldset>
                    <fieldset style={{ display: active === 1 ? 'block' : "none" }}>
                        <div className="card card-outline-secondary">
                            <div className="card-body">
                                <h2 className="fs-title">Add your card</h2>
                                <hr />
                                <div className="form-group">
                                    <label htmlFor="cc_name">Card Holder's Name</label>
                                    <input type="text" className="form-control" id="cc_name" title="First and last name" required="required" />
                                </div>
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" className="form-control" autoComplete="off" maxLength="20" pattern="\d{16}" title="Credit card number" required="" />
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12">Card Exp. Date</label>
                                    <div className="col-md-4">
                                        <select className="form-control" name="cc_exp_mo" size="0">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-control" name="cc_exp_yr" size="0">
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="password" className="form-control" autoComplete="off" maxLength="3" pattern="\d{3}" title="Three digits at back of your card" required="" placeholder="CVC" />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={() => setActive((prev) => prev - 1)} />
                        <input type="button" name="next" className="next action-button" value="Next" onClick={() => setActive((prev) => prev + 1)} />
                    </fieldset>
                    <fieldset style={{ display: active === 2 ? 'block' : "none" }}>
                        <h2 className="fs-title">Enter address</h2>
                        <input type="text" name="address" placeholder="Address" />
                        <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={() => setActive((prev) => prev - 1)} />
                        <input type="submit" name="submit" className="submit action-button" value="Submit" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
export default OrderPage