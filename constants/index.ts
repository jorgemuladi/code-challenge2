// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '#features', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/products', key: 'products', label: 'Products' },
    { href: '/teams', key: 'teams', label: 'Our Teams' },
    { href: '/about', key: 'about', label: 'About Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: '/map.svg',
      variant: 'green',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing with Hilink', 'Hilink Equipment', 'Get Ready with Hilink'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'business@hilink.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };


export const PRODUCTS = [
  {
    id: 1,
    name: "Hilink Pro GPS",
    description: "Advanced GPS device for precise navigation",
    price: 299.99,
    image: "/product-gps.jpg"
  },
  {
    id: 2,
    name: "Adventure Backpack",
    description: "Durable and comfortable backpack for long hikes",
    price: 129.99,
    image: "/product-backpack.jpg"
  },
  {
    id: 3,
    name: "Hilink Water Purifier",
    description: "Portable water purifier for safe drinking anywhere",
    price: 79.99,
    image: "/product-purifier.jpg"
  }
];

export const SERVICES = [
  {
    id: 1,
    name: "Trail Mapping",
    description: "Custom trail mapping and route planning services",
    icon: "/service-mapping.svg"
  },
  {
    id: 2,
    name: "Guided Adventures",
    description: "Expert-led group adventures to exotic locations",
    icon: "/service-adventure.svg"
  },
  {
    id: 3,
    name: "Equipment Rental",
    description: "High-quality outdoor equipment rental service",
    icon: "/service-rental.svg"
  },
  {
    id: 4,
    name: "Safety Training",
    description: "Comprehensive safety and survival training courses",
    icon: "/service-training.svg"
  }
];