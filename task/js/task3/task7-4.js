/**
 * Created by mosqlee on 2017/3/28.
 */
var players = document.getElementById("player");
var killer = document.getElementById("killer");
var fammer = document.getElementById("person");
var blur =  document.getElementById("player");
var player;
var per_arr = [];
var per_selected = [];
var per_kill = new Array;
var per_vote = new Array;
var per_step = new Array;
var per_merry = new Array;
function play() {
    player = players.value;
    const regex = /^([4-9])|(1[0-8])$/;
    var m = regex.test(player);
    if (m == false) {
        onblur_play()
    }
    else {
        oninput_play()
    }
}
function onblur_play() {
    player = players.value;
         blur.onblur = function () {
             player = players.value;
             if (player < 4||player > 18) {
             killer.firstChild.nodeValue = '';
             fammer.firstChild.nodeValue = '';
             alert("请输入正确数量")
             }
             else {
                 return false
             }
         }
}
//自动根据value值改变杀手和平民人数
function oninput_play() {
    player = players.value;
    killer.firstChild.nodeValue = Math.ceil(player / 4);
    fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
}
//发牌，创建一个跟输入数字一样长度的数组，里面包括0和1,1代表杀手，0代表平民,保存到session里面
    function send_card() {
        var player = players.value;
        var per = new Array(player);
        var roles = [];
        for (var i = 0; i < player; i++) {
            if (Math.ceil(player / 4) == 1) {
                if (i == 0) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }
            else if (Math.ceil(player / 4) == 2) {
                if (i <= 1) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }
            else if (Math.ceil(player / 4) == 3) {
                if (i <= 2) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }
            else if (Math.ceil(player / 4) == 4) {
                if (i <= 3) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }

            else if (Math.ceil(player / 4) == 5) {
                if (i <= 3) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }

        }

        per.sort(function () {
            return Math.random() > .5 ? -1 : 1;
        });
        for (var k = 0; k < player; k++) {
            if (per[k] == 1) {
                roles[k] = "杀手";
            }
            else {
                roles[k] = "平民";
            }
        }
        for (var i = 0; i < per.length;i++) {
            per_arr[i] = new Object();
            per_step[i] = 1;
            per_merry[i] = true;
            per_kill[i] = -1;
            per_vote[i] = -1;
            per_selected[i] = 0;
            per_arr[i].role = per[i];
            per_arr[i].alive = 1;
        }
        console.log(per_arr);
        player_data = {
            //记录天数
            day: 0,
            //辅助判断是否为平安夜，空点击改变这个值，执行完之后改回来
            merry: per_merry,
            //判断是否点击过杀人
            kill: 0,
            //存储天数
            days:["一","二","三","四","五","六","七","八"],
            //记录每天杀手杀的那个人的号数
            number_kill: per_kill,
            //记录投票投死的那个人的号数
            number_vote: per_vote,
            //记录步骤,step[0]给第一天的按钮用，依次类推，多一天加一个数组长度
            step: 1,
            //记录第几天那个按钮开启或者关闭，
            // 判断这个值达到1开启，0关闭的目的，close_open[0]给第一天用，多一天加一个数组长度
            close_open: 1,
            //杀手和投票界面，方块是否被选中，选中改变样式，通过这个值判断
            selected_none: per_selected,
            //数组里面是对象，对象有两个属性，一个角色属性，一个平民属性
            killer_person_alive: per_arr
        };
        var storage = window.sessionStorage;
        var p =JSON.stringify(per);
        var r =JSON.stringify(roles);
        var play = JSON.stringify(player_data);
        storage.setItem("data", p);
        storage.setItem("roles", r);
        storage.setItem("player", play);
        console.log(player_data.selected_none);
        console.log(storage.data);
        console.log(storage.roles);
        console.log(storage.player);
        window.location.href = "task7-5.html"
    }


