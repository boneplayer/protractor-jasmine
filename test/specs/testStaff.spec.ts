import { browser, ExpectedConditions } from "protractor";
import { Dashboard } from "../pages/dashboard";
import { Staff } from "../pages/staff";

describe('To create and validate staff', () => {

    const dashboard : Dashboard = new Dashboard();
    const staff: Staff = new Staff();

    it('To test staff dropdown navigation', async () => {
        await browser.wait(ExpectedConditions.visibilityOf(dashboard.entitiesButton), 3000);
        await dashboard.entitiesButton.click();
        await dashboard.staffDropdown.click();
        await expect(browser.getTitle()).toEqual('Staffs');
    });

    it('To create a new staff', async () => {
       await staff.createStaffButton.click();
       await browser.wait(ExpectedConditions.visibilityOf(staff.staffName), 3000);
       await staff.staffName.clear();
       await staff.staffName.sendKeys('testStaff');
       await staff.branchDropdown.click();
       await browser.wait(ExpectedConditions.visibilityOf(staff.saveStaffButton), 3000);
       await staff.saveStaffButton.click();
       
    });

    it('To search & delete a staff' , async () => {
        await staff.searchStuff.clear();
        await staff.searchStuff.sendKeys('testStaff');
        await staff.searchStaffButton.click();
        await expect(staff.searchStaffName.getText()).toEqual('testStaff');
        browser.wait(ExpectedConditions.visibilityOf(staff.deleteStaff), 3000);
        await staff.deleteStaff.click();
        browser.wait(ExpectedConditions.visibilityOf(staff.deleteStaffButton), 3000);
        await staff.deleteStaffButton.click();

    })

});
