sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // "gsk.list.mylist.utils.CommonMethos"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
  
        return Controller.extend("gsk.list.mylist.controller.List", {
            onInit: function () {
                var oData = {
                    "productDetails": {}
                };
                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel, "mProd")

            },
            ListCount: function(List){
                return "Products (" + List.length + ")";
            },
            onSelectProduct: function(oEvent){
                var that = this;   
                var oSelectedData = oEvent.getSource().getBindingContext("mHeader").getObject();
                var mProdModel = this.getView().getModel("mProd");
                mProdModel.setProperty("/productDetails", oSelectedData);
                var router = this.getOwnerComponent().getRouter();
                router.navTo("RouteDetail",{
                    ProductId: oSelectedData.ProductId
                }); 
            },

            onpressNext: function(){
                var router = this.getOwnerComponent().getRouter();
                router.navTo("RouteDetail",{
                    ProductId: "12345"
                });
            }
        });
    });
