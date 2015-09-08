/**
 * vidaexpress - vidaexpress
 * @authors 
 * @version v1.0.0
 * @link 
 * @license 
 */
!function(){"use strict";function e(e){}var a=angular.module("resume",["ui.router","pascalprecht.translate","angular-svg-round-progress"]);e.$inject=["$rootScope"],a.run(e)}(),function(){angular.module("resume").filter("orderObjectBy",function(){return function(e,a){var t=[];return angular.forEach(e,function(e,a){t.push({key:a,value:e})}),t.sort(function(e,a){return e.value>a.value?1:-1}),a&&t.reverse(),t}})}(),function(){"use strict";function e(e,a){e.state("default",{"abstract":!0,templateUrl:"app/layout/layout.html",controller:"mainController as vm"}).state("default.index",{url:"/",templateUrl:"app/main/main.html"}),a.otherwise("/")}angular.module("resume").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){var e=angular.module("resume");e.config(["$translateProvider",function(e){e.translations("ch_CH",{EMAIL_ADDRESS:"zheng.671@osu.edu",PHONE_NUMBER:"+86 13591169983",WHERETOEAT_TITLE:"Where To Eat安卓手机应用",IOSCAL_TITILE:"iOS计算器应用",DIGICLIP_TITILE:"Digiclip新网站开发",TCETRA_DETAIL:"            <ul>                <li>参与VidaPay网站重构，作为小组领队，主要负责网站主体构建以及后台数据处理，日均订单过万，并且降低平均4s网站加载时间以及90%服务器过载</li>                <li>带领团队完成VidaExpress以及Vidapay Vendor Filfillment的网站搭建，主要负责网站架构以及数据交互，通过AngularJS以及ASP.NET WEB API2来实现单网页程序，使得网页平均加载速度在1s之内</li>                <li>独立完成四项公司账务系统模块，以及收据系统，平均每月处理百万订单</li>            </ul>",CORPS_DETAIL:"            <ul>                <li>与公司创办者一起设计网站流程以及数据库设计</li>                <li>独立完成网站设计，构建以及维护，通过ASP.NET MVC以及Knockout实现网上支付以及后台CMS系统</li>            </ul>",AMAZON_DETAIL:"            <ul>                <li>参与开发、更新以及测试新库存计划系统的权限模块</li>                <li>参与开发以及测试供应链系统</li>            </ul>",OSU_DETAIL:"            <ul>                <li>为超过150名学生答疑解惑，以及参与设计课程的评分系统标准</li>            </ul>"}),e.translations("en_EN",{EMAIL_ADDRESS:"jianan.zheng.15@gmail.com",PHONE_NUMBER:"+1 (614) 886-2919","前端工程师":"Front End Developer","郑嘉南":"Jianan Zheng","高级前端工程师":"Senior Front End Developer","网站架构师":"Senior Front End Developer","实习软件工程师":"Software Development Engineer Intern","助教":"Grader","实习培训部助理":"Training Coordinator Assistant Intern","人力资源":"Human Resource","供应链系统":"Supply Chain System","计算机科学系":"Department of Computer Science","计算机科学本科":"B.S. Computer & Information Science","链接":"link","饿了么主页重构":"ele.me Home Page Refactoring","技能":"Skill","工作经验":"Working Experience","教育":"Education","项目":"Project",WHERETOEAT_TITLE:"Where To Eat Android application",IOSCAL_TITILE:"iOS Calculator",DIGICLIP_TITILE:"Digiclip new website development",TCETRA_DETAIL:"            <ul>                <li>Reconstructed public website to enhance market presence by improving performance by more than 70 percent loading time and decreasing 90 percent server overload time in ASP.NET MVC</li>                <li>Lead two internal IT teams totaling five engineers to execute issue resolutions during Agile software development </li>                <li>Built an invoice reporting tool by using C#,.NET framework and Telerik that sends 2000+ invoices as PDF per day, reducing more than three hour processing time</li>                <li>Built a billing system that creates, processes and reports more than 100k orders per month </li>                <li>Developed a web service to support two existing cross platform mobile applications through WCF</li>            </ul>",CORPS_DETAIL:"            <ul>                <li>Coordinated with leader team to construct Operation Business Model and Business Flow</li>                <li>Developed, designed, implemented and maintained official website and content management system by using ASP.NET MVC and Knockout JS</li>                <li>esigned and deployed database architecture for corporate IT systems</li>            </ul>",AMAZON_DETAIL:"            <ul>                <li>Developed, tested and deployed a supply chain website</li>                <li>Cooperated with personnel from various levels to update permission service for inventory planning tools </li>            </ul>",OSU_DETAIL:"            <ul>                <li>Provided academic support to over 150 students through conducting regular office hours and ad hoc voluntary session with students requiring additional assistance.</li>            </ul>"}),e.use("ch_CH")}])}(),function(){"use strict";function e(e){function a(a){t.lang=a,e.use(a)}var t=this;t.frontend=[{key:"HTML",value:80},{key:"CSS",value:90},{key:"Bootstrap",value:90},{key:"JavaScript",value:80},{key:"jQuery",value:70},{key:"AngularJs",value:80},{key:"Knockout",value:40},{key:"Telerik",value:60},{key:"gulp",value:90},{key:"node.js",value:60},{key:"less",value:70}],t.backend=[{key:"C#",value:80},{key:"ASP.NET",value:60},{key:"WCF",value:50},{key:"SQL",value:80}],t.software=[{key:"Photoshop",value:50},{key:"Illustrator",value:20},{key:"InDesign",value:30}],t.switchLanguage=a}angular.module("resume").controller("mainController",e),e.$inject=["$translate"]}(),angular.module("resume").run(["$templateCache",function(e){e.put("app/main/education.html",'<div class="block lg" ontouchstart="this.classList.toggle(\'hover\');"><div class="content purple"><h2>The Ohio State University</h2><div class=desc>{{\'计算机科学本科\' | translate}}</div><div class=desc>GPA 3.5/4</div></div></div>'),e.put("app/main/main.html","<section id=education class=\"block-group-container lg\"><div class=block-group-title>{{'工作经验' | translate}}</div><div class=block-group ng-include=\"'app/main/working.html'\"></div></section><section id=education class=block-group-container><div class=block-group-title>{{'项目' | translate}}</div><div class=block-group ng-include=\"'app/main/project.html'\"></div></section><section id=education class=block-group-container><div class=block-group-title>{{'技能' | translate}}</div><div class=block-group ng-include=\"'app/main/skill.html'\"></div></section><section id=education class=block-group-container><div class=block-group-title>{{'教育' | translate}}</div><div class=block-group ng-include=\"'app/main/education.html'\"></div></section>"),e.put("app/main/project.html",'<div class="block lg"><div class="content red"><h4>{{\'Angular Masked Text\' | translate}}</h4><hr><h5>通过angular Filter实现对电话号码，地址，税务ID等数据格式化</h5></div></div><div class="block lg"><div class="content red"><h4>{{\'饿了么主页重构\' | translate}}</h4><hr><h5>对饿了么官网进行重构，对CSS进行模块化，加入了多语言支持以及通过Socket.io实现实时数据更新</h5></div></div><div class="block lg"><div class="content red"><h4>{{\'Culinary Association博客\' | translate}}</h4><hr><h5>基于Bootstrap的OSU Culinary Association日常博客网站<br><a href=http://ca.org.ohio-state.edu target=_blank>http://ca.org.ohio-state.edu</a></h5></div></div><div class="block lg"><div class="content red"><h4>{{\'WHERETOEAT_TITLE\' | translate}}</h4><hr><h5>手机应用会根据用户当前位置对周边餐馆进行随机推荐，解决消费者对于用餐选择困难的问题</h5></div></div><div class="block lg"><div class="content red"><h4>{{\'IOSCAL_TITILE\' | translate}}</h4><hr><h5>基本iOS计算器应用</h5></div></div><div class="block lg"><div class="content red"><h4>{{\'DIGICLIP_TITILE\' | translate}}</h4><hr><h5>加入关键词email提醒系统，用户可以设置关键词，系统将会定时通过E-mail发送搜索结果</h5></div></div>'),e.put("app/main/skill.html",'<div class="block md" ng-repeat="item in vm.frontend"><div class="content center blue" style="opacity: {{(item.value+100)/200}}"><h3>{{item.key}}</h3><div round-progress max=100 current=item.value color=#45ccce bgcolor=#eaeaea radius=20 stroke=5 rounded=true responsive=false duration=800 animation=easeInOutQuart></div></div></div><div class="block md" ng-repeat="item in vm.backend"><div class="content center blue" style="opacity: {{(item.value+100)/200}}"><h3>{{item.key}}</h3><div round-progress max=100 current=item.value color=#45ccce bgcolor=#eaeaea radius=20 stroke=5 rounded=true responsive=false duration=800 animation=easeInOutQuart></div></div></div><div class="block md" ng-repeat="item in vm.software"><div class="content center blue" style="opacity: {{(item.value+100)/200}}"><h3>{{item.key}}</h3><div round-progress max=100 current=item.value color=#45ccce bgcolor=#eaeaea radius=20 stroke=5 rounded=true responsive=false duration=800 animation=easeInOutQuart></div></div></div>'),e.put("app/main/working.html",'<div class="block xl"><div class="content orange"><h3>T-Cetra, LLC</h3><h4>{{\'高级前端工程师\' | translate}}</h4></div><div class="content orange" translate="{{\'TCETRA_DETAIL\'}}"></div><div class="content orange"><span>{{\'链接\' | translate}}</span><ul><li><a href=https://www.vidapay.com target=_blank>https://www.vidapay.com</a></li><li><a href=https://www.vidaexpress.com target=_blank>https://www.vidaexpress.com</a></li><li><a href=https://fulfillment.vidapaycrm.com target=_blank>https://fulfillment.vidapaycrm.com</a></li></ul></div></div><div class="block xl"><div class="content orange"><h3>Corps Dancewear</h3><h4>{{\'网站架构师\' | translate}}</h4></div><div class="content orange" translate=CORPS_DETAIL></div><div class="content orange"><span>{{\'链接\' | translate}}</span><ul><li><a href=https://www.corpsdancewear.com target=_blank>https://www.corpsdancewear.com</a></li><li><a href=https://cms.corpsdancewear.com target=_blank>https://cms.corpsdancewear.com</a></li></ul></div></div><div class="block lg"><div class="content orange"><h3>Amazon Corporate LLC</h3><h4>{{\'实习软件工程师\' | translate}}</h4></div><div class="content orange" translate=AMAZON_DETAIL></div></div><div class="block lg"><div class="content orange"><h3>The Ohio State University</h3><h4>{{\'助教\' | translate}} - {{\'计算机科学系\' | translate}}</h4></div><div class="content orange" translate=OSU_DETAIL></div></div>'),e.put("app/layout/layout.html","<div id=wrapper><div class=sidebar ng-include=\"'app/layout/sidebar.html'\"></div><div class=main ui-view></div><div class=footer ng-include=\"'app/layout/footer.html'\"></div></div>"),e.put("app/layout/sidebar.html",'<div class=info><h1 class=center>{{\'郑嘉南\' | translate}}</h1><hr><h4 class=center>{{\'前端工程师\' | translate}}</h4></div><div class=contact><h4><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-phone fa-stack-1x fa-inverse"></i></span> <span>{{\'PHONE_NUMBER\' | translate}}</span></h4><h4><a href="mailto:{{\'EMAIL_ADDRESS\' | translate}}"><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span> <span>{{\'EMAIL_ADDRESS\' | translate}}</span></a></h4><h4 class=center><a href=https://github.com/zheng671><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-github fa-stack-1x fa-inverse"></i></span></a> <a href=https://www.linkedin.com/in/jiananzheng><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a> <a href=/asset/image/QR_CODE.jpg><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-weixin fa-stack-1x fa-inverse"></i></span></a> [<a ng-click="vm.switchLanguage(\'ch_CH\')">简</a> / <a ng-click="vm.switchLanguage(\'en_EN\')">ENG</a>]</h4></div>')}]);