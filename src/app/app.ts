// src/app/app.component.ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <div class="app">
      <header class="header">
        <h1>NgRx + Angular Standalone 2024</h1>
      </header>
      
      <main>
        <app-counter></app-counter>
      </main>
      
      <div class="info">
        <h3>Points clés NgRx + Standalone :</h3>
        <div class="features-grid">
          <div class="feature">
            <h4>Actions</h4>
            <p>increment, decrement, reset, setValue</p>
          </div>
          <div class="feature">
            <h4>State</h4>
            <p>count + lastUpdated centralisés</p>
          </div>
          <div class="feature">
            <h4>Selectors</h4>
            <p>Données calculées (pair/impair, positif/négatif)</p>
          </div>
          <div class="feature">
            <h4>Réactivité</h4>
            <p>UI mise à jour automatiquement</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }
    
    .header h1 {
      color: #2c3e50;
      margin: 0 0 10px 0;
      font-size: 2.5rem;
      font-weight: 700;
    }
    
    .info {
      margin-top: 40px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }
    
    .info h3 {
      color: #2c3e50;
      margin-bottom: 25px;
      font-size: 1.5rem;
      text-align: center;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .feature {
      padding: 20px;
      background: linear-gradient(135deg, #f8f9fa, #e9ecef);
      border-radius: 10px;
      border-left: 4px solid #007bff;
      text-align: center;
      transition: transform 0.2s ease;
    }
    
    .feature:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .feature h4 {
      color: #495057;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    .feature p {
      color: #6c757d;
      font-size: 0.9rem;
      margin: 0;
    }
    
    main {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {
  title = 'ngrx-standalone-demo';
}