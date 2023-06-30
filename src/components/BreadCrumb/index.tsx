import React from "react";
import styles from "./BreadCrumb.module.scss";
import Calendar from "../../assets/images/calendar.svg";
import People from "../../assets/images/people.svg";
import PeopleBlue from "../../assets/images/peopleBlue.svg";
import SandWatch from "../../assets/images/sandWatch.svg";
import Arrow from "../../assets/images/arrow.svg";
import Notes from "../../assets/images/notes.svg";
import Dropdown from "../../assets/images/dropdown.svg";
import Button from "../Button";
import classNames from "classnames";

const BreadCrumb = () => {
  return (
    <div className={styles.breadCrumb}>
      <div className={styles.section}>
        <Button className={styles.arrowButton}>
          <Arrow className={styles.arrow} />
        </Button>
        <Button className={styles.menuItem}>
          <SandWatch className={styles.menuIcon} />
          <p className={styles.menuText}>SPR-06</p>
        </Button>
        <Button className={styles.menuItem}>
          <PeopleBlue className={styles.menuIcon} />
          <p className={styles.menuText}>TEAM-10</p>
        </Button>
        <div className={styles.menuItem}>New Sprint Name</div>
        <div className={styles.menuButtons}>
          <Button className={styles.menuButton}>
            <Calendar />
          </Button>
          <Button className={styles.menuButton}>
            <People />
          </Button>
        </div>
        <Button className={styles.completeButton}>Complete Sprint</Button>
      </div>
      <div className={styles.section}>
        <div className={classNames(styles.menuItem, styles.rightButtons)}>
          <Button className={styles.notesButton}>
            <Notes />
          </Button>
          <Button className={styles.dropdownButton}>
            <Dropdown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
