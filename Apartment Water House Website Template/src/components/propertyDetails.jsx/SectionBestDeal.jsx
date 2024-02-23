export default function SectionBestDeal (){
    return (
      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Best Deal</h6>
                <h2>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="appartment-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#appartment"
                          type="button"
                          role="tab"
                          aria-controls="appartment"
                          aria-selected="true"
                        >
                          Appartment
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="villa-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#villa"
                          type="button"
                          role="tab"
                          aria-controls="villa"
                          aria-selected="false"
                        >
                          Villa House
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="penthouse-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#penthouse"
                          type="button"
                          role="tab"
                          aria-controls="penthouse"
                          aria-selected="false"
                        >
                          Penthouse
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>
                                Total Flat Space <span>540 m2</span>
                              </li>
                              <li>
                                Floor number <span>3</span>
                              </li>
                              <li>
                                Number of rooms <span>8</span>
                              </li>
                              <li>
                                Parking Available <span>Yes</span>
                              </li>
                              <li>
                                Payment Process <span>Bank</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="assets/images/deal-01.jpg" alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4>All Info About Apartment</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised
                            ipsum suspendisse. <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo
                            after messenger poutine next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                            <a href="#">
                              <i className="fa fa-calendar"></i> Schedule a visit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>
                                Total Flat Space <span>250 m2</span>
                              </li>
                              <li>
                                Floor number <span>26th</span>
                              </li>
                              <li>
                                Number of rooms <span>5</span>
                              </li>
                              <li>
                                Parking Available <span>Yes</span>
                              </li>
                              <li>
                                Payment Process <span>Bank</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="assets/images/deal-02.jpg" alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4>Detail Info About New Villa</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised
                            ipsum suspendisse. <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo
                            after messenger poutine next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                            <a href="#">
                              <i className="fa fa-calendar"></i> Schedule a visit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>
                                Total Flat Space <span>320 m2</span>
                              </li>
                              <li>
                                Floor number <span>34th</span>
                              </li>
                              <li>
                                Number of rooms <span>6</span>
                              </li>
                              <li>
                                Parking Available <span>Yes</span>
                              </li>
                              <li>
                                Payment Process <span>Bank</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="assets/images/deal-03.jpg" alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4>Extra Info About Penthouse</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut Kinfolk tonx seitan crucifix 3 wolf
                            moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologistlabore et dolore magna aliqua quised ipsum
                            suspendisse. <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo
                            after messenger poutine next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                            <a href="#">
                              <i className="fa fa-calendar"></i> Schedule a visit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}