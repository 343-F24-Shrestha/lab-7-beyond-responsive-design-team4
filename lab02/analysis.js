"use strict";

/**
 * Return an array summarizing the total number of issues per report.
 *
 * Each object in the returned array has the format:
 * { url: <report url>, issues: <total number> }
 */
function totalIssues() {
  const result = [];
  for (let i = 0; i < reports.length; i++) {
    result.push({
    url: reports[i].url,
    issues: reports[i].allIssues.length
  });
  }
  return result;
}

/**
 * Return an object containing the total number of issues by impact level
 * across all reports.
 *
 * The result has the same format as the "issueSummary" object.
 */
function issuesByImpact() {
  const totalIssueImpact= {
      critical: 0,
      serious: 0,
      moderate: 0,
      minor: 0,
      bestPractices: 0,
      needsReview: 0
    };
    for (let i = 0; i < reports.length; i++) {
      totalIssueImpact.critical += reports[i].issueSummary.critical;
      totalIssueImpact.serious += reports[i].issueSummary.serious;
      totalIssueImpact.moderate += reports[i].issueSummary.moderate;
      totalIssueImpact.minor += reports[i].issueSummary.minor;
      totalIssueImpact.bestPractices += reports[i].issueSummary.bestPractices;
      totalIssueImpact.needsReview += reports[i].issueSummary.needsReview;
  }

  return totalIssueImpact;

}

/**
 * Return an object representing the total number of issues by failed rule
 * across all reports.
 *
 * The result has this format: { <rule name>: <total count>, ... }
 *
 * Hint: Start with an empty object. For each failed rule, either add the rule
 * to the result or update the total already in the result.
 */
function failedRules() {
  const result = {};
  for (let i = 0; i < reports.length; i++) {
    const rules = reports[i].failedRules;
    for (let j = 0; j < rules.length; j++) {
      const name = rules[j].name;
      const count = rules[j].count;
      
      if (result[name] === undefined) {
        result[name] = count;      
      } else {
        result[name] += count;      
      }
    }
  }
  return result;

  
}

/**
 * Return an array of issue objects whose impact is "critical".
 *
 * These objects are taken directly from the allIssues arrays in the reports.
 */
function criticalIssues() {
  const result = [];
  for (let i = 0; i < reports.length; i++) {
    const issues = reports[i].allIssues;
    for (let j = 0; j < issues.length; j++) {
      if (issues[j].impact === "critical") {
        result.push(issues[j]);
      }
    }

  }
  return result;
}


// Test each function
console.log("Total Issues:", totalIssues())
console.log("Issues by Impact:", issuesByImpact())
console.log("Failed Rules:", failedRules())
console.log("Critical Issues:", criticalIssues())
