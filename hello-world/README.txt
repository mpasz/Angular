    dyrektywy
    
    template: //uzycie dyrektywy poprzedzamy znakiem * UWAGA po dyrektywie ngFor jest pętla analogiczna dp foreach
        `<h2>{{ title }}</h2>
         <ul>
            <li *ngFor="let course of courses">  
            {{ course }}
            </li>
         </ul>   
         `