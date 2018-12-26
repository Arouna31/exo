import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PostListComponentComponent } from "./post-list-component/post-list-component.component";
import { PostListItemComponentComponent } from "./post-list-item-component/post-list-item-component.component";
import { NewPostComponentComponent } from "./new-post-component/new-post-component.component";
import { PostsService } from "./services/posts.service";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: "posts",
    component: PostListComponentComponent
  },
  {
    path: "posts/new-post",
    component: NewPostComponentComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "posts"
  },
  {
    path: "**",
    redirectTo: "posts"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
