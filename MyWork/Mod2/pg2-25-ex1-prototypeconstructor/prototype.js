"use strict";

function Policy(polNum, polHolder, polType, origPolDate, renewDate, polPrem) {
	this.policyNumber = polNum;
	this.policyHolder = polHolder;
	this.policyType = polType;
	this.originalPolicyDate = origPolDate;
	this.policyRenewalDate = renewDate;
	this.policyPremium = polPrem;
}

Policy.prototype.renew = function(premiumChangePct) {
    const msecPerYear = 1000 * 60 * 60 * 24 * 366;

    this.policyRenewalDate = new Date(this.policyRenewalDate.getTime() + msecPerYear);
    this.policyPremium = this.policyPremium * (1 + premiumChangePct);
};

Policy.prototype.display = function() {
    console.log(
        `\nPolicy Number: ${this.policyNumber}
        \nPolicy Holder: ${this.policyHolder}
        \nPolicy Type: ${this.policyType} 
        \nOriginal Policy Date: ${this.originalPolicyDate.toDateString()}
        \nPolicy Renewal Date: ${this.policyRenewalDate.toDateString()}
        \nPolicy Premium: $${Number(this.policyPremium.toFixed(2))}
        `
    );
}

let policies = [
	new Policy("101P", "Cori Trudeau", "auto", new Date(2017, 7, 27), new Date(2019, 7, 27), 527),
	new Policy("102P", "Will Ader", "home", new Date(2015, 3, 27), new Date(2019, 3, 27), 1300),
	new Policy("103P", "Paula Harvey", "auto", new Date(2008, 7, 12), new Date(2019, 7, 12), 1845),
	new Policy("104P", "Batman", "auto", new Date(2012, 2, 30), new Date(2019, 2, 30), 1240),
	new Policy("105P", "Stephanie Long", "home", new Date(2017, 7, 27), new Date(2019, 7, 27), 835),
];

for (let i = 0; i < policies.length; i++) {
    let p = policies[i];
    let percentChange = checkRenewal(p);
	if (percentChange != 0) {
        p.renew(percentChange);
	}
	p.display(p);
}

function checkRenewal(p) {
	let renewMonth = p.policyRenewalDate.getMonth();
	let renewDate = p.policyRenewalDate.getDate();
	let renewYear = p.policyRenewalDate.getYear();
	let todayMonth = new Date().getMonth();
	let todayDate = new Date().getDate();
	let todayYear = new Date().getYear();

	if (renewMonth == todayMonth && renewDate == todayDate && renewYear == todayYear) {
		if (p.policyType == "home") {
			let percentChange = 0.03;
			return percentChange;
		} else if (p.policyType == "auto") {
			let renewYear = p.originalPolicyDate.getYear();
			let todayYear = new Date().getYear();
			if (todayYear < Number(renewYear) + 3) {
				let percentChange = 0.05;
				return percentChange;
			} else {
				return 0;
			}
		}
	} else {
		return 0;
	}
}
