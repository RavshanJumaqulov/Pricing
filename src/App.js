import './App.css';

function App() {
  return (
    <div className="App">
      <div className="p-3 px-md-4 mb-3 d-flex flex-column flex-md-row align-items-center border-bottom box-shadow">
              <h5 className="my-0 mr-md-auto font-weight-auto">Company name</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                  <a href="#" className="text-dark p-2">Features</a>
                  <a href="#" className="text-dark p-2">Enterprise</a>
                  <a href="#" className="text-dark p-2">Support</a>
                  <a href="#" className="text-dark p-2">Pricing</a>
                </nav>
                <a href="#" className="btn btn-outline-primary">Sign Up</a>
            </div>
            <div className="pricing-header p-3 pt-mb-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Pricing</h1>
              <p className="lead">
                Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
                </p>
            </div>
            <div className="container px-5">
              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow mx-3">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ month</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button className="btn btn-lg btn-block btn-outline-primary">Sign Up for free</button>
                  </div>
                </div>
                <div className="card mb-4 box-shadow mx-3">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ month</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button className="btn btn-lg btn-block btn-primary">Sign Up for free</button>
                  </div>
                </div>
                <div className="card mb-4 box-shadow mx-3">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ month</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button className="btn btn-lg btn-block btn-primary">Sign Up for free</button>
                  </div>
                </div>
              </div>
              <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                  <div className="col-12 col-md">
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" className="mb-2" />
                    <small className='d-block mb-3 text-muted'>© 2017-2018</small>
                  </div>
                  <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                      <li><a href="#" className="text-muted">
                        Cool stuff
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Random feature
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Team feature
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Stuff for developers
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Another one
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Last time
                      </a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md">
                  <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                      <li><a href="#" className="text-muted">
                      Resource
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Resource name
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Another resource
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Final resource
                      </a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md">
                  <h5>About</h5>
                    <ul className="list-unstyled text-small">
                      <li><a href="#" className="text-muted">
                      Team
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Locations
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Privacy
                      </a></li>
                      <li><a href="#" className="text-muted">
                      Terms
                      </a></li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
    </div>
  );
}

export default App;
