import { Component, OnInit } from '@angular/core';
import { Responsable } from 'src/model/responsable.model';
import { ResponsableService } from '../responsable.service';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.sass'],
})
export class ResponsablesComponent implements OnInit {
  responsables!: Responsable[];
  dataSource: any = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'sector', 'id'];

  constructor(private responsableSerevice: ResponsableService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.responsables = this.responsableSerevice.responsables;
    this.dataSource = new MatTableDataSource<Responsable>(this.responsables);
  }
}
