import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategoria, IPartida, ISubpartida } from '../IPartida';
import { IItem, ISolicitudMaterial } from '../ISolicitudMaterial';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ModalRevisaPartidasComponent } from '../modal-revisa-partidas/modal-revisa-partidas.component';
import { ModalSubpartidasComponent } from '../modal-subpartidas/modal-subpartidas.component';
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component';
import { ModalItemsComponent } from '../modal-items/modal-items.component';

@Component({
  selector: 'app-new-baja',
  templateUrl: './new-baja.component.html',
  styleUrls: ['./new-baja.component.css']
})
export class NewBajaComponent implements OnInit  {
  partidas: IPartida[] = [];
  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedPartida?: IPartida;
 
   constructor(public datosPartida:DatosService,  public modal: MatDialog) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosPartida.getPartidas().subscribe((data: IPartida[])=>{
       console.log(data);
       this.partidas = data;
     })
     
 
   }

  solicitudMaterial(app: string,  id: any) {
    console.log("id"+id);
    console.log("app"+app);
    console.log(id,app)
    
  }

  openDialogNew(id:string) {
    console.log("id:"+id);
    this.datosPartida.setIdPartida(id);
    const dialogRef = this.modal.open(ModalItemsComponent, {
      autoFocus: false,
      maxHeight: '90vh' //you can adjust the value as per your view
  });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  
  }


}