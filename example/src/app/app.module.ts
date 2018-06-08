import {BrowserModule} from "@angular/platform-browser";
import {LOCALE_ID, NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT, MissingTranslationStrategy} from "@angular/core";
import {I18n, MISSING_TRANSLATION_STRATEGY} from "@ngx-translate/i18n-polyfill";

import {AppComponent} from "./app.component";

export declare const require: any;


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {provide: TRANSLATIONS_FORMAT, useValue: "xlf"},
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        locale = navigator.language || (<any>navigator).userLanguage || 'en'; // default to english if no locale provided
        return require(`raw-loader!../i18n/messages.${locale}.xlf`);
      },
      deps: [LOCALE_ID]
    },
    {provide: LOCALE_ID, useValue: "fr"},
    {provide: MISSING_TRANSLATION_STRATEGY, useValue: MissingTranslationStrategy.Error},
    I18n
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
