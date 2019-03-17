import { Routes } from '@angular/router';

// imported routing components
import {HomeComponent} from './Components/home/home.component';
import {GameListComponent} from './Components/game-list/game-list.component';
import {GameComponent} from './Components/game/game.component';
import {MessagesComponent} from './Components/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MemberDetailComponent } from './Components/members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', 
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'gameList', component: GameListComponent },
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            { path: 'games', component: GameComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];  