import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./subscription-s01-v01/subscription-s01-v01.module").then( m => m.SubscriptionS01V01PageModule)
  },
  {
    path: "subscription-s01-v01",
    loadChildren: () => import("./subscription-s01-v01/subscription-s01-v01.module").then( m => m.SubscriptionS01V01PageModule)
  },
  {
    path: "subscription-s01-v02",
    loadChildren: () => import("./subscription-s01-v02/subscription-s01-v02.module").then( m => m.SubscriptionS01V02PageModule)
  },
  {
    path: "subscription-s02-v01",
    loadChildren: () => import("./subscription-s02-v01/subscription-s02-v01.module").then( m => m.SubscriptionS02V01PageModule)
  },
  {
    path: "subscription-s02-v02",
    loadChildren: () => import("./subscription-s02-v02/subscription-s02-v02.module").then( m => m.SubscriptionS02V02PageModule)
  },
  {
    path: "subscription-s03-v01",
    loadChildren: () => import("./subscription-s03-v01/subscription-s03-v01.module").then( m => m.SubscriptionS03V01PageModule)
  },
  {
    path: "subscription-s03-v02",
    loadChildren: () => import("./subscription-s03-v02/subscription-s03-v02.module").then( m => m.SubscriptionS03V02PageModule)
  },
  {
    path: "subscription-s04-v01",
    loadChildren: () => import("./subscription-s04-v01/subscription-s04-v01.module").then( m => m.SubscriptionS04V01PageModule)
  },
  {
    path: "subscription-s04-v02",
    loadChildren: () => import("./subscription-s04-v02/subscription-s04-v02.module").then( m => m.SubscriptionS04V02PageModule)
  },
  {
    path: "subscription-s05-v02",
    loadChildren: () => import("./subscription-s05-v02/subscription-s05-v02.module").then( m => m.SubscriptionS05V02PageModule)
  },
  {
    path: "subscription-s06-v02",
    loadChildren: () => import("./subscription-s06-v02/subscription-s06-v02.module").then( m => m.SubscriptionS06V02PageModule)
  },
  {
    path: "subscription-s07-v02",
    loadChildren: () => import("./subscription-s07-v02/subscription-s07-v02.module").then( m => m.SubscriptionS07V02PageModule)
  },
  {
    path: "subscription-s08-v02",
    loadChildren: () => import("./subscription-s08-v02/subscription-s08-v02.module").then( m => m.SubscriptionS08V02PageModule)
  },
  {
    path: "subscription-s09-v02",
    loadChildren: () => import("./subscription-s09-v02/subscription-s09-v02.module").then( m => m.SubscriptionS09V02PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
