sap.ui.define(["sap/ui/core/mvc/Controller"],
 function (Controller) {

  return Controller.extend("gsk.list.mylist.controller.Detail", {
    // Oninit method for detail controller
    onInit: function () {
      debugger;
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("RouteDetail").attachPatternMatched(function (oEvent){
          debugger;
          var sProductId = oEvent.getParameter("arguments").ProductId;
          var oHeaderModel = this.getOwnerComponent().getModel("mHeader");
          var ProductList= oHeaderModel.getProperty("/ProductCollection");

          var selectproduct = ProductList.filter(function(oProd, i){
                return oProd.ProductId === sProductId;
          });
        this.getView().getModel("mPro_detail").setProperty("/ProductDetails", selectproduct[0])
      }, this);
      var oData = {
        ProductDetails: {},
      };
      var oModel = new sap.ui.model.json.JSONModel(oData);
      this.getView().setModel(oModel, "mPro_detail");
    }

  });
});
