# How is the Angular 2 multiple select dropdown package used?

- Add the `AngularMultiSelectModule` import in the `app.module` file.

- In the component that will consume the dropdown component define the following variables:

```
dropdownList = [];
selectedItems = [];
dropdownSettings = {};
```

- Then use the `onInit` lifecycle to populate the dropdown items and settings. As follows:

```
this.dropdownList = [
    {"id":0,"itemName":"Item 0"},
    ...
    {"id":n,"Item N"}
];
```

```
this.selectedItems = [
    {"id":0,"itemName":"Item 0"},
    ...
    {"id":n,"Item N"}
];
```

```
this.dropdownSettings = { 
    singleSelection: false, 
    text:"Select Countries",
    selectAllText:'Select All',
    unSelectAllText:'UnSelect All',
    enableSearchFilter: true,
    classes:"myclass custom-class"
}; 
```

- On the same component where the above variables where defined. Define the following event handlers:

```
onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}

OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}

onSelectAll(items: any){
    console.log(items);
}

onDeSelectAll(items: any){
    console.log(items);
}
```

- Lastly, use the `angular2-multiselect` directive in the template:

```
<angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" 
    [settings]="dropdownSettings" 
    (onSelect)="onItemSelect($event)" 
    (onDeSelect)="OnItemDeSelect($event)"
    (onSelectAll)="onSelectAll($event)"
    (onDeSelectAll)="onDeSelectAll($event)"></angular2-multiselect>
```

For more info: [click here](https://www.npmjs.com/package/angular2-multiselect-dropdown)
