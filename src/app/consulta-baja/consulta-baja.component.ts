import { Component, ViewChild } from '@angular/core';
import { ISolicitudMaterial } from '../ISolicitudMaterial';
import { MatPaginator } from '@angular/material/paginator';
import { DatosService } from '../datos.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalRevisaPartidasComponent } from '../modal-revisa-partidas/modal-revisa-partidas.component';

@Component({
  selector: 'app-consulta-baja',
  templateUrl: './consulta-baja.component.html',
  styleUrls: ['./consulta-baja.component.css']
})
export class ConsultaBajaComponent {
  
  solicitudes: ISolicitudMaterial[] = [];

  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedSolicitud?: ISolicitudMaterial;
 
   constructor(public dialog: MatDialog, public datosSolicitud:DatosService) 
   {     

   }
                
   ngOnInit(): void {
                
     this.datosSolicitud.getSolicitudesMaterial().subscribe((data: ISolicitudMaterial[])=>{
       console.log(data);
       this.solicitudes = data;
     })    
   }   





openDialogDetails(id:string) {
  console.log("id:"+id);
  this.datosSolicitud.setIdSolicitud(id);
  const dialogRef = this.dialog.open(ModalRevisaPartidasComponent, {
    autoFocus: false,
    maxHeight: '90vh' //you can adjust the value as per your view
});

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}


  
}

