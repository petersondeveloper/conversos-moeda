import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  imports: [
    FormsModule, 
    CommonModule
  ],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css'
})

export class CurrencyConverter {
  valor = 0;
  resultado = 0;
  direcao: 'brlToClp' | 'clpToBrl' = 'brlToClp';
  cotacao = 175;

  converter() {
    this.resultado = this.direcao === 'brlToClp'
      ? this.valor * this.cotacao
      : this.valor / this.cotacao;
  }

  selectAll(input: HTMLInputElement) {
    input.select();
  }

}
