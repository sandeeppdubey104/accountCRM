import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup";
import {
  changeActiveSidebarItem
} from "../../actions/navigation";
import { logoutUser } from "../../actions/user";

import lightDashboardIcon from "../../images/light-dashboard.svg";
import darkDashboardIcon from "../../images/dark-dashboard.svg";
import lightTables from "../../images/tables.svg";
import darkTables from "../../images/tables-dark.svg";
import lightUI from "../../images/ui-elements.svg";
import darkUI from "../../images/ui-elements-dark.svg";
import lightTypography from "../../images/Typography.svg";
import darkTypography from "../../images/Typography-dark.svg";
import logo from "../../images/logo.png";
import settingsIcon from "../../images/settings.svg";
import logoutIcon from "../../images/logout.svg";
import accountIcon from "../../images/account.svg";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
    activeItem: ""
  };

  constructor(props) {
    super(props);
    this.doLogout = this.doLogout.bind(this);
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div className={`${(!this.props.sidebarOpened && !this.props.sidebarStatic) ? s.sidebarClose : ''} ${s.sidebarWrapper}`} id={"sidebar-drawer"}>
        <nav className={s.root}>
          <header className={s.logo}>
            <img src={logo} alt="logo" className={s.logoStyle} />
            {/* <span>Vireza&nbsp;</span>Soft */}
          </header>
          <h5 className={s.navTitle}>APP</h5>
          <ul className={s.nav}>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Dashboard"
              isHeader
              link="/app/main/dashboard"
              index="main"
            >
              {window.location.href.includes("dashboard") ? (
                <img
                  src={darkDashboardIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={lightDashboardIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
          </ul>
          <h5 className={s.navTitle}>SALES</h5>
          <ul className={s.nav}>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Branch"
              isHeader
              link="/app/branch/manage"
              index="main"
            >
              {window.location.href.includes("branch") ? (
                <img
                  src={darkTables}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={lightTables}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="User"
              isHeader
              link="/app/users/manage"
              index="main"
            >
              {window.location.href.includes("users") ? (
                <img
                  src={darkTypography}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={lightTypography}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Master"
              isHeader
              link="/app/master"
              index="master"
              exact={false}
              childrenLinks={[
                {
                  header: "Items",
                  link: "/app/items/manage"
                },
                {
                  header: "Customer",
                  link: "/app/customer/manage"
                },
                {
                  header: "Policy Master",
                  link: "/app/policies"
                },
                {
                  header: "City Master",
                  link: "/app/city/manage"
                },
                {
                  header: "Transport",
                  link: "/app/transporter/manage"
                },
                {
                  header: "Station",
                  link: "/app/station/manage"
                },
                {
                  header: "Group Category",
                  link: "/app/group-category/manage"
                },
                {
                  header: "Unit Of Measurement",
                  link: "/app/uom/manage"
                },
                {
                  header: "Source Master",
                  link: "/app/source/manage"
                },
              ]}
            >
              <img
                src={lightUI}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />
            </LinksGroup>

            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Lead Generator"
              isHeader
              link="/app/lead"
              index="lead"
              exact={false}
              childrenLinks={[
                {
                  header: "Enquiry",
                  link: "/app/enquiry/manage"
                },
                {
                  header: "Assigned Lead",
                  link: "/app/lead/search",
                },
                {
                  header: "Assigned Meetings",
                  link: "/app/followup/search"
                },
                {
                  header: "Minuts Of Meeting",
                  link: "/app/mom/search"
                }
              ]}
            >
              <img
                src={lightUI}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Sales Order"
              isHeader
              link="/app/sale-order/manage"
              index="main"
            >
              <img src={lightTables} alt="lightDashboard" width={"24px"} height={"24px"} />
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Sales Contract"
              isHeader
              link="/app/sale-contract/manage"
              index="main"
            >
              <img src={lightTables} alt="lightDashboard" width={"24px"} height={"24px"} />
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Sales Invoice"
              isHeader
              link="/app/sale-invoice/manage"
              index="main"
            >
              <img src={lightTables} alt="lightDashboard" width={"24px"} height={"24px"} />
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Receipt Voucher"
              isHeader
              link="/app/receipt-voucher/manage"
              index="main"
            >
              <img src={lightTables} alt="lightDashboard" width={"24px"} height={"24px"} />
            </LinksGroup>
          </ul>
          <ul className={s.downNav}>
            <hr />
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              header="Settings"
              isHeader
              index="main"
            >
              <img
                src={settingsIcon}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              header="Account"
              isHeader
            >
              <img
                src={accountIcon}
                alt="lightDashboard"
                width={"24px"}
                height={"24px"}
              />
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              header="Logout"
              isHeader
              onClick={() => this.doLogout()}
            >
              {window.location.href.includes("another-page") ? (
                <img
                  src={logoutIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={logoutIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
    navbarType: store.navigation.navbarType,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
