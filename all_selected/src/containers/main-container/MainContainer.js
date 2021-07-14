import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import './MainContainer.scss';
import { Route, Switch } from 'react-router-dom';
import NavLinkComponent from 'src/components/NavLinkComponent';
import NotFoundContainer from 'src/components/NotFoundComponent';
import CityContainer from 'src/containers/city-container';
import WelcomeComponent from 'src/components/welcome-page/WelcomeComponent';
import NavigationContainer from '../navigation-container/NavigationContainer';
import UserContainer from '../user-container';
import ClientContainer from '../client-container';
import CompanyContainer from '../company-container';
import ProductContainer from '../product-container';
import ActivityContainer from '../activity-container/index';
import CaseContainer from '../case-container/index';
import VerifierContainer from '../verifier-container/index';
import LeadContainer from '../lead-container/index';
import MisContainer from '../case-mis/index';
import HeaderContainer from '../header-container/HeaderContainer';
import TaxManagerContainer from '../tax-container/index';

function MainContainer() {
    const [
        sideBarState,
        setSideBarState,
    ] = useState(false);

    const closeSideBar = useCallback(() => {
        setSideBarState(false);
    }, [
        setSideBarState,
    ]);

    const openSideBar = useCallback(() => {
        setSideBarState(true);
    }, [
        setSideBarState,
    ]);

    return (
        <>
            <HeaderContainer />

            <div className={classNames({
                'page-wrapper chiller-theme': true,
                toggled: sideBarState,
            })}
            >
                <NavLinkComponent
                    id="show-sidebar"
                    className="btn btn-sm btn-dark"
                    onClick={openSideBar}
                >
                    <i className="fas fa-bars" />
                </NavLinkComponent>

                <NavigationContainer
                    closeSideBar={closeSideBar}
                    openSideBar={openSideBar}
                />

                <main className="page-content">
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={WelcomeComponent}
                        />
                        <Route
                            path="/user"
                            component={UserContainer}
                        />
                        <Route
                            path="/city"
                            component={CityContainer}
                        />
                        <Route
                            path="/client"
                            component={ClientContainer}
                        />
                        <Route
                            path="/company"
                            component={CompanyContainer}
                        />
                        <Route
                            path="/product"
                            component={ProductContainer}
                        />
                        <Route
                            path="/activity"
                            component={ActivityContainer}
                        />
                        <Route
                            path="/case"
                            component={CaseContainer}
                        />
                        <Route
                            path="/verifier"
                            component={VerifierContainer}
                        />
                        <Route
                            path="/tax"
                            component={TaxManagerContainer}
                        />
                        <Route
                            path="/lead"
                            component={LeadContainer}
                        />
                        <Route
                            path="/mis"
                            component={MisContainer}
                        />
                        <Route
                            component={NotFoundContainer}
                        />
                    </Switch>
                </main>
            </div>
        </>
    );
}

export default MainContainer;
