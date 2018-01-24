import 'core-js';
import 'zone.js/dist/zone';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { CiphersComponent } from './vault/ciphers.component';
import { FallbackSrcDirective } from './directives/fallback-src.directive';
import { GroupingsComponent } from './vault/groupings.component';
import { IconComponent } from './vault/icon.component';
import { LoginComponent } from './accounts/login.component';
import { StopClickDirective } from './directives/stop-click.directive';
import { StopPropDirective } from './directives/stop-prop.directive';
import { VaultComponent } from './vault/vault.component';
import { ViewComponent } from './vault/view.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ServicesModule,
    ],
    declarations: [
        AppComponent,
        CiphersComponent,
        FallbackSrcDirective,
        GroupingsComponent,
        IconComponent,
        LoginComponent,
        StopClickDirective,
        VaultComponent,
        ViewComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }