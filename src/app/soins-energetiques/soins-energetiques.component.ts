import { Component } from '@angular/core';

@Component({
  templateUrl: './soins-energetiques.component.html',
})
export class SoinsEnergetiquesComponent {
  public readonly soinsEnergetiqueSubjects = [
    { name: 'Améliore la vitalité,' },
    { name: 'Diminue la fatigue' },
    { name: 'Atténue la douleur' },
    { name: 'Soulage les souffrances mentales' },
    { name: 'Retrouver un meilleur centrage' },
    { name: 'Rééquilibre les énergies du corps' },
    { name: 'Atténue les effets secondaires de traitements lourds' },
    { name: 'Augmente les capacités du corps à se régénérer' },
    { name: 'Stress et Anxiété' },
    { name: 'Angoisses' },
    { name: 'Améliore le sommeil' },
    {
      name:
        'En complément d’un traitement traditionnel, le Reiki permet de diminuer l’angoisse et la détresse liée à la maladie',
    },
  ];
}
