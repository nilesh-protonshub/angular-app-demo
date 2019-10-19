import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class CommanService {
    constructor(private http:HttpClient) {}
    GetMethod() {
        return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
    }
}