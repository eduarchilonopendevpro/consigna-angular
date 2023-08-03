import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  titulo: string = 'LISTA DE RESPONSABLES';

  constructor(private responsableSerevice: ResponsableService) {}

  responsables!: Responsable[];

  get listaResponsablesPadre(): Responsable[] {
    return this.responsableSerevice.listaResponsables;
  }

  ngOnInit(): void {
    this.responsables = this.responsableSerevice.listaResponsables;
  }

  editarResponsable(res: Responsable): void {
    console.log('Editado', res);
  }

  eliminarResponsable(res: Responsable): void {
    this.responsableSerevice.eliminar(res);
  }
}
