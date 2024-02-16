import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MillService } from '../../http/services/user/mill.service';
import { Mill } from '../../models/mill';

@Component({
  selector: 'app-mill-fla-mod-and-del',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './mill-fla-mod-and-del.component.html',
  providers: [MillService],
  styleUrl: './mill-fla-mod-and-del.component.css'
})
export class MillFlaModAndDelComponent{
  arrayMill: Mill[] = [];
  mill: Mill = new Mill();

  constructor(private millService: MillService) { }

  ngOnInit(): void {
    this.searchMill('');
  }

  // then
  async searchMill(query: string) {
    await this.millService.searchMill(query).then(promise => promise.subscribe(res => this.mill = res[0]));
  }

  async updateMill() {
    await this.millService.modifyMill(this.mill).then(promise => promise.subscribe());
    this.searchMill('');
  }

}
