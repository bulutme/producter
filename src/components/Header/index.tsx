import classNames from "classnames";
import Button from "../Button";
import styles from "./Header.module.scss";
import Controls from "../../assets/images/controls.svg";
import Filter from "../../assets/images/filter.svg";
import Search from "../../assets/images/search.svg";
import Plus from "../../assets/images/plus.svg";
import Menu from "../../assets/images/menu.svg";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import Form from "../Form";
import { addItem } from "@/src/store";
import { useRouter } from "next/router";

type Props = React.PropsWithoutRef<JSX.IntrinsicElements["header"]> & {
  className?: string;
  openSidebar?: () => void;
};

export default function Header({ className, openSidebar, ...props }: Props) {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onSubmit = (value) => {
    setIsModalOpen(false);
    const data = value;
    data.id = uuidv4();
    dispatch(addItem(data));
  };

  return (
    <header {...props} className={classNames(styles.header, className)}>
      <div className={classNames(styles.section, styles.searchSection)}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
          />
          <Search className={styles.searchIcon} />
        </div>
        <Button className={styles.headerButton}>
          <Controls />
        </Button>
        <Button className={styles.headerButton}>
          <Filter />
        </Button>
      </div>
      <div className={styles.section}>
        {pathname === "/" && (
          <Button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={classNames(styles.headerButton, styles.plusButton)}
          >
            <Plus />
          </Button>
        )}
      </div>
      <div className={classNames(styles.section, styles.menuSection)}>
        <Button className={styles.menu} onClick={openSidebar}>
          <Menu />
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title="Add new card"
      >
        {isModalOpen && <Form onSubmit={(value) => onSubmit(value)} />}
      </Modal>
    </header>
  );
}
