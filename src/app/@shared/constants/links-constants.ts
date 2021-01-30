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
    name: 'Les soins energetiques',
    url: '/soins-energetiques',
    children: [
      {
        name: 'La personne',
        url: '/soins-energetiques/personne',
      },
      {
        name: 'Lieu de vie',
        url: '/soins-energetiques/lieu-de-vie',
      },
    ],
  },
  {
    name: 'Mon histoire',
    url: '/histoire',
  },
  {
    name: 'Contact et tarifs',
    url: '/contact',
  },
];
