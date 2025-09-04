// src/app/counter/counter.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, setValue } from '../store/counter.action';
import { 
  selectCount, 
  selectLastUpdated, 
  selectCountIsPositive, 
  selectCountIsEven 
} from '../store/counter.selectors';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="counter-container">
      <h2>Compteur NgRx Standalone</h2>
      
      <div class="counter-display">
        <h1 [class.positive]="isPositive$ | async" 
            [class.negative]="!(isPositive$ | async)">
          {{ count$ | async }}
        </h1>
        
        @if(lastUpdated$ | async; as updated){
          <p >
            Dernière mise à jour : {{ updated | date:'medium' }}
          </p>
        }
        
        <div class="badges">
          <span class="badge" [class.active]="isEven$ | async">
            {{ (isEven$ | async) ? 'Pair' : 'Impair' }}
          </span>
          <span class="badge" [class.active]="isPositive$ | async">
            {{ (isPositive$ | async) ? 'Positif' : 'Négatif/Zéro' }}
          </span>
        </div>
      </div>

      <div class="controls">
        <button (click)="increment()" class="btn btn-success">+1</button>
        <button (click)="decrement()" class="btn btn-danger">-1</button>
        <button (click)="reset()" class="btn btn-secondary">Reset</button>
      </div>

      <div class="quick-actions">
        <h3>Actions en volume :</h3>
        <button (click)="setValue(10)" class="btn btn-info">Set 10</button>
        <button (click)="setValue(50)" class="btn btn-info">Set 50</button>
        <button (click)="setValue(-5)" class="btn btn-info">Set -5</button>
      </div>
    </div>
  `,
  styles: [`
    .counter-container {
      max-width: 500px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      text-align: center;
      font-family: Arial, sans-serif;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .counter-display h1 {
      font-size: 4rem;
      margin: 20px 0;
      transition: color 0.3s ease;
      font-weight: bold;
    }
    
    .counter-display h1.positive { 
      color: #28a745; 
      text-shadow: 0 0 10px rgba(40, 167, 69, 0.3);
    }
    .counter-display h1.negative { 
      color: #dc3545; 
      text-shadow: 0 0 10px rgba(220, 53, 69, 0.3);
    }
    
    .badges {
      margin: 15px 0;
    }
    
    .badge {
      display: inline-block;
      padding: 8px 15px;
      margin: 0 8px;
      border-radius: 20px;
      background-color: #f8f9fa;
      color: #6c757d;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
      border: 2px solid #e9ecef;
    }
    
    .badge.active {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
      transform: scale(1.05);
    }
    
    .controls, .quick-actions {
      margin: 25px 0;
    }
    
    .btn {
      padding: 12px 24px;
      margin: 0 8px 8px 8px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.2s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .btn:hover { 
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .btn:active { 
      transform: translateY(0);
    }
    
    .btn-success { 
      background: linear-gradient(135deg, #28a745, #20c997);
      color: white; 
    }
    .btn-danger { 
      background: linear-gradient(135deg, #dc3545, #fd7e14);
      color: white; 
    }
    .btn-secondary { 
      background: linear-gradient(135deg, #6c757d, #adb5bd);
      color: white; 
    }
    .btn-info { 
      background: linear-gradient(135deg, #17a2b8, #6f42c1);
      color: white; 
    }
    
    .quick-actions h3 {
      margin-bottom: 15px;
      color: #495057;
      font-size: 1.2rem;
    }
    
    p {
      color: #6c757d;
      font-size: 0.9rem;
    }
    
    h2 {
      color: #343a40;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
  `]
})
export class CounterComponent {
  store = inject(Store)
  // Observables pour récupérer les données du store
  count$ = this.store.select(selectCount);
  lastUpdated$ = this.store.select(selectLastUpdated);
  isPositive$ = this.store.select(selectCountIsPositive);
  isEven$ = this.store.select(selectCountIsEven);

  

  // Méthodes qui dispatchent les actions
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  setValue(value: number) {
    this.store.dispatch(setValue({ value }));
  }
}