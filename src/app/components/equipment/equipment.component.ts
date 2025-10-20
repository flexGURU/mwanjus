import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { DetailComponent } from '../../modal/detail/details.component';

export interface Equipment {
  name: string;
  category: string;
  specs: { label: string; value: string }[];
  image: string;
}

@Component({
  selector: 'app-equipment',
  imports: [CommonModule, DetailComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css',
})
export class EquipmentComponent {
  selectedEquipment = signal<Equipment | undefined>(undefined);
  selectedCategory = 'All';
  categories = [
    'All',
    'Concrete',
    'Lifting',
    'Excavation',
    'Compaction',
    'Transport',
  ];

  equipment: Equipment[] = [
    {
      name: 'Batching Plant',
      category: 'Concrete',
      specs: [
        { label: 'Output', value: '50m³/h' },
        { label: 'Power', value: '100kwh' },
        { label: 'Discharge Height', value: '4m' },
      ],
      image: '/assets/batching plant.png',
    },

    {
      name: 'Concrete Mixer Truck',
      category: 'Concrete',
      specs: [
        { label: 'Water Tank', value: '450L' },
        { label: 'Inclination', value: '14.3°' },
        { label: 'Mixing Speed', value: '0-16rpm' },
      ],
      image: 'assets/concrete truck mixer.png',
    },
    {
      name: 'Truck Crane',
      category: 'Lifting',
      specs: [
        { label: 'Max Lifting Height', value: '43.5m' },
        { label: 'Max Capacity', value: '25t' },
        { label: 'Load Moment', value: '1112kN.m' },
      ],
      image:
        'assets/mobile crane.png',
    },
    {
      name: 'Forklift',
      category: 'Lifting',
      specs: [
        { label: 'Capacity', value: '5-7t' },
        { label: 'Max Height', value: '7000mm' },
        { label: 'Turning Radius', value: '3320-3507mm' },
      ],
      image: 'assets/forklift.png',
    },
    {
      name: 'Wheel Loader',
      category: 'Excavation',
      specs: [
        { label: 'Rated Load', value: '6000kg' },
        { label: 'Capacity', value: '3.5m³' },
        { label: 'Engine Power', value: '178kW' },
      ],
      image: 'assets/wheel loader.png',
    },
    {
      name: 'Medium Excavator',
      category: 'Excavation',
      specs: [
        { label: 'Operating Weight', value: '22000kg' },
        { label: 'Engine Power', value: '134kW' },
        { label: 'Capacity', value: '1.0-1.1m³' },
      ],
      image: 'assets/excavater.png',
    },
    {
      name: 'Pneumatic Roller',
      category: 'Compaction',
      specs: [
        { label: 'Weight Empty', value: '10000kg' },
        { label: 'Max Ballast', value: '27000kg' },
        { label: 'Compaction Width', value: '2090mm' },
      ],
      image: 'assets/pnemantic roller.jpeg',
    },
    {
      name: 'Wheel Roller',
      category: 'Compaction',
      specs: [
        { label: 'Operating Weight', value: '10492kg' },
        { label: 'Compaction Width', value: '2134mm' },
        { label: 'Gross Power', value: '83.8kW' },
      ],
      image: 'assets/wheel roller.jpeg',
    },
    {
      name: 'Backhoe',
      category: 'Excavation',
      specs: [
        { label: 'Net Power', value: '64kW' },
        { label: 'Operating Weight', value: '8275kg' },
        { label: 'Max Weight', value: '11000kg' },
      ],
      image: 'assets/Back hoe.jpeg',
    },
    {
      name: 'Motor Grader',
      category: 'Excavation',
      specs: [
        { label: 'Net Power', value: '128kW' },
        { label: 'Operating Weight', value: '14254kg' },
        { label: 'Blade Width', value: '3.7m' },
      ],
      image: 'assets/motor grader.jpeg',
    },
    {
      name: 'Tipper Truck',
      category: 'Transport',
      specs: [
        { label: 'Transmission', value: '9 speed' },
        { label: 'GVW', value: '26000kg' },
        { label: 'Fuel Capacity', value: '370L' },
      ],
      image: 'assets/Tipper.jpg',
    },
  ];

  getFilteredEquipment(): Equipment[] {
    if (this.selectedCategory === 'All') {
      return this.equipment;
    }
    return this.equipment.filter(
      (item) => item.category === this.selectedCategory
    );
  }

  viewDetails() {
    this.selectedEquipment.set(undefined);
  }
}
