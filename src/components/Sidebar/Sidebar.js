import React, { useEffect, useState } from "react";
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBIcon,
  MDBBtn,
  MDBRadio,
} from "mdb-react-ui-kit";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/logo.svg";
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default function Sidebar({ type }) {
  const navigate = useNavigate();
  const [basicCollapse1, setBasicCollapse1] = useState(false);
  const [basicCollapse2, setBasicCollapse2] = useState(false);
  const [basicCollapse3, setBasicCollapse3] = useState(false);
  const [basicCollapse4, setBasicCollapse4] = useState(false);
  const [basicCollapse5, setBasicCollapse5] = useState(false);
  const [basicCollapse6, setBasicCollapse6] = useState(false);
  const [basicOpen, setBasicOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log("width", windowSize.innerWidth);
  return (
    <div id="role-side-nav" className="me-lg-5">
      <MDBSideNav
        isOpen={windowSize.innerWidth > 992 ? true : basicOpen}
        backdrop
        constant={windowSize.innerWidth > 992 ? true : false}
        // absolute
        style={{ position: "fixed", width: "13.5rem" }}
        getOpenState={(e) => {
          setBasicOpen(e);
        }}
      >
        <div
          className="d-flex align-items-center cursor my-4"
          style={{ width: "90%", margin: "auto" }}
        >
          <Logo />
          <h6 className="ms-3 orange fw-bold mb-0">BahCode</h6>
        </div>
        <div className="d-flex flex-column justify-content-center w-100">
          <div>
            <MDBSideNavMenu style={{ width: "98%", margin: "auto" }}>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  className={
                    styles[
                      `${type === 1 ? "side-nav-link-active" : "side-nav-link"}`
                    ] + " black"
                  }
                  icon="angle-right"
                  onClick={() => navigate("/dashboard")}
                >
                  <MDBIcon fas icon="shopping-cart" className="fa-fw me-3" />
                  Dashboard
                </MDBSideNavLink>
              </MDBSideNavItem>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  icon="angle-right"
                  className={
                    styles[
                      `${
                        type === 2 || type === 21 || type === 22
                          ? "side-nav-link-active"
                          : "side-nav-link"
                      }`
                    ] + " black"
                  }
                  shouldBeExpanded={basicCollapse1}
                  onClick={() => setBasicCollapse1(!basicCollapse1)}
                >
                  <MDBIcon fas icon="cube" className="fa-fw me-3" />
                  Products
                </MDBSideNavLink>
                <MDBSideNavCollapse show={basicCollapse1}>
                  <MDBSideNavLink onClick={() => navigate("/products")}>
                    <MDBRadio
                      label="Product List"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 21 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink onClick={() => navigate("/addproduct")}>
                    <MDBRadio
                      label="Add Product"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 22 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  icon="angle-right"
                  className={
                    styles[
                      `${
                        type === 3 || type === 31 || type === 32
                          ? "side-nav-link-active"
                          : "side-nav-link"
                      }`
                    ] + " black"
                  }
                  shouldBeExpanded={basicCollapse2}
                  onClick={() => setBasicCollapse2(!basicCollapse2)}
                >
                  <MDBIcon fas icon="user-alt" className="fa-fw me-3" />
                  User
                </MDBSideNavLink>
                <MDBSideNavCollapse show={basicCollapse2}>
                  <MDBSideNavLink onClick={() => navigate("/users")}>
                    <MDBRadio
                      label="Users List"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 3 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink onClick={() => navigate("/adduser")}>
                    <MDBRadio
                      label="Add User"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 31 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  icon="angle-right"
                  className={
                    styles[
                      `${
                        type === 4 || type === 41 || type === 42 || type === 43
                          ? "side-nav-link-active"
                          : "side-nav-link"
                      }`
                    ] + " black"
                  }
                  shouldBeExpanded={basicCollapse3}
                  onClick={() => setBasicCollapse3(!basicCollapse3)}
                >
                  <MDBIcon fas icon="user-alt" className="fa-fw me-3" />
                  Requests
                </MDBSideNavLink>
                <MDBSideNavCollapse show={basicCollapse3}>
                  <MDBSideNavLink onClick={() => navigate("/assignedrequests")}>
                    <MDBRadio
                      label="Assigned"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 41 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink
                    onClick={() => navigate("/unassignedrequests")}
                  >
                    <MDBRadio
                      label="Unassigned"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 42 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink onClick={() => navigate("/closedrequests")}>
                    <MDBRadio
                      label="Closed"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 43 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  icon="angle-right"
                  className={
                    styles[
                      `${
                        type === 5 || type === 51 || type === 52
                          ? "side-nav-link-active"
                          : "side-nav-link"
                      }`
                    ] + " black"
                  }
                  shouldBeExpanded={basicCollapse4}
                  onClick={() => setBasicCollapse4(!basicCollapse4)}
                >
                  <MDBIcon fas icon="tag" className="fa-fw me-3" />
                  Coupon
                </MDBSideNavLink>
                <MDBSideNavCollapse show={basicCollapse4}>
                  <MDBSideNavLink onClick={() => navigate("/coupons")}>
                    <MDBRadio
                      label="Coupons List"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 51 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink onClick={() => navigate("/addcoupon")}>
                    <MDBRadio
                      label="Add Coupon"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 52 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  icon="angle-right"
                  className={
                    styles[
                      `${
                        type === 6 || type === 61 || type === 62
                          ? "side-nav-link-active"
                          : "side-nav-link"
                      }`
                    ] + " black"
                  }
                  shouldBeExpanded={basicCollapse5}
                  onClick={() => setBasicCollapse5(!basicCollapse5)}
                >
                  <MDBIcon fas icon="database" className="fa-fw me-3" />
                  Inventory Mangement
                </MDBSideNavLink>
                <MDBSideNavCollapse show={basicCollapse5}>
                  <MDBSideNavLink onClick={() => navigate("/inventory")}>
                    <MDBRadio
                      label="Inventory List"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 61 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink onClick={() => navigate("/addstock")}>
                    <MDBRadio
                      label="Add Stock"
                      wrapperClass="mx-2 mt-3"
                      checked={type === 62 ? true : false}
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
            </MDBSideNavMenu>
          </div>
          <div style={{ marginTop: "20rem" }}>
            <MDBSideNavMenu style={{ width: "98%", margin: "auto" }}>
              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  icon="angle-right"
                  className={
                    styles[
                      `${
                        type === 71 ? "side-nav-link-active" : "side-nav-link"
                      }`
                    ] + " black"
                  }
                  shouldBeExpanded={basicCollapse6}
                  onClick={() => setBasicCollapse6(!basicCollapse6)}
                >
                  <MDBIcon fas icon="cog" className="fa-fw me-3" />
                  Settings
                </MDBSideNavLink>
                <MDBSideNavCollapse show={basicCollapse6}>
                  <MDBSideNavLink>
                    <MDBRadio
                      label="Edit Profile"
                      wrapperClass="mx-2 mt-3"
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink>
                    <MDBRadio
                      label="Edit User’s"
                      wrapperClass="mx-2 mt-3"
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink>
                    <MDBRadio
                      label="Edit Account Information"
                      wrapperClass="mx-2 mt-3"
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                  <MDBSideNavLink>
                    <MDBRadio
                      label="Add Account"
                      wrapperClass="mx-2 mt-3"
                      size={"sm"}
                    />
                  </MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>

              <MDBSideNavItem className="my-1">
                <MDBSideNavLink
                  className={
                    styles[
                      `${type === 81 ? "side-nav-link-active" : "side-nav-link"}`
                    ] + " black"
                  }
                  icon="angle-right"
                  // onClick={() => navigate("/dashboard")}
                >
                  <MDBIcon fas icon="exclamation-circle" className="fa-fw me-3" />
                  Help & Support
                </MDBSideNavLink>
              </MDBSideNavItem>
            </MDBSideNavMenu>
          </div>
        </div>
      </MDBSideNav>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn
          onClick={() => {
            windowSize.innerWidth > 992
              ? setBasicOpen(false)
              : setBasicOpen(true);
          }}
        >
          <MDBIcon fas icon="bars" />
        </MDBBtn>
      </div>
    </div>
  );
}
