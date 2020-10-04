/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 0.0.1(9f0e741078e924c9f0c40085e9a388d06a34699b)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/choicescript/fillers/monaco-editor-core",[],(function(){return self.monaco})),define("vs/language/choicescript/monaco.contribution",["require","exports","./fillers/monaco-editor-core"],(function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.choicescriptDefaults=n.lessDefaults=n.scssDefaults=n.cssDefaults=void 0;var i=function(){function e(e,n,i){this._onDidChange=new t.Emitter,this._languageId=e,this.setDiagnosticsOptions(n),this.setModeConfiguration(i)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"modeConfiguration",{get:function(){return this._modeConfiguration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!1,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.setModeConfiguration=function(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)},e}(),o={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"}},s={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0,autoFormat:!1,documentFormattingEdits:!1,documentRangeFormattingEdits:!1,tokens:!0};function r(){return new Promise((function(n,t){e(["./cssMode"],n,t)}))}n.cssDefaults=new i("css",o,s),n.scssDefaults=new i("scss",o,s),n.lessDefaults=new i("less",o,s),t.languages.css={cssDefaults:n.cssDefaults,lessDefaults:n.lessDefaults,scssDefaults:n.scssDefaults},t.languages.onLanguage("less",(function(){r().then((function(e){return e.setupMode(n.lessDefaults)}))})),t.languages.onLanguage("scss",(function(){r().then((function(e){return e.setupMode(n.scssDefaults)}))})),t.languages.onLanguage("css",(function(){r().then((function(e){return e.setupMode(n.cssDefaults)}))}));var c=function(){function e(e,n,i){this._onDidChange=new t.Emitter,this._languageId=e,this.setDiagnosticsOptions(n),this.setModeConfiguration(i)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"modeConfiguration",{get:function(){return this._modeConfiguration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!1,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.setModeConfiguration=function(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)},e}();n.choicescriptDefaults=new c("choicescript",{validate:!0,lint:{enabled:!0},spellcheck:{enabled:!0,dictionaryPath:"https://raw.githubusercontent.com/cfinke/Typo.js/master/typo/dictionaries",dictionary:"en_US",userDictionaries:null}},{completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!1,rename:!1,colors:!1,foldingRanges:!1,diagnostics:!0,selectionRanges:!1,documentFormattingEdits:!1,documentRangeFormattingEdits:!1,tokens:!0,autoFormat:!0}),t.languages.choicescript=n.choicescriptDefaults,t.languages.onLanguage("choicescript",(function(){new Promise((function(n,t){e(["./choicescriptMode"],n,t)})).then((function(e){t.languages.choicescriptDispose=e.setupMode(n.choicescriptDefaults),n.choicescriptDefaults.onDidChange((function(){var i;null===(i=t.languages.choicescriptDispose)||void 0===i||i.dispose(),t.languages.choicescriptDispose=e.setupMode(n.choicescriptDefaults)}))}))}))}));