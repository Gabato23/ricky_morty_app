import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';

@Component({
  selector: 'app-character',
  template: `
    <div class="card">
      <div class="card-horizontal">
        <div class="img-square-wrapper">
          <a [routerLink]="['/character-details', character.id]">
            <img
              [src]="character.image"
              [alt]="character.name"
              class="card-img"
            />
          </a>
        </div>
        <div class="card-body">
          <h3 class="card-title">{{ character.name | slice: 0:15 }}</h3>
          <p class="card-text">Genero: {{ character.gender }}</p>
          <p class="card-text">Estado: {{ character.status }}</p>
          <p class="card-text">Especie: {{ character.species }}</p>
          <p class="card-text"><small class="text-muted">{{ character.created | date }}</small></p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .card {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      box-sizing: border-box;
      margin: 10px 0;
      background-color: #2f2f2f;
      font-family: 'Arial', sans-serif;
      border: 2px solid #1976d2;
    }

    .card-horizontal {
      display: flex;
      flex-direction: row;
    }

    .img-square-wrapper {
      flex: 0 0 auto;
    }

    .card-img {
      width: 200px;
      height: auto;
      opacity: 0.7;
      transition: opacity 0.7s, transform 0.3s;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }

    .card-body {
      padding: 10px;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 5px;
      color: #1976d2;
    }

    .card-text {
      margin-bottom: 0;
      color: #ffffff;
    }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() character: Character;
}
