import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Switch, Route, withRouter, Redirect } from "react-router";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Hammer from "rc-hammerjs";

import Dashboard from "../../pages/dashboard";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  openSidebar,
  closeSidebar,
  toggleSidebar,
} from "../../actions/navigation";
import s from "./Layout.module.scss";
import BreadcrumbHistory from "../BreadcrumbHistory";

// pages
import Typography from "../../pages/typography";
//import Maps from "../../pages/maps";
import Notifications from "../../pages/notifications/Notifications";
import Icons from "../../pages/icons";
import Tables from "../../pages/tables";
import Charts from "../../pages/charts";

// Sales module view
import BranchContainer from '../../containers/branch-container';
import TransporterContainer from '../../containers/transporter-container';
import StationContainer from '../../containers/station-container';
import UserContainer from '../../containers/user-container';

import Itemontainer from '../../containers/item-container';
import CustomerContainer from '../../containers/customer-container';
import CityContainer from '../../containers/city-container';
import EnquiryContainer from '../../containers/enquiry-container';
import LeadContainer from '../../containers/lead-container';
import FollowupContainer from '../../containers/followup-container';
import MomContainer from '../../containers/mom-container';

import SaleOrderContainer from '../../containers/sale-order-container';
import SaleContractContainer from '../../containers/sale-contract-container';
import SaleInvoiceContainer from '../../containers/sale-invoice-container';

import ReceiptVoucherContainer from '../../containers/receipt-voucher-container';
import GroupCategoryContainer from '../../containers/group-category-container';
import UOMContainer from '../../containers/uom-container';
import SourceContainer from '../../containers/source-container';


//'src/containers/branch-container';



class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
  };

  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {

    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth <= 768) {
      this.props.dispatch(toggleSidebar());
    } else if (window.innerWidth >= 768) {
      this.props.dispatch(openSidebar());
    }
  }

  handleCloseSidebar(e) {
    if (e.target.closest("#sidebar-drawer") == null && this.props.sidebarOpened && window.innerWidth <= 768) {
      this.props.dispatch(toggleSidebar());
    }
  }

  handleSwipe(e) {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          !this.props.sidebarOpened ? s.sidebarClose : "",
          "flatlogic-one",
          "dashboard-light",
        ].join(" ")}
        onClick={e => this.handleCloseSidebar(e)}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header />

          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <BreadcrumbHistory url={this.props.location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >

                  <Switch>
                    <Route
                      path="/app/main"
                      exact
                      render={() => <Redirect to="/app/main/dashboard" />}
                    />
                    <Route
                      path="/app/main/dashboard"
                      exact
                      component={Dashboard}
                    />
                    <Route path={"/app/typography"} component={Typography} />
                    <Route path={"/app/tables"} component={Tables} />
                    {/* <Route path={"/app/ui/maps"} component={Maps} /> */}
                    <Route
                      path={"/app/ui/notifications"}
                      component={Notifications}
                    />
                    <Route path={"/app/ui/icons"} component={Icons} />
                    <Route path={"/app/ui/charts"} component={Charts} />
                    <Route path={"/app/branch"} component={BranchContainer} />

                    <Route path={"/app/users"} component={UserContainer} />
                    <Route path={"/app/items"} component={Itemontainer} />
                    <Route path={"/app/customer"} component={CustomerContainer} />
                    <Route path={"/app/city"} component={CityContainer} />

                    <Route path={"/app/enquiry"} component={EnquiryContainer} />
                    <Route path={"/app/lead"} component={LeadContainer} />
                    <Route path={"/app/followup"} component={FollowupContainer} />
                    <Route path={"/app/mom"} component={MomContainer} />

                    <Route path={"/app/sale-order"} component={SaleOrderContainer} />
                    <Route path={"/app/sale-contract"} component={SaleContractContainer} />
                    <Route path={"/app/sale-invoice"} component={SaleInvoiceContainer} />
                    <Route path={"/app/receipt-voucher"} component={ReceiptVoucherContainer} />

                    <Route path={"/app/transporter"} component={TransporterContainer} />
                    <Route path={"/app/station"} component={StationContainer} />
                    <Route path={"/app/group-category"} component={GroupCategoryContainer} />
                    <Route path={"/app/uom"} component={UOMContainer} />
                    <Route path={"/app/source"} component={SourceContainer} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
