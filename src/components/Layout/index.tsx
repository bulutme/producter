import classNames from "classnames";
import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({
  children,
  className,
  ...props
}: React.PropsWithoutRef<JSX.IntrinsicElements["div"]>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div {...props} className={classNames(styles.layout, className)}>
      <div
        className={classNames(
          styles.sidebarWrapper,
          isSidebarOpen && styles.active
        )}
      >
        <Sidebar className={styles.sidebar} />
      </div>
      <div className={styles.rightSide}>
        <Header openSidebar={openSidebar} className={styles.header} />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
