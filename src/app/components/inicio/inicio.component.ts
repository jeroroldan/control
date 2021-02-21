import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peso = 25;
  edad = 60;
  sex = "Masculino"
  altura = 170;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void {
    this.altura = event.target.value
  }

  masculino() {
    this.sex = "Masculino";
  }

  femenino() {
    this.sex = "Femenino";
  }

  calcularBMI() {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)])

  }

}
