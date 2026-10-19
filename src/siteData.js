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
    { number: '01', 
      title: 'Decks', 
      description: 'Durable outdoor spaces built for good weather, family, and years of use.' ,
      galleryHref: '/galleries/decks'},
    
      { number: '02', 
      title: 'Interior Remodels', 
      description: 'Transform the inside of your house into what youve always dreamt of.' , 
      galleryHref: '/galleries/remodeling'},
    
      { number: '03', 
        title: 'Bathrooms', 
        description: 'Beautiful showers and complete bathroom remodels.' ,
        galleryHref: '/galleries/bathrooms'},
  ],

  projects: [
  {
    title: 'Elevated Outdoor Living',
    category: 'Custom Deck · Waynesboro, pa',
    image: 'projects/deck-photo.jpeg',
    alt: 'Big deck space with composite deck boards and black cable railing',
  },
  {
    title: 'Room to Gather',
    category: 'Finished Basement · Custom Bar',
    image: 'projects/basement-bar.png',
    alt: 'dark custom built bar with light wood top and leather bar stools in a blue painted room',
  },
  {
    title: 'Quality in Every Detail',
    category: 'Custom Event Space · Historic barn',
    video: 'projects/mike-barn.mp4',
    alt: 'Custom built event space built inside a historic barn with black walls and bar and light stained wood beams and posts',
  },
],
};

export const galleries = {
  decks: {
    title: 'Custom Decks',
    description:
      'Explore our custom deck projects, built with quality to withstand outdoor living for many years to come.',
    photos: [
      {
        src: 'projects/deck-photo.jpeg',
        alt: 'Brown deck with black cable railing overlooking a wooded yard.',
        caption: 'Cable-Rail Deck in a Wooded Setting',
      },
      {
        src: 'projects/deck2.jpeg',
        alt: 'Brown deck with black cable railing and stairs beside a hot tub.',
        caption: 'Deck with Cable Railing and Hot Tub',
      },
      {
        src: 'projects/deck3.jpeg',
        alt: 'Overhead view of deck stairs and black cable railing around a hot tub.',
        caption: 'Deck Stairs and Railing Details',
      },
      {
        src: 'projects/deck4.jpeg',
        alt: 'Gray deck with white railing beside a house and swimming pool.',
        caption: 'Gray Deck with White Railing',
      },
      {
        src: 'projects/deck5.jpeg',
        alt: 'Ground-level wood deck with railings and steps along the back of a house.',
        caption: 'Wood Deck with Yard Access',
      },
      {
        src: 'projects/deck7.jpeg',
        alt: 'Brown deck with white railing beside a house, facing a fenced backyard.',
        caption: 'Raised Deck with White Railing',
      },
    ],
  },

  bathrooms: {
    title: 'Bathroom Projects',
    description:
      "See some of the beautiful bathroom spaces we've created.",
    photos: [
      {
        src: 'projects/br2.jpeg',
        alt: 'Bathroom with a double-sink vanity, framed mirrors, wall sconces, and tile wainscoting.',
        caption: 'Double Vanity and Tile Wainscoting',
      },
      {
        src: 'projects/br3.jpeg',
        alt: 'Walk-in shower with two showerheads, large marble-look tiles, and two mosaic niches.',
        caption: 'Walk-In Shower with Mosaic Niches',
      },
      {
        src: 'projects/br4.jpeg',
        alt: 'White walk-in tub set within a large marble-look tile surround.',
        caption: 'Walk-In Tub and Tile Surround',
      },
    ],
  },

  remodeling: {
    title: 'Remodeling Projects',
    description:
      'Explore our interior transformations and custom carpentry projects.',
    photos: [
      {
        src: 'projects/basement-bar.png',
        alt: 'Custom dark wood bar with a light wood countertop, three stools, and built-in shelves in a blue basement room.',
        caption: 'Custom Basement Bar',
      },
    ],
  },
};
