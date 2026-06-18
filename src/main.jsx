import React from 'react';
import { createRoot } from 'react-dom/client';
import { Calendar, MapPin, Music, Heart, GraduationCap, Users, ExternalLink, Menu, X, Mail, Clock, Ticket } from 'lucide-react';
import './styles.css';

const LUDUS_TICKET_URL = 'https://your-ludus-ticket-link.com';
const CONTACT_EMAIL = 'hello@visaliachamberstrings.org';

const event = {
  title: 'Rooted in Tradition',
  subtitle: 'Featuring works by Mozart, Price & more',
  date: 'July 10, 2026',
  time: '7:00 PM',
  rehearsal: 'Open Dress Rehearsal at 3:00 PM',
  venue: 'First Presbyterian Church',
  address: '215 N Locust St, Visalia, CA 93291',
  studentOffer: 'Free for students with a valid school ID'
};

const musicians = [
  { name: 'Jayden Perez', role: 'Founder / Viola', bio: 'A Visalia native, violist, educator, and orchestra director who founded Visalia Chamber Strings to expand access to exceptional chamber music in the Central Valley.' },
  { name: 'Keegan Bamford', role: 'Cello', bio: 'A Central Valley cellist pursuing doctoral studies at Indiana University’s Jacobs School of Music and performing across California and the Midwest.' },
  { name: 'Maxton Vieira', role: 'Viola', bio: 'A Visalia-based composer, violist, pianist, chamber musician, and Co-Director of Orchestras in Visalia Unified School District.' },
  { name: 'Ricky Avila', role: 'Violin', bio: 'A Visalia-based violinist and orchestra director committed to giving back to the community through music education and performance.' },
  { name: 'Luis Cerrillos', role: 'Cello', bio: 'A Central Valley cellist, educator, and active performer in the local classical music community.' },
  { name: 'Elijah Avila', role: 'Violin', bio: 'A Visalia musician and educator who performs with regional ensembles and supports young orchestra students.' }
];

const sponsors = [
  'Midland National',
  'Raising Cane’s',
  'West Coast Educators',
  'CanRey Farms',
  'Frank Serpa',
  'Luis Nursery',
  'PlanMember',
  'Valley Pro Realty'
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const navItems = ['Concerts', 'Mission', 'Musicians', 'Education', 'Sponsors', 'Support'];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Visalia Chamber Strings home">
          <img src="/vcs-green-logo.jpeg" alt="Visalia Chamber Strings logo" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
          <a className="ticket-link" href={LUDUS_TICKET_URL} target="_blank" rel="noreferrer">Tickets</a>
        </nav>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
          <a onClick={() => setOpen(false)} href={LUDUS_TICKET_URL} target="_blank" rel="noreferrer">Tickets</a>
        </nav>
      )}
    </>
  );
}

function App() {
  return (
    <main>
      <Header />

      <section id="top" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Visalia Chamber Strings presents</p>
          <h1>{event.title}</h1>
          <p className="hero-copy">{event.subtitle}</p>
          <div className="event-details compact">
            <span><Calendar size={18} /> {event.date}</span>
            <span><Clock size={18} /> {event.time}</span>
            <span><MapPin size={18} /> {event.venue}</span>
          </div>
          <div className="button-row">
            <a className="button primary" href={LUDUS_TICKET_URL} target="_blank" rel="noreferrer">Purchase Tickets <ExternalLink size={16} /></a>
            <a className="button secondary" href="#concerts">Concert Details</a>
          </div>
        </div>
        <div className="hero-card flyer-card">
          <img src="/rooted-in-tradition.jpeg" alt="Rooted in Tradition concert flyer" />
        </div>
      </section>

      <section id="concerts" className="section featured-concert">
        <div>
          <p className="eyebrow">Upcoming Performance</p>
          <h2>{event.title}</h2>
          <p>{event.subtitle}. Join Visalia Chamber Strings for an evening honoring classical roots, community connection, and rich chamber music traditions.</p>
          <div className="meta-grid">
            <span><Calendar size={18} /> {event.date}</span>
            <span><Clock size={18} /> {event.time}</span>
            <span><MapPin size={18} /> {event.venue}</span>
            <span><Ticket size={18} /> {event.studentOffer}</span>
            <span><Music size={18} /> {event.rehearsal}</span>
          </div>
          <p className="address">{event.address}</p>
        </div>
        <a className="button primary" href={LUDUS_TICKET_URL} target="_blank" rel="noreferrer">Buy Tickets</a>
      </section>

      <section id="mission" className="section split">
        <div>
          <p className="eyebrow">Founded in 2025</p>
          <h2>Built to enrich Visalia’s musical landscape.</h2>
        </div>
        <div>
          <p>Founded by violist and educator Jayden Perez, Visalia Chamber Strings was created to provide students and the local community with valuable musical experiences — from collaboration with high-level musicians to professional chamber music performances close to home.</p>
          <p>As the organization grows, its vision is to invite accomplished musicians to Visalia and show young artists what is possible in the world of music.</p>
        </div>
      </section>

      <section className="section pillars" aria-label="Program pillars">
        <article><Music /><h3>Professional Performances</h3><p>Thoughtfully curated chamber music concerts featuring accomplished local and guest musicians.</p></article>
        <article><GraduationCap /><h3>Student Inspiration</h3><p>Opportunities for students to learn from, collaborate with, and be inspired by high-level performers.</p></article>
        <article><Heart /><h3>Community Access</h3><p>Expanding access to meaningful cultural experiences in Visalia and the broader Central Valley.</p></article>
      </section>

      <section id="musicians" className="section">
        <div className="section-heading">
          <p className="eyebrow">Meet the Musicians</p>
          <h2>Artists, educators, and collaborators.</h2>
        </div>
        <div className="musician-grid">
          {musicians.map((musician) => (
            <article className="musician-card" key={musician.name}>
              <div className="portrait-placeholder"><Users /></div>
              <p>{musician.role}</p>
              <h3>{musician.name}</h3>
              <span>{musician.bio}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section education">
        <p className="eyebrow">Education & Community</p>
        <h2>Creating pathways for the next generation of musicians.</h2>
        <p>Through performances, student collaborations, school partnerships, and future masterclass opportunities, Visalia Chamber Strings connects young musicians with professional-level artistry.</p>
      </section>

      <section id="sponsors" className="section sponsors">
        <div>
          <p className="eyebrow">Our Sponsors</p>
          <h2>Community support makes this possible.</h2>
          <p>Visalia Chamber Strings is made possible through the generosity of local businesses, families, educators, and arts advocates.</p>
        </div>
        <div className="sponsor-grid">
          {sponsors.map((sponsor) => <span key={sponsor}>{sponsor}</span>)}
        </div>
      </section>

      <section id="support" className="section support">
        <p className="eyebrow">Support the Music</p>
        <h2>Help bring world-class chamber music to Visalia.</h2>
        <p>Your support helps fund guest artists, student opportunities, concert production, and future community programs.</p>
        <div className="button-row center">
          <a className="button primary" href={`mailto:${CONTACT_EMAIL}?subject=I%20would%20like%20to%20support%20Visalia%20Chamber%20Strings`}><Mail size={16} /> Become a Sponsor</a>
          <a className="button secondary" href={LUDUS_TICKET_URL} target="_blank" rel="noreferrer">Attend a Concert</a>
        </div>
      </section>

      <footer>
        <img src="/vcs-green-logo.jpeg" alt="Visalia Chamber Strings logo" />
        <p>Visalia Chamber Strings · Visalia, California</p>
        <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
