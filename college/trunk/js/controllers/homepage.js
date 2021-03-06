/**
 * footer
 * Created by pkcms.cn on 2017/6/1.
 */
app.controller("homepage",function (getImg,getModule,$scope) {
  var vm = this;
  var promise = getModule.getModule;
  vm.exchanges = {};
  vm.activity = {};
  // 获取学术交流
  vm.exchange = function(){
    promise(2,1,100).then(function(res){
      vm.academicExchange = res.data.data;
      vm.exchanges.img = getImg.getImg(vm.academicExchange,"img");
      vm.exchanges.title = getImg.getImg(vm.academicExchange,"title");
      vm.exchanges.content = getImg.getImg(vm.academicExchange,"content");
      vm.exchanges.id = getImg.getImg(vm.academicExchange,"id");
      $scope.$broadcast("to-child");
    })
  };
  vm.activityOfStudent = function(){
    promise(3,1,100).then(function(res){
      vm.activities = res.data.data;
      vm.activity.img = getImg.getImg(vm.activities,"img");
      vm.activity.title = getImg.getImg(vm.activities,"title");
      vm.activity.id = getImg.getImg(vm.activities,"id");
    })
  }
  vm.exchange();
  vm.activityOfStudent();
})
