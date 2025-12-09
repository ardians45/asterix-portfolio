import { clientReviews } from '../constants/index.js';
import MagicBento from '../components/MagicBento.jsx';

const Clients = () => {
  const bentoItems = clientReviews.map((item) => ({
    title: item.name,
    description: item.review,
    label: item.position,
    stars: 5,
    color: '#1C1C21', // Dark background matching existing theme
  }));

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="w-full mt-12">
        <MagicBento 
          items={bentoItems}
          textAutoHide={false} // Disable auto hide for better readability of reviews
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
};

export default Clients;
