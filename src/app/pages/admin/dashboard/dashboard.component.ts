import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
 // Data atual formatada
  currentDate: string = '';


  ngOnInit(): void { 
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = now.toLocaleDateString('pt-PT', options);
  }
}
