import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderconfirmationPage } from './orderconfirmation';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OrderconfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderconfirmationPage),
  ],
  providers:[
    PedidoService
  ]
})
export class OrderconfirmationPageModule {}
