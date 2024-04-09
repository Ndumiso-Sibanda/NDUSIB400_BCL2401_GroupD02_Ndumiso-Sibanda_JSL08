let bankBranchInstance = null;

class BankBranch {
 constructor(branchInfo) {
  if (!bankBranchInstance) {
   this.branchInfo = branchInfo;
   bankBranchInstance = this;
  }
  return bankBranchInstance;
 }

 getBranchInfo() {
  return this.branchInfo;
 }

 // Other methods related to branch management
}

// Usage
const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Outputs: Main Street Branch

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Still outputs: Main Street Branch, because it's a singleton

console.log(branchA === branchB); // true, both variables point to the same instance
