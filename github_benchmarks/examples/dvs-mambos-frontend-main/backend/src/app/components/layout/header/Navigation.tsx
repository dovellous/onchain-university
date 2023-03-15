import React from "react";
import {useSelector} from "react-redux";

type PageProps = {
    children?: React.ReactNode;
}

const Navigation:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
    return (
        <>

            {/*  ========== App Menu ==========  */}
            <div className="app-menu navbar-menu">
                {/*  LOGO  */}
                <div className="navbar-brand-box">
                    {/*  Dark Logo */}
                    <a href="/" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="/assets/images/logo.png" alt="" height="22" />
                    </span>
                        <span className="logo-lg">
                        <img src="/assets/images/logo.png" alt="" height="50" />
                    </span>
                    </a>
                    {/*  Light Logo */}
                    <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="/assets/images/logo.png" alt="" height="22" />
                    </span>
                        <span className="logo-lg">
                        <img src="/assets/images/logo.png" alt="" height="50" />
                    </span>
                    </a>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                            id="vertical-hover">
                        <i className="ri-record-circle-line" />
                    </button>
                </div>

                <div id="scrollbar">
                    <div className="container-fluid">

                        <div id="two-column-menu">
                        </div>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title"><span data-key="t-menu">ACCOUNTS</span></li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
                                   aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i className="mdi mdi-speedometer" /> <span data-key="t-dashboards">Transactions</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarDashboards">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="/orders" className="nav-link" data-key="t-analytics">Orders </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/transactions" className="nav-link" data-key="t-analytics">Transactions </a>
                                        </li>
                                    </ul>
                                </div>
                            </li> {/*  end Dashboard Menu  */}

                        </ul>
                    </div>
                    {/*  Sidebar  */}
                </div>

                <div className="sidebar-background"></div>
            </div>
            {/*  Left Sidebar End  */}
            {/*  Vertical Overlay */}
            <div className="vertical-overlay"></div>


        </>
    );
    
};

export default Navigation;