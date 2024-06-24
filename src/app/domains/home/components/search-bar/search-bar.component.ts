import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  textToSearch = new FormControl('');
  @Output() getSearch = new EventEmitter();

  showResult() {
    this.getSearch.emit(this.textToSearch.value?.trim().toLocaleLowerCase());
  }
}
