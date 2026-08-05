// Nuvora template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function OrderConfirmationPage() {
  return (
    <>
      <div className="wf-commerce-commerceorderconfirmationcontainer order-confirmation">
            <div className="wf-commerce-commercelayoutcontainer container">
              <div className="wf-commerce-commercelayoutmain">
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
                          <label className="wf-commerce-commercecheckoutsummarylabel">
                            Email
                          </label>
                          <div>
                          </div>
                        </div>
                      </div>
                      <div className="wf-commerce-commercecheckoutcolumn">
                        <div className="wf-commerce-commercecheckoutsummaryitem">
                          <label className="wf-commerce-commercecheckoutsummarylabel">
                            Shipping Address
                          </label>
                          <div>
                          </div>
                          <div>
                          </div>
                          <div>
                          </div>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="wf-commerce-commercecheckoutshippingsummarywrapper">
                  <div className="wf-commerce-commercecheckoutsummaryblockheader block-header">
                    <h4>
                      Shipping Method
                    </h4>
                  </div>
                  <fieldset className="wf-commerce-commercecheckoutblockcontent block-content">
                    <div className="wf-commerce-commercecheckoutrow">
                      <div className="wf-commerce-commercecheckoutcolumn">
                        <div className="wf-commerce-commercecheckoutsummaryitem">
                          <div>
                          </div>
                          <div>
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
                          <label className="wf-commerce-commercecheckoutsummarylabel">
                            Payment Info
                          </label>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
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
                          <label className="wf-commerce-commercecheckoutsummarylabel">
                            Billing Address
                          </label>
                          <div>
                          </div>
                          <div>
                          </div>
                          <div>
                          </div>
                          <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                            <div className="wf-commerce-commercecheckoutsummarytextspacingondiv">
                            </div>
                          </div>
                          <div>
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
              </div>
            </div>
          </div>
    </>
  );
}
