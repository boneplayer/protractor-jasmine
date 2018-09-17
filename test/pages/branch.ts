import { $, ElementFinder, element, by, ElementArrayFinder, $$ } from "protractor";

export class Branch {
    
    
    public createBranchButton: ElementFinder;
    public searchBranchButton: ElementFinder;
    public searchBranch: ElementFinder;
    public saveBranchButton: ElementFinder;
    public branchName: ElementFinder;
    public branchCode: ElementFinder;
    public deleteBranch: ElementFinder;
    public searchBranchName : ElementFinder;
    public deleteBranchButton: ElementFinder;
    constructor() {
        this.createBranchButton = $('span[translate="gurukulaApp.branch.home.createLabel"]');
        this.searchBranchButton = $('button[ng-click="search()"]');
        this.searchBranch = element(by.id('searchQuery'));
        this.saveBranchButton = $('#saveBranchModal button[type="submit"]');
        this.branchName = element(by.model('branch.name'));
        this.branchCode = element(by.model('branch.code'));
        this.deleteBranch = $$('div.table-responsive span[translate="entity.action.delete"]').first();
        this.searchBranchName = element.all(by.repeater('branch in branches')).first().$$('td.ng-binding').first(); 
        this.deleteBranchButton = $('#deleteBranchConfirmation button[type="submit"]');

    }
}
