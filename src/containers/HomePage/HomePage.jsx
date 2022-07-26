import ChooseSide from '../../components/HomePage/ChooseSide/ChooseSide';
import styles from './HomePage.module.css';

function HomePage() {

  return (
    <>
      <h1 className='header__title'>Choose your side</h1>
      <ChooseSide />
    </>
  );
}

export default HomePage;