import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'src/app/core/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: Config;

  constructor(private http: HttpClient) { }

  /**
   * Método que sirve para cargar la información de las variables de entorno
   *
   * @returns {Promise<Config>} el método retorna una promesa para capturar el objecto
   * de las variables de entorno del proyecto.
   */
  loadConfig(): Promise<Config> {

    return new Promise((resolve, reject) => {
      this.http.get<Config>("../../../../assets/config.json").subscribe({
        next: (config: Config) => {
          this.config = config;
          console.log("La Configuracion se ha cargado existosamente");
          console.log(this.config);
          resolve(config);
        },
        error: (error: any) => {
          reject(error);
        },
      });
    });
  }

  /**
   * Método que sirve para exponer la información de las variables de entorno
   *
   * @returns {Promise<Config>} el método retorna las variables de entorno del proyecto.
   */
  getConfig(): Config {
    return this.config;
  }
}
