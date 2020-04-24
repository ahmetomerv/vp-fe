import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	public contactForm: FormGroup = new FormGroup({
		Address: new FormControl(''),
		Country: new FormControl(''),
		Email: new FormControl(''),
		Message: new FormControl(''),
		Name: new FormControl(''),
		Phone: new FormControl(''),
		Reason: new FormControl('')
	});

	constructor(private contactService: ContactService, private toastrService: ToastrService) { }

	ngOnInit() {
	}

	sendFormClick(): void {
		if (this.contactForm.valid) {
			this.contactService.sendContactForm(this.contactForm.value).subscribe(
				(res) => {
					this.toastrService.info('Your message has been sent');
					console.log(res);
				},
				(err) => {
					this.toastrService.error('Your message was not sent');
					console.log(err);
				}
			);
		} else {
			this.toastrService.error('Please fill in the form');
		}
	}

}
