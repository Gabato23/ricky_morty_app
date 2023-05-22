import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
    <div class="search-filter-container">
      <div class="search-container">
        <input
          #inputSearch
          autofocus
          type="text"
          class="form-control search-input"
          placeholder="Buscar Personaje"
          (input)="onSearch()"
        />
        <button class="clear-button" (click)="clearSearch()">X</button>
      </div>

      <div class="filter-container" [ngClass]="{ 'visible-filter': showFilter }">
        <label for="speciesFilter" class="filter-label">Especie:</label>
        <select id="speciesFilter" class="form-control filter-select" (change)="onFilterSpecies($event.target.value)">
          <option value="">Todos</option>
          <option value="human">Humano</option>
          <option value="robot">Robot</option>
          <option value="alien">Alien</option>
        </select>
      </div>
    </div>
  `,
  styles: [
    `
    .search-filter-container {
      display: flex;
      align-items: center;
      padding: 10px;
    }
    
    .search-container {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    
    .search-input {
      width: 300px;
      height: 40px;
      background-color: #1f1e1e;
      color: #ffffff;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      font-size: 20px;
    }

    .clear-button {
      background: #ff9800;
      color: #ffffff;
      border: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.2em;
      padding: 5px 10px;
      border-radius: 50%;
      transition: background-color 0.3s ease-in-out;
    }

    .clear-button:hover {
      background-color: #ffab40;
    }

    .filter-container {
      display: none;
      align-items: center;
      margin-right: 10px;
    }

    .visible-filter {
      display: flex;
    }

    .filter-label {
      color: #808080;
      margin-right: 5px;
    }

    .filter-select {
      width: 150px;
      height: 30px;
      font-size: 14px;
    }
    `,
  ],
})
export class FormSearchComponent implements OnInit {
  @ViewChild('inputSearch', { static: true }) inputSearch!: ElementRef<HTMLInputElement>;
  showFilter: boolean = false;
  selectedSpecies: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    const value = this.inputSearch.nativeElement.value;
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
      this.showFilter = true;
    } else {
      this.showFilter = false;
    }
  }

  clearSearch() {
    this.inputSearch.nativeElement.value = '';
    this.router.navigate(['/']);
    this.showFilter = false;
    this.selectedSpecies = '';
  }

  onFilterSpecies(species: string) {
    this.router.navigate(['/character-list'], {
      queryParams: { species },
    });
  }
}
