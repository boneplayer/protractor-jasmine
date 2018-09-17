import { $, ElementFinder, element, by } from "protractor";

export class Dashboard {
    
    
    public entitiesButton: ElementFinder;
    public branchDropdown: ElementFinder;
    public staffDropdown: ElementFinder;
    constructor() {
        this.entitiesButton = $('span[translate="global.menu.entities.main"]');
        this.branchDropdown = $('a[ui-sref="branch"]');
        this.staffDropdown = $('a[ui-sref="staff"]');

    }
}
