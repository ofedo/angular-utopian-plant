import { RawMaterials } from './raw-materials';
import { Staff } from './staff';

export class Machine {
  cost: number = 1000;
  rawMaterials: RawMaterials[] = [];
  staff: Staff[] = [];

  process() {
    let totalProductivity = 0;
    this.staff.forEach(s => totalProductivity += s.productivity);
    totalProductivity = Math.min(1, totalProductivity);
    const products = Math.round(totalProductivity * this.rawMaterials.length * 1000);
    const spoilage = this.rawMaterials.length * 1000 - products;
    this.rawMaterials.length = Math.max(0, this.rawMaterials.length - this.staff.length);
    return [products, spoilage];
  }
}

