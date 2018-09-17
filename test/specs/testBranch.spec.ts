import { browser, ExpectedConditions } from "protractor";
import { Dashboard } from "../pages/dashboard";
import { Branch } from "../pages/branch";

describe('To create and validate branches', () => {

    const dashboard : Dashboard = new Dashboard();
    const branch: Branch = new Branch();

    it('To test branch dropdown navigation', async () => {
        await browser.wait(ExpectedConditions.visibilityOf(dashboard.entitiesButton), 3000);
        await dashboard.entitiesButton.click();
        await dashboard.branchDropdown.click();
        await expect(browser.getTitle()).toEqual('Branches');
    });

    it('To create a new branch', async () => {
       await branch.createBranchButton.click();
       await browser.wait(ExpectedConditions.visibilityOf(branch.branchName), 3000);
       await branch.branchName.clear();
       await branch.branchName.sendKeys('testBranch');
       await branch.branchCode.clear();
       await branch.branchCode.sendKeys('1234');
       await browser.wait(ExpectedConditions.visibilityOf(branch.saveBranchButton), 3000);
       await branch.saveBranchButton.click();
       
    });

    it('To search & delete a branch' , async () => {
        await branch.searchBranch.sendKeys('testBranch');
        await branch.searchBranchButton.click();
        await expect(branch.searchBranchName.getText()).toEqual('testBranch');
        browser.wait(ExpectedConditions.visibilityOf(branch.deleteBranch), 3000);
        await branch.deleteBranch.click();
        browser.wait(ExpectedConditions.visibilityOf(branch.deleteBranchButton), 3000);
        try {
            await branch.deleteBranchButton.click();
        } catch (Exception) {
            console.log('This Branch has a linked Staff, Please delete the staff first');
        }

    });

});
