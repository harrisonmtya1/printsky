import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

usuario:any

   constructor(private route:ActivatedRoute){

   }

   ngOnInit(){
     this.route.params.subscribe(params=>{
       console.log(JSON.parse(params['usuario']))
        
     })
   }

}
