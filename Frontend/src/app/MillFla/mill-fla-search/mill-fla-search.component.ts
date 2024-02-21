import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MillService } from '../../http/services/mill-fla-service/mill-fla.service';
import { Mill } from '../../models/mill';
import { MillTableComponent } from '../../components/mill-table/mill-table.component';

@Component({
    selector: 'app-mill-fla-search',
    standalone: true,
    imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, MillTableComponent],
    templateUrl: './mill-fla-search.component.html',
    providers: [MillService],
    styleUrl: './mill-fla-search.component.css'
})
export class MillFlaSearchComponent {
    mill: Mill = new Mill();
    id: number = 0;
    arrayMill: Mill[] = [];
    showUpdateForm: boolean = false; 
    selectedMill: Mill = new Mill();

    constructor(private millService: MillService) { }

    async buscarMill() {
        await this.millService.getMill(this.id).then(promise => promise.subscribe({
            next: (retorno) => {
                this.arrayMill = retorno;
                if (this.arrayMill.length > 0) {
                    this.selectedMill = this.arrayMill[0];
                    this.showUpdateForm = false;
                   // console.log("Buscar: ", this.selectedMill);
                }
            }
        }));
    }

    deletarMill() {
        this.arrayMill = [];
        this.millService.deleteMill(this.id).then(promise => promise.subscribe(() => {
            console.log('User deleted successfully');
        }));
    }

    async updateMill() {
        //console.log("Updating: ", this.selectedMill);
        await (await this.millService.modifyMill(this.selectedMill)).subscribe(() => {
            console.log('Mill updated successfully');
            this.showUpdateForm = false; 
            this.buscarMill();
        });
    }

    abrirForm(){
        this.showUpdateForm = true; 
    }
}

