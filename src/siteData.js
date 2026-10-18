import { Video } from "lucide-react";

/**
 * START HERE: Replace the sample business information in this file.
 * Keep the same property names when changing the content.
 */
export const business = {
  name: 'Cost Cutters',
  trade: 'Construction',
  tagline: 'Quality built to last.',
  description: 'Making your home improvement dreams reality.',
  phone: '(717) 377-6056',
  phoneHref: '+17173776056', // digits only, with country code
  email: 'costcuttersconstruction717@gmail.com',
  serviceArea: 'Serving Franklin County, PA and the surrounding area',
  yearsExperience: '30+',
  formspreeId: 'https://formspree.io/f/xbgdbavp',
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Our work', href: '#projects' },
    { label: 'About', href: '#about' },
  ],
  services: [
    { number: '01', title: 'Decks', description: 'Durable outdoor spaces built for good weather, family, and years of use.' },
    { number: '02', title: 'Interior Remodels', description: 'Transform the inside of your house into what youve always dreamt of,' },
    { number: '03', title: 'Bathrooms', description: 'Beautiful showers and complete bathroom remodels.' },
  ],

  projects: [
  {
    title: 'Elevated Outdoor Living',
    category: 'Custom Deck · Waynesboro, pa',
    image: 'projects/deck-photo.jpeg',
    alt: 'Big deck space with composite deck boards and black cable railing',
  },
  {
    title: 'Room to gather',
    category: 'Deck · Oak Hill',
    image: 'projects/basement-bar.png',
    alt: 'Add a photo of a completed deck project',
  },
  {
    title: 'Details make the room',
    category: 'Finish carpentry · Anytown',
    video: 'projects/mike-barn.mp4',
    alt: 'Add a photo of a finish carpentry project',
  },
],
};
