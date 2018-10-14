/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 2.2.0(8ac85b99bdeed8756fc29865c3120432ab701c16)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/choicescript/workerManager",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=monaco.Promise,n=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(12e4<Date.now()-this._lastUsedTime&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/choicescript/choicescriptWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var t,e,n,r,i,o=this,a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return e=this._getClient().then(function(e){t=e}).then(function(e){return o._worker.withSyncedResources(a)}).then(function(e){return t}),i=new c(function(e,t){n=e,r=t},function(){}),e.then(n,r),i},e}();t.WorkerManager=n}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}(function(e,t){"use strict";var a,n,r,i,o,u,c,s,d,l,f,g,m,h,p,v,y,b,C,_,k,x,I,w;Object.defineProperty(t,"__esModule",{value:!0}),(n=a=t.Position||(t.Position={})).create=function(e,t){return{line:e,character:t}},n.is=function(e){var t=e;return Z.objectLiteral(t)&&Z.number(t.line)&&Z.number(t.character)},(i=r=t.Range||(t.Range={})).create=function(e,t,n,r){if(Z.number(e)&&Z.number(t)&&Z.number(n)&&Z.number(r))return{start:a.create(e,t),end:a.create(n,r)};if(a.is(e)&&a.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},i.is=function(e){var t=e;return Z.objectLiteral(t)&&a.is(t.start)&&a.is(t.end)},(u=o=t.Location||(t.Location={})).create=function(e,t){return{uri:e,range:t}},u.is=function(e){var t=e;return Z.defined(t)&&r.is(t.range)&&(Z.string(t.uri)||Z.undefined(t.uri))},(s=c=t.Color||(t.Color={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},s.is=function(e){var t=e;return Z.number(t.red)&&Z.number(t.green)&&Z.number(t.blue)&&Z.number(t.alpha)},(d=t.ColorInformation||(t.ColorInformation={})).create=function(e,t){return{range:e,color:t}},d.is=function(e){var t=e;return r.is(t.range)&&c.is(t.color)},(l=t.ColorPresentation||(t.ColorPresentation={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},l.is=function(e){var t=e;return Z.string(t.label)&&(Z.undefined(t.textEdit)||_.is(t))&&(Z.undefined(t.additionalTextEdits)||Z.typedArray(t.additionalTextEdits,_.is))},(f=t.FoldingRangeKind||(t.FoldingRangeKind={})).Comment="comment",f.Imports="imports",f.Region="region",(g=t.FoldingRange||(t.FoldingRange={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return Z.defined(n)&&(o.startCharacter=n),Z.defined(r)&&(o.endCharacter=r),Z.defined(i)&&(o.kind=i),o},g.is=function(e){var t=e;return Z.number(t.startLine)&&Z.number(t.startLine)&&(Z.undefined(t.startCharacter)||Z.number(t.startCharacter))&&(Z.undefined(t.endCharacter)||Z.number(t.endCharacter))&&(Z.undefined(t.kind)||Z.string(t.kind))},(h=m=t.DiagnosticRelatedInformation||(t.DiagnosticRelatedInformation={})).create=function(e,t){return{location:e,message:t}},h.is=function(e){var t=e;return Z.defined(t)&&o.is(t.location)&&Z.string(t.message)},(p=t.DiagnosticSeverity||(t.DiagnosticSeverity={})).Error=1,p.Warning=2,p.Information=3,p.Hint=4,(y=v=t.Diagnostic||(t.Diagnostic={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return Z.defined(n)&&(a.severity=n),Z.defined(r)&&(a.code=r),Z.defined(i)&&(a.source=i),Z.defined(o)&&(a.relatedInformation=o),a},y.is=function(e){var t=e;return Z.defined(t)&&r.is(t.range)&&Z.string(t.message)&&(Z.number(t.severity)||Z.undefined(t.severity))&&(Z.number(t.code)||Z.string(t.code)||Z.undefined(t.code))&&(Z.string(t.source)||Z.undefined(t.source))&&(Z.undefined(t.relatedInformation)||Z.typedArray(t.relatedInformation,m.is))},(C=b=t.Command||(t.Command={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return Z.defined(n)&&0<n.length&&(i.arguments=n),i},C.is=function(e){var t=e;return Z.defined(t)&&Z.string(t.title)&&Z.string(t.command)},(k=_=t.TextEdit||(t.TextEdit={})).replace=function(e,t){return{range:e,newText:t}},k.insert=function(e,t){return{range:{start:e,end:e},newText:t}},k.del=function(e){return{range:e,newText:""}},k.is=function(e){var t=e;return Z.objectLiteral(t)&&Z.string(t.newText)&&r.is(t.range)},(I=x=t.TextDocumentEdit||(t.TextDocumentEdit={})).create=function(e,t){return{textDocument:e,edits:t}},I.is=function(e){var t=e;return Z.defined(t)&&D.is(t.textDocument)&&Array.isArray(t.edits)},(w=t.WorkspaceEdit||(t.WorkspaceEdit={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||Z.typedArray(t.documentChanges,x.is))};var S,D,E,T,K,M,A,P,L,F,O,R,j,H,W=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(_.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(_.replace(e,t))},e.prototype.delete=function(e){this.edits.push(_.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),N=function(){function e(n){var r=this;this._textEditChanges=Object.create(null),n&&((this._workspaceEdit=n).documentChanges?n.documentChanges.forEach(function(e){var t=new W(e.edits);r._textEditChanges[e.textDocument.uri]=t}):n.changes&&Object.keys(n.changes).forEach(function(e){var t=new W(n.changes[e]);r._textEditChanges[e]=t}))}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(D.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new W(i),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new W(i),this._textEditChanges[e]=r}return r},e}();t.WorkspaceChange=N,(S=t.TextDocumentIdentifier||(t.TextDocumentIdentifier={})).create=function(e){return{uri:e}},S.is=function(e){var t=e;return Z.defined(t)&&Z.string(t.uri)},(E=D=t.VersionedTextDocumentIdentifier||(t.VersionedTextDocumentIdentifier={})).create=function(e,t){return{uri:e,version:t}},E.is=function(e){var t=e;return Z.defined(t)&&Z.string(t.uri)&&Z.number(t.version)},(T=t.TextDocumentItem||(t.TextDocumentItem={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},T.is=function(e){var t=e;return Z.defined(t)&&Z.string(t.uri)&&Z.string(t.languageId)&&Z.number(t.version)&&Z.string(t.text)},(M=K=t.MarkupKind||(t.MarkupKind={})).PlainText="plaintext",M.Markdown="markdown",(A=K=t.MarkupKind||(t.MarkupKind={})).is=function(e){var t=e;return t===A.PlainText||t===A.Markdown},(P=t.MarkupContent||(t.MarkupContent={})).is=function(e){var t=e;return Z.objectLiteral(e)&&K.is(t.kind)&&Z.string(t.value)},(L=t.CompletionItemKind||(t.CompletionItemKind={})).Text=1,L.Method=2,L.Function=3,L.Constructor=4,L.Field=5,L.Variable=6,L.Class=7,L.Interface=8,L.Module=9,L.Property=10,L.Unit=11,L.Value=12,L.Enum=13,L.Keyword=14,L.Snippet=15,L.Color=16,L.File=17,L.Reference=18,L.Folder=19,L.EnumMember=20,L.Constant=21,L.Struct=22,L.Event=23,L.Operator=24,L.TypeParameter=25,(F=t.InsertTextFormat||(t.InsertTextFormat={})).PlainText=1,F.Snippet=2,(t.CompletionItem||(t.CompletionItem={})).create=function(e){return{label:e}},(t.CompletionList||(t.CompletionList={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(R=O=t.MarkedString||(t.MarkedString={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},R.is=function(e){var t=e;return Z.string(t)||Z.objectLiteral(t)&&Z.string(t.language)&&Z.string(t.value)},(t.Hover||(t.Hover={})).is=function(e){var t=e;return Z.objectLiteral(t)&&(P.is(t.contents)||O.is(t.contents)||Z.typedArray(t.contents,O.is))&&(void 0===e.range||r.is(e.range))},(t.ParameterInformation||(t.ParameterInformation={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(t.SignatureInformation||(t.SignatureInformation={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return Z.defined(t)&&(i.documentation=t),Z.defined(n)?i.parameters=n:i.parameters=[],i},(j=t.DocumentHighlightKind||(t.DocumentHighlightKind={})).Text=1,j.Read=2,j.Write=3,(t.DocumentHighlight||(t.DocumentHighlight={})).create=function(e,t){var n={range:e};return Z.number(t)&&(n.kind=t),n},(H=t.SymbolKind||(t.SymbolKind={})).File=1,H.Module=2,H.Namespace=3,H.Package=4,H.Class=5,H.Method=6,H.Property=7,H.Field=8,H.Constructor=9,H.Enum=10,H.Interface=11,H.Function=12,H.Variable=13,H.Constant=14,H.String=15,H.Number=16,H.Boolean=17,H.Array=18,H.Object=19,H.Key=20,H.Null=21,H.EnumMember=22,H.Struct=23,H.Event=24,H.Operator=25,H.TypeParameter=26,(t.SymbolInformation||(t.SymbolInformation={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o};var V,U,q,z,B,$,Q=function(){};t.DocumentSymbol=Q,(V=Q=t.DocumentSymbol||(t.DocumentSymbol={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},V.is=function(e){var t=e;return t&&Z.string(t.name)&&Z.string(t.detail)&&Z.number(t.kind)&&r.is(t.range)&&r.is(t.selectionRange)&&(void 0===t.deprecated||Z.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))},t.DocumentSymbol=Q,(U=t.CodeActionKind||(t.CodeActionKind={})).QuickFix="quickfix",U.Refactor="refactor",U.RefactorExtract="refactor.extract",U.RefactorInline="refactor.inline",U.RefactorRewrite="refactor.rewrite",U.Source="source",U.SourceOrganizeImports="source.organizeImports",(q=t.CodeActionContext||(t.CodeActionContext={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},q.is=function(e){var t=e;return Z.defined(t)&&Z.typedArray(t.diagnostics,v.is)&&(void 0===t.only||Z.typedArray(t.only,Z.string))},(z=t.CodeAction||(t.CodeAction={})).create=function(e,t,n){var r={title:e};return b.is(t)?r.command=t:r.edit=t,void 0!==n&&(r.kind=n),r},z.is=function(e){var t=e;return t&&Z.string(t.title)&&(void 0===t.diagnostics||Z.typedArray(t.diagnostics,v.is))&&(void 0===t.kind||Z.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||b.is(t.command))&&(void 0===t.edit||w.is(t.edit))},(B=t.CodeLens||(t.CodeLens={})).create=function(e,t){var n={range:e};return Z.defined(t)&&(n.data=t),n},B.is=function(e){var t=e;return Z.defined(t)&&r.is(t.range)&&(Z.undefined(t.command)||b.is(t.command))},($=t.FormattingOptions||(t.FormattingOptions={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},$.is=function(e){var t=e;return Z.defined(t)&&Z.number(t.tabSize)&&Z.boolean(t.insertSpaces)};var G,J,X,Y=function(){};t.DocumentLink=Y,(G=Y=t.DocumentLink||(t.DocumentLink={})).create=function(e,t,n){return{range:e,target:t,data:n}},G.is=function(e){var t=e;return Z.defined(t)&&r.is(t.range)&&(Z.undefined(t.target)||Z.string(t.target))},t.DocumentLink=Y,t.EOL=["\n","\r\n","\r"],(J=t.TextDocument||(t.TextDocument={})).create=function(e,t,n,r){return new ne(e,t,n,r)},J.is=function(e){var t=e;return!!(Z.defined(t)&&Z.string(t.uri)&&(Z.undefined(t.languageId)||Z.string(t.languageId))&&Z.number(t.lineCount)&&Z.func(t.getText)&&Z.func(t.positionAt)&&Z.func(t.offsetAt))},J.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,u=0,c=0;a<i.length&&u<o.length;){var s=n(i[a],o[u]);t[c++]=s<=0?i[a++]:o[u++]}for(;a<i.length;)t[c++]=i[a++];for(;u<o.length;)t[c++]=o[u++];return t}(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length,o=r.length-1;0<=o;o--){var a=r[o],u=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Ovelapping edit");n=n.substring(0,u)+a.newText+n.substring(c,n.length),i=u}return n},(X=t.TextDocumentSaveReason||(t.TextDocumentSaveReason={})).Manual=1,X.AfterDelay=2,X.FocusOut=3;var Z,ee,te,ne=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&0<t.length&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return a.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return a.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();ee=Z||(Z={}),te=Object.prototype.toString,ee.defined=function(e){return void 0!==e},ee.undefined=function(e){return void 0===e},ee.boolean=function(e){return!0===e||!1===e},ee.string=function(e){return"[object String]"===te.call(e)},ee.number=function(e){return"[object Number]"===te.call(e)},ee.func=function(e){return"[object Function]"===te.call(e)},ee.objectLiteral=function(e){return null!==e&&"object"==typeof e},ee.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}),define("vscode-languageserver-types",["vscode-languageserver-types/main"],function(e){return e}),define("vs/language/choicescript/languageFeatures",["require","exports","vscode-languageserver-types"],function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=monaco.Uri,r=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(o)),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})}),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(r,i){this._worker(r).then(function(e){return e.doValidation(r.toString())}).then(function(e){var t=e.map(function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:function(e){switch(e){case o.DiagnosticSeverity.Error:return monaco.MarkerSeverity.Error;case o.DiagnosticSeverity.Warning:return monaco.MarkerSeverity.Warning;case o.DiagnosticSeverity.Information:return monaco.MarkerSeverity.Info;case o.DiagnosticSeverity.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n}),n=monaco.editor.getModel(r);n.getModeId()===i&&monaco.editor.setModelMarkers(n,i,t)}).done(void 0,function(e){console.error(e)})},e}();function a(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function i(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function u(e){if(e)return{range:i(e.range),text:e.newText}}t.DiagnosticsAdapter=r;var c=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){e.getWordUntilPosition(t);var r=e.uri;return v(n,this._worker(r).then(function(e){return e.doComplete(r.toString(),a(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:function(e){var t=monaco.languages.CompletionItemKind;switch(e){case o.CompletionItemKind.Text:return t.Text;case o.CompletionItemKind.Method:return t.Method;case o.CompletionItemKind.Function:return t.Function;case o.CompletionItemKind.Constructor:return t.Constructor;case o.CompletionItemKind.Field:return t.Field;case o.CompletionItemKind.Variable:return t.Variable;case o.CompletionItemKind.Class:return t.Class;case o.CompletionItemKind.Interface:return t.Interface;case o.CompletionItemKind.Module:return t.Module;case o.CompletionItemKind.Property:return t.Property;case o.CompletionItemKind.Unit:return t.Unit;case o.CompletionItemKind.Value:return t.Value;case o.CompletionItemKind.Enum:return t.Enum;case o.CompletionItemKind.Keyword:return t.Keyword;case o.CompletionItemKind.Snippet:return t.Snippet;case o.CompletionItemKind.Color:return t.Color;case o.CompletionItemKind.File:return t.File;case o.CompletionItemKind.Reference:return t.Reference}return t.Property}(e.kind)};return e.textEdit&&(t.range=i(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(u)),e.insertTextFormat===o.InsertTextFormat.Snippet&&(t.insertText={value:t.insertText}),t});return{isIncomplete:e.isIncomplete,items:t}}}))},e}();function s(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}t.CompletionAdapter=c;var d=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.doHover(r.toString(),a(t))}).then(function(e){if(e)return{range:i(e.range),contents:function(e){if(e)return Array.isArray(e)?e.map(s):[s(e)]}(e.contents)}}))},e}();t.HoverAdapter=d;var l=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),a(t))}).then(function(e){if(e)return e.map(function(e){return{range:i(e.range),kind:function(e){switch(e){case o.DocumentHighlightKind.Read:return monaco.languages.DocumentHighlightKind.Read;case o.DocumentHighlightKind.Write:return monaco.languages.DocumentHighlightKind.Write;case o.DocumentHighlightKind.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}(e.kind)}})}))},e}();function f(e){return{uri:n.parse(e.uri),range:i(e.range)}}t.DocumentHighlightAdapter=l;var g=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.findDefinition(r.toString(),a(t))}).then(function(e){if(e)return[f(e)]}))},e}();t.DefinitionAdapter=g;var m=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,t,n,r){var i=e.uri;return v(r,this._worker(i).then(function(e){return e.findReferences(i.toString(),a(t))}).then(function(e){if(e)return e.map(f)}))},e}();t.ReferenceAdapter=m;var h=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return v(t,this._worker(n).then(function(e){return e.findDocumentSymbols(n.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:function(e){var t=monaco.languages.SymbolKind;switch(e){case o.SymbolKind.File:return t.Array;case o.SymbolKind.Module:return t.Module;case o.SymbolKind.Namespace:return t.Namespace;case o.SymbolKind.Package:return t.Package;case o.SymbolKind.Class:return t.Class;case o.SymbolKind.Method:return t.Method;case o.SymbolKind.Property:return t.Property;case o.SymbolKind.Field:return t.Field;case o.SymbolKind.Constructor:return t.Constructor;case o.SymbolKind.Enum:return t.Enum;case o.SymbolKind.Interface:return t.Interface;case o.SymbolKind.Function:return t.Function;case o.SymbolKind.Variable:return t.Variable;case o.SymbolKind.Constant:return t.Constant;case o.SymbolKind.String:return t.String;case o.SymbolKind.Number:return t.Number;case o.SymbolKind.Boolean:return t.Boolean;case o.SymbolKind.Array:return t.Array}return t.Function}(e.kind),range:i(e.location.range),selectionRange:i(e.location.range)}})}))},e}();t.DocumentSymbolAdapter=h;var p=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return v(t,this._worker(n).then(function(e){return e.findDocumentColors(n.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:i(e.range)}})}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),t.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t.range))}).then(function(e){if(e)return e.map(function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=u(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(u)),t})}))},e}();function v(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}t.DocumentColorAdapter=p}),define("vs/language/choicescript/choicescriptMode",["require","exports","./workerManager","./languageFeatures"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setupMode=function(e){var r=new i.WorkerManager(e),t=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return r.getLanguageServiceWorker.apply(r,[e].concat(t))},n=e.languageId;monaco.languages.registerCompletionItemProvider(n,new o.CompletionAdapter(t)),monaco.languages.registerHoverProvider(n,new o.HoverAdapter(t)),monaco.languages.registerDocumentHighlightProvider(n,new o.DocumentHighlightAdapter(t)),monaco.languages.registerDefinitionProvider(n,new o.DefinitionAdapter(t)),monaco.languages.registerReferenceProvider(n,new o.ReferenceAdapter(t)),monaco.languages.registerDocumentSymbolProvider(n,new o.DocumentSymbolAdapter(t)),monaco.languages.registerColorProvider(n,new o.DocumentColorAdapter(t)),new o.DiagnosticsAdapter(n,t,e)}});