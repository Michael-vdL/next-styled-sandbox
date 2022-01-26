import Head from 'next/head';
import Image from 'next/image';
import PeopleGrid from '../components/PeopleGrid/PeopleGrid';
import StatementSection from '../components/StatementSection/StatementSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '50px',
        width: '100%',
        // backgroundColor: 'rgba(248,225,204,1)',
        justifyContent: 'center',
        alignItems: 'flex-end',
        overflow: 'hidden',
        height: '100vh',
      }}>
      <StatementSection />
      <PeopleGrid />
    </div>
  );
}
