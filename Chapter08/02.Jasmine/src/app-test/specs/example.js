describe("Basic Assumptions", function() {
    it("has Ext JS 4 loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(4);
    });
    it("has loaded MyApp code",function(){
        expect(MyApp).toBeDefined();
    });
});
