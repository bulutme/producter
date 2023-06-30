import Layout from "@/src/components/Layout";
import styles from "./NoContent.module.scss";

const NoContent = () => {
  return (
    <Layout>
      <div className={styles.noContent}>No Content</div>
    </Layout>
  );
};

export default NoContent;
