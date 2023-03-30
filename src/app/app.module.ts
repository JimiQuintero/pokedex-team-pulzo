import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardTeamComponent } from './components/pokemon-card-team/pokemon-card-team.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardTeamComponent,
    PokemonCardComponent,
    PokemonlistComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
