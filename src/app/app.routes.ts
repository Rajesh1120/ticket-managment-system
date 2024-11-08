import { Routes } from '@angular/router';
import { ListLocationsComponent } from './list-locations/list-locations.component';
import { HomeComponent } from './home/home.component';
import { TowncenterComponent } from './towncenter/towncenter.component';
import { LionsgateComponent } from './lionsgate/lionsgate.component';
import { DefaultseatsComponent } from './defaultseats/defaultseats.component';

export const routes: Routes = [
    {path:'locations',component:ListLocationsComponent},
    {path:'',component:HomeComponent},
    {path:'town-center',component:TowncenterComponent},
    {path:'lionsgate',component:LionsgateComponent},
    {path:'town-center/:moviename/:showtime',component:DefaultseatsComponent},
    
];
