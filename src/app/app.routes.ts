import { Routes } from '@angular/router';
import { LayoutComponent } from './views/pages/partials/layout/layout.component';
import { ToursComponent } from './views/pages/tours/tours.component';
import { DestinationsComponent } from './views/pages/destinations/destinations.component';
import { TestimonialsComponent } from './views/pages/testimonials/testimonials.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { HeroComponent } from './views/pages/hero/hero.component';
import { NewsletterComponent } from './views/pages/newsletter/newsletter.component';


export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'hero'
     },
     {
        path:'hero',
        component:HeroComponent
      },
     

     {
        path: '',
        component:LayoutComponent,
    
        children:[
          
          {
            path:'tours',
            component:ToursComponent
          },
          {
            path:'destinations',
            component:DestinationsComponent
          },
          {
            path:'testimonials',
            component:TestimonialsComponent
          },
          {
            path:'contact',
            component:ContactComponent
          },
          {
            path:'hero',
            component:HeroComponent
          }, {
            path:'newsletter',
            component:NewsletterComponent
          },
         ]
        }
]
