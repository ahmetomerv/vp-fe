import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContactForm } from '../interfaces/contact-form.interface';
import { from } from 'rxjs';


@Injectable()
export class ContactService {

	constructor(private httpClient: HttpClient) {}

	public sendContactForm(contactForm: IContactForm): Observable<any> {
		return this.httpClient.post('https://exam-api.veripark.com/api/contact', contactForm);
	}

}
