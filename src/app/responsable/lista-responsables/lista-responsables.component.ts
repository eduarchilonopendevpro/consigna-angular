import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Responsable } from 'src/model/responsable.model';
import { ResponsableService } from '../responsable.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-responsables',
  templateUrl: './lista-responsables.component.html',
  styleUrls: ['./lista-responsables.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaResponsablesComponent implements OnInit {
  @Input() tituloDePagina!: string;

  @Input() responsables!: Responsable[];

  @Output() eliminar: EventEmitter<any> = new EventEmitter<Responsable>(); //tipo de parametro
  @Output() editar: EventEmitter<any> = new EventEmitter<Responsable>();

  // responsables!: Responsable[];
  dataSource: any = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'sector', 'accion'];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Responsable>(this.responsables);
  }

  editarResponsable(res: Responsable) {
    this.editar.emit(res);
  }

  eliminarResponsable(res: Responsable) {
    this.eliminar.emit(res);
    this.cd.detectChanges();
    console.log(this.responsables);
  }
}
