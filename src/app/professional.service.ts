import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Professional } from './professional';

@Injectable()
export class ProfessionalService {

  private professionalsUrl = 'api/professionals';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProfessionals(): Promise<Professional[]> {

    return this.http.get(this.professionalsUrl)
               .toPromise()
               .then(response => response.json() as Professional[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  create(id: number, name: string, sex: string, language: string, experience: string, price: number, location: string): Promise<Professional> {
    var profilePicture = "https://api.adorable.io/avatars/100/"+name+".png"
  return this.http
    .post(this.professionalsUrl, JSON.stringify({id: id, picture: profilePicture, name: name, sex: sex, languages: language, experience: experience, price: price, location: location}), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as Professional)
    .catch(this.handleError);
}


}
