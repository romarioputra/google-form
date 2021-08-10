import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-name-box',
  templateUrl: './name-box.component.html',
  styleUrls: ['./name-box.component.css']
})
export class NameBoxComponent implements OnInit {
  names: string[] = [
    'Nazmi Muhammad Abkary',
    'Iskandar Zulkarnaen',
    'Rifqi Mulya Kiswanto',
    'Cloudias Imani Pradana',
    'Yohanes Romario Putra Susjaya',
    'Al-Aqsa Krisnaya Abidin',
    'Ryo Richardo',
    'Nabilah Erfariani',
    'Shafira Naya Aprisadianti'
  ]
  selectedOption: string = this.names[0];
  constructor(private formService: FormService) { }

  ngOnInit(): void {
    
  }
  selectChangeHandler(event: any) {
    this.formService.name = event.target.value;
  }

}
