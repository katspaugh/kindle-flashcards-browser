import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {VocabService} from './services/vocab';
import {DictionaryService} from './services/dictionary';
import {TranslationService} from './services/translation';
import {ImageSearchService} from './services/image-search';

import {Home} from './components/home/home';
import {Book} from './components/book/book';
import {KindleLp} from './components/kindle-lp/kindle-lp';

@NgModule({
    declarations: [ AppComponent, Home, KindleLp, Book ],
    imports     : [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig) ],
    providers   : [
        VocabService, DictionaryService, TranslationService, ImageSearchService,
        { provide: LocationStrategy, useClass: HashLocationStrategy } ],
    bootstrap   : [ AppComponent ]
})
export class AppModule {

}
