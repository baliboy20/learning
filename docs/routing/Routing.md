##Lazy loading

DI providers will duplicate or shadow if not a singleton root or instantiatied in the vew.

####Feature Module
````
const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

````


#### app-routing.module

````
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
````

 



https://stackblitz.com/angular/emvnnraxlgj?file=src%2Fapp%2Fapp-routing.module.ts




 ##Multi-outlet
 
 #####view app.component.html
 ```` 
 <nav>
     <a  mat-button routerLink="reserve">RESERVE</a> <div style="display: inline-block; padding: 5px"></div>
     <a [routerLink]="[{outlets:{bankoutlet: ['bank']} }]">banking</a>
     <a [routerLink]="[{outlets:{bankoutlet: ['bank2']} }]">bank2</a>
   </nav>
 
   <button mat-button>Basic</button>
 
 <router-outlet ></router-outlet>
 
   <router-outlet name="bankoutlet"></router-outlet>
 </div>
 
 `````
 
 ##### app.module
 
 ``````
 const routes: Routes = [
     // {path: '', redirectTo: 'reseve', pathMatch: 'full'},
     {path: 'bank', component: BankingComponent, outlet: 'bankoutlet'},
     // {path: 'bank', loadChildren: './banking/banking.module#BankingModule'},
     {path: 'reserve', component: ReserveComponent},
     {path: 'bank2', component: Bank2Component, outlet: 'bankoutlet'},
     // {path: 'bank2', loadChildren: './bank2/bank2.module#Bank2Module', outlet: 'bank2'},
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes), HomeModule, ReserveModule, BankingModule, Bank2Module],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 ``````
 
 https://stackblitz.com/edit/angular-multi-router-outlet