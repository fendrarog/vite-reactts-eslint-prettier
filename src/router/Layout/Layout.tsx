import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as Lay } from 'antd';
import style from './Layout.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const { Header: Head, Content, Footer: Foot } = Lay;

export const Layout: React.FC = () => {
  return (
    <Lay className={style.layout}>
      <Head className={style.header}>
        <Header />
      </Head>
      <Content className={style.content}>
        <Outlet />
      </Content>
      <Foot className={style.footer}>
        <Footer />
      </Foot>
    </Lay>
  );
};
