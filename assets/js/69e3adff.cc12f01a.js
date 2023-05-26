"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[35549],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=f(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=h[0],b=h[1],g=m({queryString:s,groupId:u}),y=g[0],w=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],N=k[1],E=function(){var e=null!=y?y:x;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),N(e)}),[w,N,p]),tabValues:p}}var v=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},94024:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),l={id:"localization",title:"Localization",sidebar_label:"Localization"},s=void 0,u={unversionedId:"localization",id:"version-4.x/localization",title:"Localization",description:"English is only one of many languages people speak around the world (thanks a lot, Tower of Babel) and it's polite and sometimes even necessary to translate our app to the languages our users speak. Let's look at one way we can do this in React Navigation - it's not the only way but it'll do the trick. Similar to themes, we will use screenProps. You may also want to use React's context API as demonstrated in the themes guide in order to make it easier to access the translate function from a variety of components.",source:"@site/versioned_docs/version-4.x/localization.md",sourceDirName:".",slug:"/localization",permalink:"/docs/4.x/localization",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/localization.md",tags:[],version:"4.x",frontMatter:{id:"localization",title:"Localization",sidebar_label:"Localization"},sidebar:"version-4.x-docs",previous:{title:"MobX State Tree integration",permalink:"/docs/4.x/MST-integration"},next:{title:"Web support",permalink:"/docs/4.x/web-support"}},c={},p=[{value:"Setting up a localization library",id:"setting-up-a-localization-library",level:2},{value:"Wiring up your localization library to navigation",id:"wiring-up-your-localization-library-to-navigation",level:2}],f={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"English is only one of many languages people speak around the world (thanks a lot, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tower_of_Babel"},"Tower of Babel"),") and it's polite and sometimes even necessary to translate our app to the languages our users speak. Let's look at one way we can do this in React Navigation - it's not the only way but it'll do the trick. Similar to ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/themes"},"themes"),", we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps"),". You may also want to use React's context API as demonstrated in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/themes"},"themes")," guide in order to make it easier to access the translate function from a variety of components."),(0,o.kt)("h2",{id:"setting-up-a-localization-library"},"Setting up a localization library"),(0,o.kt)("p",null,"We'll need to use some kind of library to store our translations and provide a function that gives us access to them, along with handling fallbacks when we don't have a particular language defined. Localization and internationalization (i18n) are often used interchangeably, as in the example below where we get the current ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"expo-localization")," and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n-js")," library for managing translations, for no particular reason other than it was available - use whatever you like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as Localization from 'expo-localization'; // or whatever library you want\nimport i18n from 'i18n-js'; // or whatever library you want\n\nconst en = {\n  foo: 'Foo',\n  bar: 'Bar {{someValue}}',\n};\n\nconst fr = {\n  foo: 'Fou',\n  bar: 'B\xe1r {{someValue}}',\n};\n\ni18n.fallbacks = true;\ni18n.translations = { fr, en };\n\n// This will log 'en' for me, as I'm an English speaker\nconsole.log(Localization.locale);\n")),(0,o.kt)("h2",{id:"wiring-up-your-localization-library-to-navigation"},"Wiring up your localization library to navigation"),(0,o.kt)("p",null,"Next let's store our ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," in the state of our root app component and then thread it through ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps")," to make it available throughout React Navigation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default class App extends React.Component {\n  state = {\n    locale: Localization.locale,\n  };\n\n  setLocale = locale => {\n    this.setState({ locale });\n  };\n\n  t = (scope, options) => {\n    return i18n.t(scope, { locale: this.state.locale, ...options });\n  };\n\n  render() {\n    return (\n      <AppContainer\n        screenProps={{\n          t: this.t,\n          locale: this.state.locale,\n          setLocale: this.setLocale,\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Now in our screens we can use these ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Screen extends React.Component {\n  static navigationOptions = ({ screenProps: { t } }) => ({\n    title: t('foo'),\n  });\n\n  render() {\n    let { t, locale } = this.props.screenProps;\n\n    return (\n      <View style={styles.container}>\n        <Text style={styles.text}>\n          Current locale: {locale}.{' '}\n          {locale !== 'en' && locale !== 'fr'\n            ? 'Translations will fall back to \"en\" because none available'\n            : null}\n        </Text>\n        <Text>{t('bar', { someValue: Date.now() })}</Text>\n        {locale === 'en' ? (\n          <Button\n            title=\"Switch to French\"\n            onPress={() => this.props.screenProps.setLocale('fr')}\n          />\n        ) : (\n          <Button\n            title=\"Switch to English\"\n            onPress={() => this.props.screenProps.setLocale('en')}\n          />\n        )}\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"You can run this example in ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/localization-example"},"this Snack"),". Again, you may want to go further than just passing this through ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps")," if you want to make it easier to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," function or the other ",(0,o.kt)("inlineCode",{parentName:"p"},"screenProps")," from any React component (and not just screen components that are rendered by React Navigation). Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/themes"},"themes")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React documentation on context")," for help with that."))}m.isMDXComponent=!0}}]);