// JavaScript source code
// Unique namespace for your libraries

var Sdk = window.Sdk || {};

(function () {

    // Define some global variables
    var myUniqueId = "_myUniqueId";  // ID for notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName;
    var message = currentUserName + ": Your JavaScript code in action!";

    // Code to run in the form OnLoad event
    this.formOnLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();

        // display the form level notification as an INFO
        formContext.ui.setFormNotification(message, "INFO", myUniqueId);

        // wait for 5 sec.
        window.setTimeout(function () { fromContext.uni.clearFormNotification(myUniqueId); }, 5000);

    }

    // code to run in attribute OnChange event

    this.attributeOnChange = function (executeContext) {
        var formContext = executionContext.getFormContext();

        // Automatically set some field values if the account name contains "Contoso"

        var accountName = formContext.getAttribute("name").getValue();
        if (accountName.toLowerCase().search("contoso") != -1) {
            formContext.getAttribute("websiteurl").setValue("https://www.contoso.com");
            formContext.getAttribute("telephone1").setValue("425-555-0100");
            formContext.getAttribute("description").setValue("Website URL, Phone and Description set using custom script. ");

        }
    }

    // Code to run in the form OnSave event
    this.formOnSave = function () {
        // Display an alert dialog
        Xrm.Navigation.openAlertDialog({ text: "Record saved" });
    }

}).call(Sdk);



/*
function displayname(executionContext) {

    var formContext = executionContext.getFormContext();

    var firstName = formContext.getAttribute("firstName").getValue();
    var lastName  = formContext.getAttribute("lastName").getValue();
    
    console.log(firstName + " " + lastName);
}
*/






