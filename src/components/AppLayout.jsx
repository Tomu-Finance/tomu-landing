import '../styles/components/AppLayout.scss';
import Header from './Header';
import Hero from './Hero';
import { split } from '../animations/text';
import scroll from '../animations/scroll';
import { useEffect } from 'react';

const AppLayout = () => {
  scroll();

  useEffect(() => {
    split();
  });

  return (
    <>
      <div className="appLayout__cont">
        <Header />
        <Hero />
        <div className="appLayout__cont__leftBorder" />
        <div className="appLayout__cont__rightBorder" />
        <div className="appLayout__cont__centerBorder" />
      </div>
    </>
  );
};

export default AppLayout;
