import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})

export class InfoComponent {

  respuesta: any[] = []

  inputBuscador = ''

  page = 1

  newRespuesta: any[] = [] 

  ngOnInit(): void {
    this.consulta()
  }

  consulta(): void {
    fetch(`https://rickandmortyapi.com/api/character/?name=${this.inputBuscador}&page=${this.page}`)
    .then(response => response.json())
    .then(data => {
      this.respuesta = data.results
    })
    .catch(error => {
      console.log(`Error al consultar la api: ` + error);
    })
  }

  keyOn(event: any) {
    this.inputBuscador = event.target.value.toLowerCase()
    this.consulta()
  }

  backPage(): void {
    if (this.page >= 2) {

      this.page--
      this.consulta()

    } else if (this.page == 1) {
      this.page
    }
  }

  nextPage(): void {
    this.page++
    this.consulta()
  }

}