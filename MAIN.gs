//------------------------------------GOOGLE CUSTOM LINK----------------------------------
var sheet_url = "SPREADSHEET LINK"             // put in your spreadsheet sharing URL
var tabName = "MAIN SHEET NAME"                // the name of the tab to host the data
//------------------------------------TELEGRAM CUSTOM LINK----------------------------------
var token = "TELEGRAM BOT TOKEN"; 
var pullChat_ID = "MAIN COM GROUP ID"
var pullChatThread_ID = "MAIN COM GROUP CHAT TOPIC ID"
var pushChat_ID = "MEMBER GROUP ID"
var pushChatThread_ID = "MEMBER GROUP CHAT TOPIC ID"
//----------------------------------GLOBAL VARIABLE-------------------------------
var telegramUrl = "https://api.telegram.org/bot" + token; 
// ------------------------------------- MAIN FUNCTION --------------------------------------
function initialise_Poll(){
  var poll_option = [
    "Thu: 10am - 12pm",
    "Thu: 2pm - 6pm",
    "Thu: 8pm - 10pm",
    "Fri: 10am - 12pm",
    "Fri: 2pm - 6pm",
    "Fri: 8pm - 10pm"
  ]
  message_id = sendPoll(pullChat_ID,pullChatThread_ID,"Lab Availibilities🏠",poll_option)
  pushValue(message_id,1,1,tabName ,sheet_url)
  sendMessage(pullChat_ID,pullChatThread_ID,"Hello MainComs🌟, please fill in this poll for your availibility for the lab🏠")
}

function close_forward_Poll(){
  message_id = pullValue(1,1,tabName ,sheet_url)
  stopPoll(pullChat_ID,message_id)
  forwardMessage(pushChat_ID,pushChatThread_ID,pullChat_ID,message_id)
  sendMessage(pushChat_ID,pushChatThread_ID,"Hello members, above are the availibilities of for the upcoming days!")
}

// -----------------------------------------------SUPPORT FUNCTION--------------------------------------------------------
function formatDate(date){
  return Utilities.formatDate(date, "GMT", "dd/MMM/yy E");
}

function sendMessage(chat_id,message_thread_id, text) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      message_thread_id: String(message_thread_id),
      text: text,
      parse_mode: "html",
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function sendPoll(chat_id, message_thread_ids, questions, answer_array,anonymous=false,multiple_answers=true) { 
  var data = {
    method: "post",
    payload: {
      'method'            : 'sendPoll',
      'chat_id'           : String(chat_id),
      'message_thread_id' : String(message_thread_ids) , 
      'question'          : String(questions),
      'options'           : JSON.stringify(answer_array),
      'is_anonymous'      : String(anonymous),
      'allows_multiple_answers' : String(multiple_answers),
    }
  }
  response = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  var data = JSON.parse(response.getContentText()).result.message_id;
  return data
}

function forwardMessage(chat_id,message_thread_ids,from_chat_id,message_ids){
  var data = {
    method: "post",
    payload: {
      'method'            : 'forwardMessage',
      'chat_id'           : String(chat_id),
      'message_thread_id' : String(message_thread_ids) , 
      'from_chat_id'      : String(from_chat_id),
      'message_id'        : String(message_ids) , 
    }
  }
  response = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  var data = JSON.parse(response.getContentText());
}

function stopPoll(chat_id,message_ids){
  var data = {
    method: "post",
    payload: {
      'method'            : 'stopPoll',
      'chat_id'           : String(chat_id),
      'message_id'        : String(message_ids) , 
    }
  }
  response = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  var data = JSON.parse(response.getContentText());
  console.log(data)
}

function pullValue(row,column,tab_name ,target_sheet){
  target_cell = SpreadsheetApp.openByUrl(target_sheet).getSheetByName(tab_name).getRange(row,column).getValue();
  return target_cell;
}

function pushValue(value,row,column,tab_name ,target_sheet){
  targetSheet = SpreadsheetApp.openByUrl(target_sheet).getSheetByName(tab_name).getRange(row,column).setValue(value);
}
