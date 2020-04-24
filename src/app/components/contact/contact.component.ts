import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(private contactService: ContactService, private toastrService: ToastrService) { }

	ngOnInit() {
	}

	sendFormClick(): void {
		this.contactService.sendContactForm({
			Address: 'asdf',
			Country: 'adsffs',
			Email: 'gadsf',
			Message: 'gsdf',
			Name: 'asdgasdf',
			Phone: 'asdg',
			Reason: 'asdg',
		}).subscribe(
			(res) => {
				this.toastrService.info('Your message has been sent');
				console.log(res);
			},
			(err) => {
				this.toastrService.error('Your message was not sent');
				console.log(err);
			}
		);
	}

}
