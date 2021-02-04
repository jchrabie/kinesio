import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  templateUrl: './kinesiologie.component.html',
  styleUrls: ['./kinesiologie.component.scss'],
})
export class KinesiologieComponent implements OnInit {
  public readonly kinesioSubjects = [
    { name: 'Anxiété/ Stress', img: 'assets/stress.jpg' },
    { name: 'Troubles du sommeil', img: 'assets/sommeil.jpg' },
    { name: 'Examen/ Entretien d’embauche', img: 'assets/entretien.jpg' },
    { name: 'Déprime', img: 'assets/deprime.jpg' },
    { name: 'Confiance en soi', img: 'assets/confiance.jpg' },
    { name: 'Douleurs physiques', img: 'assets/douleur.jpg' },
    { name: 'Surmenage/ Burn out', img: 'assets/burnout.jpg' },
    { name: 'Blocages émotionnels', img: 'assets/blocage.jpg' },
    { name: 'Addictions/dépendances', img: 'assets/addictions.jpg' },
    { name: 'Difficultés relationnelles', img: 'assets/seul.jpg' },
    { name: 'Apprentissage scolaire', img: 'assets/difficulte.jpg' },
    { name: 'Amélioration de la communication', img: 'assets/communication.jpg' },
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }
}
