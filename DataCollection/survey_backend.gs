/**
 * Dibner study room survey: Google Sheets backend
 *
 * 1. Create a Google Sheet. Go to Extensions > Apps Script.
 * 2. Paste this file, then click Deploy > New deployment > Web app.
 *    Execute as: Me. Who has access: Anyone.
 * 3. Copy the web app URL into ENDPOINT in dibner_survey.html.
 * Each submission becomes one row in the sheet.
 */
const HEADERS = ["submittedAt","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13"];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow(HEADERS.map(h => data[h] ?? ""));
  return ContentService.createTextOutput("ok");
}
