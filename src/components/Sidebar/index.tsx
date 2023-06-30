import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./Sidebar.module.scss";
import Epodpay from "../../assets/images/epodpay.svg";
import Neil from "../../assets/images/neil.svg";
import Logo from "../../assets/images/logo.svg";
import { navLinks } from "./constants";
import { platformLinks } from "./constants";

type Props = {
  onClose?: () => void;
  className: string;
};

export default function Sidebar({ className, onClose, ...props }: Props) {
  const router = useRouter();

  return (
    <aside {...props} className={classNames(styles.sidebar, className)}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <div className={styles.section}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.items}>
                <a
                  href={item.path}
                  className={classNames(
                    styles.item,
                    (router.pathname === item.path ||
                      router.query.section === item.name.split(" ")[0]) &&
                      styles.active
                  )}
                >
                  <div className={styles.itemBody}>
                    <Icon /> {item.name}
                  </div>
                  <span
                    className={classNames(
                      styles.point,
                      (router.pathname === item.path ||
                        router.query.section === item.name.split(" ")[0]) &&
                        styles.active
                    )}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.section}>
          {platformLinks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.items}>
                <a
                  href={item.path}
                  className={classNames(
                    styles.item,
                    (router.pathname === item.path ||
                      router.query.section === item.name.split(" ")[0]) &&
                      styles.active
                  )}
                >
                  <div className={styles.itemBody}>
                    <Icon /> {item.name}
                  </div>
                  <span
                    className={classNames(
                      styles.point,
                      (router.pathname === item.path ||
                        router.query.section === item.name.split(" ")[0]) &&
                        styles.active
                    )}
                  />
                </a>
              </div>
            );
          })}
          <div className={styles.items}>
            <a className={classNames(styles.item, styles.userItem)}>
              <div className={styles.itemBody}>
                <Neil /> Neil Larkins
              </div>
              <span className={classNames(styles.point)} />
            </a>
          </div>
          <div className={styles.items}>
            <a className={classNames(styles.item, styles.userItem)}>
              <div className={styles.itemBody}>
                <Epodpay /> Epodpay Inc.
              </div>
              <span className={classNames(styles.point)} />
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}
