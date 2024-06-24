import { Component, signal, inject, effect } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user.model';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [UserTableComponent, SearchBarComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {
  listUser = signal<User[]>([]);
  listUserByFilter = signal<User[]>([]);
  private userService = inject(UserService);
  textToSearch: string= '';

  constructor() {
    effect( () => {
      console.log('effect');
    })
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (result) => {
        this.listUser.set(result.results);
        this.listUserByFilter.set(result.results);
      },
      error: ()=> {
        console.log('error');
      }
    })
  }

  getText(event:any) {
    this.textToSearch=event.trim();
    if(this.textToSearch.length === 0) this.listUserByFilter.set(this.listUser());
    if(this.textToSearch.length >= 3) this.showResultFilter();
  }

  showResultFilter() {
    let result:User[] = [];
    const users = this.listUser();
    result =  users.filter(user => user.name.first.toLocaleLowerCase().includes(this.textToSearch)  || user.name.last.toLocaleLowerCase().includes(this.textToSearch));
    this.listUserByFilter.set(result);
  }
}
