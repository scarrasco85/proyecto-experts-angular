import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NGRX (REDUX)
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootReducer } from './store/reducers/rootReducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// // Angular Material
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'; 
import { SideNavComponent } from './components/side-nav/side-nav.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';

// My components
import { HeaderComponent } from './components/header/header.component';

// My Modules
import { ExpertsModule } from './modules/experts/experts.module';
import { TagsModule } from './modules/tags/tags.module';





@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExpertsModule,
    TagsModule,
    // BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    StoreModule.forRoot(RootReducer, {}),
    // * 2. Configuramos la herramienta para analizar el STORE de la aplicación
    // desde el navegador
    StoreDevtoolsModule.instrument(
      {
        maxAge: 10, // Especificamos el número de acciones que se persisten en el tiempo
      }
    )
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
