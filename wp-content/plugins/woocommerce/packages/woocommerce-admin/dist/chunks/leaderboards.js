(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[37],{763:function(e,t,r){"use strict";var a=r(17),n=r.n(a),o=r(15),s=r.n(o),c=r(18),i=r.n(c),l=r(19),d=r.n(l),u=r(9),m=r.n(u),b=r(0),f=r(3),p=r(1),h=r.n(p),g=r(77),y=r(36);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var w=function(e){i()(r,e);var t=_(r);function r(){return n()(this,r),t.apply(this,arguments)}return s()(r,[{key:"render",value:function(){var e,t,r,a,n=this.props,o=n.className,s=n.isError,c=n.isEmpty;return s?(e=Object(f.__)("There was an error getting your stats. Please try again.",'woocommerce'),t=Object(f.__)("Reload",'woocommerce'),a=function(){window.location.reload()}):c&&(e=Object(f.__)("No results could be found for this date range.",'woocommerce'),t=Object(f.__)("View Orders",'woocommerce'),r=Object(y.f)("edit.php?post_type=shop_order")),Object(b.createElement)(g.EmptyContent,{className:o,title:e,actionLabel:t,actionURL:r,actionCallback:a})}}]),r}(b.Component);w.propTypes={className:h.a.string,isError:h.a.bool,isEmpty:h.a.bool},w.defaultProps={className:""},t.a=w},772:function(e,t,r){"use strict";var a=r(778),n=["a","b","em","i","strong","p","br"],o=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(a.sanitize)(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:o})}}},836:function(e,t,r){},837:function(e,t,r){},857:function(e,t,r){"use strict";r.r(t);var a=r(34),n=r.n(a),o=r(62),s=r.n(o),c=r(0),i=r(3),l=r(277),d=r(1),u=r.n(d),m=r(851),b=r(20),f=r(77),p=r(35),h=r(36),g=r(64),y=r(17),_=r.n(y),w=r(15),O=r.n(w),v=r(18),j=r.n(v),E=r(19),R=r.n(E),T=r(9),k=r.n(T),L=r(32),q=r(763),S=r(772);r(836);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=k()(e);if(t){var n=k()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return R()(this,r)}}var I=function(e){j()(r,e);var t=N(r);function r(){return _()(this,r),t.apply(this,arguments)}return O()(r,[{key:"getFormattedHeaders",value:function(){return this.props.headers.map((function(e,t){return{isLeftAligned:0===t,hiddenByDefault:!1,isSortable:!1,key:e.label,label:e.label}}))}},{key:"getFormattedRows",value:function(){return this.props.rows.map((function(e){return e.map((function(e){return{display:Object(c.createElement)("div",{dangerouslySetInnerHTML:Object(S.a)(e.display)}),value:e.value}}))}))}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.isError,a=e.totalRows,n=e.title,o="woocommerce-leaderboard";if(r)return Object(c.createElement)(q.a,{className:o,isError:!0});var s=this.getFormattedRows();return t||0!==s.length?Object(c.createElement)(f.TableCard,{className:o,headers:this.getFormattedHeaders(),isLoading:t,rows:s,rowsPerPage:a,showMenu:!1,title:n,totalRows:a}):Object(c.createElement)(f.Card,{title:n,className:o},Object(c.createElement)(f.EmptyTable,null,Object(i.__)("No data recorded for the selected time period.",'woocommerce')))}}]),r}(c.Component);I.propTypes={headers:u.a.arrayOf(u.a.shape({label:u.a.string})),id:u.a.string.isRequired,query:u.a.object,rows:u.a.arrayOf(u.a.arrayOf(u.a.shape({display:u.a.node,value:u.a.oneOfType([u.a.string,u.a.number,u.a.bool])}))).isRequired,title:u.a.string.isRequired,totalRows:u.a.number.isRequired},I.defaultProps={rows:[],isError:!1,isRequesting:!1};var P=Object(l.a)(Object(b.withSelect)((function(e,t){var r=t.id,a=t.query,n=t.totalRows,o=t.filters,s=e(p.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,c=Object(p.getFilterQuery)({filters:o,query:a}),i={id:r,per_page:n,persisted_query:Object(L.getPersistedQuery)(a),query:a,select:e,defaultDateRange:s,filterQuery:c};return Object(p.getLeaderboard)(i)})))(I),C=(r(837),function(e){var t=e.allLeaderboards,r=e.controls,a=e.isFirst,o=e.isLast,l=e.hiddenBlocks,d=e.onMove,u=e.onRemove,b=e.onTitleBlur,h=e.onTitleChange,y=e.onToggleHiddenBlock,_=e.query,w=e.title,O=e.titleInput,v=e.filters,j=Object(p.useUserPreferences)(),E=j.updateUserPreferences,R=s()(j,["updateUserPreferences"]),T=Object(c.useState)(parseInt(R.dashboard_leaderboard_rows||5,10)),k=n()(T,2),L=k[0],q=k[1],S=function(e){q(parseInt(e,10));var t={dashboard_leaderboard_rows:parseInt(e,10)};E(t)};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",{className:"woocommerce-dashboard__dashboard-leaderboards"},Object(c.createElement)(f.SectionHeader,{title:w||Object(i.__)("Leaderboards",'woocommerce'),menu:Object(c.createElement)(f.EllipsisMenu,{label:Object(i.__)("Choose which leaderboards to display and other settings",'woocommerce'),renderContent:function(e){var n=e.onToggle;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(f.MenuTitle,null,Object(i.__)("Leaderboards",'woocommerce')),function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.onToggleHiddenBlock;return t.map((function(e){var t=!r.includes(e.id);return Object(c.createElement)(f.MenuItem,{checked:t,isCheckbox:!0,isClickable:!0,key:e.id,onInvoke:function(){a(e.id)(),Object(g.recordEvent)("dash_leaderboards_toggle",{status:t?"off":"on",key:e.id})}},e.label)}))}({allLeaderboards:t,hiddenBlocks:l,onToggleHiddenBlock:y}),Object(c.createElement)(m.a,{className:"woocommerce-dashboard__dashboard-leaderboards__select",label:Object(i.__)("Rows Per Table",'woocommerce'),value:L,options:Array.from({length:20},(function(e,t){return{v:t+1,label:t+1}})),onChange:S}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(c.createElement)(r,{onToggle:n,onMove:d,onRemove:u,isFirst:a,isLast:o,onTitleBlur:b,onTitleChange:h,titleInput:O}))}})}),Object(c.createElement)("div",{className:"woocommerce-dashboard__columns"},function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.query,n=e.rowsPerTable,o=e.filters;return t.map((function(e){if(!r.includes(e.id))return Object(c.createElement)(P,{headers:e.headers,id:e.id,key:e.id,query:a,title:e.label,totalRows:n,filters:o})}))}({allLeaderboards:t,hiddenBlocks:l,query:_,rowsPerTable:L,filters:v}))))});C.propTypes={query:u.a.object.isRequired};t.default=Object(l.a)(Object(b.withSelect)((function(e){var t=e(p.ITEMS_STORE_NAME),r=t.getItems,a=t.getItemsError;return{allLeaderboards:Object(h.g)("dataEndpoints",{leaderboards:[]}).leaderboards,getItems:r,getItemsError:a}})))(C)}}]);