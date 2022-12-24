import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../shared/services/starwars.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, mergeMap, map } from 'rxjs';
import { Result } from '../../interfaces/starwars-api';

@Component({
  selector: 'app-starwars-page',
  templateUrl: './starwars-page.component.html',
  styleUrls: ['./starwars-page.component.css'],
})
export class StarwarsPageComponent implements OnInit {
  public people: Result[] = [];

  public searchControl = new FormControl('');
  public peopleForm = new FormGroup({
    search: this.searchControl,
  });

  constructor(private readonly starwarsService: StarwarsService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        map((value) => value?.toLowerCase()),
        mergeMap((value) => this.starwarsService.searchPeople(value!))
      )
      .subscribe((results) => {
        this.people = results;
      });
  }

  ngOnInit(): void {}
}
