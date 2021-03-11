(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{441:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return s})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return p}));var t=a(1),i=a(6),o=(a(0),a(507)),r={id:"nesting-navigators",title:"Nesting navigators",sidebar_label:"Nesting navigators"},s={unversionedId:"nesting-navigators",id:"version-6.x/nesting-navigators",isDocsHomePage:!1,title:"Nesting navigators",description:"Nesting navigators means rendering a navigator inside a screen of another navigator, for example:",source:"@site/versioned_docs/version-6.x/nesting-navigators.md",slug:"/nesting-navigators",permalink:"/docs/6.x/nesting-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/nesting-navigators.md",version:"6.x",sidebar_label:"Nesting navigators",sidebar:"version-6.x/docs",previous:{title:"Header buttons",permalink:"/docs/6.x/header-buttons"},next:{title:"Navigation lifecycle",permalink:"/docs/6.x/navigation-lifecycle"}},c=[{value:"How nesting navigators affects the behaviour",id:"how-nesting-navigators-affects-the-behaviour",children:[{value:"Each navigator keeps its own navigation history",id:"each-navigator-keeps-its-own-navigation-history",children:[]},{value:"Each navigator has its own options",id:"each-navigator-has-its-own-options",children:[]},{value:"Each screen in a navigator has its own params",id:"each-screen-in-a-navigator-has-its-own-params",children:[]},{value:"Navigation actions are handled by current navigator and bubble up if couldn&#39;t be handled",id:"navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled",children:[]},{value:"Navigator specific methods are available in the navigators nested inside",id:"navigator-specific-methods-are-available-in-the-navigators-nested-inside",children:[]},{value:"Nested navigators don&#39;t receive parent&#39;s events",id:"nested-navigators-dont-receive-parents-events",children:[]},{value:"Parent navigator&#39;s UI is rendered on top of child navigator",id:"parent-navigators-ui-is-rendered-on-top-of-child-navigator",children:[]}]},{value:"Navigating to a screen in a nested navigator",id:"navigating-to-a-screen-in-a-nested-navigator",children:[{value:"Passing params to a screen in a nested navigator",id:"passing-params-to-a-screen-in-a-nested-navigator",children:[]},{value:"Rendering initial route defined in the navigator",id:"rendering-initial-route-defined-in-the-navigator",children:[]}]},{value:"Nesting multiple navigators",id:"nesting-multiple-navigators",children:[]},{value:"Best practices when nesting",id:"best-practices-when-nesting",children:[]}],l={rightToc:c};function p(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Nesting navigators means rendering a navigator inside a screen of another navigator, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'function Home() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Messages" component={Messages} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name="Home"\n          component={Home}\n          options={{ headerShown: false }}\n        />\n        <Stack.Screen name="Profile" component={Profile} />\n        <Stack.Screen name="Settings" component={Settings} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(o.b)("p",null,"In the above example, the ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," component contains a tab navigator. The ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," component is also used for the ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," screen in your stack navigator inside the ",Object(o.b)("inlineCode",{parentName:"p"},"App")," component. So here, a tab navigator is nested inside a stack navigator:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Stack.Navigator"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Home")," (",Object(o.b)("inlineCode",{parentName:"li"},"Tab.Navigator"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Feed")," (",Object(o.b)("inlineCode",{parentName:"li"},"Screen"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Messages")," (",Object(o.b)("inlineCode",{parentName:"li"},"Screen"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Profile")," (",Object(o.b)("inlineCode",{parentName:"li"},"Screen"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Settings")," (",Object(o.b)("inlineCode",{parentName:"li"},"Screen"),")")))),Object(o.b)("p",null,"Nesting navigators work very much like nesting regular components. To achieve the behavior you want, it's often necessary to nest multiple navigators."),Object(o.b)("h2",{id:"how-nesting-navigators-affects-the-behaviour"},"How nesting navigators affects the behaviour"),Object(o.b)("p",null,"When nesting navigators, there are some things to keep in mind:"),Object(o.b)("h3",{id:"each-navigator-keeps-its-own-navigation-history"},"Each navigator keeps its own navigation history"),Object(o.b)("p",null,"For example, when you press the back button when inside a screen in a nested stack navigator, it'll go back to the previous screen inside the nested stack even if there's another navigator as the parent."),Object(o.b)("h3",{id:"each-navigator-has-its-own-options"},"Each navigator has its own options"),Object(o.b)("p",null,"For example, specifying a ",Object(o.b)("inlineCode",{parentName:"p"},"title")," option in a screen nested in a child navigator won't affect the title shown in a parent navigator."),Object(o.b)("p",null,"If you want to achieve this behavior, see the guide for ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/6.x/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state"}),"screen options with nested navigators"),". this could be useful if you are rendering a tab navigator inside a stack navigator and want to show the title of the active screen inside the tab navigator in the header of the stack navigator."),Object(o.b)("h3",{id:"each-screen-in-a-navigator-has-its-own-params"},"Each screen in a navigator has its own params"),Object(o.b)("p",null,"For example, any ",Object(o.b)("inlineCode",{parentName:"p"},"params")," passed to a screen in a nested navigator are in the ",Object(o.b)("inlineCode",{parentName:"p"},"route")," prop of that screen and aren't accessible from a screen in a parent or child navigator."),Object(o.b)("p",null,"If you need to access params of the parent screen from a child screen, you can use ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React Context")," to expose params to children."),Object(o.b)("h3",{id:"navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled"},"Navigation actions are handled by current navigator and bubble up if couldn't be handled"),Object(o.b)("p",null,"For example, if you're calling ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.goBack()")," in a nested screen, it'll only go back in the parent navigator if you're already on the first screen of the navigator. Other actions such as ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," work similarly, i.e. navigation will happen in the nested navigator and if the nested navigator couldn't handle it, then the parent navigator will try to handle it. In the above example, when calling ",Object(o.b)("inlineCode",{parentName:"p"},"navigate('Messages')"),", inside ",Object(o.b)("inlineCode",{parentName:"p"},"Feed")," screen, the nested tab navigator will handle it, but if you call ",Object(o.b)("inlineCode",{parentName:"p"},"navigate('Settings')"),", the parent stack navigator will handle it."),Object(o.b)("h3",{id:"navigator-specific-methods-are-available-in-the-navigators-nested-inside"},"Navigator specific methods are available in the navigators nested inside"),Object(o.b)("p",null,"For example, if you have a stack inside a drawer navigator, the drawer's ",Object(o.b)("inlineCode",{parentName:"p"},"openDrawer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"closeDrawer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"toggleDrawer")," methods etc. will also be available on the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop in the screen's inside the stack navigator. But say you have a stack navigator as the parent of the drawer, then the screens inside the stack navigator won't have access to these methods, because they aren't nested inside the drawer."),Object(o.b)("p",null,"Similarly, if you have a tab navigator inside stack navigator, the screens in the tab navigator will get the ",Object(o.b)("inlineCode",{parentName:"p"},"push")," and ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," methods for stack in their ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(o.b)("p",null,"If you need to dispatch actions to the nested child navigators from a parent, you can use ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/6.x/navigation-prop#dispatch"}),Object(o.b)("inlineCode",{parentName:"a"},"navigation.dispatch")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"navigation.dispatch(DrawerActions.toggleDrawer());\n")),Object(o.b)("h3",{id:"nested-navigators-dont-receive-parents-events"},"Nested navigators don't receive parent's events"),Object(o.b)("p",null,"For example, if you have a stack navigator nested inside a tab navigator, the screens in the stack navigator won't receive the events emitted by the parent tab navigator such as (",Object(o.b)("inlineCode",{parentName:"p"},"tabPress"),") when using ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.addListener"),"."),Object(o.b)("p",null,"To receive events from parent navigator, you can explicitly listen to parent's events with ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.getParent()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const unsubscribe = navigation.getParent().addListener('tabPress', (e) => {\n  // Do something\n});\n")),Object(o.b)("h3",{id:"parent-navigators-ui-is-rendered-on-top-of-child-navigator"},"Parent navigator's UI is rendered on top of child navigator"),Object(o.b)("p",null,"For example, when you nest a stack navigator inside a drawer navigator, you'll see that the drawer appears above the stack navigator's header. However, if you nest the drawer navigator inside a stack, the drawer will appear below the header of the stack. This is an important point to consider when deciding how to nest your navigators."),Object(o.b)("p",null,"In your app, you will probably use these patterns depending on the behavior you want:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tab navigator nested inside the initial screen of stack navigator - New screens cover the tab bar when you push them."),Object(o.b)("li",{parentName:"ul"},"Drawer navigator nested inside the initial screen of stack navigator with the initial screen's stack header hidden - The drawer can only be opened from the first screen of the stack."),Object(o.b)("li",{parentName:"ul"},"Stack navigators nested inside each screen of drawer navigator - The drawer appears over the header from the stack."),Object(o.b)("li",{parentName:"ul"},"Stack navigators nested inside each screen of tab navigator - The tab bar is always visible. Usually pressing the tab again also pops the stack to top.")),Object(o.b)("h2",{id:"navigating-to-a-screen-in-a-nested-navigator"},"Navigating to a screen in a nested navigator"),Object(o.b)("p",null,"Consider the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'function Root() {\n  return (\n    <Drawer.Navigator>\n      <Drawer.Screen name="Home" component={Home} />\n      <Drawer.Screen name="Profile" component={Profile} />\n        <Stack.Screen name="Settings" component={Settings} />\n    </Drawer.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name="Root"\n          component={Root}\n          options={{ headerShown: false }}\n        />\n        <Stack.Screen name="Feed" component={Settings} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(o.b)("p",null,"Here, you might want to navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"Root")," screen from your ",Object(o.b)("inlineCode",{parentName:"p"},"Feed")," component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"navigation.navigate('Root');\n")),Object(o.b)("p",null,"It works, and the initial screen inside the ",Object(o.b)("inlineCode",{parentName:"p"},"Root")," component is shown, which is ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),". But sometimes you may want to control the screen that should be shown upon navigation. To achieve it, you can pass the name of the screen in params:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"navigation.navigate('Root', { screen: 'Profile' });\n")),Object(o.b)("p",null,"Now, the ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," screen will be rendered instead of ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," upon navigation."),Object(o.b)("summary",null,"This may look very different from the way navigation used to work with nested screens previously. The difference is that in the previous versions, all configuration was static, so React Navigation could statically find the list of all the navigators and their screens by recursing into nested configurations. But with dynamic configuration, React Navigation doesn't know which screens are available and where until the navigator containing the screen renders. Normally, a screen doesn't render its contents until you navigate to it, so the configuration of navigators which haven't rendered is not yet available. This makes it necessary to specify the hierarchy you're navigating to. This is also why you should have as little nesting of navigators as possible to keep your code simpler."),Object(o.b)("h3",{id:"passing-params-to-a-screen-in-a-nested-navigator"},"Passing params to a screen in a nested navigator"),Object(o.b)("p",null,"You can also pass params by specifying a ",Object(o.b)("inlineCode",{parentName:"p"},"params")," key:"),Object(o.b)("samp",{id:"nest-navigators"}),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"navigation.navigate('Root', {\n  screen: 'Profile',\n  params: { user: 'jane' },\n});\n")),Object(o.b)("p",null,"If the navigator was already rendered, navigating to another screen will push a new screen in case of stack navigator."),Object(o.b)("p",null,"You can follow similar approach for deeply nested screens. Note that the second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," here is just ",Object(o.b)("inlineCode",{parentName:"p"},"params"),", so you can do something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"navigation.navigate('Root', {\n  screen: 'Settings',\n  params: {\n    screen: 'Sound',\n    params: {\n      screen: 'Media',\n    },\n  },\n});\n")),Object(o.b)("p",null,"In the above case, you're navigating to the ",Object(o.b)("inlineCode",{parentName:"p"},"Media")," screen, which is in a navigator nested inside the ",Object(o.b)("inlineCode",{parentName:"p"},"Sound")," screen, which is in a navigator nested inside the ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," screen."),Object(o.b)("h3",{id:"rendering-initial-route-defined-in-the-navigator"},"Rendering initial route defined in the navigator"),Object(o.b)("p",null,"By default, when you navigate a screen in the nested navigator, the specified screen is used as the initial screen and the initial route prop on the navigator is ignored. This behaviour is different from the React Navigation 4."),Object(o.b)("p",null,"If you need to render the initial route specified in the navigator, you can disable the behaviour of using the specified screen as the initial screen by setting ",Object(o.b)("inlineCode",{parentName:"p"},"initial: false"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"navigation.navigate('Root', {\n  screen: 'Settings',\n  initial: false,\n});\n")),Object(o.b)("p",null,"This affects what happens when pressing the back button. When there's an initial screen, the back button will take the user there."),Object(o.b)("h2",{id:"nesting-multiple-navigators"},"Nesting multiple navigators"),Object(o.b)("p",null,"It's sometimes useful to nest multiple navigators such as stack or drawer, for example, to have ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/6.x/modal"}),"some screens in a modal stack and some in regular stack"),"."),Object(o.b)("p",null,"When nesting multiple stack, drawer or bottom tab navigator, headers from both child and parent navigators would be shown. However, usually it's more desirable to show the header in the child navigator and hide the header in the stack navigator."),Object(o.b)("p",null,"To achieve this, you can hide the header in the screen containing the navigator using the ",Object(o.b)("inlineCode",{parentName:"p"},"headerShown: false")," option."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'function Home() {\n  return (\n    <NestedStack.Navigator>\n      <NestedStack.Screen name="Profile" component={Profile} />\n      <NestedStack.Screen name="Settings" component={Settings} />\n    </NestedStack.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator mode="modal">\n        <RootStack.Screen\n          name="Home"\n          component={Home}\n          options={{ headerShown: false }}\n        />\n        <RootStack.Screen name="EditPost" component={EditPost} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(o.b)("p",null,"A complete example can be found in the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/6.x/modal"}),"modal guide"),". However, the principle isn't only specific to modals, but any kind of nesting of navigators."),Object(o.b)("p",null,"In these examples, we have used a stack navigator directly nested inside another stack navigator, but the same principle applies when there are other navigators in the middle, for example: stack navigator inside a tab navigator which is inside another stack navigator, stack navigator inside drawer navigator etc."),Object(o.b)("p",null,"When nesting multiple stack navigators, we recommend nesting at most 2 stack navigators, unless absolutely necessary."),Object(o.b)("h2",{id:"best-practices-when-nesting"},"Best practices when nesting"),Object(o.b)("p",null,"We recommend to reduce nesting navigators to minimal. Try to achieve the behavior you want with as little nesting as possible. Nesting has many downsides:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It results in deeply nested view hierarchy which can cause memory and performance issues in lower end devices"),Object(o.b)("li",{parentName:"ul"},"Nesting same type of navigators (e.g. tabs inside tabs, drawer inside drawer etc.) might lead to a confusing UX"),Object(o.b)("li",{parentName:"ul"},"With excessive nesting, code becomes difficult to follow when navigating to nested screens, configuring deep link etc.")),Object(o.b)("p",null,"Think of nesting navigators as a way to achieve the UI you want rather than a way to organize your code. If you want to create separate group of screens for organization, instead of using separate navigators, consider doing something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// Define multiple groups of screens in objects like this\nconst commonScreens = {\n  Help: HelpScreen,\n};\n\nconst authScreens = {\n  SignIn: SignInScreen,\n  SignUp: SignUpScreen,\n};\n\nconst userScreens = {\n  Home: HomeScreen,\n  Profile: ProfileScreen,\n};\n\n// Then use them in your components by looping over the object and creating screen configs\n// You could extract this logic to a utility function and reuse it to simplify your code\n<Stack.Navigator>\n  {Object.entries({\n    // Use the screens normally\n    ...commonScreens,\n    // Use some screens conditionally based on some condition\n    ...(isLoggedIn ? userScreens : authScreens),\n  }).map(([name, component]) => (\n    <Stack.Screen name={name} component={component} />\n  ))}\n</Stack.Navigator>;\n")))}p.isMDXComponent=!0},507:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return h}));var t=a(0),i=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),g=t,h=d["".concat(r,".").concat(g)]||d[g]||b[g]||o;return a?i.a.createElement(h,s(s({ref:n},l),{},{components:a})):i.a.createElement(h,s({ref:n},l))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);