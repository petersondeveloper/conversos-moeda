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
  cotacao = 171;
  valorbkp = 0;

  converter() {
    if (this.direcao === 'brlToClp') {
      this.resultado = this.valor * this.cotacao;
    } else {
      this.resultado = this.valor / this.cotacao;
    }


  }

  selectAll(input: HTMLInputElement) {
    input.select();
  }

  onDirecaoChange(novaDirecao: 'brlToClp' | 'clpToBrl') {
    // Só aplica se já existe um resultado calculado
    if (this.resultado > 0) {
        this.valorbkp = this.valor
        this.valor = this.resultado
        this.resultado = this.valorbkp
    }
    this.direcao = novaDirecao;
    
  }

}
