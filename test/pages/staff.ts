import { $, ElementFinder, element, by, $$ } from "protractor";

export class Staff {
    
    
    public createStaffButton: ElementFinder;
    public searchStaffButton: ElementFinder;
    public searchStuff: ElementFinder;
    public saveStaffButton: ElementFinder;
    public staffName: ElementFinder;
    public branchDropdown: ElementFinder;
    public deleteStaff: ElementFinder;
    public searchStaffName: ElementFinder;
    public deleteStaffButton: ElementFinder;
    constructor() {
        this.createStaffButton = $('span[translate="gurukulaApp.staff.home.createLabel"]');
        this.searchStaffButton = $('button[ng-click="search()"]');
        this.searchStuff = element(by.id('searchQuery'));
        this.saveStaffButton = $('#saveStaffModal button[type="submit"]');
        this.staffName = element(by.model('staff.name'));
        this.branchDropdown = element.all(by.model('staff.related_branchId')).$$('select option').get(1);
        this.deleteStaff = $$('div.table-responsive span[translate="entity.action.delete"]').first();
        this.searchStaffName = element.all(by.repeater('staff in staffs')).first().$$('td.ng-binding').first(); 
        this.deleteStaffButton = $('#deleteStaffConfirmation button[type="submit"]');


    }
}
