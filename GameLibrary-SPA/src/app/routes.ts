import { Routes } from '@angular/router';

// imported routing components
import {HomeComponent} from './Components/home/home.component';
import {GameListComponent} from './Components/game-list/game-list.component';
import {GameComponent} from './Components/game/game.component';
import {MessagesComponent} from './Components/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', 
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'gameList', component: GameListComponent },
            { path: 'games', component: GameComponent },
            { path: 'messages', component: MessagesComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];  