import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Site Clearing & Leveling',
      description:
        'Professional ground preparation and leveling for construction projects of any scale.',
    },
    {
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      title: 'Foundation & Trench Excavation',
      description:
        'Precise excavation for foundations, trenches, and underground installations.',
    },
    {
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      title: 'Bulk Earthmoving',
      description:
        'Large-scale earthmoving and backfilling services for major projects.',
    },
    {
      icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
      title: 'Material Loading',
      description:
        'Efficient loading and transportation of construction materials.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Eco-Friendly Dumping',
      description:
        'Responsible waste disposal in compliance with environmental standards.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Rapid Response',
      description:
        'Quick deployment and efficient project execution to meet tight deadlines.',
    },

    {
      icon: 'M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z M21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z M17 19H15V16.035C15.0024 16.0125 15.0049 15.9902 15.0076 15.9681C15.0097 15.9525 15.0117 15.9369 15.0135 15.9213C15.0345 15.7481 15.1119 15.5843 15.2343 15.4526C15.2355 15.4513 15.2366 15.45 15.2378 15.4487L18.7378 11.9487C19.2272 11.4593 19.5 10.7915 19.5 10.0987V5C19.5 4.44772 19.0523 4 18.5 4H12C11.4477 4 11 4.44772 11 5V13M6 19H9V16.035M11 5H3C2.44772 5 2 5.44772 2 6V15C2 15.5523 2.44772 16 3 16H11',
      title: 'Logistics & Transportation',
      description:
        'Comprehensive freight and logistics services, including efficient hauling, secure consolidation, and end-to-end supply chain management.',
    },
    {
      icon: 'M12 1a5 5 0 015 5v3h-2V6a3 3 0 00-3-3 3 3 0 00-3 3v3H7V6a5 5 0 015-5z M6 13h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z',
      title: 'Fleet & Vehicle Rental',
      description:
        'Flexible short- and long-term vehicle rentals for corporate and project needs, covering various vehicle types to support any duration.',
    },
    {
      icon: 'M2 9v11a1 1 0 001 1h18a1 1 0 001-1V9M5 9h14M5 9V7a2 2 0 012-2h10a2 2 0 012 2v2M8 12v6m4-6v6m4-6v6',
      title: 'Dry & General Warehousing',
      description:
        'Secure dry and general-purpose storage for non-perishable inventory, featuring advanced inventory management and controlled access.',
    },
    {
      icon: 'M12 2a4 4 0 00-4 4v7a4 4 0 008 0V6a4 4 0 00-4-4z M12 18a6 6 0 006-6h-2a4 4 0 01-8 0H6a6 6 0 006 6z M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2z',
      title: 'Cold Chain & Storage',
      description:
        'Dedicated temperature-controlled cold storage for perishable goods, ensuring optimal conditions and quality preservation for sensitive products.',
    },
  ];
}
