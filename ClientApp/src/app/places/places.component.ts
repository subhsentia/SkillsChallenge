import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { PlacesService } from './places.service';
import { TableData } from '../table-data';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  isLoading = true;
  rows!: { [key: string]: any }[];
  readonly columns: TableData[] = [
    {
      Header: 'Name',
      PropName: 'name'
    },
    {
      Header: 'Address',
      PropName: 'displayAddress'
    }
  ];

  constructor(private service: PlacesService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.service.fetch().subscribe(value => {
      this.rows = value;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }

}
