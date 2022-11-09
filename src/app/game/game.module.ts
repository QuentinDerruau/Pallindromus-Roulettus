import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { TwitterModule } from '../twitter/twitter.module';
import { Routes, RouterModule} from '@angular/router';

const game: Routes = [
  {
  path : '',
  component: GameComponent
}
];

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(game),
    TwitterModule
  ],exports: [GameComponent]
})
export class GameModule { }
