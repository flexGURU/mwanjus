import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    equipment: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! We will get back to you soon.');
    this.formData = {
      name: '',
      
      email: '',
      phone: '',
      equipment: '',
      message: '',
    };
  }
}
