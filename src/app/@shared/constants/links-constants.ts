export interface Link {
  name: string;
  url: string;
  icon?: string;
  children?: Link[];
}

export const linkList: Link[] = [
  {
    name: 'Accueil',
    url: '/',
  },
  {
    name: 'La kinesiologie',
    url: '/kinesiologie',
  },
  {
    name: 'Le soin énergétique',
    url: '/soins-energetiques',
  },
  {
    name: 'Qui suis-je?',
    url: '/histoire',
  },
  {
    name: 'Contact et tarifs',
    url: '/contact',
  },
];
