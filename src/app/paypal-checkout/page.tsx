// Nuvora template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function PaypalCheckoutPage() {
  return (
    <>
      <div className="wf-commerce-commercepaypalcheckoutformcontainer paypal-checkout-form">
            <div className="wf-commerce-commercelayoutcontainer container">
              <div className="wf-commerce-commercelayoutmain">
                <form className="wf-commerce-commercecheckoutshippingmethodswrapper">
                  <div className="wf-commerce-commercecheckoutblockheader block-header">
                    <h4>
                      Shipping Method
                    </h4>
                  </div>
                  <fieldset className="block-content">
                    <div className="wf-commerce-commercecheckoutshippingmethodslist">
                      <label className="wf-commerce-commercecheckoutshippingmethoditem">
                        <input name="shipping-method-choice" required type="radio" />
                        <div className="wf-commerce-commercecheckoutshippingmethoddescriptionblock">
                          <div className="wf-commerce-commerceboldtextblock text-block">
                          </div>
                          <div className="text-block">
                          </div>
                        </div>
                        <div>
                        </div>
                      </label>
                    </div>
                  </fieldset>
                </form>
                <div className="wf-commerce-commercecheckoutcustomerinfosummarywrapper">
                  <div className="wf-commerce-commercecheckoutsummaryblockheader block-header">
                    <h4>
                      Customer Information
                    </h4>
                  </div>
                  <fieldset className="wf-commerce-commercecheckoutblockcontent block-content">
                    <div className="wf-commerce-commercecheckoutrow">
                      <div className="wf-commerce-commercecheckoutcolumn">
                        <div className="wf-commerce-commercecheckoutsummaryitem">
                          <label className="wf-commerce-commercecheckoutsummarylabel text-block">
                            Email
                          </label>
                          <div className="text-block">
                          </div>
                        </div>
                      </div>
                      <div className="wf-commerce-commercecheckoutcolumn">
                        <div className="wf-commerce-commercecheckoutsummaryitem">
                          <label className="wf-commerce-commercecheckoutsummarylabel text-block">
                            Shipping Address
                          </label>
                          <div className="text-block">
                          </div>
                          <div>
                          </div>
                          <div className="text-block">
                          </div>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                          </div>
                          <div className="text-block">
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="wf-commerce-commercecheckoutpaymentsummarywrapper">
                  <div className="wf-commerce-commercecheckoutsummaryblockheader block-header">
                    <h4>
                      Payment Info
                    </h4>
                  </div>
                  <fieldset className="wf-commerce-commercecheckoutblockcontent block-content">
                    <div className="wf-commerce-commercecheckoutrow">
                      <div className="wf-commerce-commercecheckoutcolumn">
                        <div className="wf-commerce-commercecheckoutsummaryitem">
                          <label className="wf-commerce-commercecheckoutsummarylabel text-block">
                            Payment Info
                          </label>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                          </div>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div>
                            </div>
                            <div>
                              /
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wf-commerce-commercecheckoutcolumn">
                        <div className="wf-commerce-commercecheckoutsummaryitem">
                          <label className="wf-commerce-commercecheckoutsummarylabel text-block">
                            Billing Address
                          </label>
                          <div className="text-block">
                          </div>
                          <div>
                          </div>
                          <div className="text-block">
                          </div>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv text-block">
                            </div>
                          </div>
                          <div className="text-block">
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="wf-commerce-commercecheckoutorderitemswrapper">
                  <div className="wf-commerce-commercecheckoutsummaryblockheader block-header">
                    <h4>
                      Items in Order
                    </h4>
                  </div>
                  <fieldset className="wf-commerce-commercecheckoutblockcontent block-content">
                    <div className="wf-commerce-commercecheckoutorderitemslist" role="list">
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="wf-commerce-commercelayoutsidebar order-right-wrap">
                <div className="wf-commerce-commercecheckoutordersummarywrapper">
                  <div className="wf-commerce-commercecheckoutsummaryblockheader block-header">
                    <h4>
                      Order Summary
                    </h4>
                  </div>
                  <fieldset className="wf-commerce-commercecheckoutblockcontent block-content">
                    <div className="wf-commerce-commercecheckoutsummarylineitem">
                      <div>
                        Subtotal
                      </div>
                      <div>
                      </div>
                    </div>
                    <div className="wf-commerce-commercecheckoutordersummaryextraitemslist">
                      <div className="wf-commerce-commercecheckoutordersummaryextraitemslistitem">
                        <div>
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                    <div className="wf-commerce-commercecheckoutsummarylineitem line-item">
                      <div className="total-text">
                        Total
                      </div>
                      <div className="wf-commerce-commercecheckoutsummarytotal">
                      </div>
                    </div>
                  </fieldset>
                </div>
                <a className="wf-commerce-commercecheckoutplaceorderbutton submit-button">
                  Place Order
                </a>
              </div>
            </div>
          </div>
    </>
  );
}
