describe("测试点赞",function(){
    beforeEach(function(){
        // jasmine.getFixtures().fixturesPath = '/';
        // jasmine.getFixtures().load("./base/index.html")
        // loadFixtures("index.html")
    })
    it("+1函数的应用",function(){
        var thumb = new Thumb();
        // console.log($('#praise'))
        // console.log(thumb)
        // expect(thumb.addOne()).toBe(true);
        expect(thumb.getValue(2)).toBe(3);
    });
});