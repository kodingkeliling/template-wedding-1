import Hero from '@/components/Hero';
import Invitation from '@/components/Invitation';
import Events from '@/components/Events';
import LoveStory from '@/components/LoveStory';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Gifts from '@/components/Gifts';
import RSVPForm from '@/components/RSVPForm';
import Messages from '@/components/Messages';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Invitation />
      <Events />
      <LoveStory />
      <Gallery />
      <Location />
      <Gifts />
      <RSVPForm />
      <Messages />
      <Footer />
    </main>
  );
}
