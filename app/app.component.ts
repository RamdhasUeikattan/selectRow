import { Component, OnInit, ViewChild } from '@angular/core';
import { gridData1 } from './data';
import { GridComponent } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `
    <input type='text' [(ngModel)]='index'>
    <button ej-button (click)=click()>select row</button>
    <ej-grid #grid [dataSource]='data' height='415px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150 ></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ej-grid>
                `
})
export class AppComponent implements OnInit {

    public data: Object[];
    public index: number =0;

    @ViewChild('grid')
    public grid: GridComponent;
   
    ngOnInit(): void {
        this.data = gridData1;
    }

    click(){
        if(this.grid.getSelectedRowIndexes().indexOf(this.index) === -1){
            this.grid.selectRow(this.index);
        }
    }
}
