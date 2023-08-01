import { Component, OnInit } from '@angular/core';
import { responsables } from 'src/data/responsable.data';
import { Responsable } from 'src/model/responsable.model';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.sass'],
})
export class ResponsablesComponent implements OnInit {
  responsables: Responsable[] = [];

  constructor(private responsableSerevice: ResponsableService) {}

  ngOnInit(): void {
    this.responsables = this.responsableSerevice.responsables;
  }
}
