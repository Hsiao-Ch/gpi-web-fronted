import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from '@/styles/pages/award.module.scss';

export default function Award() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
      </div>
    </Layout>
  );
}
