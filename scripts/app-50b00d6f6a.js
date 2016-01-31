/**
 * vidaexpress - vidaexpress
 * @authors 
 * @version v1.0.0
 * @link 
 * @license 
 */
!function(){"use strict";function e(e){}var a=angular.module("resume",["ui.router","pascalprecht.translate","angular-svg-round-progress","ng-code-mirror"]);e.$inject=["$rootScope"],a.run(e)}(),function(){"use strict";function e(e,a){e.state("default",{"abstract":!0,templateUrl:"app/layout/layout.html",controller:"mainController as vm"}).state("default.index",{url:"/",templateUrl:"app/main/main.html"}).state("default.working",{url:"/working",templateUrl:"app/section/working.html"}).state("default.education",{url:"/education",templateUrl:"app/section/education.html"}).state("default.skill",{url:"/skill",templateUrl:"app/section/skill.html"}).state("default.project",{url:"/project",templateUrl:"app/section/project.html"}),a.otherwise("/")}angular.module("resume").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){var e=angular.module("resume");e.config(["$translateProvider",function(e){e.translations("ch_CH",{EMAIL_ADDRESS:"zheng.671@osu.edu",PHONE_NUMBER:"+86 13591169983",WHERETOEAT_TITLE:"Where To Eat安卓手机应用",IOSCAL_TITILE:"iOS计算器应用",DIGICLIP_TITILE:"Digiclip新网站开发",TCETRA_DETAIL:"            <ul>                <li>参与VidaPay网站重构，作为小组领队，主要负责网站主体构建以及后台数据处理，日均订单过万，并且降低平均4s网站加载时间以及90%服务器过载</li>                <li>带领团队完成VidaExpress以及Vidapay Vendor Filfillment的网站搭建，主要负责网站架构以及数据交互，通过AngularJS以及ASP.NET WEB API2来实现单网页程序，使得网页平均加载速度在1s之内</li>                <li>独立完成四项公司账务系统模块，以及收据系统，平均每月处理百万订单</li>            </ul>",CORPS_DETAIL:"            <ul>                <li>与公司创办者一起设计网站流程以及数据库设计</li>                <li>独立完成网站设计，构建以及维护，通过ASP.NET MVC以及Knockout实现网上支付以及后台CMS系统</li>            </ul>",AMAZON_DETAIL:"            <ul>                <li>参与开发、更新以及测试新库存计划系统的权限模块</li>                <li>参与开发以及测试供应链系统</li>            </ul>",OSU_DETAIL:"            <ul>                <li>为超过150名学生答疑解惑，以及参与设计课程的评分系统标准</li>            </ul>"}),e.translations("en_EN",{EMAIL_ADDRESS:"jianan.zheng.15@gmail.com",PHONE_NUMBER:"+1 (614) 886-2919","前端工程师":"Front End Developer","郑嘉南":"Jianan Zheng","高级前端工程师":"Senior Front End Developer","网站架构师":"Senior Front End Developer","实习软件工程师":"Software Development Engineer Intern","助教":"Grader","实习培训部助理":"Training Coordinator Assistant Intern","人力资源":"Human Resource","供应链系统":"Supply Chain System","计算机科学系":"Department of Computer Science","计算机科学本科":"B.S. Computer & Information Science","链接":"link","饿了么主页重构":"ele.me Home Page Refactoring","技能":"Skill","工作经验":"Working Experience","教育":"Education","项目":"Project",WHERETOEAT_TITLE:"Where To Eat Android application",IOSCAL_TITILE:"iOS Calculator",DIGICLIP_TITILE:"Digiclip new website development",TCETRA_DETAIL:"            <ul>                <li>Reconstructed public website to enhance market presence by improving performance by more than 70 percent loading time and decreasing 90 percent server overload time in ASP.NET MVC</li>                <li>Lead two internal IT teams totaling five engineers to execute issue resolutions during Agile software development </li>                <li>Built an invoice reporting tool by using C#,.NET framework and Telerik that sends 2000+ invoices as PDF per day, reducing more than three hour processing time</li>                <li>Built a billing system that creates, processes and reports more than 100k orders per month </li>                <li>Developed a web service to support two existing cross platform mobile applications through WCF</li>            </ul>",CORPS_DETAIL:"            <ul>                <li>Coordinated with leader team to construct Operation Business Model and Business Flow</li>                <li>Developed, designed, implemented and maintained official website and content management system by using ASP.NET MVC and Knockout JS</li>                <li>esigned and deployed database architecture for corporate IT systems</li>            </ul>",AMAZON_DETAIL:"            <ul>                <li>Developed, tested and deployed a supply chain website</li>                <li>Cooperated with personnel from various levels to update permission service for inventory planning tools </li>            </ul>",OSU_DETAIL:"            <ul>                <li>Provided academic support to over 150 students through conducting regular office hours and ad hoc voluntary session with students requiring additional assistance.</li>            </ul>"}),e.use("ch_CH")}])}(),function(){"use strict";function e(e){function a(a){n.lang=a,e.use(a)}var n=this;n.frontend=[{key:"HTML",value:80},{key:"CSS",value:90},{key:"Bootstrap",value:90},{key:"JavaScript",value:80},{key:"jQuery",value:70},{key:"AngularJs",value:80},{key:"Knockout",value:40},{key:"Telerik",value:60},{key:"gulp",value:90},{key:"node.js",value:60},{key:"less",value:70}],n.backend=[{key:"C#",value:80},{key:"ASP.NET",value:60},{key:"WCF",value:50},{key:"SQL",value:80}],n.software=[{key:"Photoshop",value:50},{key:"Illustrator",value:20},{key:"InDesign",value:30}],n.switchLanguage=a}angular.module("resume").controller("mainController",e),e.$inject=["$translate"]}(),angular.module("resume").run(["$templateCache",function(e){e.put("app/layout/footer.html",""),e.put("app/layout/header.html",'<div class=center ui-sref=default.index><p class="name cursor">JIANAN ZHENG</p><p>FRONT-END ENGINEER</p><p><span class=margin10><i class="fa fa-envelope"></i></span> <span class=margin10>zheng.671@osu.edu</span> <span class=margin10><i class="fa fa-phone"></i></span> <span class=margin10>+86 155-4260-6638</span> <span class=margin10><i class="fa fa-weixin"></i></span> <span class=margin10>nan411082</span></p></div>'),e.put("app/layout/layout.html","<div id=background></div><div id=wrapper><div class=header ng-include=\"'app/layout/header.html'\"></div><div class=main ui-view></div><div class=footer ng-include=\"'app/layout/footer.html'\"></div></div>"),e.put("app/layout/sidebar.html",'<div class=info><h1 class=center>{{\'郑嘉南\' | translate}}</h1><hr><h4 class=center>{{\'前端工程师\' | translate}}</h4></div><div class=contact><h4><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-phone fa-stack-1x fa-inverse"></i></span> <span>{{\'PHONE_NUMBER\' | translate}}</span></h4><h4><a href="mailto:{{\'EMAIL_ADDRESS\' | translate}}"><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span> <span>{{\'EMAIL_ADDRESS\' | translate}}</span></a></h4><h4 class=center><a href=https://github.com/zheng671><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-github fa-stack-1x fa-inverse"></i></span></a> <a href=https://www.linkedin.com/in/jiananzheng><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a> <a href=/asset/image/QR_CODE.jpg><span class="fa fa-stack"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-weixin fa-stack-1x fa-inverse"></i></span></a> [<a ng-click="vm.switchLanguage(\'ch_CH\')">简</a> / <a ng-click="vm.switchLanguage(\'en_EN\')">ENG</a>]</h4></div>'),e.put("app/main/main.html",'<div class="center padding-400"><section class=block ui-sref=default.working><span class="fa-stack fa-5x"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-briefcase fa-stack-1x fa-inverse"></i></span><p style=font-size:16px;>工作经验</p></section><section class=block ui-sref=default.project><span class="fa-stack fa-5x"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-code fa-stack-1x fa-inverse"></i></span><p style=font-size:16px;>项目</p></section><section class=block ui-sref=default.education><span class="fa-stack fa-5x"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-university fa-stack-1x fa-inverse"></i></span><p style=font-size:16px;>教育</p></section><section class=block ui-sref=default.skill><span class="fa-stack fa-5x"><i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-star fa-stack-1x fa-inverse"></i></span><p style=font-size:16px;>技能</p></section></div>'),e.put("app/section/education.html",'<pre>\nfunction EducationBackground() \n{\n    var education = new Education();\n    var level = "";\n\n    switch (level)\n    {\n        case "本科":\n            education = new Education()\n            {\n                School = "The Ohio State University",\n                Major = "计算机科学本科",\n                Location = "哥伦布，美国",\n                StartDate = new DateTime(2010, 9, 1),\n                EndDate = new DateTime(2013, 5, 1),\n                GPA = 3.5\n            };\n            break;\n    }\n}\n</pre>'),e.put("app/section/project.html",'<pre>\nfunction EngineeringProjects() \n{\n    var project = new Project();\n    var name = "";\n\n    switch (name)\n    {\n        case "Angular Masked Text":\n            project = new Project()\n            {\n                Name = "Angular Masked Text",\n                Description = "通过angular Filter实现对电话号码，地址，税务ID等数据格式化"\n            };\n            break;\n        case "饿了么主页重构":\n            project = new Project()\n            {\n                Name = "饿了么主页重构",\n                Description = "对饿了么官网进行重构，对CSS进行模块化，加入了多语言支持以及通过Socket.io实现实时数据更新"\n            };\n            break;\n        case "Culinary Association博客":\n            project = new Project()\n            {\n                Name = "Culinary Association博客",\n                Description = "基于Bootstrap的OSU Culinary Association日常博客网站",\n                URL = "http://ca.org.ohio-state.edu"\n            };\n            break;\n        case "Where To Eat安卓手机应用":\n            project = new Project()\n            {\n                Name = "Where To Eat安卓手机应用",\n                Description = "手机应用会根据用户当前位置对周边餐馆进行随机推荐，解决消费者对于用餐选择困难的问题"\n            };\n            break;\n        case "iOS计算器应用":\n            project = new Project()\n            {\n                Name = "iOS计算器应用",\n                Description = "基本iOS计算器应用"\n            };\n            break;\n        case "Digiclip新网站开发":\n            project = new Project()\n            {\n                Name = "Digiclip新网站开发",\n                Description = "加入关键词email提醒系统，用户可以设置关键词，系统将会定时通过E-mail发送搜索结果"\n            };\n            break;\n    }\n}\n</pre>'),e.put("app/section/skill.html",'<div style=max-width:500px;><div style=margin-bottom:100px;><span style=background-color:#999;color:#eee;font-size:25px;line-height:30px;>FRONT END</span><div ng-repeat="item in vm.frontend"><h3>{{item.key}}</h3><div class=progress><div class="progress-bar progress-bar-success" role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: {{item.value}}%;"><span class=sr-only>60% Complete</span></div></div></div></div><div style=margin-bottom:100px;><span style=background-color:#999;color:#eee;font-size:25px;line-height:30px;>BACK END</span><div ng-repeat="item in vm.backend"><h3>{{item.key}}</h3><div class=progress><div class="progress-bar progress-bar-success" role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: {{item.value}}%;"><span class=sr-only>60% Complete</span></div></div></div></div><div style=margin-bottom:100px;><span style=background-color:#999;color:#eee;font-size:25px;line-height:30px;>SOFTWARE</span><div ng-repeat="item in vm.software"><h3>{{item.key}}</h3><div class=progress><div class="progress-bar progress-bar-success" role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: {{item.value}}%;"><span class=sr-only>60% Complete</span></div></div></div></div></div>'),e.put("app/section/working.html",'<pre>\nfunction WorkingExperience() \n{\n    var job = new Job();\n    var company = "";\n\n    switch(company)\n    {\n        case "T-cetra":\n            job = new Job()\n            {\n                Position = "高级前端工程师",\n                Location = "哥伦布，美国",\n                StartDate = new DateTime(2013, 10, 1),\n                EndDate = new DateTime(2015, 10, 1),\n                Responsibilities = \n                [\n                    "带领IT团队重构消费者平台，通过减少70%加载时间以及90%服务器重载提升性能和市场占有率",\n                    "带领IT团队在三个月内设计，开发以及测试供应商网站",\n                    "为产品开发过程提供协调以及管理上的支持，帮助架构师优化产品设计，协助产品经理制定以及分配任务，帮助测试工程师修复以及改进系统",\n                    "与财务部门合作，独立构建订单系统，每月创建以及处理超过十万订单"\n                ]\n            };\n            break;\n        case "Corps Dancewear":\n            job = new Job()\n            {\n                Position = "网站架构师",\n                Location = "哥伦布，美国",\n                StartDate = new DateTime(2014, 5, 1),\n                EndDate = DateTime.Now,\n                Responsibilities = \n                [\n                    "与公司创办者一起设计业务流程，提供更优质的用户体验",\n                    "独立完成官方网站以及CMS的设计，构建以及维护"\n                ]\n            };\n            break;\n        case "Amazon Corporate LLC":\n            job = new Job()\n            {\n                Position = "实习软件工程师",\n                Location = "西雅图，美国",\n                StartDate = new DateTime(2012, 6, 1),\n                EndDate = new DateTime(2012, 8, 1),\n                Responsibilities = \n                [\n                    "参与开发、更新以及测试新库存计划系统的权限模块",\n                    "参与开发以及测试供应链系统"\n                ]\n            };\n            break;\n        case "俄亥俄州立大学":\n            job = new Job()\n            {\n                Position = "助教",\n                Location = "哥伦布，美国",\n                StartDate = new DateTime(2012, 9, 1),\n                EndDate = new DateTime(2013, 5, 1),\n                Responsibilities = \n                [\n                    "通过平日办公时间以及临时预约，为超过150名学生答疑解惑，以及参与设计课程的评分系统标准"\n                ]\n            };\n            break;\n        case "埃森哲(中国)有限公司":\n            job = new Job()\n            {\n                Position = "培训部助理",\n                Location = "大连，中国",\n                StartDate = new DateTime(2011, 8, 1),\n                EndDate = new DateTime(2011, 9, 1),\n                Responsibilities = \n                [\n                    "管理超过100名新入职员工培训日程，准备培训材料，并负责解决培训老师和学员的疑惑",\n                    "管理并且维护超过20个培训课程日常安排以及档案"\n                ]\n            };\n            break;\n    }\n}\n</pre>')}]);