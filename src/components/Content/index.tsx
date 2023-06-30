import React from "react";
import BreadCrumb from "../BreadCrumb";
import Kanban from "../Kanban";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <BreadCrumb />
      <Kanban />
    </div>
  );
};

export default Content;
