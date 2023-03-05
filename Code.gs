function clearDishwasher(e) {
  Logger.log("Dishwasher Event object: " + JSON.stringify(e));
  if (!e) {
    Logger.log("No event");
    return;
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dishwasher");
  var range = sheet.getActiveRange();
  var column = range.getColumn();
  // need emptied by column
  if (column === 3) { 
    var name = sheet.getRange(sheet.getLastRow(), column).getValue();
    Logger.log("Dishwasher event");
    if(name == "haha3") {
      Logger.log("haha3 emptied the dishwasher");
      MailApp.sendEmail(
            {
          to: "haha1@gmail.com",
          subject: "Time to Clear Dishwasher!!!",
          body: "Hi hah1, this is an automated mail to inform you that haha3 has cleared the dishwasher, its your turn next!!"
        }
      );
    } else if (name == "haha1"){
      Logger.log("haha1 emptied the dishwasher");
      MailApp.sendEmail(
            {
          to: "haha2@gmail.com",
          subject: "Time to Clear Dishwasher!!!",
          body: "Hi haha2, this is an automated mail to inform you that haha1 has cleared the dishwasher, its your turn next!!"
        }
      );
    } else {
      Logger.log("haha2 emptied the dishwasher");
      MailApp.sendEmail(
            {
          to: "haha3@gmail.com",
          subject: "Time to Clear Dishwasher!!!",
          body: "Hi haha3, this is an automated mail to inform you that haha2 has cleared the dishwasher, its your turn next!!"
        }
      );
    }
  }else{
    Logger.log("Column 3 unedited");
  }
}

function clearTrash(e){
  Logger.log("Trash Event object: " + JSON.stringify(e));
  if (!e) {
    Logger.log("No event");
    return;
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Trash");
  var range = sheet.getActiveRange();
  var column = range.getColumn();
  // Need emptied by column
  if (column === 2) { 
    var name = sheet.getRange(sheet.getLastRow(), column).getValue();
    Logger.log("Trash event");
    if(name == "haha3") {
      Logger.log("haha3 emptied the Trash");
      MailApp.sendEmail(
            {
          to: "haha1@gmail.com",
          subject: "Time to Clear Trash!!!",
          body: "Hi haha1, this is an automated mail to inform you that haha3 has cleared the Trash, its your turn next!!"
        }
      );
    } else if (name == "haha1"){
      Logger.log("haha1 emptied the Trash");
      MailApp.sendEmail(
            {
          to: "haha2@gmail.com",
          subject: "Time to Clear Trash!!!",
          body: "Hi haha2, this is an automated mail to inform you that haha1 has cleared the Trash, its your turn next!!"
        }
      );
    } else {
      Logger.log("haha2 emptied the Trash");
      MailApp.sendEmail(
            {
          to: "haha3@gmail.com",
          subject: "Time to Clear Trash!!!",
          body: "Hi haha3, this is an automated mail to inform you that haha2 has cleared the Trash, its your turn next!!"
        }
      );
    }
  }else{
    Logger.log("Column 2 unedited");
  }
}

function _onEdit(e){
  clearTrash(e);
  Logger.log('Done with Trash');
  clearDishwasher(e);
}
