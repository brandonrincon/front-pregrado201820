import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Editorial } from './editorial';
import { Book } from '../book/book';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const editorials = '/editorials';
const books = '/books';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class EditorialService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getEditorials(): Observable<Editorial[]> {
        return this.http.get<Editorial[]>(API_URL + editorials);
    }

    /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getEditorial(editorialId): Observable<Editorial> {
        return this.http.get<Editorial>(API_URL + editorials + '/' + editorialId);
    }

    /**
    * Returns the Observable object with the books of an editorial retrieved from the API
    * @returns The editorial's books
    */
    getBooksOfEditorial(editorialId): Observable<Book[]> {
        return this.http.get<Book[]>(API_URL + editorials + '/' + editorialId + books);
    }
}
