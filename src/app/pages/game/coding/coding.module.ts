// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { CodingComponent } from './coding.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {NgTerminalModule} from 'ng-terminal';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
    imports: [
        AceEditorModule,
        //NgTerminalModule,
        ThemeModule,
    ],
    declarations: [
        CodingComponent,
    ],
    exports: [
        CodingComponent,
    ]
})
export class CodingModule {

}
