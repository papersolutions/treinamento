import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MillService } from '../../http/services/user/mill.service';
import { Mill } from '../../models/mill';

@Component({
  selector: 'app-mill-fla',
  templateUrl: './mill-fla.component.html',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  providers: [MillService],
  styleUrls: ['./mill-fla.component.css']
}) export class MillFlaComponent implements OnInit {
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

  selectedMillId: number | null = null;

  async deleteMill() {
    if (this.mill.millID !== undefined) {
      this.millService.deleteMill(this.mill.id).then(promise => promise.subscribe())
      this.searchMill('');
    };
  }
}