/**
 * Created by Administrator on 2017-6-3.
 */
app.controller('Faculty',function($rootScope,fakeData){
    var vm=this;
    vm.data=fakeData;
    vm.getListName=function(item){
        vm.title=item
    };
    vm.titleName=function(){
        //获取url参数
        if($rootScope.teacherId==undefined){
            $rootScope.teacherId= window.location.href.substring(window.location.href.indexOf('=')+1)
        }
        fakeData.introduceList.forEach(function(item){
            if ( $rootScope.teacherId==item.teacherId){
                vm.title=item.name
            }
        })
    };
    vm.titleName();
});
app.controller('FacultyContent',function($rootScope,fakeData,$stateParams){
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
    $rootScope.teacherId=$stateParams.teacherId
});
