sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ns.loginpage.controller.controller.App", {
        onInit() {
        },
        onShowHello : function () {
          MessageToast.show("Welcome To ZEDBUS");
        },
        onPressLogin: function () {
          var uname = this.getView().byId("nm").value();
          var password = this.getView().byId("pwd").value();

          var name = "abcd";
          var pass = "1234";
          if(uname.getValue()===''){
            MessageToast.show("Please Enter Username!");
          }
          else if(password.getValue()===''){
            MessageToast.show("Please Enter Password!");
          }
          else{
            if(uname.getValue()===name && password.getValue()===pass){
              MessageToast.show("Login Successful!");
            }
            else{
              MessageToast.show("Invalid Username or Password!");
            }
          }
      }
      });
    }
  );
  