import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crear-producto',
  standalone: false,
  templateUrl: './crear-producto.html',
  styleUrl: './crear-producto.css',
})
export class CrearProducto {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService){
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm);

    console.log(this.productoForm.get('producto')?.value);

  const PRODUCTO: Producto = {
    nombre    : this.productoForm.get('producto')?.value,
    categoria : this.productoForm.get('categoria')?.value,
    ubicacion : this.productoForm.get('ubicacion')?.value,
    precio    : this.productoForm.get('precio')?.value

  }
  console.log(PRODUCTO);
  this.toastr.success('El Producto Ha Sido Registrado Con Exito!', 'PRODUCTO REGISTRADO');
  this.router.navigate(['/']);
  }
}
