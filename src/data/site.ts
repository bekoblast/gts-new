// Single source of truth — content from the old gts-hitech.com (see _input/site-content.md)
// + complementary data from _input/profile.pdf.

export const company = {
  name: 'GTS Hi-Tech',
  former: 'formerly Gezira Telecom Solutions',
  tagline: "We'll ensure you always get the best result",
  about:
    'GTS Hi-Tech supplies and integrates reliable, scalable and secure ICT solutions — simplifying complexity and turning infrastructure challenges into business advantage. Networking is where we started; the full stack is where we deliver.',
  mission:
    'Ensure an excellent experience for our customers by providing innovative, reliable and secure ICT solutions that enable them to run their business efficiently and effectively.',
  vision:
    'To be the leading provider of best-in-class ICT products and services that ensure business continuity and growth.',
  email: 'info@gts-hitech.com',
  emailSales: 'sales@gts-hitech.com',
  phones: ['+971 52 362 0668', '+971 54 343 9292', '+211 911 752 825'],
  phonePrimary: '971523620668',
  whatsappMsg: 'Hi GTS — I’d like to discuss an ICT project.'
};

export const offices = [
  { city: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', role: 'Headquarters', address: 'Al Nasriya Building, Office 203 A, Al Qusais Industrial First' },
  { city: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', role: 'Regional office', address: 'RHOA8710, 8710 Prince Mansour Ibn Abdulaziz, Al Olaya Dist., 12611' }
];

export const values = [
  { name: 'Customer-centricity', desc: 'We put our customers first and strive to exceed their expectations.' },
  { name: 'Innovation', desc: 'We continuously innovate to find new and better ways to serve our customers.' },
  { name: 'Integrity', desc: 'We operate with honesty and fairness in all of our dealings.' }
];

export const whyUs = [
  { title: 'Business continuity', desc: 'Reliable ICT designed for uptime — not just go-live day.' },
  { title: 'Simplified complexity', desc: 'Smart technologies that make hard problems tractable.' },
  { title: 'Advanced security', desc: 'Network, endpoint and data protection under one strategy.' },
  { title: 'Efficient operations', desc: 'Cloud and automation that scale with the business.' },
  { title: 'End-to-end services', desc: 'From networking to power — the full stack, one partner.' },
  { title: 'Customer-centric growth', desc: 'Solutions that put your business outcomes first.' }
];

export const stats = [
  { value: 14, suffix: '+', label: 'Years engineering' },
  { value: 7, suffix: '', label: 'Solution pillars' },
  { value: 3, suffix: '', label: 'Regional offices' },
  { value: 100, suffix: '%', label: 'On-call ownership' }
];

// ─── The 7 services. Each is its own page. ───
export type Service = {
  slug: string;
  name: string;
  short: string;          // one-liner for the index
  hero: string;           // hero tagline (from old site)
  accent: string;         // per-service hue
  accentSoft: string;     // tinted bg
  glyph: string;          // ServiceGlyph key
  photo: string;          // primary (homepage hover preview)
  images: [string, string]; // two verified-accurate images for the service page
  num: string;
  overview: string;
  capabilities: { title: string; desc: string }[];
  spec?: { label: string; value: string }[];  // optional technical specs strip
  brands: string[];       // brand slugs relevant to this service
};

export const services: Service[] = [
  {
    slug: 'networking',
    name: 'Networking & Optics',
    short: 'The backbone everything else runs on.',
    hero: 'The foundation of the modern digital world — connect devices, share data, stay in sync.',
    accent: '#380997', accentSoft: '#f4f1ff', glyph: 'network', photo: '/img/stock/fiber-optics.jpg',
    images: ['/img/services/networking-a.jpg', '/img/services/networking-b.jpg'], num: '01',
    overview: 'Networking is where GTS started and where we are sharpest. We design, deploy and operate the wired and optical infrastructure that every other system depends on — built for speed, resilience and graceful failure.',
    capabilities: [
      { title: 'Local Area Networks', desc: 'Switched Ethernet for offices and campuses — high speed, low latency, clean cabling.' },
      { title: 'Wide Area Networks', desc: 'Fiber-backed links spanning cities and countries for long-range connectivity.' },
      { title: 'Virtual Private Networks', desc: 'Encrypted tunnels for secure remote access to corporate networks.' },
      { title: 'Optical Transport', desc: 'Light-based data over long distances — high bandwidth, low signal loss, EMI immunity.' }
    ],
    spec: [
      { label: 'Bandwidth', value: 'High' }, { label: 'Latency', value: 'Low' },
      { label: 'EMI', value: 'Immune' }, { label: 'Scale', value: 'Modular' }
    ],
    brands: ['ip-com', 'tenda', 'hyconext', 'itooner']
  },
  {
    slug: 'wireless',
    name: 'Wireless Technology',
    short: 'Stay connected anytime, anywhere.',
    hero: 'Reliable wireless for your facilities, your campus and your operators — fixed, mobile and everything between.',
    accent: '#5320b8', accentSoft: '#f1ecfd', glyph: 'wireless', photo: '/img/stock/cellular-tower.jpg',
    images: ['/img/stock/cellular-tower.jpg', '/img/stock/city-network.jpg'], num: '02',
    overview: 'High-speed access, full-coverage Wi-Fi and licensed point-to-point links. From a single hotspot to a city-wide WISP backhaul, we plan the RF, deploy the gear and keep the signal up.',
    capabilities: [
      { title: 'OFDM PtP & PtMP', desc: 'Point-to-point and point-to-multipoint links for backhaul and coverage.' },
      { title: 'Wi-Fi Access', desc: 'Indoor & outdoor access points, hotspots and controller-managed fleets.' },
      { title: 'Licensed Microwave', desc: 'Long-distance, high-capacity, dedicated-bandwidth links.' },
      { title: 'Sector Solutions', desc: 'CCTV backhaul, smart-city Wi-Fi, oil & gas, disaster recovery, WISPs.' }
    ],
    spec: [
      { label: 'Bands', value: '2.4 / 5 / 6 GHz' },
      { label: 'Microwave', value: '6–80 GHz' },
      { label: 'Topology', value: 'PtP · PtMP' },
      { label: 'Coverage', value: 'City-wide' }
    ],
    brands: ['altalabs', 'summit', 'tarana', 'talkpod']
  },
  {
    slug: 'cctv',
    name: 'CCTV & Access Control',
    short: 'Watch over your world.',
    hero: 'Cutting-edge surveillance and access control — secure your property and the people in it.',
    accent: '#e44a4a', accentSoft: '#fff1f1', glyph: 'cctv', photo: '/img/stock/security-camera.jpg',
    images: ['/img/services/cctv-a.jpg', '/img/solutions/cctv-fingerprint.jpg'], num: '03',
    overview: 'HD cameras with intelligent detection, secure storage and credential-based access — integrated into one unified security picture you can watch from anywhere.',
    capabilities: [
      { title: 'Remote Monitoring', desc: 'Watch any site from a mobile app or secure web portal.' },
      { title: 'Intelligent Detection', desc: 'Real-time alerts on motion, object and facial recognition.' },
      { title: 'Access Control', desc: 'Credential-based entry, multi-factor (card · biometric · PIN), visitor management.' },
      { title: 'Unified Integration', desc: 'Cameras and access fold into your existing security systems.' }
    ],
    brands: ['ezviz']
  },
  {
    slug: 'iot',
    name: 'Internet of Things',
    short: 'Connect, automate, optimize.',
    hero: 'Connect your world and unlock endless possibilities — from sensor to dashboard.',
    accent: '#6a3dd1', accentSoft: '#f3effe', glyph: 'iot', photo: '/img/stock/smart-factory.jpg',
    images: ['/img/iot.png', '/img/services/iot-a.jpg'], num: '04',
    overview: 'We connect, automate, monitor and secure the physical world — turning sensors into decisions. Proven in fuel-level and energy monitoring across residential and industrial sites.',
    capabilities: [
      { title: 'Smart Level Monitoring', desc: 'Ultrasonic, non-contact, 24/7. Fuel, oil, water and waste — up to 15 m range.' },
      { title: 'Smart Energy', desc: 'Real-time voltage, current, power factor and consumption analytics.' },
      { title: 'Connect & Automate', desc: 'Unify devices into one network; automate on live data.' },
      { title: 'Predictive Maintenance', desc: 'Catch failures before they happen; extend asset life.' }
    ],
    spec: [
      { label: 'Range', value: 'Up to 15 m' },
      { label: 'Temp', value: '−20 to 70 °C' },
      { label: 'Contact', value: 'None' },
      { label: 'Uptime', value: '24/7' }
    ],
    brands: ['orvibo']
  },
  {
    slug: 'cloud',
    name: 'Cloud Solutions',
    short: 'Your partner in cloud transformation.',
    hero: 'Drive agility, innovation and growth — the full potential of cloud, without the burden.',
    accent: '#2b057a', accentSoft: '#efe9fb', glyph: 'cloud', photo: '/img/stock/data-center.jpg',
    images: ['/img/stock/data-center.jpg', '/img/solutions/cloud-storage.jpg'], num: '05',
    overview: 'IaaS, PaaS and SaaS that flex with demand. We architect, migrate and operate cloud topologies that cost what they should and scale when they must.',
    capabilities: [
      { title: 'Infrastructure (IaaS)', desc: 'On-demand compute, storage and networking on secure virtualization.' },
      { title: 'Platform (PaaS)', desc: 'Pre-built environments and tools that shorten deployment cycles.' },
      { title: 'Software (SaaS)', desc: 'Subscription CRM, ERP and apps — no install, no upgrade burden.' },
      { title: 'Resilience', desc: 'Disaster recovery, business continuity and global remote access.' }
    ],
    brands: ['aws', 'azure', 'gcp']
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    short: 'Shield your business.',
    hero: 'Comprehensive protection against evolving cyber threats — one strategy, every layer.',
    accent: '#a32626', accentSoft: '#fbeded', glyph: 'shield', photo: '/img/stock/control-room.jpg',
    images: ['/img/services/cyber-b.jpg', '/img/stock/control-room.jpg'], num: '06',
    overview: 'You don’t have one security problem — you have many small ones that each look manageable until they aren’t. We make them a single strategy across endpoint, network, application and data.',
    capabilities: [
      { title: 'Endpoint Protection', desc: 'Guard laptops, desktops and mobile against malware and intrusion.' },
      { title: 'Network Security', desc: 'Stop unauthorized access, attacks and breaches at the perimeter and inside.' },
      { title: 'Application & Data', desc: 'Defend apps from exploits; protect data from disclosure and loss.' },
      { title: 'Identity & Access', desc: 'IAM — identities, permissions and authentication, controlled.' }
    ],
    spec: [
      { label: 'GDPR', value: '✓' }, { label: 'HIPAA', value: '✓' },
      { label: 'PCI DSS', value: '✓' }, { label: 'IAM', value: '✓' }
    ],
    brands: ['sophos']
  },
  {
    slug: 'power',
    name: 'Power Solutions',
    short: 'Keep the lights — and the network — on.',
    hero: 'Backup power and solar that keep your business running through any outage.',
    accent: '#fb5d5f', accentSoft: '#fff1f1', glyph: 'power', photo: '/img/stock/solar-panels.jpg',
    images: ['/img/services/power-b.jpg', '/img/services/power-a.jpg'], num: '07',
    overview: 'In our region, power is a network dependency — so we treat it like one. Backup generators, UPS and solar that cut operating cost and protect data when the grid blinks.',
    capabilities: [
      { title: 'Backup & Continuity', desc: 'Generators and UPS that ride through grid outages without a flicker.' },
      { title: 'Solar Power', desc: 'Renewable energy for enterprise, home and agriculture — lower opex.' },
      { title: 'Energy Optimization', desc: 'Cut consumption and cost with efficient, managed power.' },
      { title: 'Design & Maintain', desc: 'Power-systems design, implementation and ongoing maintenance.' }
    ],
    brands: []
  }
];

// ─── Engagement services (the "how we work") ───
export const engagement = [
  { title: 'Pre-Sales', desc: 'Needs assessment, solution design, POC and risk assessment — before the PO.' },
  { title: 'Professional Services', desc: 'Installation, migration, maintenance and security audits.' },
  { title: 'Post-Sales', desc: 'Technical support, updates, monitoring and on-site response.' },
  { title: 'Consultancy', desc: 'Technology strategy, solution design and implementation planning.' },
  { title: 'Training', desc: 'Classroom, online and one-on-one — so your team owns the system.' }
];

// ─── Brands / vendors (logos in /img/brands/) ───
export const brands = [
  { slug: 'altalabs', name: 'Alta Labs', logo: '/img/brands/altalabs.jpg', note: 'US — access points & switches' },
  { slug: 'ezviz', name: 'EZVIZ', logo: '/img/brands/ezviz.jpg', note: 'Smart-home & cameras' },
  { slug: 'ip-com', name: 'IP-COM', logo: '/img/brands/ip-com.jpg', note: 'Switches & access points' },
  { slug: 'tenda', name: 'Tenda', logo: '/img/brands/tenda.jpg', note: 'Routers & modems' },
  { slug: 'summit', name: 'Summit Development', logo: '/img/brands/summit.png', note: 'Czech — microwave PtP' },
  { slug: 'itooner', name: 'iTooner', logo: '/img/brands/itooner.jpeg', note: 'Wide range of solutions' },
  { slug: 'orvibo', name: 'Orvibo', logo: '/img/brands/orvibo.jpg', note: 'Home automation' },
  { slug: 'tarana', name: 'Tarana Wireless', logo: '/img/brands/tarana.jpg', note: 'Next-gen fixed wireless' },
  { slug: 'talkpod', name: 'TalkPod', logo: '/img/brands/talkpod.png', note: 'DMR / LMR / PoC radio' },
  { slug: 'sophos', name: 'Sophos', logo: '/img/brands/sopho.jpg', note: 'Cybersecurity' },
  // hyperscalers — cloud
  { slug: 'aws', name: 'Amazon Web Services', logo: '/img/brands/aws.svg', note: 'Cloud infrastructure' },
  { slug: 'azure', name: 'Microsoft Azure', logo: '/img/brands/azure.svg', note: 'Cloud platform' },
  { slug: 'gcp', name: 'Google Cloud', logo: '/img/brands/gcp.svg', note: 'Cloud platform' },
  // brand entries with logos but used only in the marquee
  { slug: 'hyconext', name: 'Hyconext', logo: '/img/brands/partner1.jpeg', note: 'WISP switches' }
];

export const sectors = ['Banks', 'Public sector', 'Oil & Gas', 'Private business', 'Retail', 'Smart homes'];
