import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AuthorListComponent} from '../author/author-list/author-list.component';
import {BookSidebarComponent} from '../shared/book-sidebar/book-sidebar.component';
import {EditorialListComponent} from '../editorial/editorial-list/editorial-list.component';
import { AuthorDetailComponent } from '../author/author-detail/author-detail.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';
import { EditorialDetailComponent } from '../editorial/editorial-detail/editorial-detail.component';

const routes: Routes = [

    {
        path: 'books',
        children: [
            {
                path: 'list',
                component: BookSidebarComponent
            },
            {
                path: ':id',
                component: BookDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: 'list',
                component: AuthorListComponent
            },
            {
                path: ':id',
                component: AuthorDetailComponent
            }
        ]
    },
    {
        path: 'editorials',
        children: [
            {
                path: 'list',
                component: EditorialListComponent
            },
            {
                path: ':id',
                component: EditorialDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
