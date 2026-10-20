/**
 * Karen Cutler — log every website request in a Google Sheet.
 *
 * Setup (5 minutes, done once from Karen's Google account):
 * 1. Create a Google Sheet named "Website requests".
 * 2. Extensions > Apps Script. Delete the sample code and paste this file.
 * 3. Deploy > New deployment > type "Web app".
 *    Execute as: Me.  Who has access: Anyone.  Click Deploy and authorize.
 * 4. Copy the web app URL and paste it into SHEET_URL at the top of the
 *    "delivery config" section in assets/site.js, then push to GitHub.
 *
 * Every request from the intake form then adds a row, with a "Status"
 * column Karen can use as a simple follow-up tracker (New / Called / Client).
 * Email notifications through FormSubmit keep working as before.
 */
const COLUMNS = ['Date', 'Status', 'Name', 'Email', 'Phone', 'Reach me by', 'Goals', 'Experience',
  'Life stage', 'Health notes', 'Noticed lately', 'Where', 'Option', 'Per week', 'Best times',
  'Message', 'Language'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  const data = JSON.parse(e.postData.contents);
  const row = COLUMNS.map(c => {
    if (c === 'Date') return new Date(data.date || Date.now());
    if (c === 'Status') return 'New';
    return data[c] || '';
  });
  sheet.appendRow(row);
  return ContentService.createTextOutput('ok');
}
