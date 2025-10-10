import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  // Optionnel : redirection vers la page d’accueil pour toute route inconnue
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
