import React from 'react';
// import LinkComponent from './LinkComponent';

const NotFoundContainer = () => (
    <section className="section-content padding-y">
        <div className="container-fluid mt-100">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body cart">
                            <div className="col-sm-12 empty-cart-cls text-center">
                                {' '}
                                <i
                                    className="fas fa-code fa-10x mb-5"
                                    style={{ color: '#31353d' }}
                                />
                                <span className="display-1 d-block">404</span>
                                <div className="mb-4 lead">The Page Does Not Exists.</div>
                                {/* <LinkComponent
                                    className="btn btn-primary"
                                >
                                    Back to Home
                                </LinkComponent> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default NotFoundContainer;
