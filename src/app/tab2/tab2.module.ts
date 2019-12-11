import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {ComponentsModule} from '../components/components.module';
import {ResizableModule} from 'angular-resizable-element';
import {DndModule} from 'ngx-drag-drop';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}]),
        ComponentsModule,
        ResizableModule,
        DndModule
    ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
