export interface Link {
  name: string;
  url: string;
  icon?: string;
  children?: Link[];
}

export const linkList: Link[] = [
  {
    name: 'Accueil',
    url: '/accueil',
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
    url: '/qui-suis-je',
  },
  {
    name: 'Contact et tarifs',
    url: '/contact',
  },
];

export const otherLinkList: Link[] = [
  {
    name: 'Mentions légales',
    url: '/mentions-legales',
  },
  {
    name: 'Plan du site',
    url: '/plan-du-site',
  },
];
