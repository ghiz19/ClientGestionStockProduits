import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes= [
    
    // {path:'dashboard',component:DashbordComponent},
    // {path:'produit',component:ProduitComponent}
    

];

@NgModule({
                imports :[
                        RouterModule.forRoot(
                        appRoutes,
                        {enableTracing:true}
                        
                    )
                        ],

                        exports:[RouterModule]

})
export class AppRoutingModule {

}