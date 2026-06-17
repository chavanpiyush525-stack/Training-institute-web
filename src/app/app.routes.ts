import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { AddCourse } from './add-course/add-course';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'courses', component:Courses},
    {path: 'add-course', component: AddCourse},
    {path: 'contact', component: Contact}
];
