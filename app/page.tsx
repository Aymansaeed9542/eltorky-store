import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';
import NewArrivals from './components/NewArrivals';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Carousel />
      <NewArrivals />
      <FeaturedProducts />
      <Carousel2 />
      <Services />
    </div>
  );
}
