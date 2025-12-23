import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-listar-producto',
  standalone: false,
  templateUrl: './listar-producto.html',
  styleUrl: './listar-producto.css',
})
export class ListarProducto implements OnInit {
  listProductos: Producto [] = [];

  constructor (private _productoService: ProductoService,
              private toastr: ToastrService,
              private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  } 

  obtenerProductos () {
    this._productoService.getProductos().subscribe(data =>{
      this.listProductos = data;
      this.cdr.detectChanges();
    }, error =>{
      console.log(error);
    })
  }
  eliminarProductos (id: any) {
      this._productoService.eliminarProductos(id).subscribe(data =>{
        this.toastr.error ("El Producto Fue Eliminado Con Exito", "PRODUCTO ELIMINADO");
        this.obtenerProductos();
  }, error =>{
    console.log(error);
    this.toastr.error("No se pudo eliminar el producto", "ERROR");
  })
  }
}
