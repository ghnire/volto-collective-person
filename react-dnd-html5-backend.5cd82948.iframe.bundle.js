(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[1218],{"../../../node_modules/.pnpm/autobind-decorator@2.4.0/node_modules/autobind-decorator/lib/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function boundMethod(target,key,descriptor){var fn=descriptor.value;if("function"!=typeof fn)throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));var definingProperty=!1;return{configurable:!0,get:function get(){if(definingProperty||this===target.prototype||this.hasOwnProperty(key)||"function"!=typeof fn)return fn;var boundFn=fn.bind(this);return definingProperty=!0,Object.defineProperty(this,key,{configurable:!0,get:function get(){return boundFn},set:function set(value){fn=value,delete this[key]}}),definingProperty=!1,boundFn},set:function set(value){fn=value}}}function boundClass(target){var keys;return"undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys?keys=Reflect.ownKeys(target.prototype):(keys=Object.getOwnPropertyNames(target.prototype),"function"==typeof Object.getOwnPropertySymbols&&(keys=keys.concat(Object.getOwnPropertySymbols(target.prototype)))),keys.forEach((function(key){if("constructor"!==key){var descriptor=Object.getOwnPropertyDescriptor(target.prototype,key);"function"==typeof descriptor.value&&Object.defineProperty(target.prototype,key,boundMethod(target,key,descriptor))}})),target}function autobind(){return 1===arguments.length?boundClass.apply(void 0,arguments):boundMethod.apply(void 0,arguments)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{boundClass:function(){return boundClass},boundMethod:function(){return boundMethod},default:function(){return autobind}})},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/defaults.js":function(module,__unused_webpack_exports,__webpack_require__){var baseRest=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js"),eq=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"),isIterateeCall=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js"),keysIn=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,defaults=baseRest((function(object,sources){object=Object(object);var index=-1,length=sources.length,guard=length>2?sources[2]:void 0;for(guard&&isIterateeCall(sources[0],sources[1],guard)&&(length=1);++index<length;)for(var source=sources[index],props=keysIn(source),propsIndex=-1,propsLength=props.length;++propsIndex<propsLength;){var key=props[propsIndex],value=object[key];(void 0===value||eq(value,objectProto[key])&&!hasOwnProperty.call(object,key))&&(object[key]=source[key])}return object}));module.exports=defaults},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/BrowserDetector.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var memoize=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js");exports.isFirefox=memoize((function(){return/firefox/i.test(navigator.userAgent)})),exports.isSafari=memoize((function(){return Boolean(window.safari)}))},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/EnterLeaveCounter.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var union=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/union.js"),without=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/without.js"),EnterLeaveCounter=function(){function EnterLeaveCounter(){this.entered=[]}return EnterLeaveCounter.prototype.enter=function(enteringNode){var previousLength=this.entered.length;return this.entered=union(this.entered.filter((function(node){return document.documentElement.contains(node)&&(!node.contains||node.contains(enteringNode))})),[enteringNode]),0===previousLength&&this.entered.length>0},EnterLeaveCounter.prototype.leave=function(leavingNode){var previousLength=this.entered.length;return this.entered=without(this.entered.filter((function(node){return document.documentElement.contains(node)})),leavingNode),previousLength>0&&0===this.entered.length},EnterLeaveCounter.prototype.reset=function(){this.entered=[]},EnterLeaveCounter}();exports.default=EnterLeaveCounter},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/HTML5Backend.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var EnterLeaveCounter_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/EnterLeaveCounter.js"),BrowserDetector_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/BrowserDetector.js"),OffsetUtils_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/OffsetUtils.js"),NativeDragSources_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/NativeDragSources.js"),NativeTypes=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/NativeTypes.js"),autobind_decorator_1=__webpack_require__("../../../node_modules/.pnpm/autobind-decorator@2.4.0/node_modules/autobind-decorator/lib/esm/index.js"),defaults=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/defaults.js"),shallowEqual=__webpack_require__("../../../node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js"),HTML5Backend=function(){function HTML5Backend(manager){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.enterLeaveCounter=new EnterLeaveCounter_1.default,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.actions=manager.getActions(),this.monitor=manager.getMonitor(),this.registry=manager.getRegistry(),this.context=manager.getContext()}return Object.defineProperty(HTML5Backend.prototype,"window",{get:function(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0},enumerable:!0,configurable:!0}),HTML5Backend.prototype.setup=function(){if(void 0!==this.window){if(this.window.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");this.window.__isReactDndBackendSetUp=!0,this.addEventListeners(this.window)}},HTML5Backend.prototype.teardown=function(){void 0!==this.window&&(this.window.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.window),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&this.window.cancelAnimationFrame(this.asyncEndDragFrameId))},HTML5Backend.prototype.connectDragPreview=function(sourceId,node,options){var _this=this;return this.sourcePreviewNodeOptions.set(sourceId,options),this.sourcePreviewNodes.set(sourceId,node),function(){_this.sourcePreviewNodes.delete(sourceId),_this.sourcePreviewNodeOptions.delete(sourceId)}},HTML5Backend.prototype.connectDragSource=function(sourceId,node,options){var _this=this;this.sourceNodes.set(sourceId,node),this.sourceNodeOptions.set(sourceId,options);var handleDragStart=function(e){return _this.handleDragStart(e,sourceId)},handleSelectStart=function(e){return _this.handleSelectStart(e)};return node.setAttribute("draggable",!0),node.addEventListener("dragstart",handleDragStart),node.addEventListener("selectstart",handleSelectStart),function(){_this.sourceNodes.delete(sourceId),_this.sourceNodeOptions.delete(sourceId),node.removeEventListener("dragstart",handleDragStart),node.removeEventListener("selectstart",handleSelectStart),node.setAttribute("draggable",!1)}},HTML5Backend.prototype.connectDropTarget=function(targetId,node){var _this=this,handleDragEnter=function(e){return _this.handleDragEnter(e,targetId)},handleDragOver=function(e){return _this.handleDragOver(e,targetId)},handleDrop=function(e){return _this.handleDrop(e,targetId)};return node.addEventListener("dragenter",handleDragEnter),node.addEventListener("dragover",handleDragOver),node.addEventListener("drop",handleDrop),function(){node.removeEventListener("dragenter",handleDragEnter),node.removeEventListener("dragover",handleDragOver),node.removeEventListener("drop",handleDrop)}},HTML5Backend.prototype.addEventListeners=function(target){target.addEventListener&&(target.addEventListener("dragstart",this.handleTopDragStart),target.addEventListener("dragstart",this.handleTopDragStartCapture,!0),target.addEventListener("dragend",this.handleTopDragEndCapture,!0),target.addEventListener("dragenter",this.handleTopDragEnter),target.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),target.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),target.addEventListener("dragover",this.handleTopDragOver),target.addEventListener("dragover",this.handleTopDragOverCapture,!0),target.addEventListener("drop",this.handleTopDrop),target.addEventListener("drop",this.handleTopDropCapture,!0))},HTML5Backend.prototype.removeEventListeners=function(target){target.removeEventListener&&(target.removeEventListener("dragstart",this.handleTopDragStart),target.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),target.removeEventListener("dragend",this.handleTopDragEndCapture,!0),target.removeEventListener("dragenter",this.handleTopDragEnter),target.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),target.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),target.removeEventListener("dragover",this.handleTopDragOver),target.removeEventListener("dragover",this.handleTopDragOverCapture,!0),target.removeEventListener("drop",this.handleTopDrop),target.removeEventListener("drop",this.handleTopDropCapture,!0))},HTML5Backend.prototype.getCurrentSourceNodeOptions=function(){var sourceId=this.monitor.getSourceId(),sourceNodeOptions=this.sourceNodeOptions.get(sourceId);return defaults(sourceNodeOptions||{},{dropEffect:this.altKeyPressed?"copy":"move"})},HTML5Backend.prototype.getCurrentDropEffect=function(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect},HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions=function(){var sourceId=this.monitor.getSourceId(),sourcePreviewNodeOptions=this.sourcePreviewNodeOptions.get(sourceId);return defaults(sourcePreviewNodeOptions||{},{anchorX:.5,anchorY:.5,captureDraggingState:!1})},HTML5Backend.prototype.getSourceClientOffset=function(sourceId){return OffsetUtils_1.getNodeClientOffset(this.sourceNodes.get(sourceId))},HTML5Backend.prototype.isDraggingNativeItem=function(){var itemType=this.monitor.getItemType();return Object.keys(NativeTypes).some((function(key){return NativeTypes[key]===itemType}))},HTML5Backend.prototype.beginDragNativeItem=function(type){this.clearCurrentDragSourceNode();var SourceType=NativeDragSources_1.createNativeDragSource(type);this.currentNativeSource=new SourceType,this.currentNativeHandle=this.registry.addSource(type,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])},HTML5Backend.prototype.endDragNativeItem=function(){this.isDraggingNativeItem()&&(this.actions.endDrag(),this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},HTML5Backend.prototype.isNodeInDocument=function(node){return!!document&&document.body.contains(node)||!!this.window&&this.window.document.body.contains(node)},HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM=function(){var node=this.currentDragSourceNode;this.isNodeInDocument(node)||this.clearCurrentDragSourceNode()&&this.actions.endDrag()},HTML5Backend.prototype.setCurrentDragSourceNode=function(node){var _this=this;this.clearCurrentDragSourceNode(),this.currentDragSourceNode=node,this.currentDragSourceNodeOffset=OffsetUtils_1.getNodeClientOffset(node),this.currentDragSourceNodeOffsetChanged=!1;this.mouseMoveTimeoutTimer=setTimeout((function(){return _this.window&&_this.window.addEventListener("mousemove",_this.endDragIfSourceWasRemovedFromDOM,!0)}),1e3)},HTML5Backend.prototype.clearCurrentDragSourceNode=function(){return!!this.currentDragSourceNode&&(this.currentDragSourceNode=null,this.currentDragSourceNodeOffset=null,this.currentDragSourceNodeOffsetChanged=!1,this.window&&(this.window.clearTimeout(this.mouseMoveTimeoutTimer),this.window.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)),this.mouseMoveTimeoutTimer=null,!0)},HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged=function(){var node=this.currentDragSourceNode;return!!node&&(!!this.currentDragSourceNodeOffsetChanged||(this.currentDragSourceNodeOffsetChanged=!shallowEqual(OffsetUtils_1.getNodeClientOffset(node),this.currentDragSourceNodeOffset),this.currentDragSourceNodeOffsetChanged))},HTML5Backend.prototype.handleTopDragStartCapture=function(){this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},HTML5Backend.prototype.handleDragStart=function(e,sourceId){this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(sourceId)},HTML5Backend.prototype.handleTopDragStart=function(e){var _this=this,dragStartSourceIds=this.dragStartSourceIds;this.dragStartSourceIds=null;var clientOffset=OffsetUtils_1.getEventClientOffset(e);this.monitor.isDragging()&&this.actions.endDrag(),this.actions.beginDrag(dragStartSourceIds||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:clientOffset});var dataTransfer=e.dataTransfer,nativeType=NativeDragSources_1.matchNativeItemType(dataTransfer);if(this.monitor.isDragging()){if("function"==typeof dataTransfer.setDragImage){var sourceId=this.monitor.getSourceId(),sourceNode=this.sourceNodes.get(sourceId),dragPreview=this.sourcePreviewNodes.get(sourceId)||sourceNode,_a=this.getCurrentSourcePreviewNodeOptions(),anchorPoint={anchorX:_a.anchorX,anchorY:_a.anchorY},offsetPoint={offsetX:_a.offsetX,offsetY:_a.offsetY},dragPreviewOffset=OffsetUtils_1.getDragPreviewOffset(sourceNode,dragPreview,clientOffset,anchorPoint,offsetPoint);dataTransfer.setDragImage(dragPreview,dragPreviewOffset.x,dragPreviewOffset.y)}try{dataTransfer.setData("application/json",{})}catch(err){}this.setCurrentDragSourceNode(e.target),this.getCurrentSourcePreviewNodeOptions().captureDraggingState?this.actions.publishDragSource():setTimeout((function(){return _this.actions.publishDragSource()}),0)}else if(nativeType)this.beginDragNativeItem(nativeType);else{if(!(dataTransfer.types||e.target.hasAttribute&&e.target.hasAttribute("draggable")))return;e.preventDefault()}},HTML5Backend.prototype.handleTopDragEndCapture=function(){this.clearCurrentDragSourceNode()&&this.actions.endDrag()},HTML5Backend.prototype.handleTopDragEnterCapture=function(e){if(this.dragEnterTargetIds=[],this.enterLeaveCounter.enter(e.target)&&!this.monitor.isDragging()){var dataTransfer=e.dataTransfer,nativeType=NativeDragSources_1.matchNativeItemType(dataTransfer);nativeType&&this.beginDragNativeItem(nativeType)}},HTML5Backend.prototype.handleDragEnter=function(e,targetId){this.dragEnterTargetIds.unshift(targetId)},HTML5Backend.prototype.handleTopDragEnter=function(e){var _this=this,dragEnterTargetIds=this.dragEnterTargetIds;(this.dragEnterTargetIds=[],this.monitor.isDragging())&&(this.altKeyPressed=e.altKey,BrowserDetector_1.isFirefox()||this.actions.hover(dragEnterTargetIds,{clientOffset:OffsetUtils_1.getEventClientOffset(e)}),dragEnterTargetIds.some((function(targetId){return _this.monitor.canDropOnTarget(targetId)}))&&(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()))},HTML5Backend.prototype.handleTopDragOverCapture=function(){this.dragOverTargetIds=[]},HTML5Backend.prototype.handleDragOver=function(e,targetId){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(targetId)},HTML5Backend.prototype.handleTopDragOver=function(e){var _this=this,dragOverTargetIds=this.dragOverTargetIds;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer.dropEffect="none");this.altKeyPressed=e.altKey,this.actions.hover(dragOverTargetIds||[],{clientOffset:OffsetUtils_1.getEventClientOffset(e)}),(dragOverTargetIds||[]).some((function(targetId){return _this.monitor.canDropOnTarget(targetId)}))?(e.preventDefault(),e.dataTransfer.dropEffect=this.getCurrentDropEffect()):this.isDraggingNativeItem()?(e.preventDefault(),e.dataTransfer.dropEffect="none"):this.checkIfCurrentDragSourceRectChanged()&&(e.preventDefault(),e.dataTransfer.dropEffect="move")},HTML5Backend.prototype.handleTopDragLeaveCapture=function(e){this.isDraggingNativeItem()&&e.preventDefault(),this.enterLeaveCounter.leave(e.target)&&this.isDraggingNativeItem()&&this.endDragNativeItem()},HTML5Backend.prototype.handleTopDropCapture=function(e){this.dropTargetIds=[],e.preventDefault(),this.isDraggingNativeItem()&&this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),this.enterLeaveCounter.reset()},HTML5Backend.prototype.handleDrop=function(e,targetId){this.dropTargetIds.unshift(targetId)},HTML5Backend.prototype.handleTopDrop=function(e){var dropTargetIds=this.dropTargetIds;this.dropTargetIds=[],this.actions.hover(dropTargetIds,{clientOffset:OffsetUtils_1.getEventClientOffset(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.endDragIfSourceWasRemovedFromDOM()},HTML5Backend.prototype.handleSelectStart=function(e){var target=e.target;"function"==typeof target.dragDrop&&("INPUT"===target.tagName||"SELECT"===target.tagName||"TEXTAREA"===target.tagName||target.isContentEditable||(e.preventDefault(),target.dragDrop()))},__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"getSourceClientOffset",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"endDragNativeItem",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"isNodeInDocument",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"endDragIfSourceWasRemovedFromDOM",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragStartCapture",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragStart",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragEndCapture",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragEnterCapture",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragEnter",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragOverCapture",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragOver",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDragLeaveCapture",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDropCapture",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleTopDrop",null),__decorate([autobind_decorator_1.default],HTML5Backend.prototype,"handleSelectStart",null),HTML5Backend}();exports.default=HTML5Backend},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/MonotonicInterpolant.js":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var MonotonicInterpolant=function(){function MonotonicInterpolant(xs,ys){for(var length=xs.length,indexes=[],i=0;i<length;i++)indexes.push(i);indexes.sort((function(a,b){return xs[a]<xs[b]?-1:1}));var dx,dy,dys=[],dxs=[],ms=[];for(i=0;i<length-1;i++)dx=xs[i+1]-xs[i],dy=ys[i+1]-ys[i],dxs.push(dx),dys.push(dy),ms.push(dy/dx);var c1s=[ms[0]];for(i=0;i<dxs.length-1;i++){var m2=ms[i],mNext=ms[i+1];if(m2*mNext<=0)c1s.push(0);else{dx=dxs[i];var dxNext=dxs[i+1],common=dx+dxNext;c1s.push(3*common/((common+dxNext)/m2+(common+dx)/mNext))}}c1s.push(ms[ms.length-1]);var m,c2s=[],c3s=[];for(i=0;i<c1s.length-1;i++){m=ms[i];var c1=c1s[i],invDx=1/dxs[i];common=c1+c1s[i+1]-m-m;c2s.push((m-c1-common)*invDx),c3s.push(common*invDx*invDx)}this.xs=xs,this.ys=ys,this.c1s=c1s,this.c2s=c2s,this.c3s=c3s}return MonotonicInterpolant.prototype.interpolate=function(x){var _a=this,xs=_a.xs,ys=_a.ys,c1s=_a.c1s,c2s=_a.c2s,c3s=_a.c3s,i=xs.length-1;if(x===xs[i])return ys[i];for(var mid,low=0,high=c3s.length-1;low<=high;){var xHere=xs[mid=Math.floor(.5*(low+high))];if(xHere<x)low=mid+1;else{if(!(xHere>x))return ys[mid];high=mid-1}}var diff=x-xs[i=Math.max(0,high)],diffSq=diff*diff;return ys[i]+c1s[i]*diff+c2s[i]*diffSq+c3s[i]*diff*diffSq},MonotonicInterpolant}();exports.default=MonotonicInterpolant},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/NativeDragSources.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0});var NativeTypes=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/NativeTypes.js");function getDataFromDataTransfer(dataTransfer,typesToTry,defaultValue){var result=typesToTry.reduce((function(resultSoFar,typeToTry){return resultSoFar||dataTransfer.getData(typeToTry)}),null);return null!=result?result:defaultValue}var nativeTypesConfig=((_a={})[NativeTypes.FILE]={exposeProperty:"files",matchesTypes:["Files"],getData:function(dataTransfer){return Array.prototype.slice.call(dataTransfer.files)}},_a[NativeTypes.URL]={exposeProperty:"urls",matchesTypes:["Url","text/uri-list"],getData:function(dataTransfer,matchesTypes){return getDataFromDataTransfer(dataTransfer,matchesTypes,"").split("\n")}},_a[NativeTypes.TEXT]={exposeProperty:"text",matchesTypes:["Text","text/plain"],getData:function(dataTransfer,matchesTypes){return getDataFromDataTransfer(dataTransfer,matchesTypes,"")}},_a);exports.createNativeDragSource=function createNativeDragSource(type){var _a=nativeTypesConfig[type],exposeProperty=_a.exposeProperty,matchesTypes=_a.matchesTypes,getData=_a.getData;return function(){function NativeDragSource(){var _a;this.item=(_a={},Object.defineProperty(_a,exposeProperty,{get:function(){return console.warn("Browser doesn't allow reading \""+exposeProperty+'" until the drop event.'),null},enumerable:!0,configurable:!0}),_a)}return NativeDragSource.prototype.mutateItemByReadingDataTransfer=function(dataTransfer){delete this.item[exposeProperty],this.item[exposeProperty]=getData(dataTransfer,matchesTypes)},NativeDragSource.prototype.canDrag=function(){return!0},NativeDragSource.prototype.beginDrag=function(){return this.item},NativeDragSource.prototype.isDragging=function(monitor,handle){return handle===monitor.getSourceId()},NativeDragSource.prototype.endDrag=function(){},NativeDragSource}()},exports.matchNativeItemType=function matchNativeItemType(dataTransfer){var dataTransferTypes=Array.prototype.slice.call(dataTransfer.types||[]);return Object.keys(nativeTypesConfig).filter((function(nativeItemType){return nativeTypesConfig[nativeItemType].matchesTypes.some((function(t){return dataTransferTypes.indexOf(t)>-1}))}))[0]||null}},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/NativeTypes.js":function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FILE="__NATIVE_FILE__",exports.URL="__NATIVE_URL__",exports.TEXT="__NATIVE_TEXT__"},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/OffsetUtils.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BrowserDetector_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/BrowserDetector.js"),MonotonicInterpolant_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/MonotonicInterpolant.js");function getNodeClientOffset(node){var el=1===node.nodeType?node:node.parentElement;if(!el)return null;var _a=el.getBoundingClientRect(),top=_a.top;return{x:_a.left,y:top}}exports.getNodeClientOffset=getNodeClientOffset,exports.getEventClientOffset=function getEventClientOffset(e){return{x:e.clientX,y:e.clientY}},exports.getDragPreviewOffset=function getDragPreviewOffset(sourceNode,dragPreview,clientOffset,anchorPoint,offsetPoint){var y,isImage=function isImageNode(node){return"IMG"===node.nodeName&&(BrowserDetector_1.isFirefox()||!document.documentElement.contains(node))}(dragPreview),dragPreviewNodeOffsetFromClient=getNodeClientOffset(isImage?sourceNode:dragPreview),offsetFromDragPreview={x:clientOffset.x-dragPreviewNodeOffsetFromClient.x,y:clientOffset.y-dragPreviewNodeOffsetFromClient.y},sourceWidth=sourceNode.offsetWidth,sourceHeight=sourceNode.offsetHeight,anchorX=anchorPoint.anchorX,anchorY=anchorPoint.anchorY,_a=function getDragPreviewSize(isImage,dragPreview,sourceWidth,sourceHeight){var dragPreviewWidth=isImage?dragPreview.width:sourceWidth,dragPreviewHeight=isImage?dragPreview.height:sourceHeight;return BrowserDetector_1.isSafari()&&isImage&&(dragPreviewHeight/=window.devicePixelRatio,dragPreviewWidth/=window.devicePixelRatio),{dragPreviewWidth:dragPreviewWidth,dragPreviewHeight:dragPreviewHeight}}(isImage,dragPreview,sourceWidth,sourceHeight),dragPreviewWidth=_a.dragPreviewWidth,dragPreviewHeight=_a.dragPreviewHeight,offsetX=offsetPoint.offsetX,offsetY=offsetPoint.offsetY,isManualOffsetY=0===offsetY||offsetY;return{x:0===offsetX||offsetX?offsetX:new MonotonicInterpolant_1.default([0,.5,1],[offsetFromDragPreview.x,offsetFromDragPreview.x/sourceWidth*dragPreviewWidth,offsetFromDragPreview.x+dragPreviewWidth-sourceWidth]).interpolate(anchorX),y:isManualOffsetY?offsetY:(y=new MonotonicInterpolant_1.default([0,.5,1],[offsetFromDragPreview.y,offsetFromDragPreview.y/sourceHeight*dragPreviewHeight,offsetFromDragPreview.y+dragPreviewHeight-sourceHeight]).interpolate(anchorY),BrowserDetector_1.isSafari()&&isImage&&(y+=(window.devicePixelRatio-1)*dragPreviewHeight),y)}}},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/getEmptyImage.js":function(__unused_webpack_module,exports){"use strict";var emptyImage;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function getEmptyImage(){return emptyImage||((emptyImage=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),emptyImage}},"../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var HTML5Backend_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/HTML5Backend.js"),getEmptyImage_1=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/getEmptyImage.js");exports.getEmptyImage=getEmptyImage_1.default;var NativeTypes=__webpack_require__("../../../node_modules/.pnpm/react-dnd-html5-backend@5.0.1/node_modules/react-dnd-html5-backend/lib/NativeTypes.js");exports.NativeTypes=NativeTypes,exports.default=function createHTML5Backend(manager){return new HTML5Backend_1.default(manager)}}}]);