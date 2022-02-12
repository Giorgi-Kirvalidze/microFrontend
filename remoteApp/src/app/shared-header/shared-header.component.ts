import { Component, OnInit } from '@angular/core';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent implements OnInit {
  constructor(private randomService: RandomService) {}
  name = this.randomService.name;
  ngOnInit(): void {}
}
