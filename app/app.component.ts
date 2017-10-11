import { Component, OnInit, ViewChild } from '@angular/core';
import { gridData1 } from './data';
import { GridComponent, RowSelectEventArgs, EditSettingsModel } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `
    <input (change)='change($event)'>
    <ej-grid #grid [dataSource]='data' height='315px' [editSettings]='editsetting' [toolbar]='toolbar' (actionComplete)='action($event)'>
                <e-columns>
                    <e-column field='OrderID' [isPrimaryKey]='true' headerText='Order ID' textAlign='right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150 [visible]='false'></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ej-grid>
                `
})
export class AppComponent implements OnInit {

    public data: Object[];
    public editsetting: EditSettingsModel;
    public toolbar;

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
        this.editsetting = {allowEditing: true, allowAdding: true, allowDeleting: true};
        this.data = gridData1;
    }

    change(args: Event){
        this.grid.selectRow(parseInt((<HTMLInputElement>args.target).value, 10));
    }

    // rowSelected(args: RowSelectEventArgs) {
    //     let selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
    //     let selectedrecords: Object[] = this.grid.getSelectedRecords();  // Get the selected records.
    //     alert(selectedrowindex + '\n' +''); // To alert the selected row indexes.
    // }
}