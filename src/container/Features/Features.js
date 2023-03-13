import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles.module.css";
import payment from "../../assests/payment.png";
import devices from "../../assests/devices.png";
import reward from "../../assests/reward.png";
import inventory from "../../assests/inventory.png";
import performance from "../../assests/performance.png";
import order from "../../assests/order.png";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
export default function Features(params) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Navbar feature={true} />
      <div className={styles["container"]}>
        <div className="row align-items-center">
          <div className={styles["column-66"]}>
            <h4 className="orange fw-bold">Multiple users with </h4>
            <h4 className="orange fw-bold"> assigned roles</h4>
            <div className="col-md-8 col-12 mx-md-auto mx-lg-1">
              <p className="black fs-6 fw500 mb-0">
                With Bahcode, you can create multiple user accounts with
                different roles and permissions. This means you can easily
                assign tasks and responsibilities to your team members, and
                ensure that everyone has access to the tools they need to do
                their job effectively.{" "}
              </p>
            </div>
          </div>
          <div className={styles["column-33"]}>
            <img src={devices} alt="" className="w-75" />
          </div>
        </div>
      </div>

      <div className={styles["container"]}>
        <div className="row align-items-center">
          <div className={styles["column-66"]}>
            <img src={payment} alt="" style={{ width: "70%" }} />
          </div>
          <div className={styles["column-33"]}>
            <h4 className="orange fw-bold">Reporting</h4>
            <br />
            <p className="black fs-6 fw500 mb-0">
              With Bahcode's reporting features, you can access valuable
              insights into your business performance. This includes data on
              sales, inventory, and customer behavior, as well as customizable
              reports that allow you to track progress towards your goals.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className="row align-items-center">
          <div className={styles["column-66"]}>
            <h4 className="orange fw-bold">Inventory management</h4>
            <div className="col-md-8 col-12 mx-md-auto mx-lg-1">
              <p className="black fs-6 fw500 mb-0">
                Bahcode's inventory management system makes it easy to keep
                track of your products. You can view inventory levels in
                real-time, set up low stock alerts, and track inventory movement
                to ensure that you always have the right products in stock.
              </p>
            </div>
          </div>
          <div className={styles["column-33"]}>
            <img src={inventory} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className="row align-items-center">
          <div className={styles["column-66"]}>
            <img src={order} alt="" style={{ width: "70%" }} />
          </div>
          <div className={styles["column-33"]}>
            <h4 className="orange fw-bold">Order management</h4>
            <br />
            <p className="black fs-6 fw500 mb-0">
              With Bahcode's order management feature, you can easily accept and
              process orders, move them to checkout, and generate receipts for
              customers. Plus, you can access a history of closed orders to
              track customer behavior and streamline your operations. With
              Bahcode, managing orders has never been easier!
            </p>
          </div>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className="row align-items-center">
          <div className={styles["column-66"]}>
            <h4 className="orange fw-bold">Customer reward System</h4>
            <div className="col-md-8 col-12 mx-md-auto mx-lg-1">
              <p className="black fs-6 fw500 mb-0">
                With Bahcode's customer reward system, you can create and manage
                customer loyalty programs that reward your most valuable
                customers. This includes features like discount codes, referral
                programs, and rewards points, all of which help to encourage
                customer loyalty and repeat business.
              </p>
            </div>
          </div>
          <div className={styles["column-33"]}>
            <img src={reward} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className="row align-items-center">
          <div className={styles["column-66"]}>
            <img src={performance} alt="" style={{ width: "70%" }} />
          </div>
          <div className={styles["column-33"]}>
            <h4 className="orange fw-bold">Periodic performance Report</h4>
            <br />
            <p className="black fs-6 fw500 mb-0">
              Bahcode's periodic performance reports provide you with a snapshot
              of your business performance on a weekly or monthly basis. This
              includes data on sales, inventory, and customer behavior, as well
              as insights into trends and opportunities for improvement. These
              reports make it easy to stay on top of your business performance
              and make data-driven decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 pt-5">
        <h3 className="orange fw-bold text-center">
          Our approch is to give you the best
        </h3>
        <h3 className="orange fw-bold text-center">
          POS software that you never
        </h3>
        <h3 className="orange fw-bold text-center">experienced before.</h3>
      </div>
      <Footer />
    </>
  );
}
