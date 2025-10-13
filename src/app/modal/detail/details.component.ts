import { Component, EventEmitter, input, Output } from '@angular/core';
import { Equipment } from '../../components/equipment/equipment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  equipment = input<Equipment | undefined>(undefined);
  @Output() close = new EventEmitter<void>();

  closeModal() {
    console.log('Closing modal from detail component');
    
    this.close.emit();
  }
}
