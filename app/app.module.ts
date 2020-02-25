import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import{RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
//import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { AdminlandingpageComponent } from './adminlandingpage/adminlandingpage.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './userlist/userlist.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { IposComponent } from './ipos/ipos.component';
import { IposlistComponent } from './iposlist/iposlist.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { ManageexchangelistComponent } from './manageexchangelist/manageexchangelist.component';
import { SectorComponent } from './sector/sector.component';
import { StockpriceComponent } from './stockprice/stockprice.component';  
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    LogoutComponent,
    ManagecompanyComponent,
   
    AdminlandingpageComponent,
    UserComponent,
    UserListComponent,
    UserlandingpageComponent,
    CompanylistComponent,
    IposComponent,
    IposlistComponent,
    ImportdataComponent,
    ManageexchangeComponent,
    ManageexchangelistComponent,
    SectorComponent,
    SectorlistComponent,
    StockpriceComponent,
    StockpricelistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
      path:'login',
      component:LoginComponent
      }, {
        path:'register',
        component:RegisterComponent

      },{
        path:'home',
        component:HomeComponent

      },
      {
        path:'logout',
        component:LogoutComponent

      },
      {
        path:'admin',
        component:AdminComponent

      },
      {
        path:'managecompany',
        component:ManagecompanyComponent
      },
      {
        path:'adminlandingpage',
        component:AdminlandingpageComponent
      },
      {
        path:'userlist',
        component:UserListComponent
      },
      {
        path:'userlandingpage',
        component:UserlandingpageComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'companylist',
        component:CompanylistComponent
      },
      {
        path:'ipos',
        component:IposComponent
      },
      {
        path:'iposlist',
        component:IposlistComponent
      },
      {
        path:'importdata',
        component:ImportdataComponent
      },
      {
        path:'manageexchange',
        component:ManageexchangeComponent
      },
      {
        path:'manageexchangelist',
        component:ManageexchangelistComponent
      },
      {
        path:'sector',
        component:SectorComponent
      },
      {
        path:'stockprice',
        component:StockpriceComponent
      },
      {
        path:'sectorlist',
        component:SectorlistComponent
      },
      {
        path:'stockpricelist',
        component:StockpricelistComponent
      }
    ]),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
