import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from "./components/footer/footer";
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Star } from "./components/star/star";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, Home, About, Portfolio, Contact, Star],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment');
}
