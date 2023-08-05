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
import { LoginService } from 'src/app/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-responsables',
  templateUrl: './lista-responsables.component.html',
  styleUrls: ['./lista-responsables.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaResponsablesComponent implements OnInit, OnChanges {
  @Input() tituloDePagina!: string;

  @Input() responsables!: Responsable[];

  @Output() eliminar = new EventEmitter<Responsable>(); //tipo de parametro
  @Output() editar = new EventEmitter<Responsable>();

  // responsables!: Responsable[];
  dataSource: any = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'sector'];
  isAdmin!: boolean;

  constructor(
    public loginService: LoginService,
    private rs: ResponsableService
  ) {}

  responsablesCantidad$!: Observable<number>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.dataSource.data = this.responsables;
      //prueba
      this.rs.cantidadResponsables.subscribe((data) => {
        console.log(data);
      });
    }
  }

  ngOnInit(): void {
    // this.displayedColumns.push('accion');
    this.dataSource = new MatTableDataSource<Responsable>(this.responsables);
    this.loginService._usuarioEncontrado.subscribe((data) => {
      if (data?.rol === 'administrador') {
        this.isAdmin = true;
        this.displayedColumns.push('accion');
      }
    });
  }

  eliminarResponsable(res: Responsable): void {
    this.eliminar.emit(res);
  }
}
