import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import NotFoundContainer from '../NotFoundComponent';
import TabsComponent from '../tabs-component/TabsComponent';

const CrudLayoutContainer = ({
    title,
    tabs,
    routes,
}) => (
    <section
        className="section-content pl-lg-5 pr-lg-5"
        style={{
            minHeight: '100vh',
        }}
    >
        <div className="container-fluid">
            <p className="h4 text-center py-4">{title}</p>
            <TabsComponent tabs={tabs} />
            <div className="mt-3">
                <Switch>
                    {
                        routes.map(({
                            link,
                            component: Component,
                        }) => (
                            <Route
                                key={link}
                                path={link}
                                exact
                                component={Component}
                            />
                        ))
                    }
                    <Route
                        component={NotFoundContainer}
                    />
                </Switch>
            </div>
        </div>
    </section>
);

CrudLayoutContainer.propTypes = {
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        component: PropTypes.any.isRequired,
        link: PropTypes.string,
    })).isRequired,
};

export default CrudLayoutContainer;
