//module
var app = angular.module('myApp', ['ui.router']);
//ui.router
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	//一是建立一个默认路由，用于管理未知的URL（统一跳转到某处）
	//二是监听浏览器地址栏URL的变化，重定向到路由定义的状态中
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url:'/index',
            views : {
            	//相对命名
				//对应 index.html 中的未命名 ui-view <div ui-view/>
				//每个视图都被按照viewname@statename的方式分配为绝对名称
            	//viewname是目标模板中的ui-view对应的名称，statename是状态的名称，状态名称对应于一个目标模板
            	 '' : {
            	 	templateUrl:  'templ/index.html'
            	 },
            	 'topbar@index' : {
            	 	templateUrl:  'templ/topbar.html'
            	 },
            	 'main@index' : {
            	 	templateUrl:  'templ/main.html'
            	 }
            }
        })
        .state('index.detail', {
        	url: '/detail',
        	views : {
        		'navDetail@index' : {
        			templateUrl:  'templ/detail.html'
        		}
        	}
        })
        .state('index.about', {
            url:'/about',
            views: {
            	
            	'main@index' : {
            		templateUrl: 'templ/about.html'
            	},
            }
            /*controller: 'AboutController'*/
        })
        .state('index.login', {
            url:'/login',
        	views: {
            	'main@index' : {
            		templateUrl: 'templ/login.html'
            	},
            }
        });
}]);