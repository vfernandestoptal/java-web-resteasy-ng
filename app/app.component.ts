import { Component, OnInit } from '@angular/core';
import { DataService } from './dataservice';
import { CsvRow } from './csv-row';
import { Configuration } from './app.constants';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html',
  providers: [DataService, Configuration]
})
export class AppComponent implements OnInit {
  sendFileUrl : string;
  data : CsvRow[];
  errorMessage : 'Observable';

    constructor(private dataService: DataService, private configuration: Configuration) { 
      this.dataService=dataService;
      this.sendFileUrl = configuration.ServerWithApiUrl + 'upload';
    }
 
    ngOnInit() {
        //this.getObservableItems();
        this.getPromiseData();
    }

    getObservableItems() {
      this.dataService.getFiles()
                      .subscribe(
                        rawdata => this.data = rawdata,
                        error =>  this.errorMessage = <any>error);
    }

    getPromiseData() {
      this.dataService.getData()
      .then(rawdata => this.data = rawdata,
                     error =>  this.errorMessage = <any>error);
      
    }

}