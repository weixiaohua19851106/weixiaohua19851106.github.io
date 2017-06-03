/**
 * Created by Administrator on 2017-6-3.
 */
app.controller('faculty',function($rootScope,fakeData,$state,switchItem){
    var vm=this;
    vm.data=fakeData;
    vm.getTeamTitle=function(item){
        item=  switchItem.switchBooleans(item);
        $rootScope.id= item;
    };
    //默认跳转团队介绍子路由；
    vm.getTeamIntroduce=function(){
        $state.go('main.faculty.facultyContent',{teacherId:0})
    };
    vm.getTeamIntroduce();
});
app.controller('facultyContent',function($rootScope,fakeData,$stateParams){
    var vm=this;
    vm.data={};
    //获取文本内容
    vm.facultyContent=function(){
        fakeData.introduceContent.forEach(function(item){
            if ($stateParams.teacherId==item.teacherId){
                vm.data.title=item.title;
                vm.data.content=item.name
            }
        })
    };
    vm.facultyContent();
    //判断teacherId以便确定折叠菜单是否展开
    $rootScope.currentTeacherId=function(){
        if ($stateParams.teacherId==0){
            $rootScope.id=true
        }else {
            $rootScope.id=false
        }
    };
    $rootScope.currentTeacherId();
});