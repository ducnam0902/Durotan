import Branch from '@durotan/components/Branch';
import FeaturedCollection from '@durotan/components/FeaturedCollection';
import Philosophy from '@durotan/components/Philosophy';
import Slide from '@durotan/components/Slide';

const HomePage: React.FC = () => {
  return (
    <>
      <Slide />
      <Philosophy />
      <Branch />
      <FeaturedCollection />
    </>
  );
};

export default HomePage;
