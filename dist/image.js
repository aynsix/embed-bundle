webpackJsonp([4],[function(e,i,t){"use strict";t(1);var n=t(4),r=t(5),o=t(9),s=function(){function e(){var e=this;this.configService=new r["default"],n(document).ready(function(){e.$embedContainer=n("#embed-content"),e.$embedResource=n("#embed-image"),e.resourceOriginalWidth=e.configService.get("resource.width"),e.resourceOriginalHeight=e.configService.get("resource.height"),e.resizer=new o["default"]({target:e.$embedResource,container:e.$embedContainer,resizeOnWindowChange:e.configService.get("resource.fitIn")===!0,"true":!1}),e.resizer.setContainerDimensions({width:window.innerWidth,height:window.innerHeight}),e.resizer.setTargetDimensions({width:e.resourceOriginalWidth,height:e.resourceOriginalHeight}),e.resizer.resize()})}return e}();i["default"]=s,window.embedPlugin=new s},,,,,function(e,i,t){"use strict";var n=function(e,i){function t(){this.constructor=e}for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n]);t.prototype=i.prototype,e.prototype=new t},r=t(6),o=t(8),s=null,a=function(e){function i(){return s||(s=this),e.call(this,o["default"]),s}return n(i,e),i}(r["default"]);i["default"]=a},function(e,i,t){"use strict";var n=t(7),r=function(){function e(e){this.configuration=e}return e.prototype.get=function(e){if(void 0!==e){var i=this._findKeyValue(e||this.configuration);switch(typeof i){case"string":return i;default:return i?i:null}}return this.configuration},e.prototype.set=function(e,i){void 0!==e&&(this.configuration[e]=i)},e.prototype._findKeyValue=function(e){if(e){var i=n.isString(e),t=i?e:e.name,r=e.indexOf(".")>0?!0:!1;if(r)return this._search(this.configuration,t);var o=this.configuration[t];return o&&(i||!i&&o===e)?o:i?o:void 0}},e.prototype._search=function(e,i){if(n.isNumber(i)&&(i=[i]),n.isEmpty(i))return e;if(n.isEmpty(e))return null;if(n.isString(i))return this._search(e,i.split("."));var t=i[0];return 1===i.length?void 0===e[t]?null:e[t]:this._search(e[t],i.slice(1))},e}();i["default"]=r},,function(e,i,t){"use strict";var n=t(7),r={assetsPath:"/plugins/web-gallery/assets",api:{baseUrl:"/web-gallery",basePath:"",ajaxSetup:{accept:"application/json",contentType:"application/json",async:!0,cache:!1,dataType:"json",complete:function(){},error:function(e,i,t){var n,r=e.getResponseHeader("content-type")||"";return r.indexOf("json")>-1&&(n=$.parseJSON(e.responseText)),n}}}},o=window.envConfiguration;void 0!==o&&(r=n.extend(r,o)),i["default"]=r},function(e,i,t){"use strict";var n=t(7),r=function(){function e(e){var i=this;e||(e={}),e.target&&(this.$embedResource=e.target),e.container?this.$embedContainer=e.container:this.$embedContainer=$("body"),void 0!==e.resizeCallback&&(this.resizeCallback=e.resizeCallback),e.resizeOnWindowChange===!0&&$(window).resize(n.debounce(function(){i.onResizeWindow(window.innerWidth,window.innerHeight)},300))}return e.prototype.setContainerDimensions=function(e){this.containerDimensions=e},e.prototype.setTargetDimensions=function(e){this.targetDimensions=e},e.prototype.onResizeWindow=function(e,i){this.setContainerDimensions({width:e,height:i}),this.resize()},e.prototype.resize=function(){var e=this.containerDimensions.width,i=this.containerDimensions.height,t=this.targetDimensions.width,n=this.targetDimensions.height,r=this.targetDimensions.height/this.targetDimensions.width,o=t,s=n;t>n?(o>e&&(o=e,s=e*r),s>i&&(o=i/r,s=i)):s>i&&(o=i/r,s=i),o=Math.floor(o),s=Math.floor(s);var a=0;this.containerDimensions.height>s&&(a=(this.containerDimensions.height-s)/2),this.$embedResource.css({width:o,height:s}),this.$embedContainer.css({width:o,height:s,"margin-top":a}),void 0!==this.resizeCallback&&this.resizeCallback.apply(this,[{width:o,height:s,"margin-top":a}])},e}();i["default"]=r}]);