import{ NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";

const routes : Routes = [
	{path:'', redirectTo:'products', pathMatch:'full'},
	{path:'products', component: ProductsComponent}, //ProductsComponent sayfa yolu
	{path:'orders', component: OrdersComponent},//OrdersComponent sayfa yolu
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule {}