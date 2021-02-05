import { Component } from '@angular/core';

@Component({
  templateUrl: './kinesiologie.component.html',
})
export class KinesiologieComponent {
  public readonly kinesioSubjects = [
    { name: 'Anxiété/ Stress' },
    { name: 'Troubles du sommeil' },
    { name: 'Examen/ Entretien d’embauche' },
    { name: 'Déprime' },
    { name: 'Confiance en soi' },
    { name: 'Douleurs physiques' },
    { name: 'Surmenage/ Burn out' },
    { name: 'Blocages émotionnels' },
    { name: 'Addictions/dépendances' },
    { name: 'Difficultés relationnelles' },
    { name: 'Apprentissage scolaire' },
    { name: 'Amélioration de la communication' },
  ];
}
