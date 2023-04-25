import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { TableData } from '../table-data';
import { ThingsService } from './things.service';

@Component({
  selector: 'app-things',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent implements OnInit {
  isLoading = true;
  rows!: { [key: string]: any }[];
  readonly columns: TableData[] = [
    {
      Header: 'Name',
      PropName: 'description'
    },
    {
      Header: 'Description',
      PropName: 'name'
    }
  ];

  constructor(private service: ThingsService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.service.fetch().subscribe(value => {
      this.rows = value;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }

}
